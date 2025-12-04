let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//    console.log(inp.value);


// let user = document.querySelector('#User');
// let pass = document.querySelector('#Pass');
// console.log(user.value);
// console.log(pass.value);
// alert(`hi ${user.value}, you password is set to this ${pass.value}` );
//  alert('Form submitedd ');

console.dir(form)


let user = this.elements[0];
let pass = this.elements[1];
console.log(user.value);
console.log(pass.value);

alert(`hi ${user.value}, you password is set to this ${pass.value}` );
 alert('Form submitedd ');
});

