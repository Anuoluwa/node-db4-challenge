/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('quantities').del()
    .then(() => {
      // Inserts seed entries
      return knex('quantities').insert([
        { id: 1, quantity: '5kg', ingredient_id: 3 },
        { id: 2, quantity: '2kg', ingredient_id: 2 },
        { id: 3, quantity: '1kg', ingredient_id: 1 },
      ]);
    });
};
