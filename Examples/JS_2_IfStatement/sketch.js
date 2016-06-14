function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background(0);
  if(mouseX<250){
    fill(255);
  }else{
    fill(0,200,255);
  }
  
  ellipse(mouseX,mouseY,40,40);
  print(mouseX);
}