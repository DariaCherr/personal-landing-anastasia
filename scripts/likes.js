let hearts = document.querySelectorAll('.heart');
let likesNumber = document.querySelectorAll('.likes-number');

for (let heart of hearts) {
    heart.onclick = function() {
        if (heart.classList.contains('added')) {
            heart.style.backgroundImage = "url(../icons/heart-regular.svg)";
            likesNumber.textContent--;
        } else {
            heart.style.backgroundImage = "url(../icons/heart-solid.svg)";
            likesNumber.textContent++;
        }
        heart.classList.toggle('added');
    }
}

// hearts[0].onclick = function() {
//     if (likesNumber[0].classList.contains('added')) {
//         hearts[0].style.backgroundImage = "url(../icons/heart-regular.svg)";
//         likesNumber[0].textContent--;
//     } else {
//         hearts[0].style.backgroundImage = "url(../icons/heart-solid.svg)";
//         likesNumber[0].textContent++;
//     }
//     likesNumber[0].classList.toggle('added');
// }

// hearts[1].onclick = function() {
//     if (likesNumber[1].classList.contains('added')) {
//         hearts[1].style.backgroundImage = "url(../icons/heart-regular.svg)";
//         likesNumber[1].textContent--;
//     } else {
//         hearts[1].style.backgroundImage = "url(../icons/heart-solid.svg)";
//         likesNumber[1].textContent++;
//     }
//     likesNumber[1].classList.toggle('added');
// }

// hearts[2].onclick = function() {
//     if (likesNumber[2].classList.contains('added')) {
//         hearts[2].style.backgroundImage = "url(../icons/heart-regular.svg)";
//         likesNumber[2].textContent--;
//     } else {
//         hearts[2].style.backgroundImage = "url(../icons/heart-solid.svg)";
//         likesNumber[2].textContent++;
//     }
//     likesNumber[2].classList.toggle('added');
// }