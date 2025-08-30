//Seting timeout function

// setTimeout(function , 2000);//2000ms = 2s
//after 2s the function will be executed

setTimeout(()=>{});

console.log("set timeout function");
setTimeout(() => {
console.log("welconeto js");
},5000);

console.log("set timeout function end");

//setInterval function
//it will run the function after every given interval of time
setInterval (() => {}); 

setInterval(() => {
    console.log("hello every 2s");
},2000);//it will run after every 2s