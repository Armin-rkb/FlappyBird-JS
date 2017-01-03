	var canJump = true;
	var jumpKey = 32;
	// Checking our input up.
	document.onkeyup = function(event){
		var keyUp = event.keyCode;

		if (keyUp == jumpKey)
			canJump = true;
	}

	// Checking our input down.
	document.onkeydown = function(event){
		var keyDown = event.keyCode;

		if (keyDown == jumpKey && canJump){
			Jump();
			canJump = false;
		}
	}