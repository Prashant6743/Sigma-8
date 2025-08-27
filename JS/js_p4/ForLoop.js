//for loop 
//let n = prompt("Enter a number");
let n = 0; // Example value for n
for (let i = 0; i <= n; i++) {
    console.log(i);
}

for (i=5; i>=0; i=i-3){
    console.log(i);
    
}
console.log("Odd Numbers");
//for loop  for od numbers
for (let i = 1; i<=15; i+=2){
    console.log(i);
}

console.log("Backward Loop");

for (let i = 15; i>=1; i-=2 ){
    console.log(i);
}

console.log("Even Numbers");
//for loop for even numbers
for(let i = 10; i>=2; i-=2){
    console.log(i);
}

//table of 5
console.log("Table of 5"); 
for (let i = 5; i <= 50; i+=5){
    console.log(i);

}

//table of any number 

let num = prompt("Enter a number for table: ");

num = parseInt(num); // Ensure num is an integer
console.log(`Table of ${num}`);
for (let i =num; i <=num*10; i+=num){
    console.log(i);
}

//nested for loop
console.log("Nested For Loop");
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop iteration: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

//while loop
console.log("While Loop");
let i = 0;
while(i < 5) {
    console.log(i);
    i++;

}