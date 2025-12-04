let inp = document.querySelector("#text");
let p = document.querySelector("p");
let box = document.querySelector("#box");

box.addEventListener("mouseout", function(event){
    box.style.backgroundColor = "aqua";
});
//keypress example

//scroll example


inp.addEventListener("input", function(){
    console.log(inp.value); 
    
p.innerText = this.value;
});
