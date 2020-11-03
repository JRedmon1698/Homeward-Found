const db = require('./index.js');
const Ingredient = require('./Ingredients.js');

Ingredient.create({
  name: "chocolate",
  id: 0
})
  .then(() => db.close())
  .catch((err) => console.log(err));
