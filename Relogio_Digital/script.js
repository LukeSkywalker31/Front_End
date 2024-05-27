function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    const hourDegree = (hours % 12) * 30;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;

    document.getElementById('hours-circle').style.transform = `rotate(${hourDegree}deg)`;
    document.getElementById('minutes-circle').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('seconds-circle').style.transform = `rotate(${secondDegree}deg)`;

    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    document.getElementById('date').textContent = `${day} de ${month} de ${year}`;
}

setInterval(updateClock, 1000);
updateClock();