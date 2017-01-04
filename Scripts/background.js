var bg_xPos = 0;
var bg_yPos = 0;
let bg_Width = 600;
let bg_Height = 800;
let bg_scrollSpeed = 0.25;

let	bgImage = new Image();
bgImage.src = 'Assets/Background.png';

MoveBackground();

function DrawBackground(ctx){
	ctx.drawImage(bgImage, bg_xPos, bg_yPos);
}

function MoveBackground(){
	let move = setInterval(function(){
		bg_xPos -= bg_scrollSpeed;
		if (bg_xPos <= -bg_Width)
			bg_xPos = 0;
	}, 10)
}