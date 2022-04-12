let box = document.getElementById('box');
document.onmousemove = (event) => {
    box.style.top = event.clientY - (box.clientHeight / 2) + 'px';
    box.style.left = event.clientX - (box.clientWidth / 2) + 'px';
}

function random(number) {
    return Math.floor(Math.random() * number)
}


document.onclick = function() {
    acak = "rgb(" + random(128) + "," + random(255) + "," + random(214) + ")";
    box.style.background = acak
}