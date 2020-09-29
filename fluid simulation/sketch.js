let fluid;
let barrier = new Array(xdim*ydim);
let button;

function setup() {
  createCanvas(588, 380);
  /*button = createButton('Add Barrier');*/
  frameRate(50);
  
  fluid = new Fluid(0.2, 0, 0.0000001);
}

function draw(){
    stroke(51);
    strokeWeight(2);
  
    let ax = 60
    let ay = 90
    let bx = 75
    let by = 90
    let cx = 90
    let cy = 90
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        fluid.addDensity(ax + i, ay + j, random(50, 150));
        fluid.addDensity(bx + i, by + j, random(50, 150));
        fluid.addDensity(cx + i, cy + j, random(50, 150));
      }
    }
  
    for (let i = 0; i < 2; i++) { 
      let angle = -80;
      let v = p5.Vector.fromAngle(angle);
      v.mult(0.2);
      let angle1 = 45 ;
      let v1 = p5.Vector.fromAngle(angle1);
      v1.mult(0.2);
      t += 0.01;
      fluid.addVelocity(ax, ay, -v1.x, -v1.y);
      fluid.addVelocity(bx, by, v.x, -v.y);
      fluid.addVelocity(cx, cy, v1.x, -v1.y);
        
    }
  
  
    fluid.step();
    fluid.renderD();
 }

 /*function draw(){
    stroke(51);
    strokeWeight(2);
  
    let ax = 15
    let ay = 10
    let bx = 40
    let by = 40
    let cx = 100
    let cy = 40
    let dx = 40
    let dy = 75
    let fx = 70
    let fy = 75
    let ex = 100
    let ey = 75
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        fluid.addDensity(ax + i, ay + j, random(50, 150));
        fluid.addDensity(bx + i, by + j, random(50, 150));
        fluid.addDensity(cx + i, cy + j, random(50, 150));
        fluid.addDensity(dx + i, dy + j, random(50, 150));
        fluid.addDensity(fx + i, fy + j, random(50, 150));
        fluid.addDensity(ex + i, ey + j, random(50, 150));
      }
    }
  
    for (let i = 0; i < 2; i++) { 
      let angle = noise(t)*TWO_PI*2 ;
      let v = p5.Vector.fromAngle(angle);
      v.mult(0.2);
      t += 0.01;
      fluid.addVelocity(ax, ay, v.x, v.y);
      fluid.addVelocity(bx, by, v.x, v.y);
      fluid.addVelocity(cx, cy, v.x, v.y);
      fluid.addVelocity(dx, dy, v.x, v.y);
      fluid.addVelocity(fx, fy, v.x, v.y);
      fluid.addVelocity(ex, ey, v.x, v.y);
        
    }
  
  
    fluid.step();
    fluid.renderD();
 }*/





