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

  ],
  "steps": [
      {
          "number": 1,
          "step": "Separate the eggs.",
          "ingredients": [
              {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
              }
          ],
          "equipment": []
      },
      {
          "number": 2,
          "step": "Let yolks and whites stand at room temperature for up to 30 minutes. Grease a 2-1/2-qt. souffle dish and dust with bread crumbs; set aside.",
          "ingredients": [
              {
                  "id": 18079,
                  "name": "breadcrumbs",
                  "localizedName": "breadcrumbs",
                  "image": "breadcrumbs.jpg"
              },
              {
                  "id": 1125,
                  "name": "egg yolk",
                  "localizedName": "egg yolk",
                  "image": "egg-yolk.jpg"
              }
          ],
          "equipment": [],
          "length": {
              "number": 30,
              "unit": "minutes"
          }
      },
      {
          "number": 3,
          "step": "In a saucepan, melt butter. Stir in the flour, salt and pepper until smooth. Gradually add milk. Bring to a boil cook and stir for 2 minutes or until thickened. Stir in broccoli and onion.",
          "ingredients": [
              {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
              },
              {
                  "id": 11090,
                  "name": "broccoli",
                  "localizedName": "broccoli",
                  "image": "broccoli.jpg"
              },
              {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
              },
              {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
              },
              {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
              },
              {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
              }
          ],
          "equipment": [
              {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
              }
          ],
          "length": {
              "number": 2,
              "unit": "minutes"
          }
      },
      {
          "number": 4,
          "step": "Remove from the heat; stir in egg yolks until combined. Cool slightly. Stir in mayonnaise.",
          "ingredients": [
              {
                  "id": 4025,
                  "name": "mayonnaise",
                  "localizedName": "mayonnaise",
                  "image": "mayonnaise.png"
              },
              {
                  "id": 1125,
                  "name": "egg yolk",
                  "localizedName": "egg yolk",
                  "image": "egg-yolk.jpg"
              }
          ],
          "equipment": []
      },
      {
          "number": 5,
          "step": "In a bowl, beat egg whites until stiff peaks form. Stir a fourth of the egg whites into the broccoli mixture. Fold in remaining whites.",
          "ingredients": [
              {
                  "id": 1124,
                  "name": "egg whites",
                  "localizedName": "egg whites",
                  "image": "egg-white.jpg"
              },
              {
                  "id": 11090,
                  "name": "broccoli",
                  "localizedName": "broccoli",
                  "image": "broccoli.jpg"
              }
          ],
          "equipment": [
              {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
              }
          ]
      },
      {
          "number": 6,
          "step": "Transfer to prepared souffle dish.",
          "ingredients": [],
          "equipment": []
      },
      {
          "number": 7,
          "step": "Sprinkle with cheese if desired.",
          "ingredients": [
              {
                  "id": 1041009,
                  "name": "cheese",
                  "localizedName": "cheese",
                  "image": "cheddar-cheese.png"
              }
          ],
          "equipment": []
      },
      {
          "number": 8,
          "step": "Bake at 325° for 38-42 minutes or until top is golden brown, a toothpick inserted near the side comes out clean and a meat thermometer reads 160°.",
          "ingredients": [
              {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
              }
          ],
          "equipment": [
              {
                  "id": 404789,
                  "name": "kitchen thermometer",
                  "localizedName": "kitchen thermometer",
                  "image": "food-thermometer.jpg"
              },
              {
                  "id": 404644,
                  "name": "toothpicks",
                  "localizedName": "toothpicks",
                  "image": "toothpicks.jpg"
              },
              {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
              },
              {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg",
                  "temperature": {
                      "number": 325,
                      "unit": "Celsius"
                  }
              }
          ],
          "length": {
              "number": 42,
              "unit": "minutes"
          }
      },
      {
          "number": 9,
          "step": "Serve immediately.",
          "ingredients": [],
          "equipment": []
      }
]
}

module.exports = sampleData;
