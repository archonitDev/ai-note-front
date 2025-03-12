import React, { useState, useRef, useEffect } from "react";
import { Modal } from "./Common/modal";
import { DropdownIcon } from "../icons/dropdown-icon";
import { RecordIcon } from "../icons/record-icon";
import { CloseIcon } from "../icons/close-icon";
import WaveSurfer from "wavesurfer.js";
import MicRecorder from "mic-recorder-to-mp3";
import { PlayIcon } from "../icons/play-icon";
import { PauseIcon } from "../icons/pause-icon";

interface NewRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewRecordModal: React.FC<NewRecordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [recorder] = useState(new MicRecorder({ 
    bitRate: 128,
    sampleRate: 44100
  }));
  const waveSurferRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startRecording = () => {
    setElapsedTime(0);
    recorder
      .start()
      .then(() => {
        setIsRecording(true);
        timerIntervalRef.current = setInterval(() => {
          setElapsedTime(prev => prev + 1);
        }, 1000);
      })
      .catch((e) => setIsPlaying(false));
  };

  const stopRecording = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const audioURL = URL.createObjectURL(blob);
        if (audioRef.current) {
          audioRef.current.src = audioURL;
        }
        setIsRecording(false);
        setIsRecorded(true);
        
        if (waveSurferRef.current) {
          waveSurferRef.current.destroy();
          
          waveSurferRef.current = WaveSurfer.create({
            container: "#waveform",
            waveColor: "#7196B",
            progressColor: "#7196B6",
            cursorColor: "#7196B6",
            barWidth: 2,
            barHeight: 1,
            barGap: undefined,
            interact: true,
            height: 50,
            normalize: true,
            backend: "WebAudio",
            mediaControls: true,
            audioRate: 1,
            sampleRate: 44100,
            minPxPerSec: 50,
          });

          waveSurferRef.current.loadBlob(blob);
          
          waveSurferRef.current.on('ready', () => {
            audioRef.current?.addEventListener('play', () => {
              waveSurferRef.current.play();
            });
            
            audioRef.current?.addEventListener('pause', () => {
              waveSurferRef.current.pause();
            });
          });

          waveSurferRef.current.on('seek', (progress: number) => {
            if (audioRef.current) {
              audioRef.current.currentTime = progress * audioRef.current.duration;
            }
          });
        }
      })
      .catch((e) => setIsPlaying(false));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    
    if (audioElement) {
      const handleEnded = () => setIsPlaying(false);
      audioElement.addEventListener('ended', handleEnded);
      return () => audioElement.removeEventListener('ended', handleEnded);
    }
  }, []);

  useEffect(() => {
    if (isOpen && !waveSurferRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#7196B",
        progressColor: "#7196B6",
        cursorColor: "#7196B6",
        barWidth: 2,
        barHeight: 1,
        barGap: undefined,
        interact: true,
        height: 50,
        normalize: true,
        backend: "WebAudio",
        mediaControls: true,
        audioRate: 1,
        sampleRate: 44100,
        minPxPerSec: 50,
      });
    }

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const updatePlayingState = () => {
        setIsPlaying(!audioElement.paused);
      };

      audioElement.addEventListener('play', updatePlayingState);
      audioElement.addEventListener('pause', updatePlayingState);
      audioElement.addEventListener('ended', updatePlayingState);

      return () => {
        audioElement.removeEventListener('play', updatePlayingState);
        audioElement.removeEventListener('pause', updatePlayingState);
        audioElement.removeEventListener('ended', updatePlayingState);
      };
    }
  }, [audioRef.current]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section className="w-[758px] m-auto max-md:max-w-[758px] max-md:w-[90%] max-sm:w-full md:p-8 p-4">
        <header className="flex justify-between items-center mb-5">
          <h2 className="text-2xl text-neutral-900 text-opacity-50 max-sm:text-xl">
            New Record
          </h2>
          <button
            onClick={onClose}
            className="flex justify-center items-center p-2.5 w-9 h-9 cursor-pointer bg-zinc-100 rounded-[40px]"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </header>

        <form onSubmit={handleFormSubmit}>
          <div className={`relative mb-5`}>
            <input
              type={"text"}
              placeholder={"Full Name"}
              className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 bg-transparent text-opacity-80 max-sm:h-14 max-sm:text-xl"
            />
          </div>
          <div className="flex gap-4 mb-5 max-md:flex-col max-md:gap-5">
            <div className="relative mb-5 w-full">
              <input
                type="email"
                placeholder="E-mail"
                className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 bg-transparent text-opacity-80 max-sm:h-14 max-sm:text-xl"
              />
            </div>
            <div className="relative mb-5 w-full">
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 bg-transparent text-opacity-80 max-sm:h-14 max-sm:text-xl"
              />
            </div>
          </div>

          <div className="relative mb-5 w-full">
            <input
              type="text"
              placeholder="Summary Note Type"
              className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 bg-transparent text-opacity-80 max-sm:h-14 max-sm:text-xl"
            />
            <button
              type="button"
              className="flex absolute right-0 top-2/4 justify-center items-center w-12 h-12 bg-white border border-solid -translate-y-2/4 cursor-pointer border-neutral-200 rounded-[40px]"
              aria-label="Open dropdown"
            >
              <DropdownIcon />
            </button>
          </div>
          <div className="grid grid-cols-10 mb-5 gap-3">
            <div id="waveform" className="col-span-9"></div>
            <div className="flex items-center justify-end col-span-1">
              {isRecorded && (
                <p className="text-sm text-[#121212] font-light">
                  {formatTime(elapsedTime)}
                </p>
              )}
            </div>
          </div>

          <div
            className={`mb-5 w-full flex justify-center ${
              isRecorded ? "block" : "hidden"
            }`}
          >
            <audio
              ref={audioRef}
              className="hidden"
            ></audio>
            <button
              onClick={handlePlayPause}
              className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <PauseIcon className="w-5 h-5 text-white" />
              ) : (
                <PlayIcon className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
          <div className="flex justify-end px-0 py-4">
            {isRecording ? (
              <button
                type="button"
                onClick={stopRecording}
                className="flex gap-2 items-center py-2.5 pr-4 pl-3 bg-red-500 cursor-pointer border-[none] rounded-[40px] max-sm:justify-center max-sm:w-full"
              >
                <span className="text-sm font-medium text-white">
                  Stop Recording {formatTime(elapsedTime)}
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={startRecording}
                className="flex gap-2 items-center py-2.5 pr-4 pl-3 bg-orange-500 cursor-pointer border-[none] rounded-[40px] max-sm:justify-center max-sm:w-full"
              >
                <RecordIcon />
                <span className="text-sm font-medium text-white">
                  Start Recording
                </span>
              </button>
            )}
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default NewRecordModal;
