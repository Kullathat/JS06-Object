
//each record => <key_name>:<value>
//<value> any Datatype 
let user = {
    'firstName': 'Pavit',
    lastName: 'Pimchanangul',
    age: 18,
    isAdmin: true,
};

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);

//syntax : <obj>.<key_name> = newValue

// user.firstName = 'Pravit'
// user.age = 25;
// user.address = 'bangkok';
// yser.age ++;

// console.address = 'bangkok';
// console.log(user)

// DELETE 
//s syntax  : delete <obj>.<key_name>

// delete user.isAdmin;
// console.log(user)

const employee = {
    fullName: 'john Doe',
    salary: 500_000,
    address : {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand',
    },

};
//Prevent Crash!!
//dot ใช้กับ object เท่านั้น !! <obj>,<key>
// ห้ามใช่กัย undefined
// เเก้โดย optional chaining => <undefined>?.<key>

console.log(fullName)  // .ต้องใช้กัย objact