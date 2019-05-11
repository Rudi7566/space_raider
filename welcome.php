<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Oppa! see some cool Stuff</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
    <script src="js/bg.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style type="text/css">
        body{ font: 14px sans-serif; text-align: center; }
    </style>
</head>
<body>

    <div id="loadingScreen">
        <img src="assets/other/loading.gif" alt="NANI?">
    </div>


    <div id="stats" class="hidden justify-content-between background-black p-2">
        <div class="pl-4">
            <span>Score: <span  id = "score"></span></span>
        </div>

        <div class="pr-4">
            <span>Health: <span id = "health"></span></span>
        </div>

    </div>

    <div id="gameMenu">

        


        <div class="container">
            <h1>SPACE RAIDER</h1>
            <div class="page-header">
            <h4 class="text-white">Hi, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b></h4>
            </div>
            <button id="startGame">
                START GAME 
            </button>
            <button id="aboutGame">
                ABOUT 
            </button>
            <button id="exitGame">
            <a href="logout.php" class="text-decoration-none">EXIT GAME</a>
            </button>
            
            
        
        </div>

    </div>
    <div class="background" id="gradient">
        <canvas height='500' width='500' id='paper'></canvas>
   </div>
    <script src="js/manager.js"></script>
    <script src="js/player.js"></script>
</body>
</html>