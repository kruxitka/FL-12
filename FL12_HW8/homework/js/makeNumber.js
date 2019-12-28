(function makeNumber(str) {
    let setOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let result = str.split('').reduce(function (acc, curr) {
        if (setOfNumbers.includes(curr)) {
            acc.push(curr)
        }
        return acc;
    }, []);
    return result.join('');
})()