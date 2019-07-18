import express from 'express';
import { getRecipe, getInstructions, getShoppingList } from './recipes-model';

const router = express.Router();


router.get('/recipes', async (req, res) => {
  try {
    const recipes = await getRecipe();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/recipes/:id/instructions', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await getInstructions(id);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/ingredients/:id/quantities', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await getShoppingList(id);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

export default router;
