// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  angleMode(DEGREES);
  background(230); //  beige
  fill(80); // dark grey
  textSize(400);
  textAlign(CENTER, CENTER);
  
  translate (width/2, height/2);
push();
  rotate((360/12)*11= obj.seconds);
  text("11", 0, 0);
pop();

let blockSize = 50;
  //noStroke();
  push();
  rotate((360/12)*3);
  fill(255,0,0);
  rect(-50,0,blockSize,blockSize);
  rect(-50,100,blockSize,blockSize);
  rect(-50,50,blockSize,blockSize);
  rect(0,100,blockSize,blockSize);
  rect(50,100,blockSize,blockSize);
  rect(100,100,blockSize,blockSize);
  rect(-50,-50,blockSize,blockSize);
  pop();
}
