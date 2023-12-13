

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
// const href = document.getElementById('href');
// const hostname = document.getElementById('hostname');
// const pathname = document.getElementById('pathname');
// const protocol = document.getElementById('protocol');
// const port = document.getElementById('port');


// href.innerText = location.href;
// hostname.innerText = location.hostname;
// pathname.innerText = location.pathname;
// protocol.innerText = location.protocol;
// port.innerText = location.port;

// function newDoc() {
//     window.location.assign("https://www.w3schools.com")
//   }
// ----------------window.location end-----------------

// ----------------window.history start-----------------
//   function goBack(){
//     window.history.back();
//   }

//   function goForward() {
//     window.history.forward()
//   }
// ----------------window.location end-----------------

// ----------------js navigator start-----------------
// const appName = document.getElementById('appName')
// const appCodeName = document.getElementById('appCodeName');
// const platform = document.getElementById('platform');
// const cookieEnabled = document.getElementById('cookieEnabled');
// const product = document.getElementById('product');
// const appVersion = document.getElementById('appVersion');
// const userAgent = document.getElementById('userAgent');
// const language = document.getElementById('language');
// const online = document.getElementById('online');
// const javaEnabled = document.getElementById('javaEnabled');

// appName.innerHTML = navigator.appName;
// appCodeName.innerHTML = navigator.appCodeName;
// platform.innerText = navigator.platform;
// cookieEnabled.innerText = navigator.cookieEnabled;
// cookieEnabled.innerText = navigator.cookieEnabled;
// product.innerText = navigator.product;
// appVersion.innerText = navigator.appVersion;
// userAgent.innerText = navigator.userAgent;
// language.innerText = navigator.language;
// online.innerText = navigator.online;
// javaEnabled.innerText = navigator.javaEnabled;
// ----------------js navigator end-----------------

// ----------------js popup alert start-----------------
// const confirm = document.getElementById('confirm');
// const prompt = document.getElementById('prompt');

// function showAlert(){
//     window.alert('hello world');
// }

// function showConfirm(){
//     let text;
//     const ans = window.confirm('please confirm');
//     if(ans){
//         text = 'ok';
//         confirm.innerText = text;
//     } else {
//         text = 'cancel';
//         confirm.innerText = text;
//     }
// }

// function showPrompt(){
//     const name = window.prompt('enter your name : ');
//     if(name){
//         prompt.innerText = 'hello ' + name;
//     } else {
//         prompt.innerText = 'no input';
//     }
// }
// ----------------js popup alert end-----------------

// ----------------js timing events start-----------------
// const timeout =  document.getElementById('timeout');
// const interval = document.getElementById('interval');

// let timeoutInstance;
// let intervalInstace;
// function startTimeout(){
//    timeoutInstance = setTimeout(function(){
//         timeout.innerHTML = 'hello world';
//     },3000);
// }

// function stopTimeout(){
//     clearTimeout(timeoutInstance);
// }

// function startInterval(){
//   intervalInstace = setInterval(function(){
//         interval.innerHTML = new Date().toLocaleTimeString();
//     },1000)
// }

// function stopInterval(){
//     clearInterval(intervalInstace);
// }
// ----------------js timing events end-----------------

// ----------------js cookie start-----------------
function setCookie(cName, cValue, exDay) {
    const d = new Date();

    d.setTime(d.getTime() + (exDay * 24 * 60 * 60 * 1000));

    let expires = 'expires=' + d.toUTCString();
    document.cookie = cName + '=' + cValue + ';' + expires + ';path=/';
}

function getCookie(cName) {
    // 'name=ali'
    const cookieArray = document.cookie.split(';');
    console.log(cookieArray);
    let name = cName + '=';
    for (let i = 0; i < cookieArray.length; i++) {
        let cookieText = cookieArray[i];

        while (cookieText.charAt(0) === " ") {
            cookieText = cookieText.substring(1);
        }
        if (cookieText.indexOf(name) === 0) {
            return cookieText.substring(name.length);
        }
    }
    return "";
}

function checkCookie(name) {
    let username = getCookie(name);
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
// ----------------js cookie end-----------------