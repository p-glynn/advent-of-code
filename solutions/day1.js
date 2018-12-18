const str = require('../inputs/day1')
const split = require('../util/split')

const numbers = split(str)

let seenFrequencies = []

const sum = (arr, total=0) => {
    for (let i of arr) {
        seenFrequencies.push(total)
        total += parseInt(i)
        if (seenFrequencies.includes(total)) {
            return total
        }
    }
    return sum(arr, total)
}

console.log(sum(numbers))
// 599
// 81204