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
  text('Km/H', 0,108)

  //let lines = 12;
  //let lineangle = 360/lines;
  //let linerad = width/2;

  //for (angle=270;angle<630;angle+lineangle){
  //  x = cos(radians(angle)) * linerad;
   // y = sin(radians(angle)) * linerad;
   // line(linerad, linerad, x+linerad, y+linerad);
  //}


  //needle (seconds)
  push();
  noStroke();
  fill(225,0,0); //red
  rotate(225/60*smoothrotatemin+135);
  rect(5,-5,90,8);
  pop();

  noStroke();
  fill(80);
  ellipse(0,0,20,20)

  //if (seconds = 0 || seconds = 59){
   // rotate(225/1000*-millis+135);
  //}

  translate(+300,0);
  push();
  noStroke();
  fill(255,0,0); //red
  rotate(113/500*millis+135);
  rect(4,-4,75,6);
  pop();

  translate(-300,0);
  noStroke();
  fill(80);
  ellipse(300,0,20,20);

  //rotate(225/60*smoothrotatesec+135);
}
