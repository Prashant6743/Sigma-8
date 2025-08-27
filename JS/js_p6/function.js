function hello (){
    console.log("HEllo World");
}
hello();

function PrintName (){
    console.log("Prashant Kumar");
    console.log("Prithvi Raj");

}

function Print1to5 (){
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
Print1to5();


function Dice(){
   let rand =  Math.floor(Math.random()*6)+1;
    console.log(rand);
}

Dice();

function information(name, age ){
    console.log(`${name} and age is ${age}`); 
}
information("Prashant", 24);


function printTable (n){
    for (let i = n ; i <=n*10 ; i+=n){
        console.log(i);
    }
}

printTable(5);

function sum (a,b){
    return a+b;
}

console.log(sum(sum(5,6),4));

function isAdult(age){
    if (age >= 18){
        return "Adult";
    }else{
        return"Not Adult";
    }

}

function getsum (n){
let sum = 0 ; 
for (let i = 1; i<=n ; i++){
    sum += i; 
}
return sum;
}
console.log(getsum(5));