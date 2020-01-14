function convert() {
    let convertedArray = []
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            convertedArray.push(Number(arguments[i]));
        } else if (typeof arguments[i] === 'number') {
            convertedArray.push(String(arguments[i]));
        }
    }
    return convertedArray;
}

function executeforEach(array, func) {
    for (let element of array) {
        func(element)
    }
}

function mapArray(array, func) {
    let mappedArray = [];
    executeforEach(array, function (el) {
        mappedArray.push(func(parseInt(el)))
    })
    return mappedArray;
}

function filterArray(array, func) {
    let filteredArray = [];
    executeforEach(array, function (el) {
        if (func(el)) {
            filteredArray.push(el)
        }
    })
    return filteredArray;
}

function flipOver(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

function makeListFromRange(array) {
    let generatedArray = [];
    for (let i = array[0]; i <= array[array.length - 1]; i++) {
        generatedArray.push(i);
    }
    return generatedArray;
}

function getArrayOfKeys(array, keyName) {
    const resultValues = [];
    executeforEach(array, element => resultValues.push(element[keyName]))
    return resultValues;
}

function substitute(array) {
    const substituteValue = 30;
    return mapArray(array, element => element > substituteValue ? element : '*')
}

function getPastDay(date, days) {
    const givenDate = new Date(date.getTime());
    givenDate.setDate(givenDate.getDate() - days);
    return givenDate.getDate();
}

function formatDate(date) {
    const year = date.getFullYear();
    const monthCoeff = 1;
    const month = date.getMonth() + monthCoeff;
    const day = date.getDate();
    const options = { hour: 'numeric', minute: 'numeric', hour12: false };
    const hours = new Intl.DateTimeFormat('en-US', options).format(date);
    return `${year}/${month}/${day} ${hours}`;
}