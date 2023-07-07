
var time = 450;

function timer() {
    time -= 1;
  
    if (time <= 0) {
      clearInterval(counter);
      $("span[station]").html("THE END");
      $("*").css("pointer-events", "none");
      // time's up
      localStorage.setItem("tries", parseInt(localStorage.getItem("tries")) + 1);
  
      setTimeout(function () {
        window.location = 'end.html';
      }, 5000)
    } else if (time <= 50) {
  
      $("#_time").text(time);
    } else {
  
      //    lie = Math.floor(1000 + Math.random() * 9000);
      $("#_time").text(time);
    }
  }
  