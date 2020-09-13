class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            lenght:5,
            stiffness:0.04
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        this.pointB=pointB;
    }
    fly(){
        this.chain.bodyA=null;
    }
    display(){
        if(this.chain.bodyA!=null){
        var pos=this.chain.bodyA.position;
        var pos2=this.pointB;
            push();

        line(pos.x,pos.y,pos2.x,pos2.y);
            pop();
        }
        }
    }
