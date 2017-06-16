

$(document).ready(function(){
      
    //set timer, count down, once at zero makes a noise
var seconds = "00"; 
var colon = ":"
var minutes = 3;
var noAction = true;
var countDown = minutes;
var breakTimer = 5;  
var timerStarted;
var stringOfMinutes = minutes+colon+seconds;
var lengthOfSeconds = seconds.toString().length;


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
}


//if countDown number is clicked function starts to count down

//while timer is running disable button
var disableButton = function(){
  if(timerStarted === undefined || timerStarted === null){
    $('button').prop('disabled', false);
  } else {
     $('button').prop('disabled', true);
  }
}
 
  $('.countDown').click(function(){
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
          } else if(seconds > 0 && lengthOfSeconds === 2){
            seconds--; 
            lengthOfSeconds = seconds.toString().length;
            stringOfMinutes = minutes+colon+seconds;
            $('.countDown').html(stringOfMinutes)
              } else if(lengthOfSeconds < 2 && seconds > 0){
                console.log(seconds, lengthOfSeconds)
                seconds--;
                stringOfMinutes = minutes+colon+"0"+seconds;
                $('.countDown').html(stringOfMinutes);
              } else {
                console.log('three')
//make noise then clear timer
            clearInterval(timerStarted);
            }
              },500) 
     } else {
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
