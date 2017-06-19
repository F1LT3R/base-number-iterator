# base-number-iterator

simple esnext class to count numbers by their bases with nodejs

## Setup

- checkout the repo
- npm install
- npm test

## Usage

### Base 10

```javascript
// equire the class
const {Num} = require('./bases')

// Create the base 10 number 999
const num = new Num(999, 10)

// Increment the number by 1
num.add(1)

// The value is now 1000
console.log(num.val)  // 1000
```

### Base 2 (binary)

```javascript
// Require the class
const {Num} = require('./bases')

// Create a binary number 111
const num = new Num(111, 2)

// Increment the number
num.add(1)

// The value is now 1000
console.log(num.val) // 1000
```

## Beyond The JavaScript Number Primitive

Try console-logging the number `9999999999999999` in your console. You will see it output `10000000000000000`. You can read more about JavaScript Number precision here: [What is JavaScript's highest integer value that a Number can go to without losing precision?](https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin#307200)

```javascript
console.log(9999999999999999)
//         10000000000000000

console.log(9999999999999999 + 3)
// expect  10000000000000002
// actual  10000000000000004
```


With the Num class from this base-number-iterator library, you can add numbers higher than `10000000000000000`.

```javascript
// Require the class
const {Num} = require('./bases')

// Create a massive number that JavaScript will not add to correctly
const num = new Num(9999999999999998, 10)

// Add to the massive number
num.add(3)

// Log the result
console.log(num.val)  // 10000000000000002
```
