

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

//sets counter to page
var updateTime = function(currentCounter){
  $('.workTime').html(setMinutes);
  stringOfMinutes = currentCounter+":"+seconds
  $('.countDown').html(stringOfMinutes);
  console.log('What time is it ', setMinutes, stringOfMinutes)
}

//runs counter first time
if(noAction){
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

//bubble pops when timer done
function bubblePop(){
  $("img").hide();
  $(".pop").show().css('color', 'black');
   var e = $('.pop');
    e.not(':animated').css({'opacity': 1 }).effect("scale", {origin:['middle','center'], from:{width:e.width()/2,height:e.height()/2}, percent: 100, direction: 'both', easing: "easeOutBounce" }, 700);
  }


//while timer is running disable button
var disableButton = function(){
  if(timerStarted === undefined || timerStarted === null){
    $('button').prop('disabled', false);
  } else {
     $('button').prop('disabled', true);
  }
}

//timer countdown  
  $('.timerCountDown').click(function(){
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
         $('.countDown').html(stringOfMinutes);
            } else if(seconds > 0 ){
              seconds--; 
               console.log('minutes and seconds ', minutes, seconds)
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
            $('.countDown').html(stringOfMinutes)
            } else {
               stringOfMinutes = minutes+":"+"0"+seconds;
                $('.countDown').html(stringOfMinutes);
            }
           startBubble();
              },100) 
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
$('.breakTime').html(breakTimer);

});
