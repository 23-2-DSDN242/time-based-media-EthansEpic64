/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;
  let smoothrotatesec = seconds + (millis / 1000.0);
  let smoothrotatemin = minutes + (seconds/60);
  angleMode(DEGREES);
  background(124, 152, 196); //  sky grey blue
  translate(width/2, height/2); 

  //RPM gauge (seconds)
  stroke(80); //grey
  strokeWeight(6);
  fill(40); //very dark grey
  ellipse(300,0,230,230);

  //KMH gauge (minutes)s
  stroke(80); //grey
  strokeWeight(6);
  fill(40); //very dark grey
  ellipse(0,0,260,260)
  
  noStroke();
  const squareColor = color(31, 15, 252,60);
  //squareColor.setAlpha(128 + 128 * sin);
  fill(squareColor);
  ellipse(0, 0,200,200);

  //needle (seconds)
  push();
  noStroke();
  fill(225,0,0); //red
  rotate(360/60*smoothrotatemin);
  rect(5,-5,100,10);
  pop();

  noStroke();
  fill(80);
  ellipse(0,0,25,25)

  translate(+300,0);
  push();
  noStroke();
  fill(255,0,0); //red
  rotate(360/60*smoothrotatesec);
  rect(4,-4,85,8);
  pop();

  translate(-300,0);
  noStroke();
  fill(80);
  ellipse(300,0,25,25);
}
