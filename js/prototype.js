// prototype chaining
const Product = {
    name:'',
    price:"",
    __proto__:{
        displayInfo(name,price){
            this.name = name;
            this.price = price;
            console.log(`Product: ${this.name}, Price: $${this.price}`);
        }
    }
}

const product1 = Product.displayInfo("Widget", 10.99);
const product2 = Product.displayInfo("Gadget", 29.99);

function Person (name,email,roll){
    this.name = name;
    this.email = email;
    this.roll = roll;
}

Person.prototype.displayInfo = function (){
    console.log(`name : ${this.name},email : ${this.email} ,roll : ${this.roll}`);
}

const person1 = new Person("laily",'laily12@gmail.com',20);

person1.displayInfo();