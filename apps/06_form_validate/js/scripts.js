window.onload = function () {
    var textInputs = document.querySelectorAll('input[type=text]');
    var sendButton = document.querySelector('input[type=button]');


    sendButton.addEventListener('click', function (e) {
        for (var i = 0; i < textInputs.length; i++) {
            if (textInputs[i].value === '') {
                e.preventDefault();
                textInputs[i].classList.add('wrong-input');
            }
            else {
                textInputs[i].classList.remove('wrong-input');
            }
        }
    })

};

