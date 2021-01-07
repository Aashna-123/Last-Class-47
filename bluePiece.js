class BluePiece{
    constructor(x,y,width,height){
        var options = {
            friction : 0.005,
            frictionAir : 0.09,
            density : 0.001
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("images/bluePiece.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    moveRight(){
        Matter.Body.setVelocity(this.body, {x:6.5, y:0})
    }
    moveLeft(){
        Matter.Body.setVelocity(this.body, {x:-6.5, y:0})
    }
    moveUp(){
        Matter.Body.setVelocity(this.body, {x:0, y:-6.5})
    }
}