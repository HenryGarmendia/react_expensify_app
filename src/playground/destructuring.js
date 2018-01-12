const person = {
    name: 'Henry',
    age: 37,
    location: {
        city: 'San Francisco',
        temp: 55
    }
};

const {name, age} = person;
const {city, temp} = person.location;

console.log(`${name} is ${age} and he is from ${city}.`);
console.log(`is ${temp} degrees in ${city}.`);
