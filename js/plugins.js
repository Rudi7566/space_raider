window.onload = function(){
    var lScreen = document.getElementById("loadingScreen");

    lScreen.classList.add("hidden");
}

$(".i-grid").isotope({
    itemSelector: ".i-grid-item",
    masonry: {
      columnWidth: 100
    }
});   