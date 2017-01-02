var Bird = {
	x: 0,
	y: 0,
	fallSpeed: 1,
	jumpHeight: 0,
	jumpApex: 100,
	Jump(){		
		var FlyBird = setInterval(function(){
			this.jumpHeight += 0.5;
			this.y += this.jumpHeight;
			if (this.jumpHeight > this.jumpApex){
				this.jumpHeight = 0;
				clearInterval(FlyBird);
			}
		}, 100)

		this.fallSpeed = 0;
	}
}

var	birdImage = new Image();
birdImage.src = 'Bird.png';