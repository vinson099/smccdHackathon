let ball;
let sprite2;
let playing = true;
let spriteImage;
let tileImage;

function preload(){
	spriteImage = loadImage("assets\\catAstro.png");
	wallImage = loadImage("assets\\Tiny Swords (Update 010)\\Terrain\\Ground\\Tilemap_Elevation.png");
}

function setup() {
	new Canvas(1920, 1080, 'fullscreen');

	ball = new Sprite();
	ball.image	= spriteImage;
	sprite2 = new Sprite();
	sprite2.image = wallImage;
}



function draw() {
	background('skyblue');
	if(kb.pressed == "esc"){

	}
	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTo(mouse);
	}
	if (kb.pressing('w')) { ball.y -= 3 }
	if (kb.pressing('a')) { ball.x -= 3 }
	if (kb.pressing('s')) { ball.y += 3 }
	if (kb.pressing('d')) { ball.x += 3 }
	if (kb.pressing('esc')) {}
}
