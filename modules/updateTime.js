import { DateTime } from 'luxon.js';

function updateTime() {
  const currentDate = DateTime.now();
  const dateTimeString = currentDate.toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('time').textContent = dateTimeString;
}

export default updateTime;
