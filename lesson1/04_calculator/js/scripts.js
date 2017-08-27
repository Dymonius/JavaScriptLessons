window.onload = function (e) {
    var buttons = document.querySelectorAll('input[type="button"]');
    var operand1 = document.querySelector('input[name="num1"]');
    var operand2 = document.querySelector('input[name="num2"]');
    var res = document.querySelector('.res');
    var operands = document.querySelectorAll('input[type="text"]');


    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleButton)
    }
    for (var i = 0; i < operands.length; i++) {
        operands[i].addEventListener('input', handleOperand)
    }


    function handleButton() {
        var buttonAttr = this.getAttribute('name');
        this.setAttribute('disabled','disabled');
        if (buttonAttr === 'sum') {
            res.innerHTML = +operand1.value + +operand2.value;
        }
        if(buttonAttr === 'dif') {
            res.innerHTML = +operand1.value - +operand2.value;
        }
        if (buttonAttr === 'mul') {
            res.innerHTML = +operand1.value * +operand2.value;
        }
        if (buttonAttr === 'div') {
            res.innerHTML = +operand1.value / +operand2.value;
        }
        console.log(buttonAttr);
    }
    function handleOperand() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].removeAttribute('disabled');
        }
    }

};

