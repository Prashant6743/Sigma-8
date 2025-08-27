let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for (let i = fruits; i < fruits.length; i++) {
    console.log( i,fruits[i]);
}
//reverse order
console.log("Reverse Order");
for (let i = fruits.length-1; i >0 ; i--) {
    console.log(i,fruits[i]);
}

let heros = [ [ "Superman", "Spiderman", "Ironman", "Captain America"] ,
              [ "Hulk", "Thor", "Black Widow"]
]
for (let i = 0; i < heros.length; i++) {
    console.log (i,heros[i]);
    for (let j = 0 ; j < heros[i].length; j++) {
        console.log(`j=${j},${heros[i][j]}`);
    }
}

// let students = [["aman","23"], ["prashant","24"], ["sachin","25"]];

// for (let i = 0; i < students.length; i++) {
//     console.log( `info of ${students[i]}`);
//     for(j=0; j<students[i].length;j++){
//         console.log(`${students[i][j]}`)
//     }
// }


let students = [["aman", "34"], ["prashant","23"],["prithvi","21"]];

for (let i = 0 ; i<students.length; i++ ){
    console.log (`info of #${students[i]}`);
    for (j = 0 ; j<student[i].length;j++){
        console.log(`${students[i][j]}`)
    }
}