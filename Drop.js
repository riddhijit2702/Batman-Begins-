class Drop {
    constructor(x,y,r){
this.x=x;
this.y=y;
this.r=20;
var options={
    'isStatic':false,
    'friction':0.5
}
this.body=Bodies.circle(x,y,20,options)
World.add(world,this.body)
    }
     updateY(){     
        if(this.rain.position.y > 400){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
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
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}


