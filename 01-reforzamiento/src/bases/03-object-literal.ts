const Ironman = {
    firstName : 'Tony',
    lastName : 'Stark',
    age: 45,
    addres:{
        postalCode: 'Ab21',
        city: 'New York'
    }
};

const spiderman = structuredClone(Ironman);



spiderman.lastName = 'Parker'
spiderman.firstName ='Peter'
spiderman.age = 22;
spiderman.addres.city = "Broklin"

console.log(Ironman, spiderman);