//Object Assignments
//  The Assignment:
//  This assignment is divided into three parts, each focusing on using type aliases to model realworld scenarios:
// for example
var employee4 = {
    name: "Fatima Shamim",
    department: "Main Office",
    role: "Manager",
    contact: {
        phoneNumber: "03322439159",
        email: "fatimashamim78.fs@gmail.com"
    },
    skills: ["JavaScript", "CSS", "HTML"]
};
';';
// Accessing properties
console.log(employee4.name);
console.log(employee4.department);
console.log(employee4.role);
// Optional properties check
if (employee4.contact) {
    ;
    console.log(employee4.contact.phoneNumber);
    console.log(employee4.contact.email);
}
if (employee4.skills) {
    console.log(employee4.skills);
}
//example
var myCar2 = {
    name: "Suzuli Mehran 2000",
    engine: {
        horsepower: 39
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    }
};
console.log(myCar2.name);
console.log(myCar2.getHorsepower());
var createProduct = function (name, price, color, stock, colorOptions) {
    var product = {
        name: name,
        price: price,
        color: color,
        inventory: {
            stock: stock,
            colorOptions: colorOptions,
            changeColor: function (newColor) {
                product.color = newColor;
                if (newColor === 'red') {
                    product.price *= 1.1; // increase price by 10% for red
                }
                else if (newColor === 'blue') {
                    product.price *= 0.95; // decrease price by 5% for blue
                }
                else {
                    // Add more color-based price adjustments if needed
                }
            }
        }
    };
    return product;
};
// Example usage:
var myTshirt = createProduct('T-Shirt', 20, 'white', 100, ['white', 'red', 'blue']);
console.log(myTshirt); // Initial product
myTshirt.inventory.changeColor('red');
console.log(myTshirt); // After changing color to red
