## MDDN 242 Project 1: Time-based Media  
My initial idea was to have a clock with three 'areas' (representiung hours, minutes and seconds) and a different living thing would be assigned to each of these areas. The living thing would have a lifespan or life cycle of some description that would correspond with the amount of time that it represented. For example; I have 3 kinds of bugs, one of the bugs has an average lifespan of a second so every second, one of these bugs would crawl onto the screen and die in the 'seconds' area. Another one of the bugs has an average lifespan of 1 minute so every minute, one of these bugs would fly over and die into the 'minutes' area and so on and so forth. This would create a pile of dead bugs in each area which you could then count to work out the time. However I am not so sure about this idea anymore because I cannot find any living thing that only lives for a second.

My second idea as shown in 'sketch.jpg' and 'preview.jpg' uses cars as the inspiration. The seconds are represented by a 'RPM' gauge where the needle will increase by one every second until it gets to 60 where it will go back to zero and start again. At that point the minutes represented by a 'KMH' gauge will go up by 1. Once the kmh gauge reaches 60 it will reset to zero and the vehicle will shift gears as seen on the far left. The gear shifter represents hours and there are 12 gears (it may not be very realistic but semi-trucks have 12 gears so its not too ridiculous.) I also added a 'AM/PM' switch which shows whether it is AM or PM and will change every 12 hours. Once the vehicle has gone through all 12 gears it will go back to first gear. You can read my clock just like any regular clock. For example if the vehicle is in 3rd gear with the switch on 'PM', going 32kmh at 1000RPM then the time is 3:32.10PM

Maeda Clock:
I chose to recreate clock 5 because i really liked the idea of mixing the sophisticated, "you have to learn how to read me in school", traditonal methods of telling the time and the blatant, no time wasted, digital method of telling the time. This clock can be read by everyone from the generation of people who think the only 'second hand' in life are the cheap labels at the recycle botique all the way to the oldies who have been gatekeeping how to tell the time with their fancy quartz watches with no numbers and a face the size of an M&M. I didnt make it a working clock because of poor time management and the fact that I needed to get a start on my own clock but I recreated it the best I could using nothing but rects, fill and the rotate function.

7/3/24
Ive made a start on my clock and ive managed to make the minutes and seconds guage. I struggled with how to make the needles on the guages move smoothly ratheer than ticking but it turns out that the answer was in clock barss the whole. my next mission is to put the numbers and lines on the guages and to make the rotation start at 0 and reset when it gets to 60.
I also would like to put a backlight (in th form of a blue circle that get more transparent towards the outer edge) on the guages to model them after my 2007 honda civic because it looks cool.

11/3/24
I finally figured out how to make the cool transparent backlight looking thing on my gauges, turns out all I had to do was copy the code in the lecture and it looks awesome. Ive been trying to find an easy way to draw many lines around the edge to transform my circles with spinning rectangles into actual gauges. I tried adapting a method that someone used on stack overflow using a for loop and many angle variables but it crashed my code and it wouldnt refresh after commenting out the code until I restarted the live server which I thought was interesting because I couldnt understand how the code didnt work. Im sure its some silly reason that my non-coder-person eyes arent trained to look for. In the mean time I will try and find a way to make the needle stop and go back to zero at a specific angle.

I got the needle to only move within a certain angle rather than going completely around, all I had to do was change [rotate(360/60*smoothrotatemin)] to: [rotate(225/60*smoothrotatemin+135);] It was much easier than i thought it was going to be. My next goal is to make a way for the needle to quickly go back  the other way to the zero position before it starts going around again, like it does in a car when you change gear (For the rpm anyway but as weve established, realism is not a priority despite my nerdy urges for it to be). I will also add the small amounts of text at the bottom of the gauge to tell you what gauge it is because thats easy.

12/3/24
I added the numbers to the gauges

14/3/24
I have decied to replace thee gear stick with another gauge, this allows me to make the entire clock a dashboard and the hours are now a temperature gauge. I am having trouble with converting the 24hr time to 12 hour tiime as i cant seem to get it to reset at the correct time, it just goes past where I want it to go.

15/03/24
I am trying to get the hour gaueg to reset every 12 hours but something must be wrong with my maths or there is some inherent problem with the method im using because it starts on 12 and goes to 11 rather than starting on 1 and going to 12. Ive tried minusing one from the hours variable but it starts on zero and it doesnt like -1 as a number so it doesnt really work. However I have just thought of something that might work as im writing this. It is to use if functions to change the number for every hour- for example : if hours = 0, let realhours = 12

Well the aformentioned method works but it seems a bit inefficient and for some reason trying to make it smoothly rotate kills the whole code and im not sure why. Good step forward either way.

18/03/24
I have finished the gauges and their functions, next job is to do the alarm and draw all of the warning lights for it, Had a bit of trouble with figuring out how many numbers I should include on the hours gauge but I think only including the 1 and the 12 is the cleanest look.

19/03/24
I finally figured out why the hours gauge wasnt rotating smoothly, I was calling a function before it was declared so all i had to do was cut and paste a line of code to a lower line and it worked. I then fixed some maths with how the needle reset and when and the hours guage is now fully completed. I also added the AM/PM lights and made them look like they were actually emmitting light. I did this with drawingContext.shadowblur and shadowcolor.

20/03/24
I added a road to make it look like the car is moving because the background felt a bit empty and pointless