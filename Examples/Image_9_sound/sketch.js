/**
 *  Visualize the frequency spectrum of live audio input
 */

var mic, fft;

function setup() {
   createCanvas(512,400);
   noStroke();
   fill(0,255,255);

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(0);
   var spectrum = fft.analyze();
   
  // console.log(spectrum);
   
   
   
   fill = (255);
  

  for (i = 0; i<spectrum.length; i++) {
    var radius = map(spectrum[i], 60, 255, 20, 70);
    ellipse(width/2, height/2, radius,radius );
  }

}