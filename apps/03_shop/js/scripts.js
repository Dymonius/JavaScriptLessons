window.onload = function () {
    var items = document.querySelectorAll('.item');
    var value = document.querySelector('.value');
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', handlerItem);
    }

    function handlerItem() {
        this.classList.toggle('item-active');

        var sum = 0;

        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains('item-active')) {
                sum += parseInt(items[i].getAttribute('data-price'));
            }
        }
        value.innerHTML = 'Summ = ' + sum;
    }
};



