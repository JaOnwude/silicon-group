/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // TODO: convert 12-hour AM/PM format to 24-hour military time format
  let period = s.slice(-2);      // AM or PM
  let time = s.slice(0, -2);     // hh:mm:ss

  let [hours, minutes, seconds] = time.split(":");
  hours = Number(hours);

  if (period === "AM") {
    if (hours === 12) {
      hours = "00";
    } else {
      hours = String(hours).padStart(2, "0");
    }
  } else { // PM
    if (hours !== 12) {
      hours = String(hours + 12);
    } else {
      hours = "12";
    }
  }

  return `${hours}:${minutes}:${seconds}`;
}
module.exports = timeConversion;
