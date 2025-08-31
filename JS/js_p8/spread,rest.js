arrodd = [1,3,5,7];
arreven = [2,4,6,8];

let arr = [...arrodd, ...arreven]; //spread operator

let data = {
    name: "prashant",
    age: 21,
    college: "IIT", 
}

let newdata = {...data, location: "India"}; //spread operator in object

arr = [1,2,3];

let obj1 = {...arr};  // obj = key->value ( it will give index as key and value as value {0:1,1:2,2:3} )
let obj2 = {..."hello"}; // it will give index as key and value as value {0:h,1:e,2:l,3:l,4:o}


//rest operator

function sum(...args){ // it will take all the arguments in the form of array}
    for(let i = 0 ; i<args.length; i++){
        console.log("YOU GAVE US" ,args[i]);
    }
}

function min (a,b,c){
    console.log(arguments); // it will give all the arguments passed to the function
    console.log(arguments.length);
    console.log(arguments.push(5)); // it will give error as arguments is not an array
}

function sum(...args){
    return args.reduce(( sum,el) => sum+el);// it will add all the elements passed to the function
}

function min(msg,...args){
    console.log(msg);
    return args.reduce(( min,el) => {
        if (min > el){
            return el;
        }
        else{
            return min;
        }
    });// it will add all the elements passed to the function
}