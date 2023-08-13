const newTodo = {};

for (let key in todo) {
    //assign ที่ละ key:value ให้ newTodo
    newTodo[key] = todo[key];
    // newTodo['task'] = todo['task'] => 'Do Hw'
    // newTodo['complete'] = todo['complete'] => 'false'
    // newTodo['due_date'] = todo['task'] => 'Do Hw'
}
console.log(newTodo);



// 2. Object.assign
//2A
// Merge/override Direction : Right --> left
//Object.assign(newTodo, todo); // 

//2B
// Const newTodo = Object.assign({}, todo);
//log(newTodo);

