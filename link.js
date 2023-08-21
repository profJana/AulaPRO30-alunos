class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    } 

    detach()
    {

      //código correto para remover o link (para poder soltar a corda da fruta)
      //remove(engine.world,this.link);
      //World.remove(engine.world,this.link);
      //World(engine.world,this.link);
      //remove(this.link);
     
    }
}

