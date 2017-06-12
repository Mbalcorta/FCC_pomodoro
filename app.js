

$(document).ready(function(){
 
    //set timer, count down, once at zero makes a noise
var counter = 2;

 function setTimer(count){
   console.log(count)
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

    //then a rest period, once at zero a start noise
});
