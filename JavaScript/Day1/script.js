const name = "Rajendr Behera";
let age = 21;
let isMarried = false;

console.log("name: ", name); 
console.log("age: ", age); 
console.log("isMarried: ", isMarried);
console.log("================================")

let marks = 93;

if(marks >= 90) {
    console.log("Grade: A")
} else if (marks >= 70) {
    console.log("Grade: B")
} else if (marks >= 50) {
    console.log("Grade: C")
} else {
    console.log("Grade: D")
}

let day = 1;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}