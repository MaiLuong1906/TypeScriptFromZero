export { };

console.log("DATA TYPES");

// 1. String
let fullName: string = "leon";
fullName.toUpperCase();

// 2. Number
let age: number = 21;

// 3. Boolean
let isHandsome: boolean = true;

// 4. Array
let hobbies: string[] = ["Reading", "Coding", "Gaming"];

// 5. Any
let anything: any = "Hello";
anything = 123;
anything = true;
anything = [1, 2, 3];

// 6. Unknown
let unknown: unknown = "Hello";
unknown = 123;
unknown = true;
unknown = [1, 2, 3];

// 7. Function
const hello = (name: string) => {
    console.log("hello ", name);
}

const sum = (a: number, b: number): number => {
    return a + b;
}

// 8. Union Type
let id: string | number = 1;
id = "DE190512";

// 9. Object
const user: {
    name: string;
    age: number;
    phone?: string; // ? : optional attribute
} = {
    name: "Leon",
    age: 21
}

// 10. Type Alias
type TStudent = {
    name: string;
    age: number;
    phone?: string;
}

const student1: TStudent = {
    name: "Leon",
    age: 21
}

const student2: TStudent = {
    name: "Leon",
    age: 21,
    phone: "0123456789"
}

console.log("Full Name: ", fullName);
console.log("Age: ", age);
console.log("Is Handsome: ", isHandsome);
console.log("Hobbies: ", hobbies);
console.log("Anything: ", anything);
hello("Leon");
console.log("Sum: ", sum(1, 2));
console.log("ID: ", id);
console.log("User: ", user);
console.log("Student 1: ", student1);
console.log("Student 2: ", student2);

