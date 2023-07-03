let hearts = document.querySelectorAll('.heart');
let likesNumber = document.querySelector('.likes-number');
let likes = localStorage.getItem("LikesValue");

for (let item of hearts) {
    item.addEventListener('click', function() {
        if (item.classList.contains('added')) {
            item.style.backgroundImage = "url(../icons/heart-regular.svg)";
            likesNumber.textContent--;
        } else {
            item.style.backgroundImage = "url(../icons/heart-solid.svg)";
            likesNumber.textContent++;
            localStorage.setItem("LikesValue", likesNumber)
        }
        item.classList.toggle('added');
    })
}