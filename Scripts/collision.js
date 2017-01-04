function CheckGroundCollision(){
	if (bird_yPos + 47 >= ground_yPos)
		bird_yPos = ground_yPos - 47;
}