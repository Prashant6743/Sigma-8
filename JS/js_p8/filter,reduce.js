//reduce and filter method in js    
//default parameters in js

let nums = [1,2,3,4,5,6,7,8,9,10];
let ans = nums.filter((el) =>{
    return el % 2 == 0;// even numbers
    return el < 5;// numbers less than 5
} );

//reduce method

let num = [1,2,3,4,5];
let finalval = num.reduce((res, el) => {
    //console.log (res);
     return res+el} );
console.log(finalval);

//find the no is divivisible by 10 or not

let arr = [10,20,30,40,50];
let fans = arr.every((el) => {
   return el%10 == 0;

});
console.log(fans);

//find the min number in an array

let min = arr.reduce((min,el) => {
    if (min< el){
        return min;
    }
    else{
        return el;
    }

});
console.log(min);

//by using a function 

function getMin(arr){
    let min = arr.reduce((min,el) => {
    if (min< el){
        return min;
    }
    else{
        return el;
    }

});
return min;
}

// default parameters in js

function sum(a,b = 5) { //sum(a=5,b  this will give error)not exprected in js 
    return a+b;
}
sum(5);//10 a = 5 and b = 5 
sum(5);//15 or if we use sum(a=5,b) a = 5, b = undefined 

