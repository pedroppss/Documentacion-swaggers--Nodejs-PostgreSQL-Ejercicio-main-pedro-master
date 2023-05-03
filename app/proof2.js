const car = {
    type: "Audi",
    model: "A5",
    color: "red",
    plate: "5473ASD",
    owner: {
        firstName: "Philip",
        lastName: "Smith",
        age: 48,
        addresses: {
            personal: "Michigan av",
            job: "Figueroa St"
        },
        isMarried: true

    }
}
const cars = [
    {
        type: "Audi",
        model: "A5",
        color: "red",
        plate: "5473ASD",
        owner: {
            firstName: "Philip",
            lastName: "Smith",
            age: 48,
            addresses: {
                personal: "Michigan av",
                job: "Figueroa St"
            },
            isMarried: true

        }
    },
    {
        type: "BMW",
        model: "330",
        color: "blue",
        plate: "1113Aaa",
        owner: {
            firstName: "Sam",
            lastName: "Jones",
            age: 35,
            addresses: {
                personal: "Van dick",
                job: "Santa clara"
            },
            isMarried: false

        }
    },
    {
        type: "Alfa romeo",
        model: "Giulieta",
        color: "green",
        plate: "2222SSS",
        owner: {
            firstName: "PhiGiovanni",
            lastName: "Conner",
            age: 24,
            addresses: {
                personal: "Capuchinos",
                job: "Santa clara"
            },
            isMarried: true

        }
    },
    {
        type: "Seat",
        model: "Leon",
        color: "blue",
        plate: "4567GGG",
        owner: {
            firstName: "Casey",
            lastName: "Parks",
            age: 33,
            addresses: {
                personal: "Santa marina",
                job: "Bollos de Hito"
            },
            isMarried: true

        }
    }
]

///////////////////Object car/////////////////////
const { plate, owner: { firstName }, owner: { addresses: { personal } } } = car
console.log("Plate: ", plate, " FirstName: ", firstName, " Address personal: ", personal)

///////////////array of cars objects displayed on the screen////////
//////for in
/*
for (let element in cars) {
    console.log(cars[element])
}
*/
/*
//////for of

for (let element of cars) {
    console.log(element)
}

//////while

let element = 0;
while (element < cars.length) {
    console.log(cars[element])
    element++;
}

//////do-while

let element = 0;
do {
    console.log(cars[element])
    element++;
} while (element < cars.length);

//////foreach

cars.forEach(function (car) {
    console.log(car);
})
*/
///////////////show those whose age is older than 35 years//////////////
/*
const result=cars.filter(({owner:{age}})=>age>25)
console.log(result);
*/

//////////////add one of each age of the owners//////////////////////
/*
const result = cars.map(function (element) {
    element.owner.age = element.owner.age + 1;
    return element;
})
console.log(result);
*/
//////////add a new data//////////
/*
cars.push({type:"Ferrari",model:"spider",color:"black",
plate:"FRGTHAT",owner:{firstName:"Michelle",lastName:"Parker",age:20,addresses:{personal:"Santa marina",
job:"Santa maria"},isMarried:false}})
console.log(cars)
*/