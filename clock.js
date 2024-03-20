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
  let smoothrotatesec = seconds + (millis / 1000.0); //allows the needle to rotate smoothly rather than tick
  let smoothrotatemin = minutes + (seconds/60); //allows the needle to rotate smoothly rather than tick
  strokeCap(SQUARE);
  angleMode(DEGREES);
  background(28, 77, 32); //grass green
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
  }; //all of these if statments are to convert 24 hour time into 12 hour time, it may be not the most efficient way to do it but it works

  let smoothrotatehrs = realhours + (minutes/60); //allows the needle to rotate smoothly rather than tick

  let roadmarker = (millis/2); //equation to make the yellow lines on the road change their perspective as they get closer to the viewer
  noStroke();
  fill(35); //road grey
  quad(280,-270,-280,-270,-500,-100,500,-100); //the road
  fill(171, 168, 24); // yellow
  quad(-6-roadmarker/20,-370+roadmarker, 6+roadmarker/20, -370+roadmarker, 12+roadmarker/20,-300+roadmarker, -12-roadmarker/20,-300+roadmarker);//moving yellow centerline

  stroke(80); //lightish grey (used for the outline of the dash and the gauges)
  strokeWeight(15);
  fill(30); //very dark grey
  ellipse(0,180,1700, 700); //main dashboard component
  fill(80); //light grey
  ellipse(0,550,2300,700); //lower lighter dashboard component

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
  stroke(80); //grey
  strokeWeight(6);
  fill(40); //very dark grey
  ellipse(-300,0,200,200);
  
  noStroke();
  const gaugeblue = color(31, 15, 252,60); //bright blue used in the gauges
  fill(gaugeblue);
  let sizeStep = 16;
  let howManyCircles = 15;
  for(let i = 0; i <howManyCircles; i++){ //draws layered circles at increasing opactiy to give the illusion of backlights behind the gauges
    ellipse(0, 0, sizeStep*i); //this code was adapted from an example shown in a lecture
    ellipse(300,0, sizeStep*i-30);
    ellipse(-300,0,sizeStep*i-60);
  }

  stroke(230 ,0,0); //red
  noFill();
  strokeWeight(8);
  arc(300,0,208,208,-33,3); //redline of the rev counter

  push();
  translate(-300,0);
  stroke(230 ,0,0); //red
  noFill();
  strokeWeight(12);
  rotate(-30)
  arc(0,0,174,174,-28,2); //redline of the temperature gauge
  pop();

  //text on the kmh gauge
  noStroke();
  fill(255);
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

  //text on the rpm gauge
  textSize(10);
  text('RPM (x1000)',300,90);
  textSize(18);
  text('0', 235, 60);
  text('1', 210, 6);
  text('2', 228, -51);
  text('3', 271, -82);
  text('4', 328, -82);
  text('5', 373, -50);
  text('6', 390, 6);

  //text on the temp gauge
  textSize(10);
  text('C° (x100)',-300,80);
  textSize(15);
  text('1',-361,-38);
  text('12',-247,-40);

  fill(255);
  push();
  rotate(360-222)
  let howManyLines = 60;
  for(let b = 0; b <howManyLines; b++){ //I adapted this code from the gauge background to make lines in a circle within a specified angle
   rotate(225/60);
   rect(111,0,10,2); //lines on the kmh guage
  };
  pop();

  push();
  rotate(360-241)
  let howManybigLines = 13;
  for(let b2 = 0; b2 <howManybigLines; b2++){
   rotate(225/12); 
   rect(107,0,15,3); //thicker lines on the kmh guage for every multiple of 5
  };
  pop();

  push();
  translate(+300,0);
  rotate(360-222);
  let howManyLines2 = 60;
  for(let c = 0; c <howManyLines2; c++){ //lines on the rpm gauge
   rotate(225/60);
   rect(100,0,8,2);
  };
  pop();

  push();
  translate(+300,0);
  rotate(360-241)
  let howManybigLines2 = 13;
  for(let c2 = 0; c2 <howManybigLines2; c2++){ //thicker lines for every multiple of 5 on the rpm gauge
   rotate(225/12);
   rect(97,0,11,3);
  };
  pop();

  push();
  translate(-300,0);
  rotate(200);
  let howManyLines3 = 12;
  for(let d = 0; d <howManyLines3; d++){ //lines on the temp gauge
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

  let warningblue = color(0, 21, 255); //bright blue
  let warningorange = color(255, 98, 0); //amber
  let warningred = color(194, 29, 0); //orangey red

  //AM/PM lights
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
  
  map(millis,0,999,0,1)
  stroke(25);
  strokeWeight(2);
  noFill();
  drawbattery(170,-80);

  function drawbattery(batteryx,batteryy) {
    beginShape(); //main battery outline
  vertex(batteryx,batteryy);
  vertex(batteryx,batteryy+15);
  vertex(batteryx-25,batteryy+15);
  vertex(batteryx-25,batteryy);
  vertex(batteryx-22,batteryy);
  vertex(batteryx-22,batteryy-2);
  vertex(batteryx-20,batteryy-2);
  vertex(batteryx-20,batteryy);
  vertex(batteryx-5,batteryy);
  vertex(batteryx-5,batteryy-2);
  vertex(batteryx-3,batteryy-2);
  vertex(batteryx-3,batteryy);
  vertex(batteryx+1,batteryy);
  endShape();
  line(batteryx-4,batteryy+7,batteryx-9,batteryy+7);//battery positive
  line(batteryx-6.5,batteryy+4,batteryx-6.5,batteryy+10);
  line(batteryx-20,batteryy+7,batteryx-15,batteryy+7);//battery negative
  };

  if(alarm == 0 && millis == 1){
  stroke(warningred);
  strokeWeight(2);
  noFill();
  push();
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(warningred);
  drawbattery(170,-80);
  drawbattery(170,-80);
  drawbattery(170,-80);
  drawbattery(170,-80);
  pop();
  }
}
