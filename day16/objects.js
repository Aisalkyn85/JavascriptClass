
//Objects syntacs
const myObj = {name: "Dave"}

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat","sleep","code"],
    beverage: {
        morning:"Cofee",
        afternoon: "hot tea"

    },
    action: function(){
        return `Time for ${this.beverage.morning}`
    }
}
console.log(anotherObj.hobbies)
console.log(anotherObj.hobbies[0])
console.log(anotherObj["alive"])
console.log(myObj.name)
console.log(anotherObj["beverage"])
console.log(anotherObj.beverage.morning)
console.log(anotherObj.action)


const vehicle = {
    wheels:4,
    engne: function(){
        return "Vrrooom"
    }
}
const truck  = Object.create(vehicle)
truck.doors = 2
console.log(truck)
console.log(truck.wheels)// inheritance
console.log(truck.engne())
const car = Object.create(vehicle)
car.doors = 4
car.engne = function(){
    return "whooosh!" // overwrote
}
console.log(car.engne())




