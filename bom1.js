let myWindow;
const width = document.getElementById('width');
const height = document.getElementById('height');

width.innerHTML = window.innerWidth;
height.innerHTML = window.innerHeight;

function openWindow(){
    myWindow = window.open('https://google.com', '_blank');
}

function closeWindow(){
     myWindow.close();
}