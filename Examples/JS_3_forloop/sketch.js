var x = 0;

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background(0);

  
  for(var x = 0; x <= width; x=x+50){
    fill(x,200,255);
    ellipse(x,100,40,40);
  
  }
  
  // //NESTED LOOP
  // for(var x = 0; x <= width; x=x+50){
  //   for(var y= 0; y<=height; y=y+50){
  //   fill(x,y,255);
  //   ellipse(x,y,40,40);
  //   }
  // }
  
}