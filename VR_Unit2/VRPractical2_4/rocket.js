class Rocket{

 constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let nose = document.createElement("a-cone");
    nose.setAttribute("color","black");
    nose.setAttribute("radius-top","0");
    nose.setAttribute("radius-bottom","0.5");
    nose.setAttribute("height","1");
    nose.setAttribute("position","0 0 -2");
    this.obj.append( nose );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 -1.5 -2");
    body.setAttribute("color","white");
    body.setAttribute("radius","0.5");
    body.setAttribute("height","2");
    this.obj.append( body );

  let fuel = document.createElement("a-cone");
    fuel.setAttribute("color","red");
    fuel.setAttribute("radius-top","0");
    fuel.setAttribute("radius-bottom","0.25");
    fuel.setAttribute("height","2");
    fuel.setAttribute("position","0 -3.5 -2");
    fuel.setAttribute("rotation","-180 0 0");
    this.obj.append( fuel );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

  fly(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}