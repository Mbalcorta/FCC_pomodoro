

$(document).ready(function(){
      
    //set timer, count down, once at zero makes a noise
var seconds = "00"; 
var colon = ":"
var minutes = 1;
var noAction = true;
var countDown = minutes;
var breakTimer = 5;  
var timerStarted;
var stringOfMinutes = minutes+colon+seconds;
var lengthOfSeconds = seconds.toString().length;
var totalSeconds = minutes * 60; 
var bubbleWidth = 0;
var bubbleHeight = 0; 
var totalBubbleExpansion = 300/totalSeconds; 

//sets counter to page
var updateTime = function(currentCounter){
  $('.workTime').html(currentCounter);
  stringOfMinutes = currentCounter+colon+seconds
  $('.countDown').html(stringOfMinutes);
}

//runs counter first time
if(noAction){
   updateTime(minutes);
   noAction = false; 
  $(".pop").hide();
}


//opens up bubble when timer started
function startBubble(){
    
    if ($(".open")[0]){
    // Do something if class exists
    bubbleWidth += totalBubbleExpansion; 
    bubbleHeight += totalBubbleExpansion; 
    $(".open").css("width", bubbleWidth);
    $(".open").css("height", bubbleHeight);

} else {
    // Do something if class does not exist
    $("img").addClass("open");
  }
}

//if countDown number is clicked function starts to count down

function bubblePop(){
  $("img").hide();
  $(".pop").show();
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
            minutes--;
            seconds = 59; 
            stringOfMinutes = minutes+colon+seconds;
          $('.countDown').html(stringOfMinutes);
            } else if(seconds > 0 ){
              seconds--; 
              lengthOfSeconds = seconds.toString().length;
            
              } else if(lengthOfSeconds < 2 && seconds > 0){
                seconds--;
               
              } else {
 
       //make noise when timer is up
            bubblePop();
            clearInterval(timerStarted);
            timerStarted = null;
            }

            if(lengthOfSeconds === 2 && seconds !== 0){
                stringOfMinutes = minutes+colon+seconds;
            $('.countDown').html(stringOfMinutes)
            } else {
               stringOfMinutes = minutes+colon+"0"+seconds;
                $('.countDown').html(stringOfMinutes);
            }
            startBubble();
              },1000) 
     }
     else {
 
       //make bubble reset when timer paused
            bubbleHeight = 0;
            bubbleWidth = 0; 
            clearInterval(timerStarted);
            timerStarted = null;
            }
     disableButton(); 
  })



//increment and deincrement timer

  $('.deincrement').click(function(){
    if(minutes > 1){
      minutes--
      countDown--
      seconds = "00"
      updateTime(countDown);
    }
})

  $('.increment').click(function(){
    minutes++
    countDown++
    seconds = "00"
    updateTime(countDown);
  })


//then a rest period, once at zero a start noise
$('.breakTime').html(breakTimer);



});
