let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
   
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});
// this is event delegation for delete button IN already existing btn 
// let dltbtns = document.querySelectorAll(".delete");
// for(dltbtn of dltbtns){
// dltbtn.addEventListener("click", function(event){
// let parent = this.parentElement;
//  parent.remove();
//     });
// }

ul.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
    }

})