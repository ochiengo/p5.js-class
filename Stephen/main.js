var Img;
var bg;

function setup(){
	createCanvas(1000, 500);
	bg = loadImage("s.jpg");
	Img=loadImage("Images/h.jpg");
}

function draw(){
	background(bg);
	image(Img, 40, 40, 500, 400);
	
	}