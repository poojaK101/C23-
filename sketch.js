const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3, box4, box5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    box1 = new Box(200,200,20,20);
    box2 = new Box(200,100,20,20);
    box3 = new Box(220,250,20,20);
    box4 = new Box(150,100,20,20);
    box5 = new Box(180,200,20,20);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}