

$(document).ready(function(){
      
    //set timer, count down, once at zero makes a noise
var counterWork = 25;
var noAction = true;
var countDown = counterWork; 
var timerStarted;

//sets counter to page
var updateTime = function(currentCounter){

  if(!timerStarted && timerStarted !== null) {
  $('.workTime').html(currentCounter);
  $('.countDown').html(countDown);
  } else {
    countDown = counterWork;
    $('.workTime').html(counterWork);
    $('.countDown').html(countDown);
  }
  

}

//runs counter first time
if(noAction){
   updateTime(counterWork);
   noAction = false; 
}

//count down
// var triggerTimer = function(){
//   setInterval(
//   function(){ 
//     if(countDown > 0){
//        countDown--
//       $('.countDown').html(countDown);
//     } else {
//       clearInterval(triggerTimer);
//     }
   
//    },1000)
// }

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
      timerStarted = setInterval(
        function(){ 
          if(countDown > 0){
            countDown--
            $('.countDown').html(countDown);
            } else {
            clearInterval(triggerTimer);
            }
              },1000) 
     } else {
       clearInterval(timerStarted);
        timerStarted = null; 
     }
     disableButton(); 
  })



//increment and deincrement timer

  $('.deincrement').click(function(){
    if(counterWork > 0){
      counterWork--
      countDown--
      updateTime(countDown);
    }
})

  $('.increment').click(function(){
    counterWork++
    countDown++
    updateTime(countDown);
  })


//then a rest period, once at zero a start noise



});
