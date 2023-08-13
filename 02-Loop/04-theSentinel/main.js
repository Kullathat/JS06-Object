// input
const obj = {}
const TERMINATE = 'stop';
let key;
let value; 
do { 
    key =  prompt('Enter');
    value = prompt('Enter')

    console.log(key, value);
    console.log(key != TERMINATE && value != TERMINATE);

} while (key != TERMINATE || value != TERMINATE);


// fruits[key] = value;
console.log(obj)