window.addEventListener("load", function(){
	var canvas = document.getElementById("Background");
	var contex = canvas.getContext("2d");
	var canvas_Width = 600;
	var canvas_Height = 800;
	var frameRate = 1000/60;

	var updateGame = setInterval(function(){
		CheckGroundCollision();
		
		UpdateBackground();	
		UpdateBird();
		DrawBird(contex);
		DrawPipe(contex);
	}, frameRate);

	function UpdateBackground(){
		// Cleaning the canvas before drawing again.
		contex.clearRect(0,0,600,800);
		
		// Draw the background again.
		DrawBackground(contex);
		DrawGround(contex);
	}
});