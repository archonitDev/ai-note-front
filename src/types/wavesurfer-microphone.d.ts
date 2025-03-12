declare module "@wavesurfer/microphone" {
  export interface MicrophonePluginParams {
    bufferSize?: number;
    numberOfInputChannels?: number;
    numberOfOutputChannels?: number;
    constraints?: MediaStreamConstraints;
  }

  export interface MicrophonePlugin {
    start: () => void;
    stop: () => void;
    destroy: () => void;
  }

  const MicrophonePlugin: {
    create: (params: MicrophonePluginParams) => MicrophonePlugin;
  };

  export default MicrophonePlugin;
}

declare module "wavesurfer.js" {
  interface WaveSurferParams {
    container: string | HTMLElement;
    waveColor?: string;
    progressColor?: string;
    cursorColor?: string;
    barWidth?: number;
    barHeight?: number;
    barGap?: number;
    plugins?: any[];
    [key: string]: any;
  }

  export interface WaveSurfer {
    microphone: import("@wavesurfer/microphone").MicrophonePlugin;
  }

  const WaveSurfer: {
    create(params: WaveSurferParams): WaveSurfer;
  };

  export default WaveSurfer;
}
