class Drop {
    constructor(x,y){
this.x=x;
this.y=y;
this.r=4;
var options={
    'isStatic':false,
    'friction':0.5,
    'restitution':0.2
}
this.body=Bodies.circle(x,y,4,options)
World.add(world,this.body)
    }
     updateY(){     
        if(this.body.position.y > 400){
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,400)})
        }
    }
   /* display(){
        var pos = this.body.position;
        
            push();
            translate(pos.x, pos.y);
            rotate(angle);
           ellipseMode(RADIUS)
            stroke("#1CA773");
            strokeWeight(4);
            fill("#1001B4");
            ellipse(0,0,this.r);
            pop();
            
    }*/
    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}




