import { DateTime } from 'luxon';

function updateTime() {
  const currentDate = DateTime.now();
  const dateTimeString = currentDate.toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('time').textContent = dateTimeString;
}

export default updateTime;
