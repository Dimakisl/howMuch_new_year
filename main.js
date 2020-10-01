//находим элементы
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

//делаем расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//устанавливаем год на страницу
year.innerText = currentYear + 1;


function updateCounter(){

    const currentTime = new Date();

    const diff = nextYear - currentTime;

    //перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24); 
    //Часов всего, далее остаток от деления на 24 (преобразования в дни), получаем часы
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    //минут всего, далее остаток от преобразования в часы, минут осталось
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    //секунд всего, далее остаток от преобразования в минуты, секунд осталось
    const secondsLeft = Math.floor(diff / 1000) % 60;


    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter();

setInterval(updateCounter, 1000);
