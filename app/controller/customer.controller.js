const db = require('../config/db.config.js')
const Customer = db.customers

// FETCH all Customers
exports.findAll = (req, res) => {
  Customer.findAll().then((customers) => {
    // Send all customers to Client
    res.send(customers)
  })
}

exports.findAllAgain = (req, res) => {
  Customer.findAll().then((customers) => {
    // Send all customers to Client
    res.send(customers)
  })
}

exports.addCustomer = (req, res) => {
  console.log('json', req.body.json())
  console.log('not json', req.body.firstname, req.body.lastname, req.body.age)
  console.log('json', req.body.firstname.json(), req.body.lastname.json(), req.body.age.json())
  Customer.create({firstname: 'bahare', lastname: 'Eskandari', age: 28})
}

/*
app.get('/', (req, res) => {
  res.send({hello: 'world'})
})

app.put('/user', async (req, res) => {
  await models.User.create({name: req.body.name, task: req.body.task})
  res.send({users: await models.User.findAll()})
})

app.get('/users', async (req, res) => {
  res.send({users: await models.User.findAll()})
})

*/
