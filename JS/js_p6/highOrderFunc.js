

function multiplegreeting(func, n){
    for (let i = 1 ; i <n ; i++){
        func ();
    }

}
let greet = function (){
    console.log("Hello World");
}

multiplegreeting(function () {console.log("namaste")}, 5 );