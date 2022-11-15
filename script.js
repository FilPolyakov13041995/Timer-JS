let date = new Date('05 Nov 2023 21:36:00');

function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000 ) % 60;

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    if (gap < 0) { // После окончания счётчика, выводим сообщение.
        document.querySelector('.timer').innerHTML = 'Игра началась!';
    } else {
        document.querySelector('.days').innerHTML = getZero(days);
        document.querySelector('.hours').innerHTML = getZero(hours);
        document.querySelector('.minutes').innerHTML = getZero(minutes);
        document.querySelector('.seconds').innerHTML = getZero(seconds);
    }

}


counts();
setInterval(counts, 1000);

