

$(document).ready(function(){
      
    //set timer, count down, once at zero makes a noise
var seconds = "00"; 
var colon = ":"
var minutes = 25;
var noAction = true;
var countDown = minutes;
var breakTimer = 5;  
var timerStarted;
var stringOfMinutes = minutes+colon+seconds;
var lengthOfSeconds = seconds.toString().length;
var bubbleWidth = 0;
var bubbleHeight = 0; 

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


//opens up bubble when timer started
function startBubble(){
   
   if ($(".open")[0]){
    console.log('now i exist')
    // Do something if class exists
    bubbleWidth += 10; 
    bubbleHeight += 10; 
    console.log(bubbleWidth, bubbleHeight)
    // $(".open").css("width", bubbleWidth);
    // $(".open").css("height", bubbleHeight);

} else {
  console.log('did not exist')
    // Do something if class does not exist
    $("img").addClass("open");
  }
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
            console.log('one ', stringOfMinutes, seconds)
          $('.countDown').html(stringOfMinutes);
            } else if(seconds > 0 ){
              seconds--; 
              lengthOfSeconds = seconds.toString().length;
            
              } else if(lengthOfSeconds < 2 && seconds > 0){
                console.log(seconds, lengthOfSeconds)
                seconds--;
               
              } else {
 
       //make noise then clear timer
            clearInterval(timerStarted);
            timerStarted = null;
            }

            if(lengthOfSeconds === 2 && seconds !== 0){
                stringOfMinutes = minutes+colon+seconds;
            console.log('two ', stringOfMinutes , seconds)
            $('.countDown').html(stringOfMinutes)
            } else {
               stringOfMinutes = minutes+colon+"0"+seconds;
                console.log('three ', stringOfMinutes, seconds)
                $('.countDown').html(stringOfMinutes);
            }
            startBubble();
            console.log('each time')
              },1000) 
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
