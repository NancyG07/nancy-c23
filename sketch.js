const Engine = Matter. Engine;
const World = Matter. World;
const Bodies = Matter. Bodies;
const Body = Matter. Body;

var engine,world, ball, suelo;
function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    var suelo_options ={
        isStatic: true
    }

    var ball_options = {
        restitution: 0.95,
        frictionAir: 0.01
   }
   ball = Bodies.circle(100,10,20,ball_options);
   World.add(world, ball);

  suelo = Bodies.rectangle(200, 380,400, 20, suelo_options);
  World.add(world, suelo);

  rectMode(CENTER);
   ellipseMode(RADIUS);
}

function draw(){
    background("pink");
    Engine.update(engine);
    ellipse(ball.position.x , ball.position.y, 20);

    fill("brown");
    rect(suelo.position.x, suelo.position.y, 400, 20);

  
}

