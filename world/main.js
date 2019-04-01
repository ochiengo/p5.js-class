

function setup(){
	createCanvas(1000, 1000);
	background(255, 5, 7);
}
function draw(){
	var ypos=5;
	var xpos=5;
	var diameter=50;
	fill(random(255),random(100),random(155),random(150));
	ellipse(xpos, ypos, diameter, diameter);

	for (var xpos  = 5; xpos <width; xpos +=100){
	for (var ypos  = 5; ypos <height; ypos+=100) {
	ellipse(xpos, ypos, diameter, diameter);
		}	

	}
}