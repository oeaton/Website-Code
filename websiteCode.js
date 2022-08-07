var hamActive = false;

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

document.getElementById('hamburger').addEventListener('click', function() {
    var span = document.getElementById('hamburger').getElementsByTagName('span');
    if(hamActive == false){
        hamActive = true;
        for(var i = 0; i < span.length; i++){
            span[i].style.backgroundColor = 'rgb(61, 59, 54)';
        }
        document.getElementById('h1').style.transform = 'translateX(4px)';
        document.getElementById('h2').style.transform = 'translateX(-4px)';
        document.getElementById('h3').style.transform = 'translateX(4px)';
        document.getElementById('h4').style.transform = 'translateX(-4px)';
    }else{
        hamActive = false;
        for(var i = 0; i < span.length; i++){
            span[i].style.backgroundColor = 'white';
        }
        document.getElementById('h1').style.transform = 'translateX(0px)';
        document.getElementById('h2').style.transform = 'translateX(0px)';
        document.getElementById('h3').style.transform = 'translateX(0px)';
        document.getElementById('h4').style.transform = 'translateX(0px)';
    }
});