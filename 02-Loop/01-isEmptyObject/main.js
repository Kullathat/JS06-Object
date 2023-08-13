
//object => B00L
function isEmptyObj(obj) {
    let isEmpty = true;

    for(let k in obj) {
        isEmpty = false;
    }
    return isEmpty;
}

