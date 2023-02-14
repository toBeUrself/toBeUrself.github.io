import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const datePattern = 'YYYY-MM-DD HH:mm:ss';

export const getDurationFromNow = (date) => {
  let [alldays, years, months, days, hours, minutes, seconds] = [0, 0, 0, 0, 0];

  const dayjsObj = dayjs(date);
  if (dayjsObj.isValid()) {
    const durationObj = dayjs.duration(dayjs().diff(dayjsObj));

    [alldays, years, months, days, hours, minutes, seconds] = [
      durationObj.asDays().toFixed(0),
      durationObj.years(),
      durationObj.months(),
      durationObj.days(),
      durationObj.hours(),
      durationObj.minutes(),
      durationObj.seconds(),
      durationObj.milliseconds(),
    ];
  }

  return [alldays, years, months, days, hours, minutes, seconds];
};
