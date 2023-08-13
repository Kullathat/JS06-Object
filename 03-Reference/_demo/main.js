const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // * ผลลัพธ์เป็น  pepsi 19 500mL  เพราะว่ามีการเปลี่ยนภายใน address จาก produce 2 
// console.log(product2); // ** ผลลัพธ์เป็นเหมือน product 1
// console.log(product1 === product2); // *** เท่ากัน
