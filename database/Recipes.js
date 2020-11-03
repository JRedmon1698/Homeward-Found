const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: Number,
  name: String
});

const Recipes = mongoose.model('Recipes', recipeSchema, 'mvp');

module.exports = Recipes;
