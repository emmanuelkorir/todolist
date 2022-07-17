exports = getDate;
function getDate() {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  let day = today.toLocaleDateString('en-GB', options);
  return day;
}
