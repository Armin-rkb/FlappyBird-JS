let	pipeImage = new Image();
let pipeDownImage = new Image();
let pipeUpImage = new Image();
pipeImage.src = 'Assets/Pipe.png';
pipeDownImage.src = 'Assets/Pipe_Down.png';
pipeUpImage.src = 'Assets/Pipe_Up.png';

let pipeWidth = 50;
let pipeHeight = 26;

let pipe_xPos = 600;
let pipe_yPos = 0;

let upSpawned, downSpawned = true;
let pipeLength = 14;
let holeLength = Math.floor(Math.random() * (14 - 4));

let pipes_scrollSpeed = 2;

MovePipes();

function MovePipes(){
	let move = setInterval(function(){
		pipe_xPos -= pipes_scrollSpeed;
		if (pipe_xPos <= -pipeWidth){
			pipe_xPos = 800;
			holeLength = Math.floor(Math.random() * (14 - 4));
		}
	}, 10)
}

function DrawPipe(ctx, x, y){
	this.x = pipe_xPos;
	this.y = pipe_yPos;

	// Draw the pipes with enough space for the hole.
	for (var i = 0; i < pipeLength; i++) {
		if (i != holeLength && i != holeLength + 1 && i != holeLength + 2 && i != holeLength + 3){
			ctx.drawImage(pipeImage, this.x, this.y + (i * pipeWidth));
		}
		if (i == holeLength)
			ctx.drawImage(pipeDownImage, this.x - 2, holeLength * pipeWidth);
		if (i == holeLength + 3)
			ctx.drawImage(pipeUpImage, this.x - 2, (holeLength + 3.5) * pipeWidth);
	}
}