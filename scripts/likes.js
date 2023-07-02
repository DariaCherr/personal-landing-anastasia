let hearts = document.querySelectorAll('.heart');
let likesNumber = document.querySelector('.likes-number');

for (let item of hearts) {
    item.addEventListener('click', function() {
        if (item.classList.contains('added')) {
            item.style.backgroundImage = "url('/icons/heart-regular.svg')";
            likesNumber.textContent--;
        } else {
            item.style.backgroundImage = "url('/icons/heart-solid.svg')";
            likesNumber.textContent++;
        }
        item.classList.toggle('added');
    })
}