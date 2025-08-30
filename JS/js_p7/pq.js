const square = (n) => n*n;
//other way to write
const square2 = m => m*m;
square(5);
console.log(square(5));


let id = setInterval(() => {
    console.log("hello every 2s");
},2000);
setTimeout(() => {
    clearInterval(id);
    console.log("clear interval run after 10s");
},10000);//it will stop the setInterval after 10s
