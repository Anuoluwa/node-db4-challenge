/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(() => {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { id: 1, recipe_id: 1, ingredient_id: 2 },
        { id: 2, recipe_id: 1, ingredient_id: 3 },
        { id: 3, recipe_id: 3, ingredient_id: 3 },
      ]);
    });
};
