
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

  setTimeout(function() {

    
    $('#phrase').load("includes/phrase.php");

    i = 0
    var timeout = 800;
    var nextstep = function() {
      $('#step'+i).hide();
      $('#step'+(i+1)).show();
      i++;
      if (i < 5) {
        setTimeout(nextstep, timeout);
      } else {
        action();
        $('#container').fadeIn(2000);
      }
    }
    nextstep();

    var timeout = 4000;
    var action = function() {
      // Do stuff here
      $('#phrase').load("includes/phrase.php")  ;
        var rNum = (Math.random()*10)-5;  
        var rNum2 = (Math.random()*10)-5;  
      $("#talky").css( {   
        '-webkit-transform': 'rotate('+rNum+'2deg)',
        '-moz-transform': 'rotate('+rNum+'2deg)',
      } );
      $("#phrase").css( {   
        '-webkit-transform': 'rotate('+rNum2+'2deg)',
        '-moz-transform': 'rotate('+rNum2+'2deg)',
      } );
      // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      // $('#phrase').animate( { color: hue }, 1000);  
      setTimeout(action, timeout);
      if (i > 10) {
        $('#container').fadeOut(20000);
      }
      i++;
    };
  }, 100);
  // $('body').animate( { backgroundColor: hue }, 1000);

});