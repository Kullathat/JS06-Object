//sub program 'Input'
let name = prompt('Enter Name');
let quantity = +prompt('Enter Quantity');
let price = +prompt('Enter price');
let discount = +prompt('Enter discount');

// Sub program-2 : CreateObject
// const product = {
//     name: name, // name  : hermes 
//     quantity: quantity, // quantity = 20
//     price: price,
//     discount: discount,
// }
// เมื่อชื่อ key ตรงกับชื่อตัวเเปรที่เก็บ value สามารถยุบ syntax (Property shorthand)
const product = {
    name,
    quantity,
    price,
    discount,
}

//Sub program-3 : Calculate Price 
function calcPrice (price,quantity,discount = 0) {
    let result = price * quantity * (1-discount);
    //            100  *    10     *    1-0.1
    return totalPrice;
}

let result = calcPrice(product.price,product.quantity,product.discount);





//alternative way
// function calcPrice(productObj) {
//     let pirce = productObj.price
//     let quantity = productObj.quantity
//     let discount = productObj.discount || 0;
//     return price * quantity * (1 - discount);
// }
// let result = calcPrice(product)
// log(result);