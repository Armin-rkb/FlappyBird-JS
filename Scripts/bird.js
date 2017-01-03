var bird_xPos = 50;
var bird_yPos = 0;
var fallSpeed = 0;
let	jumpHeight = 0;
let	jumpApex = 35;

var	birdImage = new Image();
birdImage.src = 'Assets/Bird.png';

function Jump(){
	let flyBird = setInterval(function(){
			bird_yPos -= jumpHeight;
			jumpHeight += 5;
			// When we reached our highest point stop the interval.
			if (jumpHeight > jumpApex){
				jumpHeight = 0;
				clearInterval(flyBird);
			}
	}, 20)

	this.fallSpeed = 0;
}