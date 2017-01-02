window.addEventListener("load", function(){
	var canvas = document.getElementById("Background");
	var contex = canvas.getContext("2d");
	var canvasWidth = 600;
	var canvasHeight = 800;
	var frameRate = 1000/60;
	var gravity = 6;

	var updateGame = setInterval(function(){
		UpdateBird();
	}, frameRate);
	
	function UpdateBird(){
		// Cleaning the canvas before drawing again.
		contex.clearRect(0,0,600,800);
		// Update the new bird position.
		Bird.y += gravity * Bird.fallSpeed;
			console.log(Bird.jumpHeight);

		if (Bird.fallSpeed < 1){
			Bird.fallSpeed += 0.02;
		}
		else if (Bird.fallSpeed > 1){
			Bird.fallSpeed = 1;
		}

		// Draw the bird again.
		contex.drawImage(birdImage, Bird.x, Bird.y);
	}
});