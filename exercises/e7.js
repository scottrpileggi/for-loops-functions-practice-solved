// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
  
  export function getClientWithLeastPositiveBalance(array) {
    // Your code goes here...
    let balances = [];
    let newArray = [];
    let noZero = [];
    for (var i = 0; i < array.length; i++) {
      balances.push(array[i].balance);
    }
    if (Math.max(...balances) === 0) {
      return newArray;
    } 
    for (var i = 0; i < balances.length; i++) {
      if (balances[i] > 0) {
        noZero.push(balances[i]);
      }
    }
    for (var i = 0; i < balances.length; i++) {
      if (Math.min(...noZero) === array[i].balance) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function