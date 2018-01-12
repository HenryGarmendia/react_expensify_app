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