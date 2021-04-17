function randomBack(){
    var elementFundo = document.getElementById("divFundo");
    var totalBack = 6;
    let num = Math.ceil(Math.random() * totalBack);
    elementFundo.style.backgroundImage = "url('./img/fundo/piso" + num + ".png')";
    //Randomiza background div interna
    var elementDio = document.getElementById("dio");
    var totalBackDio = 2;
    let num2 = Math.ceil(Math.random() * totalBackDio);
    elementDio.style.backgroundImage = "url('./img/dio/dio" + num2 + ".png')";
    
    
  }
  
  randomBack();