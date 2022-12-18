let speech;
let input = '';
let voiceOptions;

function setup() {
  noCanvas();
  speech = new p5.Speech();
  speech.onLoad = voicesReady;

  input = createInput('Hello World');
  const btn = createButton('Read');
  btn.mousePressed(readAloud);
  voiceOptions = createSelect();
  pitchSlider = createSlider(0.01, 2.0, 1.0, 0.01);
  rateSlider = createSlider(0.1, 2.0, 1.0, 0.1);
  volumeSlider = createSlider(0.0, 1.0, 1.0, 0.1);

  function voicesReady() {
    voices = speech.voices;
    for(let i=0; i<voices.length; i++) {
      voiceOptions.option(voices[i].name);
      voiceOptions.selected(voices[0].name);
    }
  }
}

function readAloud() {
  speech.setVoice(voiceOptions.value());
  speech.setPitch(pitchSlider.value());
  speech.setRate(rateSlider.value());
  speech.setVolume(volumeSlider.value());

  speech.speak(input.value());
}
