


const width = document.getElementById('width');
const height = document.getElementById('height');
const availWidth = document.getElementById('availWidth');
const availHeight = document.getElementById('availHeight');
const colorDepth = document.getElementById('colorDepth');
const pixelDepth = document.getElementById('pixelDepth');

width.innerText = screen.width;
height.innerText = screen.height;
availWidth.innerText = screen.availWidth;
availHeight.innerText = screen.availHeight;
colorDepth.innerText = screen.colorDepth;
pixelDepth.innerText = screen.pixelDepth;

