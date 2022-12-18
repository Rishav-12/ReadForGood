let speech;
let input = '';
let voiceOptions;

function setup() {
  noCanvas();
  speech = new p5.Speech();
  speech.onLoad = voicesReady;

  input = createInput('');
  const btn = createButton('Read');
  btn.mousePressed(readAloud);
  voiceOptions = createSelect();

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
  speech.speak(input.value());
}
