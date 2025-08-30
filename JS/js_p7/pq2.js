//Write an arrow function named arrayAverage that accepts an array of numbers and 
// returns the average of those numbers.

const arrayAvg = (array) => {
    let total  = 0; 
    for (let number of array){
        total += number;
    }
    return total/array.length;
}

array = [4,4,4,4,4,4];
console.log(arrayAvg(array));

//Write an arrow function named is Even() that takes a single number
// as argument and returns if it is even or not

const Even = n => n%2 === 0;
console.log(Even(5));
console.log(Even(6));