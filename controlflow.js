// 1.Write a program that takes in an array of numbers and consoles the first four items multiplied by itself 
// and the last two added by 10. Return the array with the new values

function transformArray(arr) {
for (let i = 0; i < 4; i++) {
    arr[i] *= arr[i];
}

for (let i = arr.length - 2; i < arr.length; i++) {
    arr[i] += 10;
}

return arr;
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(transformArray(numbers));

// 2.Write a program that takes in the following array and use a while loop to iterate and break when
// the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;

while (index < arrNum.length) {
    if (arrNum[index] === 4) {
        break;
    }
    console.log(arrNum[index]);
    index++;
}
// 3.Write a function that takes in a an array of strings and use a continue statement when the item is 
//at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];

function transformFruits(fruitsArray) {
    for (let i = 0; i < fruitsArray.length; i++) {
        if (i === 1) { 
            continue; 
        }
        console.log(fruitsArray[i]); 
    }
}

transformFruits(fruits);

// 4Write a function that accepts an array of strings and console.logs each element using a for loop.

function arrayOfElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Example usage
let names = ["Zippy", "Nairat", "Vivian", "Hawa"];
arrayOfElements(names);

// 5.Write a JavaScript function that takes a string as input and reverses it using a while loop. The function 
//should return the reversed string. 

function reverseString(str) {
    let reversedString = '';
    let i = str.length - 1; 
    while (i--) {
        reversedString = str[i]  
        i--; 
    }

    return reversedString;
}

console.log(reverseString('Nairat'));