

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

// ----------------js JSON  start-----------------
  // const person = {
  //      name: 'ali',
  //      age: 23,
  // }
  // console.log(JSON.stringify(person));
// ----------------js JSON  end-----------------

// ----------------js object getter and setter start-----------------
// const person = {
//   firstName: 'ali abdullah',
//   lastName: 'jaber',
//   // set age(year){
//   //    this.year = year ;
//   // }
// }
// person.age = 24;
// console.log(person);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   }
// };

// // Set an object property using a setter:
// person.lang = "en";
// console.log(person);

// js contractor start
// function Person(first, last, age,) {
//   this.firstName = first;
  // this.lastName = last;
  // this.age = age;
  // this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50);
// console.log(myFather.age);
// const myMother = new Person("Sally", "Rally", 48);
// console.log(myMother.eyeColor);
// ----------------js object getter and setter  end----------------

// ----------------js Prototype start -----------------
// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// Person.prototype.nationality = "English";

// console.dir(myFather.nationality)
// ----------------js Prototype end-----------------

// ----------------js object iterable start -----------------
// const number = {
//   one: 1,
//   two: 2,
//   three: 3
 
// }
// const nums = [ 1, 2, 3 ];
// // console.dir(number);
// const numIterator = nums[Symbol.iterator]();

// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// const myNumbersObj = {};

// myNumbersObj[Symbol.iterator] = function(){
//            let n = 0;
//            let done = false;
//         return {
         
//              next(){
//                 n += 1;
//                 if(n > 100) { done = true }
//                   return {
//                        value: n ,
//                        done: done
//                   }
//               }
//         }
// }

// for ( let myNumber of myNumbersObj ){
//   console.log(myNumber);
// }

// ----------------js object iterable end-----------------

// ----------------js function closer start-----------------
// function closer method 1 not using self invocation
  //   function add(){
  //       let count = 0;
  //        function plus(){
  //         count++;
  //         return count;
        
  //       }

  //       return plus;
  //  };
 
  //  const func = add();
  //  console.dir(func);
  //  func();
  //  func();
  //  func();
  //  console.log(func());
  // function closer method 2 using self invocation
        //   const add = (function(){
        //     let count = 0;
        //     function plus(){
        //       count++;
        //       return count;
        //     }
        //     return plus;
        // })();

        // add();
        // add();
        // console.log(add());
// ----------------js function closer end-----------------

// ----------------js asynchronous behaviour start-----------------
// js callback function start
// function displayOutput(ans){
//   console.log(ans);
// }
// function calculate(number1, number2 ,callback) {
//   let ans = number1 + number2;
//   // checking whether the callback function has been passed or not as argument
//       if(callback) {
//         callback(ans);
//       }
// }

//  calculate(2, 5, function(result){
//   console.log(result);
//  });
// displayOutput(result);


// console.log('hello 1');
// setTimeout(function(){
//   console.log('hello 2');
// },1000);
// console.log('hello 3');

// callback second example:
// let paymentDone = true;
// let mark = 90;
// function enroll(callback){
//      console.log('step 1 : enrollment start');
//       if(paymentDone){
//         setTimeout(function(){
//           callback();
//      },2000);
//       } else {
//         console.log('payment failed');
//       }
// }

// function progress(callback){
//       console.log('step 2: progress start');
//       if(mark >= 80){
//         setTimeout(function(){
//           callback();
//       },1000);
//       } else {
//         console.log('not enough mark');
//       }
// }

// function getCertificate(){
//         console.log('step 3 : certificate is preparing');
//         setTimeout(function(){
//           console.log('congratulations !');
//         },5000)
// }

// enroll(function(){
//        progress(getCertificate)
// });

// js promise implementation
// let paymentDone = true;
// let marks = 70;
// function enroll(){
//        console.log('step 1: enroll start');
    
//      const promise = new Promise(function(resolve, reject){
//               setTimeout(function(){
//                 if(paymentDone){
//                     resolve();
//                 } else {
//                     reject('payment failed');
//                 }
//               },2000)
//      });
//      return promise;
// }

// function progress(){
//   console.log('step 2 : progress start');

