const calendar = document.querySelector(".calendar");
const clock = document.querySelector(".clock");

function setClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${min}:${sec}`;
}

setClock();
setInterval(setClock, 1000);

function setCalendar() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const month = monthNames[date.getMonth()];
  const today = date.getDate();
  const year = date.getFullYear();
  calendar.innerText = `${month} ${today}, ${year}`;
}
setCalendar();
