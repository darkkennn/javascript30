const items = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function markChecked(e) {
    let inBetween = false;
    console.log(this.checked);
    if(e.shiftKey && this.checked){
        items.forEach(item => {
            console.log(item);
            if(item === this || item === lastChecked){
                inBetween = !inBetween;
            };

            if(inBetween){
                item.checked = true;
            }
        });
    }
    lastChecked = this;
}

items.forEach(item => item.addEventListener('click', markChecked));