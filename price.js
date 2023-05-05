// step 3. Putting the calculations in a function and 
//adding all the parameter that is going to be passed into it.


//  all the id used numOfScoops, sprinkles, whippedCream, hotFudge,chery,
//  output 


function icreamCost(numOfScoops, sprinkles, whippedCream, hotFudge, cherry) {
  // doing calculations first. step 1
  let sprinklesCost = 0;
  let hotFudgeCost = 0;
  let whippedCreamCost = 0;
  let cherryCost = 0;

  const price_per_scoop = 2.25;
  if (sprinkles) {
    sprinklesCost += 0.5;
  }
  if (whippedCream) {
    whippedCreamCost += 0.25;
  }
  if (hotFudge) {
    hotFudgeCost += 1.25;
  }
  if (cherry) {
    cherryCost += 0.25;
  }

  //calculating the total cost of the ice cream. and logging the value on console step 2
  let salesTax = .0875;
  let subTotalCost =
    price_per_scoop +
    1.25 * numOfScoops + //additional scoop price
    sprinklesCost +
    whippedCreamCost +
    hotFudgeCost +
    cherryCost;
  let taxCost = subTotalCost * salesTax;
  let totalcost = subTotalCost + (taxCost);

  return{
    subTotalCost: subTotalCost,
    taxCost: taxCost,
    totalcost: totalcost
  }

  
}
function textResults(results){
  return`
Base Price: $${results.subTotalCost.toFixed(2)}
Tax:        $${results.taxCost.toFixed(2)}
Total Due:  $${results.totalcost.toFixed(2)}
`;
}


// step 4. testing calculations

//console.log(icreamCost(4, true, true, false, true));
