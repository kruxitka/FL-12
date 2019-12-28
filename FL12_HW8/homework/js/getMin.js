(function getMin() {
    return [...arguments].reduce((x, y) => x < y ? x : y);
})()