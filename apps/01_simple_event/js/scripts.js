window.onload = function () {
    var buttons = document.querySelectorAll('input');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleButtons);
    }
};

function handleButtons() {
    var buttonName = this.getAttribute('name');
    if (buttonName === 'save') {
        alert('Save button was pressed');
    }
    else if (buttonName === 'delete') {
        alert('Delete button was pressed');
    }
}

