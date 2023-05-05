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
  let salesTax = 0.0875;
  let subTotalCost;
  if (numOfScoops == 1) {
    subTotalCost =
      price_per_scoop +
      sprinklesCost +
      whippedCreamCost +
      hotFudgeCost +
      cherryCost;
  } else {
    subTotalCost =
      price_per_scoop +
      //fixed cost of extra scoop for ice cream
      1.25 * (numOfScoops - 1) + //additional scoop price
      sprinklesCost +
      whippedCreamCost +
      hotFudgeCost +
      cherryCost;
  }
  let toppingPrice =
    sprinklesCost + whippedCreamCost + hotFudgeCost + cherryCost;

  let taxCost = subTotalCost * salesTax;
  let totalcost = subTotalCost + taxCost;

  return {
    subTotalCost: subTotalCost,
    taxCost: taxCost,
    totalcost: totalcost,
    price_per_scoop: price_per_scoop,
    toppingPrice: toppingPrice,
  };
}
function textResults(value) {
  let text = value.toFixed(2);
  const prefix = "$";
  return prefix + text;


  //   return `
// $${value.toFixed(2)}
// `;
}



// step 4. testing calculations

//console.log(icreamCost(4, true, true, false, true));
console.log(textResults(0));