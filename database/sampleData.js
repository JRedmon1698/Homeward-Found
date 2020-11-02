const sampleData = {

'ingredients': [
    {
      id: 1,
      name: 'eggs',
      amount: 2
    },
    {
      id: 2,
      name: 'milk',
      amount:1
    },
    {
      id: 3,
      name: 'ground beef',
      amount: 1
    },
    {
      id: 4,
      name: 'tomato sauce',
      amount: 1
    },
    {
      id: 5,
      name: 'noodles',
      amount: 1
    }
  ],


 'recipes': [
  {
    id: 1,
    title: 'spahgetti',
    image: 'https://spoonacular.com/recipeImages/272415-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 3,
    missedIngredientCount: 0,
    missedIngredients: [],
    usedIngredients: ['noodles', 'tomato sauce', 'ground beef'],
    unusedIngredients: ['milk', 'eggs'],
    likes: 0
  },
  {
    id: 2,
    title: 'chili',
    image: 'https://spoonacular.com/recipeImages/272415-312x231.jpg',
    usedIngredientCount: 4,
    missedIngredientCount: 0,
    missedIngredients: [],
    usedIngredients: ['beans', 'tomato sauce', 'ground beef', 'onions', 'chili peppers'],
    unusedIngredients: ['milk', 'eggs'],
    likes: 0
  },

]
}

module.exports = sampleData;
