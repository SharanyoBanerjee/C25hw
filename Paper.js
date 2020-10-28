class Paper {
    constructor(x,y,r){
                
        var options = {
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)
    this.image = loadImage("paper.png");
    World.add(world,this.body);

    }
    display(){
        var paperpos = this.body.position;
        image(this.image,this.body.position.x,this.body.position.y-26,50,50);

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(225,0,225)
        //ellipse(0,0,this.r,this.r);
        pop()
    }
}