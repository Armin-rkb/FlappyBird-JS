window.addEventListener("load", function(){
	var canvas = document.getElementById("Background");
	var contex = canvas.getContext("2d");
	var canvas_Width = 600;
	var canvas_Height = 800;
	var frameRate = 1000/60;
	var gravity = 8;

	var updateGame = setInterval(function(){
		UpdateBackground();	
		UpdateBird();
	}, frameRate);

	function UpdateBackground(){
		// Cleaning the canvas before drawing again.
		contex.clearRect(0,0,600,800);
		
		// Draw the background again.
		contex.drawImage(bgImage, bg_xPos, bg_yPos);
		contex.drawImage(groundImage, ground_xPos, ground_yPos);
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

		// Draw the bird again.
		contex.drawImage(birdImage, bird_xPos, bird_yPos);
	}
});