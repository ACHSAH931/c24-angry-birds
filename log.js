class Log {
    constructor(x,y,height,angle){
    var options={
    friction:1.0,
    restitution:0.8,
    density:1.0
    }
    this.body=Bodies.rectangle(x,y,20,height,options)
    World.add(world,this.body)
    this.width=20
    this.height=height
    Matter.Body.setAngle(this.body,angle)
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill('brown')
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
    }
    }