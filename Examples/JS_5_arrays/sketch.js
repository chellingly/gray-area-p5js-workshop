var x = 0;
var speed=4;
var bubble = [];


function setup() {
  createCanvas(500,500);
  for(var i = 0; i<100; i++){
    bubble.push(new Bubble(random(0,500),random(0,500)));
    
  }
  
}

function draw() {
  
  background(255,50);
  for(var i=0; i<bubble.length; i++){
    bubble[i].display();
  }
  
  
}


function Bubble(x,y){
  this.x=x;
  this.y=y;
  var speed= random(1,6);
  
  this.display = function(){
        noStroke();
    fill(255,0,255,50);
    ellipse(this.x,this.y, 20, 20);
    this.y=this.y+=speed;
  }

}