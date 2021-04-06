
var soundInicio = 4;
var soundJogo = 3;
var soundEat = 4;
var soundFases = 3;
var soundRecord = 3;
var soundFim = 4;
var soundSnake = 2;
var soundOver = 3;

let audioInicio = document.getElementById("audioInicio");
let audioSnake = document.getElementById("audioSnake");
let audioEat = document.getElementById("audioEat");
let audioJogo = document.getElementById("audioJogo");
let audioFases = document.getElementById("audioFases");
let audioRecord = document.getElementById("audioRecord");
let audioFim = document.getElementById("audioFim");

function randomAudio(val,opt) {
    if (val == 1) {
        let num = Math.ceil(Math.random() * soundInicio);
    audioInicio.setAttribute("src",'./sons/inicio/inicio'+num+'.mp3');
    audioInicio.volume=0.3;
    } else if(val == 2) {
        let num2 = Math.ceil(Math.random() * soundJogo);
        audioJogo.setAttribute("src",'./sons/jogo/jogo'+num2+'.mp3') ;
        audioJogo.volume=0.1;
    }else if(val == 3){
        let num2 = Math.ceil(Math.random() * soundEat);
        audioEat.setAttribute("src",'./sons/eat/eat'+num2+'.mp3') ;
        audioEat.volume=0.2;
    }else if(val == 4){
            let num2 = Math.ceil(Math.random() * soundRecord);
            audioRecord.setAttribute("src",'./sons/record/record'+num2+'.mp3') ;
            audioRecord.volume=0.3;
        }else if(val == 5){
            let num2 = Math.ceil(Math.random() * soundFases);
            audioFases.setAttribute("src",'./sons/fases/fase'+num2+'.mp3') ;
            audioFases.volume=0.3;
        }else if(val == 6){
            let num2 = Math.ceil(Math.random() * soundFim);
            audioFim.setAttribute("src",'./sons/fim/fim'+num2+'.mp3');
            audioFim.volume=0.3;
        }else if(val == 7){
            let num2 = Math.ceil(Math.random() * soundSnake);
            audioSnake.setAttribute("src",'./sons/snake/snake'+num2+'.mp3');
            audioSnake.volume=0.03;
        }
}
function loadSound()
{
    for (let i = 1; i < 8; i++) {
        randomAudio(i);
        
    }
}
loadSound();
function playSounds(val) {
    if (val == 1) {
      audioInicio.play();
      audioInicio.currentTime = 0;
    } else if(val == 2){
      audioEat.play();
      audioEat.currentTime = 0;
      audioEat.loop = false;
    }else if(val == 3){
        audioFases.play();
        audioFases.currentTime = 0;
        audioFases.loop = false;
      }else if(val == 4){
        audioRecord.play();
        audioRecord.currentTime = 0;
        audioRecord.loop = false;
      }else if(val == 5){
        audioSnake.play();
        audioSnake.currentTime = 0;
      }else if(val == 6){
        audioJogo.play();
        audioJogo.currentTime = 0;
      }
  }