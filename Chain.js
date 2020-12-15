class Chain{
    constructor(body1, body2, offsetx, offsety){
        this.offsetx = offsetx
        this.offsety = offsety
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetx, y:this.offsety},
            length:50
        }
        console.log(options)
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }

    display(){
        var pointA = this.chain.bodyA.position
        var pointb = this.chain.bodyB.position
        strokeWeight(4);
        line(pointA.x,pointA.y, pointb.x, pointb.y);
       
    }
    
}