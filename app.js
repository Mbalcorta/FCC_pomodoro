

$(document).ready(function(){
      
    //set timer, count down, once at zero makes a noise
var counter = 0;

 function setTimer(count){
  $('.workTime').html(count)
}

var triggerTimer = setInterval(
  function(){ 

    if(counter > -1){
      setTimer(counter)
      counter--
    } else {
      clearInterval(triggerTimer);
    }
   
   },1000)

//increment and deincrement timer


    //then a rest period, once at zero a start noise
});
