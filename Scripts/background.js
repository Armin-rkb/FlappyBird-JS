var bg_xPos = 0;
var bg_yPos = 0;
var bg_Width = 600;
var bg_Height = 800;
let bg_scrollSpeed = 0.25;

var	bgImage = new Image();
bgImage.src = 'Assets/Background.png';

MoveBackground();

function MoveBackground(){
	let move = setInterval(function(){
		bg_xPos -= bg_scrollSpeed;
		if (bg_xPos <= -bg_Width)
			bg_xPos = 0;
	}, 10)
}