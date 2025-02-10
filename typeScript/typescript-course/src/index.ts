// let firstName = "Eduardo";
// let age = 21;
// let isAdult = true;
// let documents = {name: "Eduardo"};

// let list: number[] = [];

// list.push(1);
// list.push(2);
// list.forEach((item) => console.log(item));

//------------------------------------------------------------------------------------ 

// type CalculateTaxParamsType = {
//     price: number;
//     minTaxValue: number;
//     maxTaxValue: number;
// }

// function calculateTax({price, minTaxValue, maxTaxValue}: CalculateTaxParamsType): number { 
//     if (price <= 1) {
//         return price * minTaxValue;
//     } else {
//         return price * maxTaxValue;
//     }
// };

// console.log(calculateTax({price: 1, minTaxValue: 1.2, maxTaxValue: 1.4}));

type Address = {
    street: string;
    zipCode: string;
    number?: number;
    reference?: string;
}

type User = {
    name: string;
    email: string;
    address?: Address;
}

interface Admin extends User {
    occupation: string;
}

const userAdmin: Admin = {
    email: "admin@email.com",
    name: "ADMIN", 
    occupation: "ADMIN",
    address: {
        street: "Rua",
        zipCode: "0000",
    }

}