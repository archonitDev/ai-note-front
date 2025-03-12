declare module 'mic-recorder-to-mp3' {
  interface MicRecorderOptions {
    bitRate?: number;
    sampleRate?: number;
  }

  class MicRecorder {
    constructor(options?: MicRecorderOptions);
    start(): Promise<void>;
    stop(): MicRecorder;
    getMp3(): Promise<[Buffer, Blob]>;
  }

  export default MicRecorder;
} 