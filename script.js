let element;
const array = [];

function compareNumeric(a, b) {
  return a - b;
}

do {
    element = prompt('Введіть декілька значень.');
    
    if (element) {
        array.push(element);
        array.sort(compareNumeric)
    }

} while (element !== null);

array.splice(2, 3)

document.write(array)