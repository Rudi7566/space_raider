<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>main</title>
</head>
<body>

    <div id="loadingScreen">
        <img src="assets/other/loading.gif" alt="NANI?">
    </div>


    <!-- nav menu -->
    <nav class="py-2 position-relative">
        <div class="container d-flex flex-row justify-content-between align-items-center">
            <div class="">
                <h3 class="font-weight-bold"> Space Raider </h3>
            </div>
            <!-- nav links -->
            <div class="nav-links d-flex align-items-center" >
                <a href="#" class="p-3">Main</a>
                <a href="#about" class="p-3">About</a>
                <a href="#Gal" class="p-3">Gallery</a>
                <a href="#indx-start" class="p-3">Start playing</a>
            </div>
        </div>
        <!-- loging/sign up -->
        <div class="ls-btn-cust">
            <a href="login.php">log in</a>
            <span> | </span>
            <a href="register.php">sign up</a>
        </div>
    </nav>

    
        
    <!-- main block -->
    <div class="parallax">
        <div class="container pt-5 text-white position-relative h-100">
            <h2 class="font-weight-bold">Welcome! Pilot!</h2>
            <h4 class="font-weight-bold">Are you ready?</h4>

            <div class="start-now">
                <a href="register.php"><h3 class="text-white">Start now!</h3></a>
            </div>
        </div>
    </div>



    <div class="container pt-5 position-relative" id="about">
            <h2 class="font-weight-bold">About us</h2>
            <p class="w-75 p-3">A new game in the genre of arcade about space, where 
                you are a pilot of a spacecraft,
                try to return to earth without damaging your ship or your body will be lost in a cold void! </p>

            <p class="w-75 p-3">
                Will you try? or you are too scared?... 
            </p>

            <p class="w-75 p-3">
                Join our "4RE" space crew right now! 
            </p>

            <p class="w-75 p-3">
                We need you!
                Just sign up and be ready to take you ship, Pilot! 
                
                it's free...
            </p>

            <p class="w-75 p-3">
                ,.&$$#% data exposed ^&.,#*$^#...
            </p>
    </div>

    <div class="container pt-5 position-relative" id="Gal">
        <h2 class="font-weight-bold">Gallery</h2>

        <div class="i-grid">
            <div class="i-grid-item i-grid-item--width1"><img src="./assets/gallery/1.jpg" alt=""></div>
            <div class="i-grid-item i-grid-item--width2"><img src="./assets/gallery/2.jpg" alt=""></div>
            <div class="i-grid-item"><img src="./assets/gallery/4.jpg" alt=""></div>  
            <div class="i-grid-item i-grid-item--width2"><img src="./assets/gallery/2.jpg" alt=""></div>
            <div class="i-grid-item i-grid-item--width2"><img src="./assets/gallery/3.jpg" alt=""></div> 
            <div class="i-grid-item i-grid-item--width2"><img src="./assets/gallery/3.jpg" alt=""></div>  
            <div class="i-grid-item"><img src="./assets/gallery/1.jpg" alt=""></div>
            <div class="i-grid-item i-grid-item--width1"><img src="./assets/gallery/4.jpg" alt=""></div>  
        </div>
    </div>


    <!-- start game -->
    <div id="indx-start" class="parallax-end">
        <div class="container mt-5 position-relative">
            <div class="start-game">
                <h2 class="text-white font-weight-bold">Join us now</h2>
                <div class="start-now">
                        <a href="register.php"><h3 class="text-white">Join Squad</h3></a>
                </div>
            </div>
        </div>
    </div>

    <footer class="d-flex justify-content-between">
        <div class="px-4">Dmitry Rudnev</div>
        <div class="px-4">2019</div>
        <div class="px-4">All Rights Reserved!</div>
    </footer>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
    <script src="js/plugins.js"></script>
</body>
</html>