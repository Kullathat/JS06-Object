// Constructor Function: Accumulator
function Accumulator(startingValue) {
    this.currentValue = startingValue;
  
    this.read = function() {
      var input = parseFloat(prompt("Enter a number:"));
      if (!isNaN(input)) {
        this.currentValue += input;
      } else {
        alert("Invalid input. Please enter a valid number.");
      }
    };
  
    this.show = function() {
      alert("Current Value: " + this.currentValue);
    };
  }
  
  const sum = new Accumulator(100);

  console.log(sum.show())
  console.log(sum.read())
  console.log(sum.show())
