window.onload = function () {
    var links = document.querySelectorAll('.links-outside');
    console.log(links);
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            if (!confirm('За внешние ссылки мы не отвечаем. Вы действительно хотите перейти по ссылке?')) {
                e.preventDefault();
            }
        })
    }
};

