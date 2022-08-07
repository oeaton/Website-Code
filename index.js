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

document.getElementById('project-text-button1').addEventListener('mouseover', function() {
    document.getElementById('project-transition1').style.backgroundColor= 'rgba(0,0,0,0.8)';
    document.getElementById('project-text-button1').style.background = 'rgba(0, 0, 0, 0)';
    document.getElementById('project-text-button1').style.border = 'rgba(0, 0, 0, 0)';
});

document.getElementById('project-text-button1').addEventListener('mouseout', function() {
    document.getElementById('project-transition1').style.backgroundColor= 'rgba(0,0,0,0)';
    document.getElementById('project-text-button1').style.background = 'rgba(0, 0, 0, 0.3)';
    document.getElementById('project-text-button2').style.border = 'rgba(0, 0, 0, 0.1)';
});

document.getElementById('project-text-button2').addEventListener('mouseover', function() {
    document.getElementById('project-transition2').style.backgroundColor= 'rgba(0,0,0,0.8)';
    document.getElementById('project-text-button2').style.background = 'rgba(0, 0, 0, 0)';
    document.getElementById('project-text-button2').style.border = 'rgba(0, 0, 0, 0)';
});

document.getElementById('project-text-button2').addEventListener('mouseout', function() {
    document.getElementById('project-transition2').style.backgroundColor= 'rgba(0,0,0,0)';
    document.getElementById('project-text-button2').style.background = 'rgba(0, 0, 0, 0.3)';
    document.getElementById('project-text-button2').style.border = 'rgba(0, 0, 0, 0.1)';
});

document.getElementById('project-text-button3').addEventListener('mouseover', function() {
    document.getElementById('project-transition3').style.backgroundColor= 'rgba(0,0,0,0.8)';
    document.getElementById('project-text-button3').style.background = 'rgba(0, 0, 0, 0)';
    document.getElementById('project-text-button3').style.border = 'rgba(0, 0, 0, 0)';
});

document.getElementById('project-text-button3').addEventListener('mouseout', function() {
    document.getElementById('project-transition3').style.backgroundColor= 'rgba(0,0,0,0)';
    document.getElementById('project-text-button3').style.background = 'rgba(0, 0, 0, 0.3)';
    document.getElementById('project-text-button3').style.border = 'rgba(0, 0, 0, 0.1)';
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
        document.getElementById('mobile-menu').style.display = 'flex';
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

document.getElementById('hamburger').addEventListener('click', function () {
    
});