const {digitize, Num, Digit} = require('./bases')

const num = new Num(0, 2)

const pad = val => {
	return Array(30 - val.length).join(' ')
}

let i = 0

setInterval(() => {
	const val = num.val
	console.log(pad(val) + val +  ' = ' + i)
	num.increment()
	i += 1
}, 1)


// num.add(300000000)
// console.log(num.val)
// console.log(num.val.length)