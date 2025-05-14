
function updateDateTime() {
  const now = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = now.getDate();
  const month = months[now.getMonth()].slice(0, 3);
  const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');

  document.getElementById('date-time').textContent = `${day} ${month} | ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

function updateElapsedTime(startTime, endTime) {
  const now = new Date();
  const elapsed = now - new Date(startTime);
  const total = new Date(endTime) - new Date(startTime);
  const progress = Math.min((elapsed / total) * 100, 100);

  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsed / 1000) % 60);
  const totalHours = Math.floor(elapsed / (1000 * 60 * 60));

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  document.getElementById('total-hours').textContent = totalHours;

  document.getElementById('progress-bar').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${progress.toFixed(2)}%`;
}

function initializeTimer(trackerTitle, blockTitle, startTime, endTime) {
  document.getElementById("label-title").textContent = trackerTitle;
  document.getElementById("block-title").textContent = blockTitle;

  setInterval(() => updateElapsedTime(startTime, endTime), 1000);
  updateElapsedTime(startTime, endTime); // Initial call
}
