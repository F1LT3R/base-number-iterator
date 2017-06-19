/*
 * Bases
 * A Number Class that increments by it's base
 * Author: Alistair MacDonald
 * https://git@github.com/f1lt3r/base-number-iterator.git
 */

/*
Example:

	Binary is "Base 2" (it has a radix of 2)
	"0" is the first symbol of Base 2
	"1" is the second symbol of Base 2

	Counting from 0 - 8 in Base 2
		0:     0
		1:     1
		2:    10
		3:    11
		4:   100
		5:   101
		6:   110
		7:   111
		8:  1000
*/

// Digits become an array
const digitize = number => {
	return number.toString().split('').map(n => {
		return Number(n)
	})
}

class Digit {
	constructor (number, base) {
		this.val = number
		this.base = base
	}

	increment () {
		const nextVal = this.getVal() + 1

		if (nextVal === this.base) {
			this.setVal(0)
			return 1
		}

		this.setVal(nextVal)
		return 0
	}

	getVal () {
		return this.val
	}

	setVal (val) {
		this.val = val
	}
}

class Num {
	constructor (number, base) {
		this.base = base
		this.digits = []

		const numbers = digitize(number)

		numbers.forEach(number => {
			const digit = new Digit(number, base)
			this.digits.push(digit)
		})
	}

	increment () {
		this.digits.reverse()

		let carry = 1

		this.digits.every(digit => {
			carry = digit.increment(carry)

			if (!carry) {
				return false
			}

			return true
		})

		if (carry > 0) {
			const digit = new Digit(carry, this.base)
			this.digits.push(digit)
		}

		this.digits.reverse()
	}

	add (number) {
		for (let i = 0; i < number; i += 1) {
			this.increment()
		}
	}

	get val () {
		let str = ''

		this.digits.forEach(digit => {
			str += String(digit.val)
		})

		return str
	}
}

module.exports = {
	digitize,
	Digit,
	Num
}
