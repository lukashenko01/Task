var faker = require('fake')

var fake = function() {
  return {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    lastname: faker.nsme.lastName(),
    adress: faker.adress.streetName(),
    optional: faker.company.companyName(),
    city: fafer.address.city(),
    state: faker.adress.usState(),
    zipcode: faker.adress.zipCode()
  }
}

module.exports = fake;
/* this library generate new values each etaration
Find it so good for automating my test*/
