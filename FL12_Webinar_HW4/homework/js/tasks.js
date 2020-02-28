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

function regroupObject({ name, details: { id, age, university } }) {
    return { university, user: { age, firstName: name, id } };
}
// regroupObject(oldObject)
// const oldObject = { name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}}

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

function required(param) {
    if (param === required) {
        throw "Missing property"
    } else {
        return param;
    }
}
function add(a = required, b = required) {
    return required(a) + required(b);
}

// add(1, 3)
// add(1)

function fetchJson(url) {
    return fetch(url)
        .then(request => request.text())
        .then(text => JSON.parse(text))
        .then(res => console.log(res.map(el => el.name).sort((a, b) => a.localeCompare(b))))
        .catch(error => console.log(`ERROR: ${error.stack}`));
}

// fetchJson('https://api.github.com/users/kruxitka/repos')

async function fetchJsonAsync(url) {
    try {
        const request = await fetch(url);
        const text = await request.text();
        const res = JSON.parse(text);
        return console.log(res.map(el => el.name).sort((a, b) => a.localeCompare(b)));
    }
    catch (error) {
        return console.log(`ERROR: ${error.stack}`);
    }
}

// fetchJsonAsync('https://jsonplaceholder.typicode.com/users')
