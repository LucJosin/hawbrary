const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_YEAR = MS_PER_DAY * 365.2425;

const MS_IN_HOUR = 1000 * 60 * 60;
const MS_IN_MINUTE = 1000 * 60;

export function getAge(date: string, from?: string) {
  const birth = new Date(date);
  const check = from ? new Date(from) : new Date();

  return Math.floor((check.getTime() - birth.getTime()) / MS_PER_YEAR);
}

export function getDayCount(date: string) {
  const birth = new Date(date);
  const now = new Date();

  return Math.round((now.getTime() - birth.getTime()) / MS_PER_DAY);
}

// Ref: https://stackoverflow.com/a/58826445
export function formatMilliseconds(duration: number) {
  const time: string[] = [];

  const hours = Math.trunc(duration / MS_IN_HOUR);
  if (hours > 0) {
    time.push(hours + 'h');
    duration = duration - hours * MS_IN_HOUR;
  }

  const minutes = Math.trunc(duration / MS_IN_MINUTE);
  if (minutes > 0) {
    time.push(minutes + 'm');
    duration = duration - minutes * MS_IN_MINUTE;
  }

  const seconds = Math.trunc(duration / 1000);
  if (seconds > 0) {
    time.push(seconds + 's');
  }

  return time.join(' ');
}
