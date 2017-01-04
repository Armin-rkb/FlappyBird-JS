var bird_xPos = 50;
var bird_yPos = 0;

let fallSpeed = 0;
let gravity = 6;
let	jumpHeight = 0;
let	jumpApex = 30;

let	birdImage = new Image();
birdImage.src = 'Assets/Bird.png';

function DrawBird(ctx){
	// Drawing the bird.
	ctx.drawImage(birdImage, bird_xPos, bird_yPos);
}


function UpdateBird(){
	// Update the new bird position.
	bird_yPos += gravity * fallSpeed;

	if (fallSpeed < 1){
		fallSpeed += 0.02;
	}
	else if (fallSpeed > 1){
		fallSpeed = 1;
	}
}

function JumpBird(){
	let flyBird = setInterval(function(){
			bird_yPos -= jumpHeight;
			jumpHeight += 5;
			// When we reached our highest point stop the interval.
			if (jumpHeight > jumpApex){
				jumpHeight = 0;
				clearInterval(flyBird);
			}
	}, 20)
	
	fallSpeed = 0;
}