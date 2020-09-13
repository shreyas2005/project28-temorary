class Boy{
    constructor(x,y,width,height){
        var op={
            isStatic:false,
           
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.Boy=loadImage("boy.png");
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.Boy,0,0,this.width,this.height);
        // strokeWeight(3);
        // stroke("brown");
        // fill(0, 255, 33);
        // rect(0,0,this.width,this.height);
        pop();
    }
}