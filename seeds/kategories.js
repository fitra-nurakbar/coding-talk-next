/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kategories').del()
  await knex('kategories').insert([
    { kategori: 'Music' },
    { kategori: 'Sport' },
    { kategori: 'Techno' }
  ]);
};
