const student = {
    name: "Rajendra Behera",
    age: 22,
    city: "surat",
    isGraduated: true,
    hobbies: ["coding", "mountainering", "travelling"],
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(student.name);
console.log(student["age"]);

student.greet();

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

const newStudent = { ...student };

console.log(newStudent);

const studentData = JSON.stringify(student);
console.log(studentData);

// Find the class tooper

const students = [
    { name: "Ravi", marks: 78 },
    { name: "Meera", marks: 92 },
    { name: "Amit", marks: 65 }
];

const topper = students.reduce((best, s) => s.marks > best.marks ? s: best, students[0]);

console.log(topper);