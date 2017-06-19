const assert = require('assert')
const expect = require('expect.js')

const {digitize, Num, Digit} = require('./bases')

describe('digitize', () => {
	describe('should turn a number primitive into an array of numbers', () => {
		it('digitize("123") = [1, 2, 3]', () => {
			const ary = digitize(123)
			expect(ary[0]).to.be(1)
			expect(ary[1]).to.be(2)
			expect(ary[2]).to.be(3)
		})
	})
})

describe('Digit', () => {
	describe('.increment (base 2)', () => {
		it('0 + 1 = 1, r = 0', () => {
			const digit = new Digit(0, 2)
			const carry = digit.increment()
			expect(carry).to.be(0)
			expect(digit.val).to.be(1)
		})

		it('1 + 1 = 0, r = 1', () => {
			const digit = new Digit(1, 2)
			const carry = digit.increment()
			expect(carry).to.be(1)
			expect(digit.val).to.be(0)
		})
	})

	describe('.increment (base 10)', () => {
		it('9 + 1 = 0, r = 1', () => {
			const digit = new Digit(9, 10)
			const carry = digit.increment()
			expect(carry).to.be(1)
			expect(digit.val).to.be(0)
		})

		it('8 + 1 = 9, r = 0', () => {
			const digit = new Digit(9, 10)
			const carry = digit.increment()
			expect(carry).to.be(1)
			expect(digit.val).to.be(0)
		})
	})
})

describe('Num', () => {
	describe('base:2 (binary)', () => {
		it('0 + 1 = 1', () => {
			const num = new Num(0, 2)
			num.add(1)
			expect(num.val).to.be('1')
		})

		it('1 + 1 = 10', () => {
			const num = new Num(1, 2)
			num.add(1)
			expect(num.val).to.be('10')
		})

		it('111 + 1 = 1000', () => {
			const num = new Num(111, 2)
			num.add(1)
			expect(num.val).to.be('1000')
		})
	})

	describe('base:3', () => {
		it('0 + 1 = 1', () => {
			const num = new Num(0, 3)
			num.add(1)
			expect(num.val).to.be('1')
		})

		it('2 + 1 = 10', () => {
			const num = new Num(2, 3)
			num.add(1)
			expect(num.val).to.be('10')
		})

		it('222 + 1 = 1000', () => {
			const num = new Num(222, 3)
			num.add(1)
			expect(num.val).to.be('1000')
		})
	})

	describe('base:10 (standard)', () => {
		it('0 + 1 = 1', () => {
			const num = new Num(0, 10)
			num.add(1)
			expect(num.val).to.be('1')
		})

		it('9 + 1 = 10', () => {
			const num = new Num(9, 10)
			num.add(1)
			expect(num.val).to.be('10')
		})

		it('999 + 1 = 1000', () => {
			const num = new Num(999, 10)
			num.add(1)
			expect(num.val).to.be('1000')
		})
	})

	describe('BIG numbers', () => {
		it('JS Number should fail: 9999999999999998 + 3 = 10000000000000000', () => {
			const n = 9999999999999998 + 3
			// On paper, this number should be 10000000000000001
			// but Javascript represents number of
			// 9999999999999999 or above as 10000000000000000
			expect(String(n)).to.be('10000000000000000')
		})

		it('Bases lib should pass: 9999999999999998 + 3 = 10000000000000001', () => {
			const num = new Num(9999999999999998, 10)
			num.add(3)
			expect(num.val).to.be('10000000000000001')
		})
	})
})
