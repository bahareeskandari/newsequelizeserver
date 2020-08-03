const env = {
  database: 'dbneo1qjm9dj9m',
  username: 'vgmszjfppflpkb',
  password: '4226b0fda1d71040258c98e9d5b2279f8f1621f2bd00d25bcc786a6cbbd9230d',
  host: 'ec2-3-248-4-172.eu-west-1.compute.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

module.exports = env
