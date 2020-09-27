let N = 250;
let iter = 16;
let SCALE = 4;
let t = 0;

// function to use 1D array and fake the extra two dimensions --> 2D
function IX(x, y) {
  return x + y * N;
}



class Fluid {

  constructor(dt, diffusion, viscosity) {

    this.size = N;
    this.dt = dt;
    this.diff = diffusion;
    this.visc = viscosity;

    // Intializes array of boolean values to determine if something is a wall or not [1 if wall 0 otherwise]

    this.wall= new Array(N*N);

    for (var y=0; y<this.size; y++) {
        for (var x=0; x<this.size; x++) {
            walll[x+y*xdim] = false;
        }
    }

    // Array to represent the distribution of densities along the 2D array

    this.density = new Array(N * N).fill(0);
    this.s = new Array(N * N).fill(0);

    // Array to represent the distribution of velocites along the x-axis and y-axis

    this.Vx = new Array(N * N).fill(0);
    this.Vy = new Array(N * N).fill(0);

    // Arrays to represent the distribution of velocites along the x-axis and y-axis in the previous state

    this.Vx0 = new Array(N * N).fill(0);
    this.Vy0 = new Array(N * N).fill(0);




      // Move particles along their directions of motion:
    function stream() {
        barrierCount = 0; barrierxSum = 0; barrierySum = 0;
        barrierFx = 0.0; barrierFy = 0.0;
        for (var y=ydim-2; y>0; y--) {          // first start in NW corner...
            for (var x=1; x<xdim-1; x++) {
                nN[x+y*xdim] = nN[x+(y-1)*xdim];            // move the north-moving particles
                nNW[x+y*xdim] = nNW[x+1+(y-1)*xdim];        // and the northwest-moving particles
            }
        }
        for (var y=ydim-2; y>0; y--) {          // now start in NE corner...
            for (var x=xdim-2; x>0; x--) {
                nE[x+y*xdim] = nE[x-1+y*xdim];          // move the east-moving particles
                nNE[x+y*xdim] = nNE[x-1+(y-1)*xdim];        // and the northeast-moving particles
            }
        }
        for (var y=1; y<ydim-1; y++) {          // now start in SE corner...
            for (var x=xdim-2; x>0; x--) {
                nS[x+y*xdim] = nS[x+(y+1)*xdim];            // move the south-moving particles
                nSE[x+y*xdim] = nSE[x-1+(y+1)*xdim];        // and the southeast-moving particles
            }
        }
        for (var y=1; y<ydim-1; y++) {              // now start in the SW corner...
            for (var x=1; x<xdim-1; x++) {
                nW[x+y*xdim] = nW[x+1+y*xdim];          // move the west-moving particles
                nSW[x+y*xdim] = nSW[x+1+(y+1)*xdim];        // and the southwest-moving particles
            }
        }
        for (var y=1; y<ydim-1; y++) {              // Now handle bounce-back from barriers
            for (var x=1; x<xdim-1; x++) {
                if (barrier[x+y*xdim]) {
                    var index = x + y*xdim;
                    nE[x+1+y*xdim] = nW[index];
                    nW[x-1+y*xdim] = nE[index];
                    nN[x+(y+1)*xdim] = nS[index];
                    nS[x+(y-1)*xdim] = nN[index];
                    nNE[x+1+(y+1)*xdim] = nSW[index];
                    nNW[x-1+(y+1)*xdim] = nSE[index];
                    nSE[x+1+(y-1)*xdim] = nNW[index];
                    nSW[x-1+(y-1)*xdim] = nNE[index];
                    // Keep track of stuff needed to plot force vector:
                    barrierCount++;
                    barrierxSum += x;
                    barrierySum += y;
                    barrierFx += nE[index] + nNE[index] + nSE[index] - nW[index] - nNW[index] - nSW[index];
                    barrierFy += nN[index] + nNE[index] + nNW[index] - nS[index] - nSE[index] - nSW[index];
                }
            }
        }

