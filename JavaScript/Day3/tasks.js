// Task-1

const product = {
    name: "TreStar - best wrist watch",
    price: 11500,
    stocks: 13,
    isAvailable: true
}

console.log(product);

product.price = 12000;
product.brand = "Orient";
console.log(product);


// Task-2

const student = {
    name: "Rajendra Behera",
    age: 21,
    hoobies: ["Reading", "Writing", "Coding"],
    city: "Surat"
}

const { name, city } = student;
console.log(name, city)

// Task-3

const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3,
    d: 4
}

const newObj = { ...obj1, ...obj2 };
console.log(newObj);


// Task-4

const users = [
    { name: "Ravi", age: 22, city: "Surat" },
    { name: "Meera", age: 25, city: "Mumbai" },
    { name: "Amit", age: 19, city: "Surat" },
    { name: "Neha", age: 28, city: "Pune" }
];


const names = users.map((user) => user.name);
console.log(names);

const suratUsers = users.filter(user => user.city === "Surat");
console.log(suratUsers);

// Task-5

const user = {
    name: "Ravi",
    age: 22,
    city: "Surat"
}

const parsedUser = JSON.parse(JSON.stringify(user));
console.log(parsedUser === user, parsedUser);

// Task-6

const yungestUser = users.reduce((user, u) => user.age < u.age ? user : u, users[0]);
console.log(yungestUser);

// Task-7

const employees = [
    { name: "A", salary: 30000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 40000 }
];

const sortedEmployes = employees.sort((emp1, emp2) => emp2.salary - emp1.salary);
console.log(sortedEmployes);

const newUsers = {
    surat: users.filter(user => user.city === "Surat"),
    mumbai: users.filter(user => user.city === "Mumbai"),
    pune: users.filter(user => user.city === "Pune")
}

console.log(newUsers);