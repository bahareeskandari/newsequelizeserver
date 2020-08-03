const db = require('../config/db.config.js')
const Quotes = db.quotes

// FETCH all quotes
exports.findAll = (req, res) => {
  Customer.findAll().then((quotes) => {
    // Send all quotes to Client
    res.send(quotes)
  })
}

// POST NEW DATA
exports.addQuotes = (req, res) => {
  Quotes.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  })

  Quotes.findAll().then((users) => res.json(users))
}

// FINDING SPECIFIC ID
exports.findOneQuotes = (req, res) => {
  const apiId = req.params.id
  Quotes.findByPk(apiId).then((resp) => res.send(resp))
}

//DELETING
exports.deleteQuotes = (req, res) => {
  const apiIndex = req.params.id
  Quotes.destroy({
    where: {
      id: apiIndex,
    },
    force: true,
  })
}

/*

.destroy({
  where: {
    id: 1
  },
  force: true
}

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
