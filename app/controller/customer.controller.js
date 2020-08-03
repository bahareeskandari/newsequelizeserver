const db = require('../config/db.config.js')
const Customer = db.customers

// FETCH all Customers
exports.findAll = (req, res) => {
  Customer.findAll().then((customers) => {
    // Send all customers to Client
    res.send(customers)
  })
}
exports.addCustomer = (req, res) => {
  Customer.create({firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age})
}
exports.findOneCustomer = (req, res) => {
  const apiId = req.params.id
  Customer.findByPk(apiId).then((resp) => res.send(resp))
}

/*

router.get('/:id', function(req, res, next) {
    const apiId = req.params.id;
    db.api.findByPk(apiId).then(api => res.json({
        error: false,
        data: api,
    }));
});
*/
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
