const mongoose = require('mongoose');
const db = require('./index.js');

const ingredientSchema = new mongoose.Schema({
  id: Number,
  name: String
});

// const recipeSchema = new mongoose.Schema({
//   id: Number,
//   name: String
// });

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
// const Recipes = mongoose.model('Recipes', recipeSchema, 'mvp');

module.exports = Ingredient;
