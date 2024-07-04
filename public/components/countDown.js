// Countdown Clock
const targetTime = Date.now() + 10 * 60 * 60 * 1000; // Milliseconds in 10 hours

function updateClock() {
  const currentTime = Date.now();
  const difference = targetTime - currentTime;

  // Calculate remaining time in hours, minutes, seconds
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  // Format time with leading zeros
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Update the countdown display
  document.querySelector(".clock").innerHTML = formattedTime;

  // Check if countdown has reached zero
  if (difference <= 0) {
    clearInterval(intervalCountdown);
    document.querySelector(".clock").innerHTML = "Time's Up!";
  }
}

const intervalCountdown = setInterval(updateClock, 1000);

updateClock(); // Initial update