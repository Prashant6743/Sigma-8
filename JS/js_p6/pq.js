let arr = [12,34,45,56,67,78,89];
let num = 45;

function getElement(arr, num){
    for (let i = 0; i<arr.length; i++){
        if (arr [i]>num){
            console.log(arr[i]);
            
        }
    }
}

getElement(arr, num);