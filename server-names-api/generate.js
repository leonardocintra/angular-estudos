var mongoose = require('mongoose');
const faker = require('faker');
const Person = require('./person');

mongoose.connect('mongodb://localhost:27017/namesdb', {
    useNewUrlParser: true
});

async function createRandonPeople() {
    const N = 1000;
    for (let i = 0; i < N; i++) {
        let p = new Person({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            city: faker.address.city(),
            country: faker.address.country()
        });
        try {
            await p.save();
        } catch (err) {
            console.log(err);
            throw new Error('Error generatin new Person');
        }
    }
}

createRandonPeople().then(() => {
    mongoose.disconnect();
    console.log("Ok");
});