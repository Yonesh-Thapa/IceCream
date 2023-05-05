//  all the id used numOfScoops, sprinkles, whippedCream, hotFudge,chery,
//  output 
document.addEventListener("DOMContentLoaded", ()=>{
    const numOfScoops = document.getElementById("numOfScoops");
    const sprinkles = document.getElementById("sprinkles");
    const whippedCream = document.getElementById("whippedCream");
    const hotFudge = document.getElementById("hotFudge");
    const cherry = document.getElementById("cherry");
    const output = document.getElementById("output");
    const toppings = document.getElementById("toppings");
    const cone = document.getElementById("cone");
    const cup = document.getElementById("cup");
    const pricePerScoop = document.getElementById("pricePerScoop");
    
    // const toppingPrice = document.getElementById("toppingPrice");

    // const subTotal = document.getElementById("subtotal");

    // const tax = document.getElementById("tax");

    // const total = document.getElementById("total");

    pricePerScoop.innerHTML = icreamCost(price_Per_Scoop);
    toppingPrice.innerHTML = icreamCost(toppingPrice);
    subTotal.innerHTML = icreamCost(subTotal);
    tax.innerHTML = icreamCost(tax);
    total.innerHTML = icreamCost(total);


    // toppings.style.display = none;
   
    cup.addEventListener("change", onChanged);
    cone.addEventListener("change", onChanged);

    submitBtn.addEventListener("click", ()=>{
        const results = icreamCost(
            Number(numOfScoops.value),
            sprinkles.checked,
            whippedCream.checked,
            hotFudge.checked,
            cherry.checked);
            // output.innerHTML = textResults(results);
            pricePerScoop.innerHTML = textResults(results.price_per_scoop);
            toppingPrice.innerHTML = textResults(results.toppingPrice);
            subTotal.innerHTML = textResults(results.subTotalCost);
            tax.innerHTML = textResults(results.taxCost);
            total.innerHTML = textResults(results.totalcost);


    })
    
})