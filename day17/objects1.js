











//keep track made, prise, criteria, year of the car, special decription








let car = {
    make: "bmw", // name of property and value of property
    model:" 745li",
    year: 2010,
    getPrice: function(){
        //perform some colc
        return 5000
    },
    printDescription:function(){
        console.log(this.make+' '+this.model)
    }
}

car.printDescription()
console.log(car.year)

console.log(car['year'])

//console.log(car[1])// using index

var anotherCar = {}
anotherCar.car = 'toyota'
console.log(anotherCar.car)

var a = {
    myProperty:{
        b: 'hi'
    }
}
console.log(a.myProperty.b)


