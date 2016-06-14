var gif;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gif = loadGif('torus.gif');
}

function draw() {
  background(0)
  image(gif, mouseX, mouseY);
}

function mouseMoved() {
  if (gif.loaded() && !gif.playing()){
    var totalFrames = gif.totalFrames();
    var frame = int(map(mouseX, 0, width, 0, totalFrames));
    gif.frame(frame);
  }
}

function mousePressed() {
  if (gif.playing()) {
    gif.pause();
  } else {
    gif.play();
  }
}