const db = require('../config/db.config.js')
const Quote = db.quotes

// FETCH all quotes
exports.findAll = (req, res) => {
  Quote.findAll().then((quotes) => {
    // Send all quotes to Client
    res.send(quotes)
  })
}

// POST NEW DATA
exports.addQuote = (req, res) => {
  Quote.create({
    author: req.body.author,
    content: req.body.content,
  })

  Quote.findAll().then((users) => res.json(users))
}

// FINDING SPECIFIC ID
exports.findOneQuote = (req, res) => {
  const apiId = req.params.id
  Quote.findByPk(apiId).then((resp) => res.send(resp))
}

//DELETING
exports.deleteQuote = (req, res) => {
  const apiIndex = req.params.id
  Quote.destroy({
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
