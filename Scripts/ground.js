var ground_xPos = 0;
var ground_yPos = 700;
let ground_Width = 600;
let ground_Height = 800;
let ground_scrollSpeed = 2;

let	groundImage = new Image();
groundImage.src = 'Assets/Ground.png';

MoveGround();

function DrawGround(ctx){
	ctx.drawImage(groundImage, ground_xPos, ground_yPos);
}

function MoveGround(){
	let move = setInterval(function(){
		ground_xPos -= ground_scrollSpeed;
		if (ground_xPos <= -ground_Width)
			ground_xPos = 0;
	}, 10)
}