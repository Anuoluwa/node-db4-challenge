/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(() => {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient_name: 'cooking Butter' },
        { id: 2, ingredient_name: 'Groundnut Oil' },
        { id: 3, ingredient_name: 'Table Salt' },
      ]);
    });
};
