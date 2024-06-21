//Object Assignments
//  The Assignment:
//  This assignment is divided into three parts, each focusing on using type aliases to model realworld scenarios:

//  Part 1: Employee Data
//  Challenge:
//  1. Design a type alias named Employee to represent an employee object with properties like 
//  name (string), department (string), and role (string).
type Employee = {
    name: string,
    department: string,
    role: string
}


//  2. Include an optional nested object named contact to hold phone and email information (if 
//  provided).
type Employee1 = {
    name: string;
    department: string;
    contact?: {
        phoneNumber: number,
        email: string;
    };
};

//  3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
//  "Intern".
type Employee2 = {
    name: string;
    department: string;
    role: "Manager" | "Engineer" | "Intern";
    contact?: {
        phoneNumber: number,
        email: string, number;
    };
};


//  4. Make the skills property an optional array of strings for listing an employee's skills (if 
//  any).
type Employee3 = {
    name: string;
    department: string;
    role: "Manager" | "Engineer" | "Intern";
    contact?: {
        phoneNumber: string,
        email: string;
    };
    skills?: string[];
};

// for example
let employee4: Employee3 = {
    name: "Fatima Shamim",
    department: "Main Office",
    role: "Manager",
    contact: {
        phoneNumber: "0332-1234567",
        email: "fatimashamim033@gmail.com"
    },
    skills: ["JavaScript", "CSS", "HTML"]
};
';'
// Accessing properties
console.log(employee4.name);
console.log(employee4.department); 
console.log(employee4.role); 

// Optional properties check
if (employee4.contact) {
;    console.log(employee4.contact.phoneNumber);  
    console.log(employee4.contact.email);  
}

if (employee4.skills) {
    console.log(employee4.skills);  
}



//************************************************************************** */
//************************************************************************** */

//  Part 2: Car Details
//  Challenge:
//  1. Design a type alias named Car to represent a car object.
type Car = {
    name: string

}
//  2. Include a nested object named engine within Car, containing a property named 
//  horsepower (number).
type Car1 = {
    name: string
    engine: {
        horsepower: number
        };
};
//  3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
//  engine's horsepower.
type Car2 = {
    name: string
    engine: {
        horsepower: number
        };
        getHorsepower:() =>number
        
};
//example
const myCar2: Car2 = {
    name: "Suzuli Mehran 2000",
    engine: {
        horsepower: 39
    },
    getHorsepower() {
        return this.engine.horsepower;
    }
};
console.log(myCar2.name)
console.log(myCar2.getHorsepower())


//******************************************************** */
//******************************************************** */
//  Part 3: Colorful T-Shirts
//  Challenge:
//  1. Design a type alias named Product to represent a T-shirt object with properties like name
//  (string), price (number), and color (string).
type Product = {
    name: string,
    price: number,
    color: string
}
// Product = T-shirt 

//  2. Include a nested object named inventory within Product. This inventory object 
//  should have two properties: 
//  o stock (number): Represents the number of T-shirts available.
//  o colorOptions (optional array of strings): Lists available colors (if any).
type Product1 = {
    name: string;
    price: number;
    color: string;
    inventory: {
        stock: number,
        colorOptions: string[]
    };
}

//  3. Inside the inventory object, define a function named changeColor. This function 
//  accepts a new color string as an argument. When called, it should: 
//  o Update the color property of the Product object.
//  o Adjust the price based on the new color (implement your own logic, e.g., 
//  increase by 10% for red, decrease by 5% for blue).

type Product2 = {
    name: string;
    price: number;
    color: string;
    inventory?: {
        stock: number;
        colorOptions?: string[];
        changeColor: (newColor: string) => void;
    };
};
const createProduct = (name: string, price: number, color: string,
    stock: number, colorOptions?: string[]): Product2 => {
    let product: Product2 = {
      name: name,
      price: price,
      color: color,
      inventory: {
        stock: stock,
        colorOptions: colorOptions,
        changeColor: (newColor: string) => {
          product.color = newColor;
          if (newColor === 'red') {
            product.price *= 1.1; // increase price by 10% for red
          } else if (newColor === 'blue') {
            product.price *= 0.95; // decrease price by 5% for blue
          } else {
            // Add more color-based price adjustments if needed
          }
        }
      }
    };
    return product;
  };
  
  // Example usage:
  let myTshirt = createProduct('T-Shirt', 20, 'white', 100, ['white', 'red', 'blue']);
  console.log(myTshirt); // Initial product
  
  myTshirt.inventory.changeColor('red');
  console.log(myTshirt); // After changing color to red