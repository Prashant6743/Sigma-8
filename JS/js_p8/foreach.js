let arr = [1,2,3,4,5];
let print = function(e){
    console.log(e);
}
arr.forEach(print);//it will call print function for each element of array

//or we can also write like this
arr.forEach(function(el){
    console.log(el);
});

let arr2 = [
    {
    name: "prashant",
    age: 21
},{
    name: "kumar",
    age: 22
},{
    name: "singh",
    age: 20
}];

arr2.forEach((student) =>{
    console.log(student.name);
} );