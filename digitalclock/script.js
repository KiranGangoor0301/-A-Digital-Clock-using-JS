let first=document.getElementsByClassName('first')[0];
first.onload=function showTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";
    if (h >= 12) {
      session = "PM";
    }
    if (h > 12) {
      h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ':' + m + ':' + s + ":" + session;
    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout(showTime, 1000);


  }

  document.querySelector('#second').style.fontSize='150px';
  document.querySelector('#second').style.border='3px solid white';
  document.querySelector('#second').style.padding='20px';