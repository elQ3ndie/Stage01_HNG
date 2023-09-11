
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const dayOfWeek = daysOfWeek[currentDay];
    return dayOfWeek;
  }
  
  function getCurrentUTCTime() {
    // const currentDate = new Date();
    const currentTime = Date.now();
    return currentTime;
  }
  
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
  document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
  