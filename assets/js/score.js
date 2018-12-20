<script src="./assets/js/score.js"></script>

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Canvas dimensions
var W = 1500; var H = 1500;

var pBar = document.getElementById('p');
var updateProgress = function(value) {
    pBar.value = value;
    pBar.getElementsByTagName('span')[0].innerHTML = score;
    console.log(score);
}