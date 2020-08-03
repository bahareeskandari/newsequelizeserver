module.exports = function (app) {
  const quotes = require('../controller/quotes.controller.js')

  // Retrieve all Customer
  app.get('/api/quotes', quotes.findAll)
  app.post('/api/add', quotes.addQuotes)
  app.get('/api/:id', quotes.findOneQuotes)
  app.delete('/api/:id', quotes.deleteQuotes)
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
