// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host : 'localhost',
      port : '3306',
      user : 'next',
      password : 'Coba123!',
      database : 'coba_next',
    },
  },
};
