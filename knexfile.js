module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/salt_test'
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};