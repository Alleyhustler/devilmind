/*Clock*/

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
}

showTime();

/*Search*/

let randomNumber = Math.floor(Math.random() * 4) + 1;

window.onload = function () {
  if (randomNumber == 1) {
    document.getElementById("content_1").style.display = "";

    document.getElementById("content_2").style.display = "none";

    document.getElementById("content_3").style.display = "none";

    document.getElementById("content_4").style.display = "none";
  }

  if (randomNumber == 2) {
    document.getElementById("content_1").style.display = "none";

    document.getElementById("content_2").style.display = "";

    document.getElementById("content_3").style.display = "none";

    document.getElementById("content_4").style.display = "none";
  }

  if (randomNumber == 3) {
    document.getElementById("content_1").style.display = "none";

    document.getElementById("content_2").style.display = "none";

    document.getElementById("content_3").style.display = "";

    document.getElementById("content_4").style.display = "none";
  }

  if (randomNumber == 4) {
    document.getElementById("content_1").style.display = "none";

    document.getElementById("content_2").style.display = "none";

    document.getElementById("content_3").style.display = "none";

    document.getElementById("content_4").style.display = "";
  }
};

/*Ads*/

var images = [
  "images/button_valentxt.gif",
  "images/surveyLA.gif",
  "images/npyahootoolbar.gif",
  "images/sophiesstew.gif",
  "images/l2_rainbowkacheek.gif",
  "images/discoaisha.gif",
  "images/playneoquest.gif",
];

var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);

var image = "<img src='" + randomImage + "'>";

document.getElementById("sm-advert").innerHTML = image;
