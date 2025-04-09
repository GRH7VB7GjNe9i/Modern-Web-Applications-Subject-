function registerEvent() {
  alert("Thank you for your interest! Registration details will be sent to your email.");
}

const eventDate = new Date("JAN 27, 2025 09:00:00").getTime();

let timer = setInterval(function() {
  let now = new Date().getTime();
  let timeLeft = eventDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (timeLeft < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Event has started!";
  }
}, 1000);
