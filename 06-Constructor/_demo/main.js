function Developer (name,age) {
    // [1] Implicit create this = {} object ว่างเปล่า 
    this.name = name; // {name: 'james'}
    this.age = age; //{name: 'james' , age: 25}
    this.role = 'dev'//{name: 'james' , age: 25 , role : dev}
    this.salary = 40_000//{name: 'james' , age: 25 , role : dev, salary: 40_000}
    this.dev = function () {
        console.log('im develop some features');
    };
    // [2] Implicit Return this
    //return {name.............fn}
}
//this == dev2
// [3] this == Instance (ตัวที่ถูกสร้างใหม่)
const dev2 = new Developer('james', 25);
console.log(dev2);

const dev3 = new Developer('jane', 52);
console.log(dev3);