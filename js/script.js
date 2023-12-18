

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

// function setCookie(cName, cValue, exDay) {
//     //   cookie format : "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"
//        const d = new Date();
//        d.setTime(d.getTime() + (exDay * 24 * 60 * 60 * 1000));
//        let expires  = 'expires='+d.toUTCString();

//        document.cookie = cName + '=' + cValue + ';' + expires + ';path=/';
// }

// function getCookie(cName){
//     // cookie format : name=ali jaber; username=bidyut || ['name=ali jaber', ' username=bidyut']

//        const cookieArr = document.cookie.split(';');
//     //    console.log(cookieArr);
//        let name = cName + '=';
//        for (let i = 0; i<cookieArr.length; i++){
//         let cookieElement = cookieArr[i];
//         // console.log(cookieElement);
//         while(cookieElement.charAt(0) === ' '){
//             cookieElement = cookieElement.substring(1);
//         }
//         if(cookieElement.indexOf(name) === 0){
//               return cookieElement.substring(name.length);

//         } 

//        }
//        return 'invalid input';
// }

// function checkCookie(cName){
//     let userName = getCookie(cName);
//     if(userName !== '') {
//         alert('welcome ' + userName);
//     } else {
//         userName = prompt("enter your name : " , "demo name");
//         if(userName !== "" || userName !==  null){
//             setCookie(cName, userName, 2);
//         }
//     }
// }
// ----------------js cookie end-----------------

// ----------------js forms API start-----------------
// function myFunction() {
//     const inputObj  = document.getElementById('id1');

//     if(inputObj.validity.rangeOverflow){
//        inputObj.setCustomValidity('you have made range overflow error');
//     } else if(inputObj.validity.rangeUnderflow){
//         inputObj.setCustomValidity('range underfllow error occured');
//     } else if(inputObj.validity.valueMissing){
//         inputObj.setCustomValidity('give the value');
//     }
//     if(!inputObj.checkValidity()){
//          document.getElementById('demo').innerHTML = inputObj.validationMessage;
//     }
// }
// ----------------js forms API end-----------------

// ----------------js history API start-----------------
// function goBack(){
//     window.history.back();
// }

// function backTo(n){
//     window.history.go(n);
// }

// function goForward(){
//     window.history.forward();
// }

// function getHistory(){
//     alert(window.history.length);
// }
// ----------------js hitory API end-----------------

// ----------------js storage API start-----------------
// local storage
// function setLocalStorage(key, value){
//     localStorage.setItem(key, value);
// }

// function getLocalStorage(key){
//     alert(localStorage.getItem(key));
// }

// function removeLocalStorage(key){
//     localStorage.removeItem(key);
// }

// function clearLocalStorage(){
//     localStorage.clear();
// }
// session storage
// function setSessionStorage(key, value){
//     sessionStorage.setItem(key, value);
// }

// function getSessionStorage(key){
//     alert(sessionStorage.getItem(key));
// }

// function removeSessionStorage(key){
//     sessionStorage.removeItem(key);
// }

// function clearSessionStorage(){
//     sessionStorage.clear();
// }
// ----------------js storage API end-----------------

// ----------------js web Worker API start-----------------
// let w;

// function startWorker(){
//       if(typeof Worker !== 'undefined'){

//         if(typeof w == 'undefined'){
//             w = new Worker('./js/worker.js');
//         }

//         w.onmessage = function(event) {
//             document.getElementById('demo').innerHTML = event.data;
//             console.log(event);
//         }
//       } else {
//         alert('your browser does not support Worker API');
//       }
// }

// function stopWorker(){
//        if(typeof w !== 'undefined'){
//         w.terminate();
//         w = undefined;
//        }
// }
// ----------------js web Worker API end-----------------

// ----------------js fetch API start-----------------
// const p = document.getElementById('demo');

// function getData() {
//     fetch('http://127.0.0.1:5500/data.txt')
//         .then(res => res.text())
//         .then(data => {
//             p.innerText = data
//         });

// }
// async function getData() {
//    const res = await fetch('http://127.0.0.1:5500/data.txt');
//    const data = await res.text();
//    p.innerText = data;
// }
// ----------------js fetch API end-----------------

// ----------------js geoLocation API start-----------------
// const p = document.getElementById('demo');

// function getLocation() {
//     if(navigator.geolocation){
//        navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         p.innerHTML = 'geolocation is not supported';
//     }
// }
// function getLocation() {
//     if(navigator.geolocation){
//        navigator.geolocation.watchPosition(showPosition, showError);
//     } else {
//         p.innerHTML = 'geolocation is not supported';
//     }
// }
// function showPosition(position) {
//     console.log(position);
//     console.log(position.coords.accuracy);
//     p.innerHTML = 'latitude is : ' + position.coords.latitude +
//     " <br/> longitude is : " + position.coords.longitude;
// }

// function showError(error) {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         p.innerHTML = "User denied the request for Geolocation."
//         break;
//       case error.POSITION_UNAVAILABLE:
//         p.innerHTML = "Location information is unavailable."
//         break;
//       case error.TIMEOUT:
//         p.innerHTML = "The request to get user location timed out."
//         break;
//       case error.UNKNOWN_ERROR:
//         p.innerHTML = "An unknown error occurred."
//         break;
//     }
//   } 
// ----------------js geoLocation API end-----------------

// ----------------js AJAX start-----------------
// function sendRequest(method, url, data) {
//       const promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.onload = function() {
//           if(this.status < 400){ 
//               resolve(this.response);
//             } else {
//               reject(`application error and status is ${this.status}`)
//             }
//        }

  //      xhr.onerror = function(){
  //          reject('There was an error.');
  //      }
 
  //       xhr.open(method, url);
  //       xhr.responseType = 'json';
      
  //       xhr.send(data );
  //     });
  //     return promise;
      
  //  }

// function getData() {
//       sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/one')
//           .then((xhr) => {
//             console.log(xhr);
//           })
//           .catch((err) => {
//             console.log(err);
//           })
   
// }

// function sendData() {
//       sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', 
//       JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       }))
//       .then((xhr) => {
//         console.log(xhr);
//       })
// }

// const getBtn = document.getElementById('get');
// const sendBtn = document.getElementById('send');

// getBtn.addEventListener('click', getData);
// sendBtn.addEventListener('click', sendData);
// ----------------js AJAX  end-----------------

// ----------------js AJAX  end-----------------
  const person = {
       name: 'ali',
       age: 23,
  }
  console.log(JSON.stringify(person));
// ----------------js AJAX  end-----------------