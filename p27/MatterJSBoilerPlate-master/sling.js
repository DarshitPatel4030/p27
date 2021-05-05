class rope1{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            pointB:{x:offset.x,y:offsety
            }
        }
       
        this.rope = Constraint.create(options);
       World.add(world,this.rope)
    }