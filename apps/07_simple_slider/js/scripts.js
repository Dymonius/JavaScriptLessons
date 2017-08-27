window.onload = function () {
    var buttonPrev = document.querySelector('.prev');
    var buttonNext = document.querySelector('.next');
    var images = document.querySelectorAll('.photos img');
    console.log(images);

    buttonNext.addEventListener('click', handlerNextButton);
    buttonPrev.addEventListener('click', handlerPrevButton);

    var i = 0; // номер текущей картинки

    function handlerNextButton() {
        images[i].classList.remove('showed');
        i++;
        if (i > images.length-1) {
            i = 0;
        }
        images[i].classList.add('showed');
    }

    function handlerPrevButton() {
        images[i].classList.remove('showed');
        i--;
        if (i < 0) {
            i = images.length-1;
        }
        images[i].classList.add('showed');
    }
};

