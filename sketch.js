const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box7, box8, box9, box10;
var platform;
var sling;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    
    

    box5 = new Box(810,160,70,70);
    
    polygon = new Polygon(100,100);


    //constrainedLog= new Log(230, 180, 80, PI/2);

   sling= new Sling(polygon.body, {x: 200, y:100});
}

function draw(){
    background("darkblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
    

    box5.display();
    

    polygon.display();
    //platform.display();
    sling.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    sling.fly();
}