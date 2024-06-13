









/* what is an object: it is collection of properties, where eachproperty key(name) has and name 
why objects are useful: they allow us to store related values in a convenient structure 
objects allows easily relate methods to the values they should operate on*/


/* const object_name = { key and value pairs called properties
    key1: value1,
    key2: value2

} 
when we declare a function as a value in key: value pair tehn it is known as Methods


*/


const person = {
    "firstName": "elon",  // by deafult it will store as a string
    lastName: "mask",
    age: 35,
    address : {
        street: "Tesla road",// nested object
        city: "Austin",
        state: "Texas",
        country: "United states",
        zipcode: "45667"

    }
}

console.log(typeof person)
console.log(person)


/* how to access properties:
using .notation */


console.log(person.firstName)


/* using []  */

console.log(person["age"])



/* update properties of an object */

person.firstName = "Mr. Elon"


console.log(person.firstName)

/* how to add new properties */

person.company = "Tesla"

console.log(person)


/* how to delete properties from the object */

delete person.age
console.log(person)

/* how to access nested properties */
console.log(person.address.city)
console.log(person.address.zipcode)

/* check if a property exist in an object */

/* propertyName in objectNmae
 */

console.log("age" in person)

console.log("firstName" in person)

/* for in loop alows you to access properties without knowing any name */
for(let prop in person){
    console.log(prop)
    console.log(person[prop])
    console.log(prop + ":"+person[prop])
}



/*  create an object with new keyword */

const person1 = new Object()


person1.firstName = "Abra"
person1.lastName = "Kabra"
person1.age = 35


console.log(person1)


const person2 = new Object({

    firstName : "Dan",
    lastName : "Ken",
    age: 35

})

console.log(person2)
