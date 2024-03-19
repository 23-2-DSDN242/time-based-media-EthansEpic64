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
  strokeCap(SQUARE);
  angleMode(DEGREES);
  background(124, 152, 196); //  sky grey blue
  translate(width/2, height/2); 

  if (hours == 0 || hours == 12){
    realhours = 12
  };
  if (hours == 11 || hours == 23){
    realhours = 11
  };
  if (hours == 10 || hours == 22){
    realhours = 10
  };
  if (hours == 9 || hours == 21){
    realhours = 9
  };
  if (hours == 8 || hours == 20){
    realhours = 8
  };
  if (hours == 7 || hours == 19){
    realhours = 7
  };
  if (hours == 6 || hours == 18){
    realhours = 6
  };
  if (hours == 5 || hours == 17){
    realhours = 5
  };
  if (hours == 4 || hours == 16){
    realhours = 4
  };
  if (hours == 3 || hours == 15){
    realhours = 3
  };
  if (hours == 2 || hours == 14){
    realhours = 2
  };
  if (hours == 1 || hours == 13){
    realhours = 1
  };

  let smoothrotatehrs = realhours + (minutes/60);

  let roadmarker = (millis/2)*minutes/60;
  noStroke();
  fill(28, 77, 32);
  quad(-500,-270,-280,-270,-500,-100,-500,-100);
  quad(500,-270,280,-270,500,-100,500,-100);
  fill(35);
  quad(280,-270,-280,-270,-500,-100,500,-100);
  fill(171, 168, 24);
  quad(-6-roadmarker/20,-370+roadmarker, 6+roadmarker/20, -370+roadmarker, 12+roadmarker/20,-300+roadmarker, -12-roadmarker/20,-300+roadmarker);

  stroke(70);
  strokeWeight(15);
  fill(30);
  ellipse(0,180,1700, 700);
  fill(70);
  ellipse(0,550,2300,700);

  //RPM gauge (seconds)
  stroke(80); //grey
  strokeWeight(6);
  fill(40); //very dark grey
  ellipse(300,0,230,230);

  //KMH gauge (minutes)s
  stroke(80); //grey
  strokeWeight(6);
  fill(40); //very dark grey
  ellipse(0,0,260,260);

  //temp gauge (hours)
  stroke(80);
  strokeWeight(6);
  fill(40);
  ellipse(-300,0,200,200);
  
  noStroke();
  const gaugeblue = color(31, 15, 252,60);
  fill(gaugeblue);
  let sizeStep = 16;
  let howManyCircles = 15;
  for(let i = 0; i <howManyCircles; i++){
    ellipse(0, 0, sizeStep*i);
    ellipse(300,0, sizeStep*i-30);
    ellipse(-300,0,sizeStep*i-60);
  }

  stroke(230 ,0,0);
  noFill();
  strokeWeight(8);
  arc(300,0,208,208,-33,3);

  push();
  translate(-300,0);
  stroke(230 ,0,0);
  noFill();
  strokeWeight(12);
  rotate(-30)
  arc(0,0,174,174,-28,2);
  pop();

  noStroke();
  fill(255);
  text('RPM (x1000)',300,90);
  textSize(12);
  text('Km/H', 0,108);
  textSize(20);
  text('0', -72, 67);
  text('10', -95,6);
  text('20', -76, -58);
  text('30', -33, -89);
  text('40', 33, -90);
  text('50', 75, -55);
  text('60', 94, 6);

  textSize(18);
  text('0', 235, 60);
  text('1', 210, 6);
  text('2', 228, -51);
  text('3', 271, -82);
  text('4', 328, -82);
  text('5', 373, -50);
  text('6', 390, 6);

  textSize(10);
  text('C° (x100)',-300,80);
  textSize(15);
  text('1',-361,-38);
  text('12',-247,-40);

  fill(255);
  push();
  rotate(360-222)
  let howManyLines = 60;
  for(let b = 0; b <howManyLines; b++){
   rotate(225/60);
   rect(111,0,10,2);
  };
  pop();

  push();
  rotate(360-241)
  let howManybigLines = 13;
  for(let b2 = 0; b2 <howManybigLines; b2++){
   rotate(225/12);
   rect(107,0,15,3);
  };
  pop();

  push();
  translate(+300,0);
  rotate(360-222);
  let howManyLines2 = 60;
  for(let c = 0; c <howManyLines2; c++){
   rotate(225/60);
   rect(100,0,8,2);
  };
  pop();

  push();
  translate(+300,0);
  rotate(360-241)
  let howManybigLines2 = 13;
  for(let c2 = 0; c2 <howManybigLines2; c2++){
   rotate(225/12);
   rect(97,0,11,3);
  };
  pop();

  push();
  translate(-300,0);
  rotate(200);
  let howManyLines3 = 12;
  for(let d = 0; d <howManyLines3; d++){
    rotate(130/13);
    rect(80,0,13,3);
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
  rect(5,-4,90,8);
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
  rect(4,-3,80,6);
  pop();

  noStroke();
  fill(80);
  ellipse(300,0,20,20);

  //needle (hours)
  push();
  translate(-300,0);
  noStroke();
  fill(255,0,0); //red

  rotate(130/13*(smoothrotatehrs)+201);
  if (realhours == 12 && minutes == 0 && seconds == 0) {
    rotate(60/500*-millis);
  };
   
  rect(4,-3,65 ,5);
  pop();

  noStroke();
  fill(80);
  ellipse(-300,0,20,20);

  //AM/PM lights
  let warningblue = color(0, 21, 255);
  let warningorange = color(255, 98, 0);
  let x1 = -315;
  let y1 = 120;
  let size1 = 10;
  let x2 = -285;
  textSize(11);
  if (hours <=11) {
    fill(warningblue);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningblue);
    text('AM',x1,y1+12);
    text('AM',x1,y1+12);
    text('AM',x1,y1+12);
    text('AM',x1,y1+12);
    ellipse(x1,y1,size1);
    ellipse(x1,y1,size1);
    ellipse(x1,y1,size1);
    ellipse(x1,y1,size1);
   //the reason there is 4 of them layered on top of each other is because it is the simplest way to alter the intensity of the 'light' effect
    pop();
    //PM turned OFF
    fill(25);
    text('PM',x2,y1+12);
    ellipse(x2,y1,size1);
  }

  if (hours >=12) {
    fill(warningorange);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningorange);
    text('PM',x2,y1+12);
    text('PM',x2,y1+12);
    text('PM',x2,y1+12);
    text('PM',x2,y1+12);
    ellipse(x2,y1,size1);
    ellipse(x2,y1,size1);
    ellipse(x2,y1,size1);
    ellipse(x2,y1,size1);
    //the reason there is 4 of them layered on top of each other is because it is the simplest way to alter the intensity of the 'light' effect
    pop();
    //PM turned OFF
    fill(25);
    text('AM',x1,y1+12);
    ellipse(x1,y1,size1);
  }
}
