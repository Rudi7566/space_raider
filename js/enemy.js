var myObstacle;

function startEnemy() {
    myObstacle = new component(10, 200, "green", 300, 120); 
    console.log("x");
}

function updateGameArea() {
    myObstacle.update();
}