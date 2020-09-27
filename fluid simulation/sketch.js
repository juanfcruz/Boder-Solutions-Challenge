let fluid;
let barrier = new Array(xdim*ydim);
let button;

function setup() {
  createCanvas(600, 600);
  /*button = createButton('Add Barrier');*/
  frameRate(50);
  fluid = new Fluid(0.2, 0, 0.0000001);
}

x = [300,450,600,750]; // X position of each chair
y = [100,220,340,460]; // Y position of each chair

function draw() {
  
  stroke(51);
  strokeWeight(2);

  let cx = int((0.1 * width) / SCALE);
  let cy = int((0.1 * height) / SCALE);
  let cx1 = int((0.5 * width) / SCALE);
  let cy1 = int((0.5 * height) / SCALE);
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      fluid.addDensity(cx + i, cy + j, random(50, 150));
      fluid.addDensity(cx1 + i, cy1 + j, random(50, 150));
    }
  }

  for (let i = 0; i < 2; i++) {
    let angle = noise(t) * TWO_PI * 2;
    let v = p5.Vector.fromAngle(angle);
    v.mult(0.2);
    t += 0.01;
    fluid.addVelocity(cx, cy, v.x, v.y);
    fluid.addVelocity(cx1, cy1, -v.x, -v.y);
  }


  fluid.step();
  fluid.renderD();
}
var  students = function(studentsPostionX, studentsPositionY){
    noFill();
    ellipse(studentsPostionX, studentsPositionY, 80, 80);
    }

function canvasToGrid(canvasX, canvasY) {
    var gridX = Math.floor(canvasX / pxPerSquare);
    var gridY = Math.floor((canvas.height - 1 - canvasY) / pxPerSquare); 	// off by 1?
    return { x:gridX, y:gridY };
}

// Add a barrier at a given grid coordinate location:
function addBarrier(x, y) {
    if ((x > 1) && (x < xdim-2) && (y > 1) && (y < ydim-2)) {
        barrier[x+y*xdim] = true;
    }
}

// Remove a barrier at a given grid coordinate location:
function removeBarrier(x, y) {
    if (barrier[x+y*xdim]) {
        barrier[x+y*xdim] = false;
        paintCanvas();
    }
}

// Clear all barriers:
function clearBarriers() {
    for (var x=0; x<xdim; x++) {
        for (var y=0; y<ydim; y++) {
            barrier[x+y*xdim] = false;
        }
    }
    paintCanvas();
}
function placePresetBarrier() {
    var index = barrierSelect.selectedIndex;
    if (index == 0) return;
    clearBarriers();
    var bCount = barrierList[index-1].locations.length/2;	// number of barrier sites
    // To decide where to place it, find minimum x and min/max y:
    var xMin = barrierList[index-1].locations[0];
    var yMin = barrierList[index-1].locations[1];
    var yMax = yMin;
    for (var siteIndex=2; siteIndex<2*bCount; siteIndex+=2) {
        if (barrierList[index-1].locations[siteIndex] < xMin) {
            xMin = barrierList[index-1].locations[siteIndex];
        }
        if (barrierList[index-1].locations[siteIndex+1] < yMin) {
            yMin = barrierList[index-1].locations[siteIndex+1];
        }
        if (barrierList[index-1].locations[siteIndex+1] > yMax) {
            yMax = barrierList[index-1].locations[siteIndex+1];
        }
    }
    var yAverage = Math.round((yMin+yMax)/2);
    // Now place the barriers:
    for (var siteIndex=0; siteIndex<2*bCount; siteIndex+=2) {
        var x = barrierList[index-1].locations[siteIndex] - xMin + Math.round(ydim/3);
        var y = barrierList[index-1].locations[siteIndex+1] - yAverage + Math.round(ydim/2);
        addBarrier(x, y);
    }
    paintCanvas();
    barrierSelect.selectedIndex = 0;	// A choice on this menu is a one-time action, not an ongoing setting
}