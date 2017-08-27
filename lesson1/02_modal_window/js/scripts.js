window.onload = function () {
    var buttons = document.querySelectorAll('input');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleButtons);
    }

    var background = document.querySelector('.modal__background');
    background.addEventListener('click', handleBackground);
};

function handleButtons() {
    var buttonName = this.getAttribute('name');
    var message = document.querySelector('.modal__window');
    var background = document.querySelector('.modal__background');

    message.classList.add('modal__window--visible');
    background.classList.add('modal__background--visible');

    if (buttonName === 'save') {
        message.innerHTML = 'SAVE';

    }
    else if (buttonName === 'delete') {
        message.innerHTML = 'DELETE';

    }
}

function handleBackground() {
    var message = document.querySelector('.modal__window');
    var background = document.querySelector('.modal__background');


    message.classList.toggle('modal__window--visible');
    background.classList.toggle('modal__background--visible');
}

