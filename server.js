const express = require("express");
const app = express();
const faker = require("faker");

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}



app.get('/api/user/new', (req, res) => {
    res.json([{
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }])
});

app.get('/api/companies/new', (req, res) => {
    res.json([{
        id: faker.random.uuid(),
        companyName: faker.company.companyName(),
        companyAddress: [
            faker.address.streetAddress(), 
            faker.address.city(),
            faker.address.state(),
            faker.address.country(),
            faker.address.zipCode()
        ]
    }])
});

app.get('/api/user/company', (req, res) => {
    res.json([{
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        companyName: faker.company.companyName(),
        companyAddress: [
            faker.address.streetAddress(), 
            faker.address.city(),
            faker.address.state(),
            faker.address.country(),
            faker.address.zipCode()
        ]
    }])
});

app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);