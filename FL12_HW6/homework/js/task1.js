const a = Number(prompt('Enter valid number for a'));
const b = Number(prompt('Enter valid number for b'));
const c = Number(prompt('Enter valid number for c'));
if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a === 0) {
  alert('Invalid input data');
} else {
  const coeffDiscr = 4;
  const coeff = 2;
  const D = b * b - coeffDiscr * a * c;
  let x1;
  let x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (coeff * a);
    x2 = (-b - Math.sqrt(D)) / (coeff * a);
    alert(`Result values: x1 = ${x1}, x2 = ${x2}`);
  }
  if (D === 0) {
    x1 = -b / (coeff * a);
    x2 = -b / (coeff * a);
    alert(`Result values: x1 = ${x1}, x2 = ${x2}`);
  }
  if (D < 0) {
    alert('No valid result values exist');
  }
}
