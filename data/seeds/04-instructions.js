/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(() => {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          id: 1, step_number: '1', step: 'Boil water', recipe_id: 1,
        },
        {
          id: 2, step_number: '2', step: 'Wash tomatoes', recipe_id: 2,
        },
        {
          id: 3, step_number: '3', step: 'Wash pepper', recipe_id: 3,
        },
      ]);
    });
};
