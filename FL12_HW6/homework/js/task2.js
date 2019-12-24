const a = parseInt(prompt('Enter valid number for a side'));
const b = parseInt(prompt('Enter valid number for b side'));
const c = parseInt(prompt('Enter valid number for c side'));
if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length')
} else {
    if (a + b < c || a + c < b || b + c < a) {
        alert('Triangle doesn’t exist')
    } else if (a === b && b === c) {
        alert('Equilateral triangle')
    } else if (a === b || a === c || b === c) {
        alert('Isosceles triangle')
    } else {
        alert('Scalene triangle')
    }
}


