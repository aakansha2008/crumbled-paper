class Ball{
    constructor(x,y,radius){
var options={
    density:1.2,
    isStatic:false,
    restitution:0.3,
    friction:0.5
}
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
    World . add(world,this.body);
    }
    display(){
       
        fill("pink");
        rect(this.body.position.x,this.body.position.y);
       
    }
}



