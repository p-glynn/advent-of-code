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

// p1 solution
//const frequencies = getAllFrequencyObjects(values)
// const checkSum = getCheckSum(frequencies)


const findRelatedFrequencies = strings => {
    const length = strings.length
    for (let outer = 0; outer < length; outer++) {
        for (let inner = outer + 1; inner < length; inner++) {
            let misses = 0
            for (let char in strings[outer]) {
                if (strings[outer][char] != strings[inner][char]) {
                    misses ++
                }
            }
            console.log(outer, inner, misses)
            if (misses <= 1) {
                return [strings[outer], strings[inner]]
            }
        }
    }
}

const findCommon = arr => {
    console.log(arr)
    const str1 = arr[0]
    const str2 = arr[1]
    let output = ''
    for (let char in str1) {
        if (str1[char] === str2[char]) output += str1[char]
    }
    return output
}

//p2 solution
const nearMisses = findRelatedFrequencies(values)
const outputString = findCommon(nearMisses)
console.log(outputString)