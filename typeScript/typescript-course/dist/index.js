"use strict";
// let firstName = "Eduardo";
// let age = 21;
// let isAdult = true;
// let documents = {name: "Eduardo"};
// let list: number[] = [];
// list.push(1);
// list.push(2);
// list.forEach((item) => console.log(item));
function calculateTax(price) {
    if (price <= 1) {
        return price * 1.2;
    }
    else {
        return price * 1.4;
    }
}
;
console.log(calculateTax(1));
