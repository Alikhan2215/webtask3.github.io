let countdown;
const timerDisplay = document.querySelector('#time');
const endTimeInput = document.querySelector('#end-time');

function timer(endTime) {
  clearInterval(countdown);

  function updateDisplay() {
    const now = new Date();
    const timeLeft = endTime - now;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = 'Timer expired';
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateDisplay();

  countdown = setInterval(updateDisplay, 1000);
}

function saveEndTime(endTime) {
  localStorage.setItem('endTime', endTime);
}

function loadTimer() {
  const savedEndTime = localStorage.getItem('endTime');
  if (savedEndTime) {
    const endDateTime = new Date(savedEndTime);
    if (!isNaN(endDateTime)) {
      timer(endDateTime);
    }
  }
}

function startTimer() {
  const endDateTime = new Date(endTimeInput.value);
  if (!isNaN(endDateTime)) {
    saveEndTime(endDateTime);
    timer(endDateTime);
  }
}

function stopTimer() {
  clearInterval(countdown);
  timerDisplay.textContent = '0d 0h 0m 0s';
  localStorage.removeItem('endTime');
}
