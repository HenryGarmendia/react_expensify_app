const person = {
    name: 'Henry',
    age: 37,
    location: {
        city: 'San Francisco',
        temp: 55
    }
};

const {name = 'Anonymous', age} = person;
const {city, temp: temperature = 95} = person.location;

console.log(`${name} is ${age} and he is from ${city}.`);

if (temperature && city) {
    console.log(`is ${temperature} degrees in ${city}.`);
}
