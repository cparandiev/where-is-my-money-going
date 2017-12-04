module.exports = {
  development: {
    port: 3001,
    db: 'mongodb://localhost:27017/where-is-my-money-going-db',
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}
