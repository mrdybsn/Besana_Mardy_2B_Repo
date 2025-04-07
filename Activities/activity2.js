function TotalAmount(totalPurchase, isMember) {
    var discount_price, discounted_price;
    if(totalPurchase > 100 && isMember) {
        discount_price = totalPurchase * 0.2;
        discounted_price = totalPurchase - discount_price;
        return discounted_price;
    } else if (totalPurchase > 50) {
        discount_price = totalPurchase * 0.1;
        discounted_price= totalPurchase - discount_price;
        return discounted_price;
    } else {
        console.log(totalPurchase, "No discount");
    }
    return discounted_price;
}

console.log(TotalAmount(120, 'True'));
console.log(TotalAmount(60, 'False'));
console.log(TotalAmount(30, 'False'));