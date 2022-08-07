function popUpDelete () {
    document.getElementById('pop-up').style.display = 'none';
}

window.addEventListener('load', function () {
    document.getElementById('nav').style.top = '0px';
    document.getElementById('pop-up').style.opacity = 1;
});

document.getElementById('pop-button').addEventListener('click', function() {
    document.getElementById('pop-button').style.pointerEvents = 'none';
    document.getElementById('pop-up').style.opacity = 0;
    setTimeout(popUpDelete, 501);
});