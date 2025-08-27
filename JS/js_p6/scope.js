let sum = 54;//global scope

function calsum(a,b){
    let sum = a+b;//function scope
console.log("Sum is:",sum);

}

calsum(5,6);
console.log("Global Sum is:",sum);

var a = 45;
let age = 25;
if (age>=18 ){ 
    let str = "adult ";
console.log(str);
}