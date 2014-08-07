
// $('#phrase').html(phrase);

// $( document ).ready(function() {
//   $.doTimeout( 2000, function(){
//     alert('hello');
//     $('#phrase').load("includes/phrase.php");
//     return true; // Poll.
//   });
// });

$(document).ready(function() {
  // Handler for .ready() called.
  // $("#talky").animate({left:'250px'});
  $('#container').fadeIn(10000);
  $('#phrase').load("includes/phrase.php");

  var timeout = 3000;
  var action = function() {
    // Do stuff here
    $('#phrase').load("includes/phrase.php");
      var rNum = (Math.random()*10)-5;  
    $("#talky").css( {   
      '-webkit-transform': 'rotate('+rNum+'2deg)',
      '-moz-transform': 'rotate('+rNum+'2deg)',
    } );
    // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    // $('#phrase').animate( { color: hue }, 1000);
    
    setTimeout(action, timeout);
  };
  action();


  // $('body').animate( { backgroundColor: hue }, 1000);

});