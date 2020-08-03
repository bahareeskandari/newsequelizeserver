var express = require('express')
var app = express()

var cors = require('cors')

app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json())

const db = require('./app/config/db.config.js')

const Quote = db.quotes

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }')
  initial()
})

require('./app/route/quote.route.js')(app)

// Create a Server
var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})

function initial() {
  Quote.create({
    author: 'JEintsten',
    content: 'New Quote',
  })

  Quote.create({
    author: 'JEintsten3',
    content: 'New Quote2',
  })

  Quote.create({
    author: 'JEintsten2',
    content: 'New Quote3',
  })
}
