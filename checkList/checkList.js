const items = document.querySelectorAll('item');

function markChecked() {
    console.log('checking');
    items.classList.add('checked');
}

items.addEventListener('mousedown', markChecked);