//   const promise = new Promise(function(resolve, reject){
//           setTimeout(function(){
//               if(marks > 80){
//                 resolve();
//               } else {
//                 reject('not enough marks');
//               } 
//           },100)
//   });
//      return promise;
// }

// function getCertificate(){
//     console.log('step 3 : getCertificate start');

//     const promise = new Promise(function(resolve){
//             setTimeout(function(){
//               resolve('Congrats !!!');
//             },1000)
//     });
//     return promise;
// }

// enroll()
//      .then(progress)
//      .then(getCertificate)
//      .then(function(msg){
//           console.log(msg);
//      })
//      .catch(function(err){
//           console.log(err);
//      })
// async-await syntax 
// async function completeCourse(){
//      try { await enroll();
//        await progress();
//        const msg = await getCertificate();
//          console.log(msg);
//         } catch(err) {
//             console.log(err);
//         }
// }
// completeCourse()
// ----------------js asynchronous behaviour end-----------------

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

// ----------------js DOM recap start-----------------

// ----------------js DOM recap end-----------------

// ----------------js modern js start-----------------
//normal function
// function func(){
//   return 10;
// }

//arrow function

// const func = (n) => n;

// console.log(func(12));
// const javaScript = {
//      name: 'JavaScript',
//      libraries: ['React', 'Angular', 'Vue'],
//      printLIbraries: function(){
//       // console.log(this);
//          this.libraries.forEach((library) => {
//               //  const self = javaScript;
//               //  arrow func is not concern of 'this' keyword
//               console.log(`${this.name} is the parent of ${library}`);
//          })
//      }
// }

// javaScript.printLIbraries();
// const searchInput = document.getElementById('search');
// const display = document.getElementById('result');
// const thanks = document.getElementById('thanks');

// function show(){
  
//      display.innerHTML = this.value;
//      setTimeout(function(){
//       thanks.innerHTML = `you have typed ${this.value}`;
//      },1000)
// }

// searchInput.addEventListener('keyup',function() {
 
//   display.innerHTML = this.value;
// })

// // every normal function is constructor function 
// function Person(name) {
//   this.name = name;
// }
// // in normal function new keyword is applicable
// const sakib = new Person('sakib');
// console.log(sakib);


// arrow functions are not constructor function
// const Person = (name) => {
//       this.name = name;
// }
// new keyword is not applicable 
// const sakib = new Person('sakib'); //it will give error
// console.log(sakib); 

// falsy values are : explicitly false, 0, null, undefined, "", NaN

// const x = undefined;
// if(x){
//   console.log('i am truthy');
// } else {
//   console.log('i am falsy');
// }
// ternery operator 
// let age=22;
// const status = (age >= 20) ? 'adult' : (age < 10) ? 'child' : 'teenager';
// console.log(status);


// arr.find() method
// const arr = [ 1, 2, 3, 4, 5, 6, 7 ];
// const output = arr.find(function(currentElement, currentIndex, arr){
//      return currentElement > 4;
// })

// console.dir(output);

// class Student {
//        Constructor(name, age){
//              this.name = name;
//              this.age = age;
//        }

//        test(param){
//         console.log('hello '+ param); 
//        }
      
//        exampleFunction(){
//           let arr = [ 1, 2, 3, 4 ];
//           arr.find((element) => {
//                 this.test(element)
//           })
//        }

// }

// const ali = new Student('ali jaber', 22);
// ali.exampleFunction();

// arr.findIndex() method:
// const numbers = [ 4, 5, 7, 9, 11, 13 ];
// const output = numbers.findIndex((currValue, currIndex, arr) => {
//        return (currValue > 111);
// })

// console.log(output);

// arr.filter() method: 
// const numbers = [ 4, 5, 7, 9, 11, 13 ];
// const result = numbers.filter((currentValue, index, arr) => {
//         console.log(index);
//         console.log(arr);
//          return currentValue > 7;
// })
// console.log(numbers);
// console.log(result); 

// arr.slice() :
// const numbers = [ 4, 5, 7, 9, 11, 13 ];
// const result = numbers.slice(0, 5);
// console.log(result);

