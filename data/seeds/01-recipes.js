/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(() => {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, recipe_name: 'Nigerian Jollof rice' },
        { id: 2, recipe_name: 'Nigerian Fried rice' },
        { id: 3, recipe_name: 'Nigerian Potridge rice' },
      ]);
    });
};
