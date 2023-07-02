const menu = document.querySelector("#menu").cloneNode(1);
const burger = document.querySelector(".menu-burger");
const popup = document.querySelector(".popup");
const body = document.body;

burger.addEventListener("click", changeMenu);

function changeMenu(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    burger.classList.toggle("active");

    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

const bgMenu = Array.from(menu.children);

for (i = 0; i < bgMenu.length; i++) {
    console.log();
}

bgMenu.forEach((item) => {
    item.style.display = 'inline-block';
});

function closeOnClick() {
    popup.classList.remove("open");
    burger.classList.remove("active");

}

console.log(bg);