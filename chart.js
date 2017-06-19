
const cols = 10

const {digitize, Num, Digit} = require('./bases')

const nums = {
	base2: new Num(0, 2),
	base3: new Num(0, 3),
	base4: new Num(0, 4),
	base5: new Num(0, 5),
	base6: new Num(0, 6),
	base7: new Num(0, 7),
	base8: new Num(0, 8),
	base9: new Num(0, 9),
	base10: new Num(0, 10)
}

const chart = {
	head: [],
	base2: [],
	base3: [],
	base4: [],
	base5: [],
	base6: [],
	base7: [],
	base8: [],
	base9: [],
	base10: []
}

let i = 0
chart.head.push(i)

Reflect.ownKeys(nums).forEach(baseName => {
	const num = nums[baseName]
	chart[baseName].push(num.val)
})

while (i < cols) {
	i += 1
	chart.head.push(i)

	Reflect.ownKeys(nums).forEach(baseName => {
		const num = nums[baseName]
		num.increment()
		chart[baseName].push(num.val)
	})
}

console.log(chart)
