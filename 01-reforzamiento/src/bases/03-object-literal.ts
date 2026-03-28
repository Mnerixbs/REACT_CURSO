interface Person{
    firstName: string;
    lastName: string;
    age: number;

    addres : Address;
};

interface Address{
        postalCode: string,
        city: string
};

const Ironman : Person = {
    firstName : 'Tony',
    lastName : 'Stark',
    age: 45,
    addres:{
        postalCode: '12345',
        city: 'New York'
    }
};


//const spiderman = structuredClone(Ironman);



//spiderman.lastName = 'Parker'
//spiderman.firstName ='Peter'
//spiderman.age = 22;
//spiderman.addres.city = "Broklin"

//console.log(Ironman, spiderman);

console.log(Ironman)