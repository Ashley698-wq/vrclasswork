let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let y = rnd(-20,20);
    let rocket = new Rocket(x,y,z);
  }

  loop();
})


   
    rocket.fly();
    
  window.requestAnimationFrame( loop );

