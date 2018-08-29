let h1 = document.querySelector('h1');

h1.style.color = "blue"

let body = document.querySelector('body');
let isBlue = false;

setInterval(function() {
    if(isBlue) {
        body.style.backgroundColor = "red"
    }
    else {
        body.style.backgroundColor = "blue"
    }
    isBlue = !isBlue;
}, 100);