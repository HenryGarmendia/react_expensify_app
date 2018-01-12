//
// ES6 Obj Destructuring
//

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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { title } = book;
const { name: publisher_name = 'Self-publish' } = book.publisher;

console.log(`The book "${title}" was publish by ${publisher_name}.`);

//
// ES6 Array Destructuring
//

const address = ['123 Main St', 'Dallas', 'Texas', '75243'];

const [street_address, city_name, state, zip_code] = address;

console.log(`You are in ${address[1]} ${address[2]}`);
console.log(`Our mailing info is ${street_address} ${city_name} ${state} ${zip_code}`);