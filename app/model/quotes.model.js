module.exports = (sequelize, Sequelize) => {
  const Quotes = sequelize.define('quotes', {
    author: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
  })

  return Quotes
}
