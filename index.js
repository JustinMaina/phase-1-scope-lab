// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it
function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // Note: bestCustomer is declared implicitly (without var, let, or const), which makes it global
}

// Write a function that changes the bestCustomer variable to 'maybe bob'
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Modifies the global variable
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'Alice';

// Write a function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer(newCustomer) {
    // Attempting to change the constant
    // This would throw an error: TypeError: Assignment to constant variable
    leastFavoriteCustomer = newCustomer;
}

// Testing the functions
console.log(customerName); // Outputs: bob
console.log(upperCaseCustomerName()); // Outputs: BOB

setBestCustomer();
console.log(bestCustomer); // Outputs: not bob

overwriteBestCustomer();
console.log(bestCustomer); // Outputs: maybe bob

console.log(leastFavoriteCustomer); // Outputs: Alice
// changeLeastFavoriteCustomer('Eve'); // Uncommenting this line would result in an error
