let archer;
let sprite2;
let playing = true;
let spriteImage;
let tileImage;

function preload(){
	sheet_archer = loadImage('assets/Tiny Swords (Update 010)/Factions/Knights/Troops/Archer/Archer + Bow/Archer_Blue_(NoArms).png');
	sheet_wall = loadImage('assets/Tiny Swords (Update 010)/Terrain/Ground/Tilemap_Elevation.png');
	sheet_ground = loadImage('assets/Tiny Swords (Update 010)/Terrain/Ground/Tilemap_Flat.png');
	water_img = loadImage('assets/Tiny Swords (Update 010)/Terrain/Water/Water.png')
	sheet_foam = loadImage('assets/Tiny Swords (Update 010)/Terrain/Water/Foam/Foam.png');
}

function setup() {
	new Canvas(1920, 1080, 'fullscreen');

	archer = new Sprite();
	archer.spriteSheet = sheet_archer;
	archer.addAni({ w: 192, h: 192, row: 0, col: 1})



	// sprite2 = new Sprite();
	// sprite2.image = sheet_wall.get(0, 256, 190, 125);
	
}

function movement(){
	// need to add movement animation 
	// not sure if i should do on kb press or in a function
}



function draw() {
	background('skyblue');
	if(kb.pressed == "esc"){

	}
	if (mouse.presses()) {
		archer.speed = 10;
		archer.moveTo(mouse);
	}
	if (kb.pressing('w')) { 
		archer.y -= 3 

	}
	if (kb.pressing('a')) { 
		archer.x -= 3 
	}
	if (kb.pressing('s')) { 
		archer.y += 3 
	}
	if (kb.pressing('d')) { 
		archer.x += 3 
	}
	if (kb.pressing('esc')) {}
}
