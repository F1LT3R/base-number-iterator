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

