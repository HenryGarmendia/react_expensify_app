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

export { firebase, database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 4596542256
// });

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 66978745565
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 99887665
// });

// database.ref('notes').push({
//     title: 'Course Topics.',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {

//     }
// };

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Henry Garmendia',
//     age: 38,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'San Francisco',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('Data failed.', e);
// });

// database.ref('attributes').set({
//     height: 85,
//     weight: 316
// }).then(() => {
//     console.log('Second set call worked.');
// }).catch((e) => {
//     console.log('Things didn\'t worked out for second error', e);
// });

// database.ref().update({
//     name: 'Hendogg Garmendia',
//     age: 114,
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Silicon Valley'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed.');
//     }).catch((e) => {
//         console.log('Data not removed.', e);
//     });