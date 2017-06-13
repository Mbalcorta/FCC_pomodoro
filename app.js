

$(document).ready(function(){
      
    //set timer, count down, once at zero makes a noise
var counterWork = 25;
var noAction = true;
var countDown = counterWork; 
var clickedAlready = false; 
//sets counter to page
var updateTime = function(currentCounter){
  $('.workTime').html(currentCounter);
  $('.countDown').html(countDown);
}

//runs counter first time
if(noAction){
   updateTime(counterWork);
   noAction = false; 
}

//count down
var triggerTimer = function(){
  setInterval(
  function(){ 
    if(countDown > 0){
       countDown--
      $('.countDown').html(countDown);
    } else {
      clearInterval(triggerTimer);
    }
   
   },1000)
}

//if countDown number is clicked function starts to count down
  $('.countDown').click(function(){
    if(!clickedAlready){
       triggerTimer(); 
     } else {
//stop timer when counter count down is clicked*****

    clearInterval(triggerTimer);
    updateTime(counterWork);
     }
     clickedAlready = true; 
  })

//increment and deincrement timer

$('.deincrement').click(function(){
    if(counterWork > 0){
      counterWork--
      countDown--
      updateTime(counterWork);
    }
})

$('.increment').click(function(){
    counterWork++
    countDown++
    updateTime(counterWork);
})





//then a rest period, once at zero a start noise



});
