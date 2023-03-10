let speech;
let input = '';
let voiceOptions;
let pitchSlider;
let rateSlider;
let volumeSlider

function setup() {
  noCanvas();
  speech = new p5.Speech();
  speech.onLoad = voicesReady;

  input = select('#text_to_read');
  const btn = select('#readNow');
  btn.mousePressed(readAloud);
  voiceOptions = select('#voices');
  pitchSlider = select('#pitchSlider');
  rateSlider = select('#rateSlider');
  volumeSlider = select('#volSlider');

  function voicesReady() {
    voices = speech.voices;
    for(let i=0; i<voices.length; i++) {
      voiceOptions.option(voices[i].name);
    }
    voiceOptions.selected(voices[0].name);
  }
}

function readAloud() {
  speech.setVoice(voiceOptions.value());
  speech.setPitch(pitchSlider.value());
  speech.setRate(rateSlider.value());
  speech.setVolume(volumeSlider.value());

  speech.speak(input.value());
}
