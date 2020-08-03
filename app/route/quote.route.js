module.exports = function (app) {
  const quotes = require('../controller/quote.controller.js')

  // Retrieve all Customer
  app.get('/api/quotes', quotes.findAll)
  app.post('/api/add', quotes.addQuote)
  app.get('/api/:id', quotes.findOneQuote)
  app.delete('/api/:id', quotes.deleteQuote)
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
