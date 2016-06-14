var gif;

function setup() {
  createCanvas(500, 500);
  gif = loadGif('assets/Prince Hair.gif');
}

function draw() {
  background(0)
  push();
  translate(-100,-100);
  image(gif, mouseX, mouseY);
  pop();
}



function mousePressed() {
  if (gif.playing()) {
    gif.pause();
  } else {
    gif.play();
  }
}