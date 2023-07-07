const header = document.querySelector('.banner__title');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

function makeVisible() {
    header.classList.add('visible');
}

setInterval(() => { makeVisible(header) }, 400);

console.log(header);