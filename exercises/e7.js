// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
  
export function getClientWithLeastPositiveBalance(array) {
  let finalArray = []
  let sum = 0;
  let minBalance = array[0].balance;
  
  for (let i = 0; i < array.length; i++) {
    sum += array[i].balance;
  }
  if (sum <= 0) {
    return finalArray;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i].balance < minBalance && array[i].balance > 0) {
        minBalance = array[i].balance;
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (minBalance === array[i].balance) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
  

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function