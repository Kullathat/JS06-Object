let calculator = {
    read() { 
     this.x = +prompt('enter');
     this.y = +prompt('enter');
    },
     sum() {
     return this.x + this.y
    },
    mull () {
      return this.x * this.y
    },
   };
   
 calculator.read();
 console.log(sum())
 console.log(mull())
 
 