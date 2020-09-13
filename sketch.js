const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var g1;
var boy1,tree1;
var mango1,man2,man3,man4,man5;
var stone1;
var rop1;
function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    g1=new Ground(400,580,800,20);
    boy1=new Boy(150,520,200,250);
    tree1=new Tree(700,400,300,400);
    mango1=new fruit(700,350,50,50);
    man2=new fruit(760,340,50,50);
    man3=new fruit(800,300,50,50);
    man4=new fruit(700,250,50,50);
    man5=new fruit(600,350,50,50);
    stone1=new rock(175,520,50,50);

    rop1=new Rope(stone1.body,{x:200,y:520});
} 

function draw(){
    background(212, 152, 242);
    Engine.update(engine);
   g1.display();
   tree1.display();
   boy1.display();
   mango1.display();
   man2.display();
   man4.display();
   man3.display();
   man5.display();
   stone1.display();
   rop1.display();
 }
 function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});

 }
 function mouseReleased(){
     rop1.fly();
 }
