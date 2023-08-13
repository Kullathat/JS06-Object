// 1.การใช้งาน Object , crud (create, raed, update, delete)
// dot , bracket 

//programer.dev // devwebsite
// syntax : <>
// let programer  = {
//     skill : sleep,
//     name : dsada,
//     meet: 'meeting',
// }

// function meeting() {
//     console.log('i am meeting');
// }

// function sleep() {
//     console.log('i am sleeping')
// }

// perogrammer.dev
// programmer.meet(); 
// programer.sleep()


// alternative syntax

// const me = {
//     name : 'Kullathat',
//     hair: 'black',
//     age: 30,
//     gender: 'male',
//     myEx: ['dota','apex'],
//     sleepAllday: function () {
//         console.log('iamsleeping all day')
//     },
//     eatAllNigjt: () => console.log('i am eating all the tine'),
//     focus() {
//         console.log('iam working in focus mode')
//     }
// };

// me.eatAllNigjt('TAX');
// me.focus('JAvascript lab')

// //Mini=lab 
// // สร้าง Objec 




// console.log(`
// hello ${this.name}`)

// this.age = user.age 

// this dynamic context 

function dev() {
    console.log(`this feature developed by${this.name}`);
}

const programer1 = {
    name: 'john',
    develop: dev,
}
const programer2 = {
    name: 'jane',
    develop: dev,
}

// A : this ถูก solve ตอนที่เรียกใช้ method
programer1.develop()
programer2.develop()