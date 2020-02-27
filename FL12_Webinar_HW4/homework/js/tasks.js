function maxElement(array) {
    return Math.max(...array);
}

// const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2]
// console.log(maxElement(array))

function copyArray() {
    return new Array(...array);
}

function addUniqueId(obj) {
    const id = Symbol('id')
    return { id, ...obj }
}

// const array = [1, 2, 3]
// const copiedArray = copyArray(array)
// console.log(array, copiedArray)
// console.log(array === copiedArray)

function findUniqueElements(array) {
    return new Set(array);
}

// const array = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1]
// console.log(findUniqueElements(array))

function hideNumber(phoneNumber) {
    return '****'.padStart(phoneNumber.length, phoneNumber);
}

// const phoneNumber = '0123456789'
// console.log(hideNumber(phoneNumber))


