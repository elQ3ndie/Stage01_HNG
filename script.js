
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const dayOfWeek = daysOfWeek[currentDay];
    return dayOfWeek;
  }
  
  function getCurrentUTCTime() {
    const currentDate = new Date();
    const currentTime = currentDate.toISOString();
    return currentTime;
  }
  
  document.getElementById('currentDayOfTheWeek').textContent = getCurrentDayOfWeek();
  document.getElementById('currentUTCTime').textContent = getCurrentUTCTime();
  