// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      database: "coba_next",
      user: "next",
      password: "Coba123!",
    },
    seeds: {
      directory: './seeds'
    },
  },
};
