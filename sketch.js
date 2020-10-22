
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var character;

function preload(){
	//loads standing image
	standing = loadImage("standing.jpg");

	//loads running image
	running = loadImage("running.jpg");

}

function setup(){

}

function draw(){
	var canvas = createCanvas(500,500);
	background(255);

	//creates the character
	character = createSprite(100,250,50,50);
	character.addAnimation("characterImg",standing);






	character.display();
}


