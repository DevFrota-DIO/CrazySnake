const divrecord = document.getElementById('record');
const secondH1 = document.getElementById('secondH1');
const congrats = document.getElementById('congrat');
const contEatss = document.getElementById('contEats');
let audioFim2 = document.getElementById("audioFim");
let audioJogo2 = document.getElementById("audioJogo");

  //Time
  var tempCount = 0;
  var tempCount60 = 0;
  let saveTemp = [];
let h1CountRegres = document.getElementById("timer");
function countRegres(set, val) {
  if (set == 1) {
    if (tempCount > -1) {
      tempCount = tempCount + 1;
      if (tempCount == 60) {
        tempCount = 0;
        tempCount60 = tempCount60 + 1;
      }
      if (tempCount < 10) {
        h1CountRegres.innerText = "Tempo - "+tempCount60+":0" + tempCount;
      } else {
        h1CountRegres.innerText = "Tempo - "+tempCount60+":"+ tempCount;
      }
      setTimeout("countRegres(1,0)", 1000);
      
  } 

    
  }else{
    saveTemp[0] = tempCount;
    saveTemp[1] = tempCount60;
    setRecords(2,val);
  }
  
}
function setRecords(set, val) {
  if (set == 1) {
    contEatss.innerText = 'Frutas - '+val;
  }else {
    audioJogo2.pause();
    audioFim2.play();
    divrecord.style.display = 'inline-block';
    if (saveTemp[0] < 10) {
    congrats.innerHTML = 'Você comeu '+val+ ' frutas em '+saveTemp[1]+':0'+saveTemp[0];
    }else{
      congrats.innerHTML = 'Você comeu '+val+ ' frutas em '+saveTemp[1]+':'+saveTemp[0];
    }
  }
  
}