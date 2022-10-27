/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments(),
    table.string("title"),
    table.integer("kategori_id").unsigned(),
    table.foreign("kategori_id").references("id").inTable("kategories"),
    table.text("content"),
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("posts")
};
