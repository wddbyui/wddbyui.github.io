const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  document.querySelector(".date h2").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

  monthDays.innerHTML = ''; // Resets days container

  // Previous month's days on this month's calendar
  for (let x = firstDayIndex; x > 0; x--) {
    let div = document.createElement('div');
    let divDateForId = new Date(Date.UTC(date.getFullYear(), date.getMonth() - 1, prevLastDay - x + 2))
    div.id = new Intl.DateTimeFormat('en-US').format(divDateForId);
    div.className = 'prev-date';
    div.textContent = prevLastDay - x + 1;
    monthDays.appendChild(div);
  }

  // Current Month
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
      let div = document.createElement('div');
      let divDateForId = new Date();
      div.className = 'today';
      div.id = new Intl.DateTimeFormat('en-US').format(divDateForId);
      div.textContent = i;
      monthDays.appendChild(div);
    } else {
      let div = document.createElement('div');
      let divDateForId = new Date(Date.UTC(date.getFullYear(), date.getMonth(), i + 1))
      div.id = new Intl.DateTimeFormat('en-US').format(divDateForId);
      div.textContent = i;
      monthDays.appendChild(div);
    }
  }

  // Next month's days on this month's calendar
  for (let j = 1; j <= nextDays; j++) {
    let div = document.createElement('div');
    let divDateForId = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, j + 1))
    div.id = new Intl.DateTimeFormat('en-US').format(divDateForId);
    div.className = 'next-date';
    div.textContent = j;
    monthDays.appendChild(div);
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
