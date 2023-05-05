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
    // toppings.style.display = none;
   
    cup.addEventListener("change", onChanged);
    cone.addEventListener("change", onChanged);

    submitBtn.addEventListener("click", ()=>{
        const results = icreamCost(
            Number(numOfScoops.value),
            sprinkles.checked,
            whippedCream.checked,
            hotFudge.checked,
            cherry.checked)
            output.innerHTML = textResults(results);
    })
    
})