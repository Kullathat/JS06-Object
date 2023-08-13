const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // * pepsi 19 500ML เพราะว่ามีการเเทนค่าให้ product2 = product1
console.log(product2); // ** มีค่าเท่ากับ product1 
console.log(product1 === product2); // *** เท่ากัน 