const str = require('../inputs/day2')
const split = require('../util/split')

const values = split(str)
const totals = {
    count2: 0, 
    count3: 0
}

const findFrequencies = string => {
    let frequenciesObj = {}
    for (let letter of string) {
        frequenciesObj.hasOwnProperty(letter) ? frequenciesObj[letter] ++ : frequenciesObj[letter] = 1
    }
    return frequenciesObj
}

const getAllFrequencyObjects = strings => {
    const output = []
    for (let string of strings) {
        let frequenciesObj = findFrequencies(string)
        output.push(frequenciesObj)
    }
    return output
}

const getCheckSum = objects => {
    for (let object of objects) {
        let has2 = false, has3 = false
        for (let key in object) {
            if (object[key] === 2) has2 = true
            if (object[key] === 3) has3 = true
        }
        if (has2) totals.count2 ++
        if (has3) totals.count3 ++
    }
    return totals.count2 * totals.count3
}

// findFrequencies('ubkfmdjxyzlbgkrotcepvswaqx')

const frequencies = getAllFrequencyObjects(values)
const checkSum = getCheckSum(frequencies)
console.log(checkSum)

