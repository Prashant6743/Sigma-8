function outerfunc(){
    let x = 5;
    let y = 6;
    function innerfunc(){
        console.log(x);
    }
    innerfunc();
}

let greet = "hello";
function changegreet(){
    let greet = "namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
}
console.log(greet);
changegreet();

let sum = function (a,b){
    return a+b;
}

let hello = function (){
    console.log("Hello World");
}