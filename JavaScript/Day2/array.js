const users = ["Rajendra", "Rohit", "Swapnil"];

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

console.log(users.length);
users.push("Rajan");
users.pop();
users.shift();
users.unshift("Rajendra");

console.log(users);

users.forEach((user) => {
    console.log(user);
})

const nums = [10, 20, 30, 40, 50];

const newNums = nums.map((num) => num * 2);
console.log(newNums);

const selectedNums = nums.filter((num) => num % 20 === 0);
console.log(selectedNums);

const num = nums.find((num) => num > 20);
console.log(num);

const sum = nums.reduce((sum, n) => sum + n, 0);
console.log(sum);

// 

const prices = [100, 200, 300, 400, 500];

const totalPrice = prices.reduce((total, price) => total + price, 0);

function applyDiscount(price) {
    if (price > 1000) {
        return price - price * 0.10;
    }

    return price;
}

console.log("User has to pay: ", applyDiscount(totalPrice));