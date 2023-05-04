// step 3. Putting the calculations in a function and 
//adding all the parameter that is going to be passed into it.

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
    1.25 * numOfScoops +
    sprinklesCost +
    whippedCreamCost +
    hotFudgeCost +
    cherryCost;
  let taxCost = subTotalCost * salesTax;
  let totalcost = subTotalCost + (taxCost);

  console.log(`
  Base Price: $${subTotalCost.toFixed(2)}
  Tax:        $${taxCost.toFixed(2)}
  Total Due:  $${totalcost.toFixed(2)}
  `);
}

// step 4. testing calculations

icreamCost(4, true, true, false, true);