// arr.splice() : change the original Array
// const numbers = [ 4, 5, 7, 9, 11, 13 ];
// const result = numbers.splice(2, 3, 20, 30, 40);

// console.log(numbers);
// console.log(result);

// arr.concat() :
// const numbers1 = [ 4, 5, 7, 9, 11, 13 ];
// const result = numbers1.concat([ 40, 50, 70, 90, 110, 130 ]);
// console.log(result);
// console.log(numbers1);

// arr.push() :
// const numbers1 = [ 4, 5, 7, 8, 9, 10, 11, 13 ];
// const result = numbers1.push(100, 200, 300, 400); //result variable holds the length of original arr
// console.log(numbers1);
// console.log(result);

// arr.map():
// const numbers = [ 4, 5, 7, 8, 9, 10, 11, 13 ];
// const result = numbers.map((num) => {
//   return  num * 3;
// })

// console.log(result);
// console.log(numbers);

//arr.reduce() :
// const numbers = [ 4, 5, 7, 8, 9, 10, 11, 13 ];
// const result = numbers.reduce((prevValue, currValue) => {
//         return prevValue + currValue;
// },0)
// console.log(result);

// for loops in complex syntax:
// const numbers = [ 4, 5, 7, 8, 9, 10, 11, 13 ];

// let i = 0;
// for(;;){
//   if(i < 50){
//     console.log(i);
//   } else {
//     break;
//   }
//   i++;
// }

// const myObj = {
//     name: 'javascript',
//     age: 50,
// }

// for(num in numbers){
//   console.log(num);
// }

// let x = 4;
// let y = 5;
// const myObj = {
//     name: 'javascript',
//     age: 50,
//     x,
//     y,
// }
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));

// const getNum = (x = 10) => x;
// console.log(getNum(null));

//spread operator
// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// const numbers = [...numbers1, ...numbers2];
// console.log(numbers);
// const arr = [...numbers1]
// numbers1.push(7);
// console.log(arr);
// console.log(numbers1);

// const obj1 = {
//   name: 'ali',
//   degree: 'BSc'
// }
// const obj2 = {
//   age: 22
// }

// const myObj = {
//   ...obj1,
//   ...obj2
// }
// console.log(myObj);

// rest operator :
// const getNum = (a, ...params) => {
//      console.log(a);
//      console.log(params);
// }
// getNum(1,2,3,4);


// obj destructuring
// const obj = {
//   name: 'ali',
//   age: 22,
//   home: {
//     dist: 'tangail',
//     distance: {
//       fromDhaka: '145 km',
//       fromJamalpur: '70 km',
//       timeNeeded: {
//         byBus: '7 hours',
//         byTrain: '6 hours'
//       }
//     }
//   }
// }
// //destructuring of nested property of obj
// const { home : { distance: { timeNeeded: { byBus: onHighWay } = {} } } } = obj;
// console.log(onHighWay);

// array destructuring
// const arr = [ 1, 2, 3, 4, 5, 6 ];
// const [,,a,, b]  = arr; 
// const arr = [ 1, 2, 3, [10, 20, 30, 40], 4, 5, 6 ];
// const [,,,[,a,,b]] = arr;

// console.log(a, b);

// value swap destructuring
// let a = 4;
// let b = 5;
// [b, a]=[a, b]
// console.log(a, b);


// es6 export import
// import externalFunc, {pi as externalPi, a as externalA} from './worker.js'
// console.log( externalPi, externalA);
// externalFunc();


// tagged template literal

// const player1 = 'Riyad';
// const player2 = 'Mushfiq';
// function addMr(strings, ...values){
//      console.log(strings); //strings = [ 'we have ', ' and ', ' in bd cricket team' ];
//      console.log(values); //values = [ 'Riyad', 'Mushfiq' ];
//      const modifiedStr = strings.reduce((prev, curr) => {
//            return prev + curr + (values.length ? 'Mr ' + values.shift() : "");
//      },"");
//      return modifiedStr;
// }
// console.log(addMr`we have ${player1} and ${player2} in bd cricket team`);

// es6 set data structure

// let myArr = [1, 2, 3, 4, 5, 6];
// let mySet = new Set();
// let obj = {
//      a: 2,
//      b: 3
//   }


