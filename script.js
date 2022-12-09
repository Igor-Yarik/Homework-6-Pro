let element;
const array = [];

do {
    element = prompt('Введіть декілька значень.');    
    
    if (element) {
        array.push(element);        
        console.log(array)
    }

} while (element !== null);

function compareNumeric(a, b) {
  return a - b;
}
console.log('Масив після сортування:')
array.sort(compareNumeric)
console.log(array)

console.log('Масив після видалення елементів з 2 по 4 включно:')
array.splice(2, 3)
console.log(array)