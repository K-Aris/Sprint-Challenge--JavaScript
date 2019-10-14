// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

const consume = function(a, b, cb){
  return cb(a, b); 
}; 


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = function(a, b) {
  return (a + b); 
};
//console.log(add(2, 3));

const multiply = function(a, b) {
  return (a * b); 
}; 
//console.log(multiply(3, 5)); 

const greeting = function(firstname, lastname) {
  return `Hello ${firstname} ${lastname}, nice to meet you!`; 
}; 
//console.log(greeting("Mike", "Jones")); 



/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

const Explanation = `nestedFunction() is in the myFunction() lexical environment
which allows nestedFunction() to access nestedFunction() and internal is able to
look up from it's nested environment for the const interal object`;

console.log(Explanation); 
