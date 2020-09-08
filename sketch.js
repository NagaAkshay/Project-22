// Create the variables that are needed
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
// Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Load the Images that are needed
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	
	// Create the Canvas
	createCanvas(800, 700);
	
	//Change the RectMode to Center
	rectMode(CENTER);

	// Add the PackagaeBody options
	packageBody_options = {
		restitution : 1.0
	}
	

	// Create the Soprites that are needed
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	// Create a physics Engine and store them in the variables
	engine = Engine.create();
	world = engine.world;

	// Creatye the Packagebody using Bodies and add it to the world
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	// Run youe Physics Engine
	Engine.run(engine);
  
}


function draw() {
	// Change the RectMode tp Center
	rectMode(CENTER);

	// Make the Background BLACK
	background(0);

	// Position the PackagaeBody
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	// Draw the Sprites
	drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