// mySet.add(2);
// mySet.add(3);
// mySet.add(14).add(15).add(16).add('bangladesh').delete(15);
// mySet.add(obj)

// mySet.add(obj)
// let newArr = [...mySet]

// console.log(mySet.size);
// console.log(mySet);
// console.log(newArr);
// let arr1 = [1, 2, 3, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// console.log([...new Set(arr1)]);

// console.log(new Set([...arr1, ...arr2]));
// const intersectionOfSet = new Set(arr1.filter((element) => new Set(arr2).has(element)));
// console.log(intersectionOfSet);

// console.log(Array.from(intersectionOfSet)); // converting arr from a set
// const differenceOfSet = new Set(new Set(arr1.filter((element) => !new Set(arr2).has(element))));
// console.log(differenceOfSet);


//weakSet
// let wkSet = new WeakSet();
//    wkSet.add([{a:1, b: 2},{a:1, b: 2}])
//   //  wkSet.add({a:1, b: 2})

// console.log(wkSet);
// let wkSet = new WeakSet();
// class Person{
//      constructor(){
//          wkSet.add(this);
//      }
//      method(){
//       if(!wkSet.has(this)){
//         throw new Error('invalid func call');
        
//       }  else {
//         return 'hello world';
//      }
// }
// }
// const person1 = new Person();
// console.log(person1);
// console.log(Person.prototype.method());
// console.log(person1.method());

// es6 copyWithin() method : 
// const arr = ['js', 'python', 'java', 'c++', 'c#', 'c'];
// const x = arr.copyWithin(-1, -5, -2);
// console.log(arr);
// console.log(x);

// global vs window object :
// global.setTimeout(() => {
//      console.log('hello');
// }, 3000);

// window.setTimeout(() => {
//      console.log('hello');
// }, 3000);


// globalThis.setTimeout(() => {
//      console.log('hello');
// }, 3000);

// BigInt datatype
// let largestNumber = Number.MAX_SAFE_INTEGER;
// largestNumber = largestNumber + 1;
// largestNumber = BigInt(largestNumber) + 1n;
// console.log(largestNumber);

// optional chaining in arr
// let arr = ['red', 'green', 'black'];
// arr = null;

// console.log(arr?.[1]);

// nullish coalescing operator
// let language;
// language =  NaN;
// console.log(language ?? 'javaScript');
// console.log(language || 'javaScript');

// dynamic import : method 1

// async function a (){
//   const {add, remove} = await import('./worker.js');
//   // const {remove} = await import('./worker.js');
//        add();
//        remove();
// };
// a();

// dynamic import : method 2

// (async function(){
//   const {add, remove} = await import('./worker.js');
//   // const {remove} = await import('./worker.js');
//        add();
//        remove();
// })();

// dynamic import : method 3
// import('./worker.js')
//          .then(({add, remove}) => {
//           add();
//           remove();
//          })

// immutable arr.toReversed() : ES14
// const arr = [1, 2, 3, 4, 5, 6];
// const reversedArr = arr.toReversed(); //instead of reverse()

// // immutable arr.toSpliced() 
// const arr = [1, 2, 3, 4, 5, 6];
// const splicedArr = arr.toSpliced(2, 2, 100, 200, 300, 400);
// console.log(arr);
// console.log(splicedArr);

// immutable arr.with() 
// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.with(3, 300);
// console.log(arr);
// console.log(result);

// numeric immuted sort method
// const arr = [22, 3, 7, 15, 1, 12];

// const sortedArr = arr.toSorted((a, b) => a - b)
// console.log(sortedArr);
// console.log(arr);

// sort arr of object by toSorted() :
const arr = [
        {
          name: 'Volvo',
          price: 10000
        },
        {
          name: 'BMW',
          price: 5000
        },
        {
          name: 'Saab',
          price: 7000
        }
];
// const sortedArr = arr.toSorted((a, b) => {
//         return a.price - b.price;
// })
const sortedArr = arr.toSorted((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        if(x < y) {
          return -1;
        } else if (x > y) {
          return 1;
        } else {
          return 0;
        }
});

console.log(sortedArr);
console.log(arr);
// ----------------js modern js end-----------------
