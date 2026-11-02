// Task-1

const name = "Rajendra";
let age = 21;
let city = "Surat";

console.log("I am " + name + ", " + age + " years old, I live in " + city + ".");

// Task-2

let num1 = 10;
let num2 = 20;

console.log("Sum: ", num1+num2);
console.log("Difference: ", num1-num2);
console.log("Product: ", num1*num2);
console.log("Division: ", num1/num2);

// Task-3

const marks = 93;

if(marks >= 90) {
    console.log("Grade A")
} else if (marks >= 75 && marks <= 89) {
    console.log("Grade B")
} else if (marks >= 50 && marks <= 74) {
    console.log("Grade C")
} else if (marks < 50) {
    console.log("Fail")
}

// Task-4

for(let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5*i}`)
}

// Task-5

for(let i = 1; i <= 100; i++) {
    if(i % 5 === 0) {
        console.log(i)
    }
}

// Task-6

for(let i = 1; i <= 30; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}: FizzBuzz`)
    } else if (i % 3 === 0) {
        console.log(`${i}: Fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i}: Buzz`)
    }
}

//  Task-8

for (let i = 1; i <= 5; i++) {
    let str = ""
    for(let j = 1; j <= i; j++) {
        str += "* "
    }

    console.log(str)
}

