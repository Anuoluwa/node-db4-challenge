import db from '../utils/dbConfig';

export function getRecipe() {
  return db('recipes');
}


// export function getInstructions(id) {
//   return db('instructions')
//     .join('recipes', 'recipes.id', 'recipe_id')
//     .select('instruction.*', 'recipe_name as recipe')
//     .where({ instructions: id });
// }

// export function getInstructions(id) {
//   return db('instructions')
//     .join('recipes', 'recipes.id', 'instructions.recipe_id')
//     .select('instructions.*', 'recipe_name as recipes', 'duration as recipes')
//     .where({ id })
//     .orderBy('step_number', 'asc');
// }

export function getInstructions(id) {
  return db('recipes')
    .join('instructions', 'recipe_id', 'recipes.id')
    .select('instructions.*', 'recipe_name as recipes')
    .where({ recipe_id: id })
    .orderBy('step_number', 'asc');
}


export function getShoppingList(id) {
  return db('recipes', 'quantities')
    .join('ingredients', 'ingredient_id', 'ingredients.id')
    .join('recipes_ingredients', 'recipe_id', 'recipes.id' )
    .select('ingredients.*', 'recipe_name as recipes', 'ingredients.ingredient_name')
    .select('quantities.*', 'quantity as quantities', 'ingredients.id')
    .where({ recipe_id: id });
}


// export function getShoppingList(id) {
//   return db('recipes', 'quantities')
//     .join('ingredients', 'ingredient_id', 'ingredients.id')
//     .join('recipes_ingredients', 'recipe_id', 'recipes.id' )
//     .select('ingredients.*', 'recipe_name as recipes', 'ingredients.ingredient_name')
//     .where({ recipe_id: id });
// }
