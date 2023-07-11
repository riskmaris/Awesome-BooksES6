import { DateTime } from './luxon.js';

const updateTime = () => {
  const currentDate = DateTime.now();
  const dateTimeString = currentDate.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  document.getElementById('time').textContent = dateTimeString;
  };

export default updateTime;