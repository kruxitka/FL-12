(function countNumbers(str) {
    function parsedNumbers() {
        let setOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let result = str.split('').reduce(function (acc, curr) {
            if (setOfNumbers.includes(curr)) {
                acc.push(curr)
            }
            return acc;
        }, []);
        return result;
    }
    let countedNumbers = parsedNumbers().reduce(function (allNumbers, number) {
        if (number in allNumbers) {
            allNumbers[number]++
        } else {
            allNumbers[number] = 1
        }
        return allNumbers
    }, {});
    return countedNumbers;
})()
