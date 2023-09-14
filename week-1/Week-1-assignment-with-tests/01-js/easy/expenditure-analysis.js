/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var mapu = new Map();
  transactions.forEach(element => {
    mapu.set(element.category,0);
  });
  transactions.forEach(element => {
    var price = mapu.get(element.category);
    price += element.price;
    mapu.set(element.category,price);
  });
  var answer = []
  mapu.forEach((value,key) =>{
    answer.push({"category":key,"totalSpent":value});
  })
  return answer;
}

module.exports = calculateTotalSpentByCategory;
