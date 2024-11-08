const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', showText));
panels.forEach(panel => panel.addEventListener('transitionend', growPanel));


function showText(){
    this.classList.toggle('open')
}

function growPanel(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

