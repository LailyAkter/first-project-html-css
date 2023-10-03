// prototype chaining
const product = {
    name:"",
    price:"",
    __proto__:{
        isEmpty:false,
        displayInfo(name,price){
            this.name = name;
            this.price = price;
            console.log(`Product: ${this.name}, Price: $${this.price}`);
        }
    }
}
    
const product1 = product.displayInfo("product1", 10.99);
const product2 = product.displayInfo("product2", 29.99);

if(product.isEmpty){
    console.log("Product Added Successfully !");
}else{
    console.log("Product don't added!");
}




// function Person (name,email,roll){
//     this.name = name;
//     this.email = email;
//     this.roll = roll;
// }

// Person.prototype.displayInfo = function (){
//     console.log(`name : ${this.name},email : ${this.email} ,roll : ${this.roll}`);
// }

// const person1 = new Person("laily",'laily12@gmail.com',20);
// const person2 = new Person("rabeya",'rabeya@gmail.com',20);

// person1.displayInfo();
// person2.displayInfo();

// console.log(Person.prototype)