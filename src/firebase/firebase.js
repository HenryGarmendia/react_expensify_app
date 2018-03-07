import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDz6ayhBlZphOD5xtCT8fn1bvfPWkjAlFw",
    authDomain: "expensify-web-app.firebaseapp.com",
    databaseURL: "https://expensify-web-app.firebaseio.com",
    projectId: "expensify-web-app",
    storageBucket: "expensify-web-app.appspot.com",
    messagingSenderId: "1060104096199"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Henry Garmendia',
    age: 38,
    isSingle: false,
    location: {
        city: 'San Francisco',
        country: 'United States'
    }
});

// database.ref().set('This is my data.');

database.ref('age').set(100);
database.ref('location/city').set('Oakland');

database.ref('attributes').set({
    height: 85,
    weight: 316
});