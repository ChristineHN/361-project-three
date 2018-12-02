'use strict';

(function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if(h === 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  /*should declare var on the top but had to put it here to display
  the clock in a right format*/
  document.getElementById("timeclock").innerText = time;
  document.getElementById("timeclock").textContent = time;
  setTimeout(showTime, 1000);
})();
