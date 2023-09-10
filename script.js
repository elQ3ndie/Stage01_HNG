// Function to get the current day of the week
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
  }
  
  // Function to get the current UTC time
  function getCurrentUTCTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getUTCMilliseconds().toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds} UTC`;
  }
  
  // Update the HTML elements with the current day of the week and UTC time
  document.getElementById('currentDayOfTheWeek').textContent = getCurrentDayOfWeek();
  document.getElementById('currentUTCTime').textContent = getCurrentUTCTime();
  