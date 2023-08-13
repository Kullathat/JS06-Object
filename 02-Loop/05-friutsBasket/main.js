const fruits = {};
const TERMINATE = 'stop';
let key;
let value; 
do { 
    key =  prompt('Enter fruit');
    value = prompt('Enter Quantity')
    
    if (value == 1) {
        fruits[key] = value;
    } else if (+value > 1) {
        fruits [`${key}s`] = value;
    }
    console.log(key, value);
    console.log(key != TERMINATE && value != TERMINATE);

} while (key != TERMINATE && value != TERMINATE);


// fruits[key] = value;
console.log(fruits)