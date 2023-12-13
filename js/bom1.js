

// -----------------window.screen object start--------------
// const width = document.getElementById('width');
// const height = document.getElementById('height');
// const availWidth = document.getElementById('availWidth');
// const availHeight = document.getElementById('availHeight');
// const colorDepth = document.getElementById('colorDepth');
// const pixelDepth = document.getElementById('pixelDepth');

// width.innerText = screen.width;
// height.innerText = screen.height;
// availWidth.innerText = screen.availWidth;
// availHeight.innerText = screen.availHeight;
// colorDepth.innerText = screen.colorDepth;
// pixelDepth.innerText = screen.pixelDepth;

// -----------------window.screen object end--------------

// ----------------window.location start-----------------
const href = document.getElementById('href');
const hostname = document.getElementById('hostname');
const pathname = document.getElementById('pathname');
const protocol = document.getElementById('protocol');
const port = document.getElementById('port');


href.innerText = location.href;
hostname.innerText = location.hostname;
pathname.innerText = location.pathname;
protocol.innerText = location.protocol;
port.innerText = location.port;
