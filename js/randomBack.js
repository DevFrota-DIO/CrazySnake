function randomBack(){
    var elementFundo = document.getElementById("divFundo");
    var totalBack = 6;
    let num = Math.ceil(Math.random() * totalBack);
    elementFundo.style.backgroundImage = "url('./img/fundo/piso" + num + ".png')";
    
    
  }
  
  randomBack();