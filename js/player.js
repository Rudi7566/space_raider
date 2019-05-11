var myGamePiece;
var myObstacles = [];

function startGame() {
    myGameArea.start();
    var pHeight = 80;
    var pWidth = 80;

    myGamePiece = new component(pWidth, pHeight, "./assets/player/starship.png", window.innerWidth/2-pWidth/2, window.innerHeight-pHeight-10, "image");

    var btn = document.getElementById("gameMenu");
    btn.classList.add("hidden");
    // btn.classList.remove("hidden");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    

    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
  }

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
              this.x, 
              this.y,
              this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.hitBorder();        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        gameOver = crash;
        return crash;
      }   
    this.hitBorder = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
        var rocktop = 0;
        if (this.y < rocktop) {
            this.y = rocktop;
        }
        var rockleft = 0;
        if (this.x < rockleft) {
            this.x = rockleft;
        }
        var rockRight = myGameArea.canvas.width - this.width;
        if (this.x > rockRight) {
            this.x = rockRight;
        }
    } 
}

function updateGameArea() {
    var x, y;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;

    minDelay = 150;
    maxDelay = 250;
    var rcount = Math.floor(Math.random()*(maxDelay-minDelay+1)+minDelay);
    var oSpeed = 3;

    if (myGameArea.frameNo == 1 || everyinterval(rcount)) {
        
        minHeight = 20;
        maxHeight = 100;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);

        minWidth = 0;
        maxWidth = myGameArea.canvas.width - height;
        x = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);;
        
        y = myGameArea.canvas.height - myGameArea.canvas.height - maxHeight;

        if (height <= 50) {
            myObstacles.push(new component(height, height, "./assets/enemy/Asteroid3.png", x, y, "image"));
        } else if (height > 50 && height <= 80){
            myObstacles.push(new component(height, height, "./assets/enemy/Asteroid2.png", x, y, "image"));
        } else{
            myObstacles.push(new component(height, height, "./assets/enemy/Asteroid.png", x, y, "image"));
        }

      }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += oSpeed;
        myObstacles[i].update();
    }
        myGamePiece.image.src = "./assets/player/starship.png";
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;  
        
        if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.image.src = "./assets/player/starshipLeftTurn.png"; myGamePiece.speedX = -5; }
        if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.image.src = "./assets/player/starshipRightTurn.png";myGamePiece.speedX = 5; }
        if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.image.src = "./assets/player/starshipForwardTurn.png";myGamePiece.speedY = -5; }
        if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.image.src = "./assets/player/starshipBackTurn.png";myGamePiece.speedY = 5; }
        myGamePiece.newPos();    
        myGamePiece.update();
}
