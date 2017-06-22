

$(document).ready(function(){
      
var seconds = "00"; 
var minutes = 1;
var setMinutes = 1; 
var noAction = true;
var countDown = minutes;
var breakTimer = 5;  
var timerStarted = false;
var stringOfMinutes = minutes+":"+seconds;
var lengthOfSeconds = seconds.toString().length;
var bubbleWidth = 0;
var bubbleHeight = 0; 
var minutesToCalculate = 1; 
var totalSeconds = 0
var totalBubbleExpansion = 0; 
var workSession = '<h2>work</h2>';
var breakSession = '<h2>break</h2>';
var breakNow = false; 

//sets counter to page
var updateTime = function(currentCounter){ 
  $('.workTime').html(setMinutes);
    stringOfMinutes = currentCounter+":"+seconds;
  $('.countDown').html(workSession+stringOfMinutes);
}


//runs counter first time
if(noAction){
  $('.breakTime').html(breakTimer);
   updateTime(minutes);
   noAction = false; 
  $(".pop").hide();
}

//opens up bubble when timer started
function startBubble(){
      $("img").show();
      totalSeconds = minutesToCalculate * 60;
      totalBubbleExpansion = 300/totalSeconds;

    // Do something if class exists
      bubbleWidth += totalBubbleExpansion; 
      bubbleHeight += totalBubbleExpansion; 
      $("img").css("width", bubbleWidth);
      $("img").css("height", bubbleHeight);

  }

//if countDown number is clicked function starts to count down
function resetBubble(){
    bubbleHeight = 0;
    bubbleWidth = 0; 
}

function updateBreaktimer(breakTime){
    breakNow = true; 
    minutes = breakTimer; 
    seconds = "00"; 
    minutesToCalculate = breakTimer;
    stringOfMinutes =  breakTime+":"+seconds

    $('.countDown').html(breakSession+stringOfMinutes);
    $('.countDown').slideDown();
    $(".pop").hide();

}

//breakTimeFunction
function breakTime(){

if(!breakNow){
   setTimeout(function() {
      $('.countDown').slideUp();
  }, 1000);

  setTimeout(function() {
    updateBreaktimer(breakTimer)
     $('.timerCountDown').trigger("click");
  }, 2000);
 } else {
    $('.countDown').html(breakSession+stringOfMinutes);
    $('.countDown').slideUp();
  setTimeout(function() {
    $('.countDown').slideDown();
      seconds = "00"; 
      stringOfMinutes = setMinutes +":"+seconds; 
    $('.countDown').html( workSession+stringOfMinutes)
    $(".pop").hide();
  }, 1000);

 }
  
}

//bubble pops when timer done
function bubblePop(){
  if(minutes !== 0 && seconds !== "00")
  $("img").hide();
  $(".pop").show().css('color', 'black');
   var e = $('.pop');
    e.not(':animated').css({'opacity': 1 }).effect("scale", {origin:['middle','center'], from:{width:e.width()/2,height:e.height()/2}, percent: 100, direction: 'both', easing: "easeOutBounce" }, 1000);
    
    //enable break function
    breakTime(); 
  }


//while timer is running disable button
function disableButton(){
  if(timerStarted === undefined || timerStarted === null){
    $('button').prop('disabled', false);
  } else {
     $('button').prop('disabled', true);
  }
}

//timer countdown  
  $('.timerCountDown').click(function(){
     session = workSession;  
    if(breakNow){
      session = breakSession; 
    }
    if(!timerStarted){
//count down timer
      seconds = parseInt(seconds); 

      timerStarted = setInterval(
        function(){ 

        if(seconds === 0){
          lengthOfSeconds = 2; 
          } else {
           lengthOfSeconds = seconds.toString().length;
         }

        if(seconds === 0 && minutes !== 0){
            countDown--; 
            minutes--;
            seconds = 59; 
            stringOfMinutes = minutes+":"+seconds;
         $('.countDown').html(session+stringOfMinutes);
            } else if(seconds > 0 ){
              seconds--; 
              lengthOfSeconds = seconds.toString().length;
            
            } else if(lengthOfSeconds < 2 && seconds > 0){
                seconds--;
               
            } else {
 
       //when timer is up
              bubblePop();
              resetBubble(); 
              clearInterval(timerStarted);
              timerStarted = null;
              $('button').prop('disabled', false);
            }

            if(lengthOfSeconds === 2 && seconds !== 0){
                stringOfMinutes = minutes+":"+seconds;
            $('.countDown').html(session+ stringOfMinutes)
            } else {
               stringOfMinutes = minutes+":"+"0"+seconds;
                $('.countDown').html(session+stringOfMinutes);
            }
           startBubble();
              },50) 
     } else {
       //make bubble reset when timer paused
            resetBubble()
            clearInterval(timerStarted);
            timerStarted = null;
        }

     disableButton(); 
  })

//increment and deincrement timer

  $('.deincrement').click(function(){
    $(".pop").hide();
    if(minutes > 1 && minutes === setMinutes){
      minutes--;
      countDown--;
      setMinutes--; 
      seconds = "00";
      updateTime(countDown);
    } else if(minutes > 1 ){
      setMinutes = minutes; 
      countDown = minutes; 
      seconds = "00";
      updateTime(countDown);
    } 
})

  $('.increment').click(function(){
   
    $(".pop").hide()
    if(minutes === 0 && seconds <= 59 && timerStarted !== null) {
      minutes = 1; 
      setMinutes++; 
      countDown = 1; 
      seconds = "00"
      minutesToCalculate = minutes; 
      updateTime(countDown);
      } else if(timerStarted === null && minutes !== setMinutes){
        minutes = setMinutes;
        countDown = minutes;
        console.log('minutes, countdown', minutes, countDown)
        seconds = "00"; 
        updateTime(countDown);
      } else{
        minutes++;
        setMinutes++; 
        countDown++;
        seconds = "00";
        minutesToCalculate = minutes; 
        updateTime(countDown);
      }
  })


//then a rest period, once at zero a start noise

$('.deincrementBreak').click(function(){
  if(breakTimer > 1) {
        breakTimer--;  
        minutesToCalculate = minutes; 
        $('.breakTime').html(breakTimer);
      }
  });

$('.incrementBreak').click(function(){
        breakTimer++;  
        minutesToCalculate = minutes; 
        $('.breakTime').html(breakTimer);
  })


});
