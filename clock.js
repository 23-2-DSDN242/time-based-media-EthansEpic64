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
  angleMode(DEGREES);
  background(124, 152, 196); //  sky grey blue
  translate(width/2, height/2);
  let smoothrotate = lerp(obj.seconds, obj.seconds+1, 0.5)

  //RPM gauge (seconds)
  stroke(80); //grey
  strokeWeight(6);
  fill(40); //very dark grey
  ellipse(300,0,230,230);

  //KMH gauge (minutes)
  ellipse(0,0,260,260)
  
  //needle (seconds)
  push();
  noStroke();
  fill(225,0,0); //red
  rotate(360/-60*smoothrotate);
  rect(0,0,110,10);
  pop();

  noStroke();
  fill(80);
  ellipse(0,0,25,25)
}
