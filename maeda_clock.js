// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  angleMode(DEGREES);
  background(200);
  fill(0); // dark grey
  textSize(400);
  textAlign(CENTER, CENTER);
  translate(width/2, height/2);
  push();
  rotate(360/12*6);
  rect(-50,-150,50,50);
  rect(0,-150,50,50);
  rect(50,-150,50,50);
  rect(-100,-150,50,50);
  rect(-100,-100,50,300);
  rect(-50,150,50,50);
  rect(0,150,50,50);
  rect(50,200,50,-200);
  rect(-50,0,100,50);
  pop();

  push();
  fill(255,0,0);
  rotate(360/60*5);
  rect(0,-50,50,50);
  rect(-50,-50,50,50);
  rect(-100,-50,50,50);
  rect(-100,-100,50,50);
  rect(-100,-150,50,50);
  rect(-50,-150,50,50);
  rect(0,-150,50,50);
  rect(0,0,50,50);
  rect(-100,50,150,50);
  pop();
}
