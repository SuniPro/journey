export const getMinutesFromTime = (time: number): number =>
  Math.floor(time / 100) * 60 + (time % 100);

export const formatTime = (val: number): string => {
  const hours = Math.floor(val / 100)
    .toString()
    .padStart(2, "0");
  const minutes = (val % 100).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const addMinutes = (time: number, deltaMinutes: number): number => {
  let hours = Math.floor(time / 100);
  let minutes = time % 100;

  minutes += deltaMinutes;
  while (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }
  while (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  if (hours >= 24) hours -= 24;
  if (hours < 0) hours += 24;

  return hours * 100 + minutes;
};
