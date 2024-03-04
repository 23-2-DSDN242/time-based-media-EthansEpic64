// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  angleMode(DEGREES);
  background(200);
  fill(0); // dark grey
  textSize(400);
  textAlign(CENTER, CENTER);
  translate(width/2, height/2);
  noStroke();
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
  //noStroke();
  fill(255);
  rotate(360/60*5);
  rect(150,-50,50,50);
  rect(100,-50,50,50);
  rect(50,-50,50,50);
  rect(50,-100,50,50);
  rect(50,-150,50,50);
  rect(100,-150,50,50);
  rect(150,-150,50,50);
  rect(150,0,50,50);
  rect(50,50,150,50);

  rect(-150,-150,150,50)
  rect(-200,-150,50,250)
  rect(-150,50,150,50)
  rect(-50,-100,50,200)
  pop();

  push();
  rotate(360/60*33);
  fill(255,0,0);
  rect(-25,-50,25,25)
  rect(-25,-25,25,25)
  rect(-25,0,25,25)
  rect(-50,0,25,25)
  rect(-50,-50,25,25)
  rect(-25,-75,25,25)
  rect(-25,-100,25,25)
  rect(-50,-100,25,25)
  rect(-75,-100,25,25)
  rect(-75,0,25,25)
  rect(-75,-50,25,25)

  fill(255,0,0);
  rect(75,-50,25,25)
  rect(75,-25,25,25)
  rect(75,0,25,25)
  rect(50,0,25,25)
  rect(50,-50,25,25)
  rect(75,-75,25,25)
  rect(75,-100,25,25)
  rect(50,-100,25,25)
  rect(25,-100,25,25)
  rect(25,0,25,25)
  rect(25,-50,25,25)
  pop();
}

