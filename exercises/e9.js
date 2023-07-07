
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithBalanceOverOneHundred(array) {
  // Your code goes here...
  const newArray = [];
  const balances = [];

  for (var i = 0; i < array.length; i++) {
    balances.push(array[i].balance);
  }
  for (var i = 0; i < array.length; i++) {
    if (balances[i] > 100) {
      newArray.push(array[i]);
    } 
  }
  return newArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
