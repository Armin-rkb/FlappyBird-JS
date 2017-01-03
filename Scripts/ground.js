var ground_xPos = 0;
var ground_yPos = 700;
var ground_Width = 600;
var ground_Height = 800;
let ground_scrollSpeed = 1.5;

var	groundImage = new Image();
groundImage.src = 'Assets/Ground.png';

MoveGround();

function MoveGround(){
	let move = setInterval(function(){
		ground_xPos -= ground_scrollSpeed;
		if (ground_xPos <= -ground_Width)
			ground_xPos = 0;
	}, 10)
}