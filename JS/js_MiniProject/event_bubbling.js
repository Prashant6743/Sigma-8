//we used stopPropagation() to stop the event bubbling

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div clicked ");
});

ul.addEventListener("click", function(){
    stopPropagation();
    console.log("ul clicked ");
});
for(li of ls){
    li.addEventLsitener("click", function(){
        console.log("li clicked ");
    });
}