module.exports = (sequelize, Sequelize) => {
  const Quote = sequelize.define('quote', {
    author: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
  })

  return Quote
}
