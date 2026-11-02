// Task-1

function greet(name) {
    return `Hello ${name}, Welcome to our site!`
}

console.log(greet("Rajendra"));

// Task-2

function findMaxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }

        if(arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

const { max, min } = findMaxAndMin([10, 20, 30, 40, 50]);
console.log(`Max: ${max}, Min: ${min}`);

// Task-3

const nums = [1, 2, 3, 4]

const squaredNums = nums.map(num => num * num);
console.log(squaredNums);

// Task-4

function reverseString(str) {
    let reversed = str.split("");
    reversed.reverse();
    return reversed.join("");
}

console.log(reverseString("Hello"));

// Task-5

function isPalindrome(str) {
    const reveredStr = reverseString(str);

    if(str.length !== reveredStr.length) return false;

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== reveredStr[i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("madam"));

// Task-6

function removeDuplicates(arr) {
    const uniqueArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4]));

const array = [5, 12, 8, 3, 20];

let result = array.filter(num => num % 2 === 0).map(num => num * 2).reduce((sum, num) => sum + num, 0);

console.log(result);