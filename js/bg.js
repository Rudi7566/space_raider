

window.onload = function(){
    var lScreen = document.getElementById("loadingScreen");
    var mbackground = document.getElementById('gradient');
    var blue = 20;
    var red = 20;
    var green = 10;
    var counter = 0;
    
    function colorChange(){
     if(counter <= 50){
        red += 3;
        blue += 5;
        green += 1;
      counter++;
     }
      if(counter > 50){
        red -= 3;
        blue -= 5;
        green -= 1;
        counter++;
      }
       if(counter == 100){
         counter = 0;
        //  console.log("counter reset");
       }
      

      if(!gameOver){
        score++;
        document.getElementById("score").innerHTML = score;
      }
        

      lScreen.classList.add("hidden");
      mbackground.style.backgroundImage = 'linear-gradient(rgb(' + red + ',' + green + ',' + blue + ') 10%, rgb(0, 0, 0) 100%)';
    }
    

// BG image moving ------------------------------------------------------------------------------------------------------------


    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    img = new Image(),
    img2 = new Image(),
    // a ghost canvas that will keep our original image
    gCanvas = document.createElement('canvas'),
    gCtx = gCanvas.getContext('2d');
    gCanvas.width = canvas.width;
    gCanvas.height = canvas.height;

    var gCanvas2 = document.createElement('canvas'),
    gCtx2 = gCanvas2.getContext('2d');
    gCanvas2.width = canvas.width;
    gCanvas2.height = canvas.height;

  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    gCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(moveUp);
  }
  img.src = "./assets/background/starsBG.png";
  img2.onload = function() {
    ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
    gCtx2.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(moveUp);
  }
  img2.src = "./assets/background/starsBG.png";
  

  var y = 0;

  
  function moveUp() {
    if(!gameOver){
      if (++y < (canvas.height * -0.5)) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(gCanvas, 0, y, canvas.width, canvas.height);
      ctx.drawImage(gCanvas2, 0, y-500, canvas.width, canvas.height);
      requestAnimationFrame(moveUp)
      if (y >= 500){
        y = 0;
      }
    }
  }



  // BG gradient change ---------------------------------------------------------------------------------------------------------
    setInterval(colorChange, 1000);
    
    
      // var canvas = document.getElementById('paper'); 
      // c = canvas.getContext("2d");
      // var img = new Image();
      // var img2 = new Image();
      
      

      // var posX = 0;
      // var posY = 0;

      
      // setInterval(function(){
        
      //   c.clearRect(0,0,canvas.width,canvas.height);
      //   img2.onload = function () {
      //     context.drawImage(img2, posX, posY - 700);
      //   }
      //   img2.src = "./assets/background/starsBG.png";

      //   img.onload = function () {
      //     context.drawImage(img,posX,posY);
      //   }
      //   img.src = "./assets/background/starsBG.png";
      // posX += 0;
      // posY += 2;

      // if (posY >= 500){
      //   posY = 0;
      // }


      // var context = document.getElementById('paper').getContext("2d");
	
      // }, 20);
    
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    