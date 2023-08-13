const multiplayNumeric = (object,num) => {
    for(let key in object) {
        // console.log(key);
        
        let value = object[key];
        if(typeof value === 'number') {

            
            object[key] = object[key] * num;

        }
    }

};

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  multiplayNumeric(menu, 3);
  console.log(menu);

  

