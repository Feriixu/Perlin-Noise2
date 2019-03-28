var inc = 0.01;
var zoff = 0;
function setup() {
  createCanvas(300, 300);
}

function draw() {

  loadPixels();
  var yoff = 0 + zoff;
  for(var y = 0; y < height; y++) {
    var xoff = 0;
    for(var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = map(noise(xoff, yoff, zoff) * 255, 0, 255, 255, 0);;
      pixels[index+0] = 100;
      pixels[index+1] = 50;
      pixels[index+2] = 50;
      pixels[index+3] = r;
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += inc;

  updatePixels();
  //noLoop();
}
