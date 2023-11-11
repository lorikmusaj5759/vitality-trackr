/* 
File: sophisticated_code.js
Content: Complex JavaScript code example demonstrating object-oriented programming concepts and advanced algorithms
*/

// Object representing a shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    throw new Error('Method not implemented');
  }
}

// Object representing a rectangle
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Object representing a circle
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Function to calculate the factorial of a number (recursive)
function calculateFactorialRecursive(num) {
  if (num === 0) {
    return 1;
  }
  return num * calculateFactorialRecursive(num - 1);
}

// Function to calculate the factorial of a number (iterative)
function calculateFactorialIterative(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Function to check if a number is prime
function checkPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// Example code usage
const rectangle = new Rectangle("Rectangle", 10, 5);
console.log(rectangle.name);
console.log(rectangle.getArea());

const circle = new Circle("Circle", 7);
console.log(circle.name);
console.log(circle.getArea());
console.log(circle.getCircumference());

console.log(calculateFactorialRecursive(5));
console.log(calculateFactorialIterative(5));

console.log(checkPrime(17));

// ... More lines of sophisticated code here