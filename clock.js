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
  textSize(10);
  textAlign(CENTER, CENTER);
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
  const gaugeblue = color(31, 15, 252,60);
  fill(gaugeblue);
  let sizeStep = 16;
  let howManyCircles = 15;
  for(let i = 0; i <howManyCircles; i++){
    ellipse(0, 0, sizeStep*i);
    ellipse(300,0, sizeStep*i-30);
  }
  fill(255);
  text('RPM (x100)',300,90);
  textSize(12);
  text('Km/H', 0,108);

  push();
  rotate(360-222)
  let howManyLines = 60;
  for(let b = 0; b <howManyLines; b++){
   rotate(225/60);
   rect(111,0,10,2);
  };
  pop();

  push();
  rotate(360-222)
  let howManybigLines = 12;
  for(let b2 = 0; b2 <howManybigLines; b2++){
   rotate(225/12);
   rect(107,0,15,3);
  };
  pop();

  push();
  translate(+300,0);
  rotate(360-222)
  let howManyLines2 = 60;
  for(let c = 0; c <howManyLines2; c++){
   rotate(225/60);
   rect(100,0,8,2);
  };
  pop();

  push();
  translate(+300,0);
  rotate(360-222)
  let howManybigLines2 = 12;
  for(let c2 = 0; c2 <howManybigLines2; c2++){
   rotate(225/12);
   rect(97,0,11,3);
  };
  pop();

  //needle (minutes)
  push();
  noStroke();
  fill(225,0,0); //red
  rotate(225/60*smoothrotatemin+138);
  if (seconds == 59 && minutes == 59) {
    rotate(113/500*-millis);
  };
  rect(5,-4,85,8);
  pop();

  noStroke();
  fill(80);
  ellipse(0,0,20,20)
  
  //needle (seconds)
  push();
  translate(+300,0);
  noStroke();
  fill(255,0,0); //red
  rotate(225/60*smoothrotatesec+138);
  if (seconds == 59) {
    rotate(113/500*-millis);
  };
  rect(4,-3,75,6);
  pop();

  noStroke();
  fill(80);
  ellipse(300,0,20,20);

}
