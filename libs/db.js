const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : '3306',
    user : 'next',
    password : 'Coba123!',
    database : 'coba_next',
  }
});

export default knex