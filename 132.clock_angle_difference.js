/**
 * https://bigfrontend.dev/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
  const [hours, mins] = time.split(':').map(el => +el);
  const minsDegrees = mins * 6;
  const hoursDegrees = (hours % 12) * 30 + mins * 0.5;

  const diff = Math.abs(minsDegrees - hoursDegrees);
  const result = Math.min(diff, 360 - diff);
  return Math.round(result);
}
