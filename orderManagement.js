// The script validates order and price list, displays order ids, calculates the average profit, and counts large orders over 20$.

const orderIdList = ["John", "Mary", "Jane"];
const priceList = [100, 200, 300];


// Validates if the order ID list and price list have the same length.

function areNotValidLists(orderIdList, priceList){
    if(orderIdList.length !== priceList.length){
        alert("The lists are invalid!") // Alert if the lists are invalid.
    }
    else{
        alert("The lists are valid.")
    }
}
// Displays each order ID
// Only executes if both lists have the same length.

function showOrder(priceList, orderIdList){
    if(orderIdList.length == priceList.length){ // Check both length of the lists.
        for(let i = 0; i < orderIdList.length; i++){
            alert("Order ID: " + orderIdList[i] + "\n Price: " + priceList[i])
        }
    }
    else{
        alert("The lists are not valid, orders cannot be shown!")
    }
}

// Calculate the average profit from the priceList
function computeAverageProfit(priceList){
    let total = 0;
    for(let i = 0; i < priceList.length; i++) {
        total += priceList[i];
    }
    var avg = total / priceList.length;
    alert("Average profits: " + avg)
}

// Count and alert the number of large orders (Order having a price over 20$).
function countLargeOrders(priceList){
    let counter = 0;

    for(let i = 0; i < priceList.length; i++) {
        if(priceList[i] > 20){ // If the price is greater than 20.
            counter++
        }
    }
    alert("The amount of large orders (Above 20€) is " + counter) // Display the amount of the large orders.
}








// !! DEBUG !!
areNotValidLists(orderIdList, priceList); // Check if the order ID and price lists are valid
showOrder(priceList, orderIdList); // Displays each order ID
computeAverageProfit(priceList); // Calculate the average profit from the priceList
countLargeOrders(priceList); // Count and alert the number of large orders (Order having a price over 20$).
