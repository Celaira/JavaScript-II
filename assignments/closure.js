// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const smoldev = "me"

function whoIsSmolDev() {
  console.log(smoldev);
}

whoIsSmolDev()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  
  return function() {
    count++;
    return count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    
    decrement: function() {
      count--;
      return count;
    }
  }
};

const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment()); // returns the fact that functions exist inside it.
// console.log(counterFactory(increment())); // says increment is undefined
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
