module.exports = function (app) {
  const customers = require('../controller/customer.controller.js')

  // Retrieve all Customer
  app.get('/api/customers', customers.findAll)
  app.post('/api/add', customers.addCustomer)
  app.get('/api/:id', customers.findOneCustomer)
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
