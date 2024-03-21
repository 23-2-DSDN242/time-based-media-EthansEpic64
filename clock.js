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
  let smoothrotatesec = seconds + (millis / 1000.0); //allows the needle to rotate smoothly rather than tick
  let smoothrotatemin = minutes + (seconds/60); //allows the needle to rotate smoothly rather than tick

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

  textSize(10);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
  angleMode(DEGREES);
  background(28, 77, 32); //grass green
  translate(width/2, height/2); 

  //BACKGROUND AND DASHBOARD VVV

  let roadmarker = (millis/2); //equation to make the yellow lines on the road change their perspective as they get closer to the viewer
  noStroke();
  fill(35); //road grey
  quad(280,-270,-280,-270,-500,-100,500,-100); //the road
  fill(171, 168, 24); // yellow
  quad(-6-roadmarker/20,-370+roadmarker, 6+roadmarker/20, -370+roadmarker, 12+roadmarker/20,-300+roadmarker, -12-roadmarker/20,-300+roadmarker);//moving yellow centerline

  stroke(80); //lightish grey (used for the outline of the dash and the gauges)
  strokeWeight(15);
  fill(35); //very dark grey
  ellipse(0,180,1700, 700); //main dashboard component
  noStroke();
  fill(25); //light grey
  ellipse(0,550,2300,750); //lower lighter dashboard component

  //GAUGE BACKGROUNDS VVV

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

  //TEXT AND MARKINGS ON THE GAUGES VVV

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
  text('1',-360,-38);
  text('12',-249,-42);

  fill(255); //white
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

  //GAUGE NEEDLES AND ASSOCIATED ROTATE FUNCTIONS

  //needle (minutes)
  push();
  noStroke();
  fill(225,0,0); //red
  rotate(225/60*smoothrotatemin+138);
  if (seconds == 59 && minutes == 59) {
    rotate(113/500*-millis);
  };
  if (alarm == 0) { //makes the needle go crazy when the alarm goes off
    rotate(360/500*millis*2);
  };
  rect(5,-4,90,8);
  pop();

  noStroke();
  fill(80);
  ellipse(0,0,20,20) //center of the needle
  
  //needle (seconds)
  push();
  translate(+300,0);
  noStroke();
  fill(255,0,0); //red
  rotate(225/60*smoothrotatesec+138);
  if (seconds == 59) {
    rotate(113/500*-millis);
  };
  if (alarm == 0) { //makes the needle go crazy when the alarm goes off
    rotate(360/500*-millis);
  };
  rect(4,-3,80,6);
  pop();

  noStroke();
  fill(80);
  ellipse(300,0,20,20);  //center of the needle

  //needle (hours)
  push();
  translate(-300,0);
  noStroke();
  fill(255,0,0); //red

  rotate(130/13*(smoothrotatehrs)+201);
  if (realhours == 12 && minutes == 0 && seconds == 0) {
    rotate(60/500*-millis);
  };
  if (alarm == 0) { //makes the needle go crazy when the alarm goes off
    rotate(360/500*millis);
  }; 
  rect(4,-3,65 ,5);
  pop();

  noStroke();
  fill(80);
  ellipse(-300,0,20,20);  //center of the needle

  //COLOUR VARIABLES FOR THE ALARM VVV

  let warningblue = color(0, 21, 255); //bright blue
  let warningorange = color(255, 98, 0); //amber
  let warningred = color(194, 29, 0); //orangey red
  let warninggreen = color(26, 163, 16); //neutral green
  if(alarm == 0 && millis <=810 && millis >=364){
    var activefill = color(194,29,0); //allows the fill to be changed when the alarm is active
   } else{
      var activefill = color(25); //very dark grey
    }
  if(alarm == 0 && millis >= 208 && millis <= 756){
    var activefill2 = color(194,29,0); //allows the fill to be changed when the alarm is active
  } else{
     var activefill2 = color(25); //very dark grey
  }
  if(alarm == 0 && millis <=460 && millis >=2){
    var activefill3 = color(warningred); //allows the fill to be changed when the alarm is active
  } else{
     var activefill3 = color(25); //very dark grey
  }
  if(alarm == 0 && millis >=500){
    var activefill4 = color(warninggreen);
  } else{
    var activefill4 = color(25);
  }

  //AM/PM LIGHTS VVV 

  let x1 = -315;
  let y1 = 120;
  let size1 = 10;
  let x2 = -285;
  textSize(11);
  if (hours <=11 && alarm != 0) { //If it is AM
    fill(warningblue);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningblue); //makes the lights have that bloom effect
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

  if (hours >=12 && alarm != 0) { //If it is PM
    fill(warningorange);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningorange); //makes the lights have that bloom effect
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

  if(alarm == 0 && millis >= 500) { //If the alarm is going off
    fill(warningorange);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningorange); //makes the lights have that bloom effect
    text('PM',x2,y1+12);
    text('PM',x2,y1+12);
    text('PM',x2,y1+12);
    text('PM',x2,y1+12);
    ellipse(x2,y1,size1);
    ellipse(x2,y1,size1);
    ellipse(x2,y1,size1);
    ellipse(x2,y1,size1);
    pop();
  }

  if(alarm == 0 && millis <= 500) { //If the alarm is going off
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
    pop();
  }

  //WARNING LIGHT DRAW FUNCTIONS VVV

  function drawbattery(batteryx,batteryy) {//battery
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

 function drawengine(enginex,enginey) { //engine light
   beginShape();
   vertex(enginex,enginey);
   vertex(enginex,enginey+2);
   vertex(enginex+3,enginey+2);
   vertex(enginex+3,enginey+6);
   vertex(enginex+5.5,enginey+6);
   vertex(enginex+5.5,enginey+4);
   vertex(enginex+8,enginey+4);
   vertex(enginex+8,enginey+12);
   vertex(enginex+5.5,enginey+12);
   vertex(enginex+5.5,enginey+10);
   vertex(enginex+3,enginey+10);
   vertex(enginex+3,enginey+14);
   vertex(enginex-8,enginey+14);
   vertex(enginex-10,enginey+12);
   vertex(enginex-13,enginey+12);
   vertex(enginex-13,enginey+2);
   vertex(enginex-10,enginey+2);
   vertex(enginex-10,enginey);
   vertex(enginex,enginey);
   endShape();
   line(enginex-13,enginey+7,enginex-15.5,enginey+7); //fans
   line(enginex-16,enginey+2,enginex-16,enginey+12);
   line(enginex-5,enginey,enginex-5,enginey-3);
   line(enginex-10,enginey-3,enginex,enginey-3);
  };
  
  function drawhbrake(hbrakex,hbrakey) { //handbrake light
   ellipse(hbrakex,hbrakey,20,20);
   arc(hbrakex,hbrakey,27,27,-50,50);
   arc(hbrakex,hbrakey,27,27,130,-130);
   line(hbrakex,hbrakey-6,hbrakex,hbrakey+1);
   fill(activefill2);
   ellipse(hbrakex,hbrakey+4,1,1);
   noFill();
  }

  function drawabs(absx,absy) { //abs light
    ellipse(absx,absy,20,20);
    arc(absx,absy,27,27,-50,50);
    arc(absx,absy,27,27,130,-130);
    push();
    strokeWeight(0.45);
    textSize(7);
    text('ABS',absx,absy);
    pop();
   }

  function drawairbag(airbagx,airbagy) { //airbag light
    fill(activefill);
    ellipse(airbagx,airbagy,7,7);
    ellipse(airbagx+8.5,airbagy-1,4,4);
    noFill();
    push();
    strokeWeight(3);
    strokeCap(ROUND);
    line(airbagx+6.5,airbagy+4.5,airbagx+5.5,airbagy+7);
    line(airbagx+0.5,airbagy+9,airbagx-3.5,airbagy+7.5);
    line(airbagx-3.5,airbagy+7.5,airbagx-7,airbagy+13);
    strokeWeight(1);
    line(airbagx+2,airbagy+7,airbagx+4.5,airbagy+12);
    pop();
  }

  function drawoillevel(oillevelx,oillevely) { //oil level light
   noFill();
   strokeWeight(2);
   strokeCap(SQUARE);
   beginShape();
     strokeWeight(0.8);
     fill(activefill3);
     vertex(oillevelx,oillevely-5);
     quadraticVertex(oillevelx+3, oillevely, oillevelx, oillevely+1);
     quadraticVertex(oillevelx-3,oillevely, oillevelx, oillevely-5);
   endShape(); //adapted this water droplet shape from zygugi on p5.js Web Editor
   beginShape();
    strokeWeight(2);
    noFill();
    vertex(oillevelx-0.5,oillevely-8.5);
    vertex(oillevelx-2,oillevely-11);
    vertex(oillevelx-14,oillevely-7);
    vertex(oillevelx-16,oillevely-9);
    vertex(oillevelx-27,oillevely-9);
    vertex(oillevelx-27,oillevely-12);
    vertex(oillevelx-33,oillevely-13);
    vertex(oillevelx-34,oillevely-9);
    vertex(oillevelx-27,oillevely-8);
    vertex(oillevelx-27,oillevely);
    vertex(oillevelx-11,oillevely);
    vertex(oillevelx-6,oillevely-9);
  endShape();
    line(oillevelx-21,oillevely-9,oillevelx-21,oillevely-12);
    line(oillevelx-24,oillevely-12,oillevelx-18,oillevely-12);
  }

  function drawtemp(tempx,tempy){ //oil temperature light
    fill(activefill2);
    ellipse(tempx,tempy,4,4);
    noFill();
    strokeWeight(3);
    strokeCap(ROUND);
    line(tempx,tempy,tempx,tempy-12);
    strokeWeight(2);
    line(tempx,tempy-11,tempx+5,tempy-11);
    line(tempx,tempy-7.5,tempx+5,tempy-7.5);
    line(tempx,tempy-4,tempx+5,tempy-4);
    push();
    strokeWeight(1);
    textSize(8);
    text('~~~~',tempx,tempy+6); //using the '~' because Its way too hard to make a bunch of tiny little curves
    textSize(10);
    text('~',tempx-7,tempy);
    text('~',tempx+7,tempy);
    pop();
  };

  function drawtcs(tcsx,tcsy){ //traction control light
    noFill();
    strokeWeight(2);
    strokeCap(SQUARE);
    beginShape();
    vertex(tcsx+1.5,tcsy);
    vertex(tcsx-10,tcsy);
    vertex(tcsx-13,tcsy+6);
    vertex(tcsx-13,tcsy+14);
    vertex(tcsx-11,tcsy+14);
    vertex(tcsx-11,tcsy+12);
    vertex(tcsx+2,tcsy+12);
    vertex(tcsx+2,tcsy+14);
    vertex(tcsx+4,tcsy+14);
    vertex(tcsx+4,tcsy+6);
    vertex(tcsx+1,tcsy);
    endShape();
    line(tcsx-15,tcsy+4,tcsx+6,tcsy+4);
    line(tcsx-13,tcsy+8,tcsx-8,tcsy+8);
    line(tcsx+4,tcsy+8,tcsx-1,tcsy+8);
    push();
    translate(+160,+20);
    rotate(90);
    textSize(12);
    text('~',tcsx+140,tcsy+351);
    text('~',tcsx+140,tcsy+336);
    pop();
  }

  function drawindicate(indicatex,indicatey){ //indicators
    fill(activefill4);
    beginShape();
    vertex(indicatex-120,indicatey);
    vertex(indicatex-140,indicatey);
    vertex(indicatex-140,indicatey-7);
    vertex(indicatex-155,indicatey+5);
    vertex(indicatex-140,indicatey+17);
    vertex(indicatex-140,indicatey+10);
    vertex(indicatex-120,indicatey+10);
    endShape();
    beginShape();
    vertex(indicatex+120,indicatey);
    vertex(indicatex+140,indicatey);
    vertex(indicatex+140,indicatey-7);
    vertex(indicatex+155,indicatey+5);
    vertex(indicatex+140,indicatey+17);
    vertex(indicatex+140,indicatey+10);
    vertex(indicatex+120,indicatey+10);
    endShape();
  }

  //LIGHT POSITION VARIABLES VVV

  let batteryx2 = -180 //variables for the positions of each light because
  let batteryy2 = -80 // the function is called several times and I dont want to change every instance if i decide to move a light

  let enginex2 = -135
  let enginey2 = -80

  let hbrakex2 = 140
  let hbrakey2 = -70

  let absx2 = 180
  let absy2 = -70

  let airbagx2 = 158
  let airbagy2 = -20

  let oillevelx2 = -175
  let oillevely2 = 80

  let tempx2 = -400
  let tempy2 = 80

  let tcsx2 = -160
  let tcsy2 = -20

  let indicatex2 = 0
  let indicatey2 = 80

  //DRAW LIGHTS WHEN ALARM IS INACTIVE VVV

  stroke(25); //draws  all lights when they  are off
  strokeWeight(2);
  noFill();
  drawbattery(batteryx2,batteryy2);
  drawengine(enginex2,enginey2);
  drawhbrake(hbrakex2,hbrakey2);
  drawabs(absx2,absy2);
  drawairbag(airbagx2,airbagy2);
  drawoillevel(oillevelx2,oillevely2);
  drawtemp(tempx2,tempy2);
  drawtcs(tcsx2,tcsy2);
  drawindicate(indicatex2,indicatey2);

  //DRAW LIGHTS WHEN ALARM IS ACTIVE VVV

  if(alarm > 0){ //engine light to indicate that an alarm is SET
    push();
    stroke(warningorange);
    strokeWeight(2);
    noFill();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningorange);
    drawengine(enginex2,enginey2);
    drawengine(enginex2,enginey2);
    drawengine(enginex2,enginey2);
    drawengine(enginex2,enginey2);
    pop();
    };

  if(alarm == 0 && millis >= 500){ //battery light when alarm goes off
  stroke(warningred); //the millis conditions in the if statements are so that the lights flash and they are all different so that they go off at different times and it looks chaotic and panicky
  strokeWeight(2);
  noFill();
  push();
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(warningred);
  drawbattery(batteryx2,batteryy2);
  drawbattery(batteryx2,batteryy2);
  drawbattery(batteryx2,batteryy2);
  drawbattery(batteryx2,batteryy2);
  pop();
  };

  if(alarm == 0 && millis <= 680){ //engine light when alarm goes off
  stroke(warningorange);
  strokeWeight(2);
  noFill();
  push();
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(warningorange);
  drawengine(enginex2,enginey2);
  drawengine(enginex2,enginey2);
  drawengine(enginex2,enginey2);
  drawengine(enginex2,enginey2);
  pop();
  };
  
  if(alarm == 0 && millis >= 208 && millis <= 756){ //handbrake light when alarm goes off
    stroke(warningred);
    strokeWeight(2);
    noFill();
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningred);
    drawhbrake(hbrakex2,hbrakey2);
    drawhbrake(hbrakex2,hbrakey2);
    drawhbrake(hbrakex2,hbrakey2);
    drawhbrake(hbrakex2,hbrakey2);
    pop();
  };

  if(alarm == 0 && millis <= 330){ //ABS light when alarm goes off
    stroke(warningorange);
    strokeWeight(2);
    noFill();
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningorange);
    drawabs(absx2,absy2);
    drawabs(absx2,absy2);
    drawabs(absx2,absy2);
    drawabs(absx2,absy2);
    pop();
  };

  if(alarm == 0 && millis <=810 && millis >=364){ //airbag light when alarm goes off
    stroke(warningred);
    noFill();
    strokeWeight(2);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningred);
    drawairbag(airbagx2,airbagy2);
    drawairbag(airbagx2,airbagy2);
    drawairbag(airbagx2,airbagy2);
    drawairbag(airbagx2,airbagy2);
    pop();
  };

  
  if(alarm == 0 && millis <=460 && millis >=2){ //oil level light when alarm goes off
    stroke(warningred);
    noFill();
    strokeWeight(2);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningred);
    drawoillevel(oillevelx2,oillevely2);
    drawoillevel(oillevelx2,oillevely2);
    drawoillevel(oillevelx2,oillevely2);
    drawoillevel(oillevelx2,oillevely2);
    pop();
  };

  if(alarm == 0 && millis >= 208 && millis <= 756){ //temperature light when alarm goes off
    stroke(warningred);
    noFill();
    strokeWeight(2);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningred);
    drawtemp(tempx2,tempy2);
    drawtemp(tempx2,tempy2);
    drawtemp(tempx2,tempy2);
    drawtemp(tempx2,tempy2);
    pop();
  };

  if(alarm == 0 && millis >= 130 && millis <= 910){ //TCS light when alarm goes off
    stroke(warningorange);
    noFill();
    strokeWeight(2);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warningorange);
    drawtcs(tcsx2,tcsy2);
    drawtcs(tcsx2,tcsy2);
    drawtcs(tcsx2,tcsy2);
    drawtcs(tcsx2,tcsy2);
    pop();
    };

  if (alarm == 0 && millis >=500){ //indicators when alarm goes off
    stroke(warninggreen);
    noFill();
    strokeWeight(2);
    push();
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(warninggreen);
    drawindicate(indicatex2,indicatey2);
    drawindicate(indicatex2,indicatey2);
    drawindicate(indicatex2,indicatey2);
    drawindicate(indicatex2,indicatey2);
    pop();
  };
}
