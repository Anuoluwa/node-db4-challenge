/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments();
      table.text('recipe_name', 128).notNullable();
      table.text('duration', 128);
    })
    .createTable('ingredients', (table) => {
      table.increments();
      table.text('ingredient_name', 128).notNullable();
    })
    .createTable('recipes_ingredients', (table) => {
      table.increments();
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('instructions', (table) => {
      table.increments();
      table.integer('step_number', 10).unique().notNullable();
      table.text('step', 10).unique().notNullable();
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('quantities', (table) => {
      table.increments();
      table.text('quantity', 10).unique().notNullable();
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('quantities')
    .dropTableIfExists('instructions');
};
