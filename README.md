# Homeward-Found

## Getting Started

Although not necessary to use Homeward-Bound, if you want to get the most out of this app you should go to https://spoonacular.com/food-api and get a developer key. Once you get your developer key, copy `spoonacular.config.example.js`, rename to `spoonacular.config.js`, and replace `YOUR_API_KEY` with your key. This file will be ignored when pushing to github. 

To install package dependancies:
  `npm install`

Install mongodb server community edition if not already installed. https://www.mongodb.com/download-center/community

Install nodemon:
  `npm install nodemon`

The module mounts to:
  `<div id='app'></div>`

## Scripts

`build`
Builds development bundle of client module.

`start`
Starts local server on port 3000.

## API Spec

### Get list of recipes for given ingredients. 
`GET /api/recipes/:ingredients`

| Params | Type | Example |
| ------ | ---- | ------- |
|:ingredients | comma-separated `string` | 'butter, salt, eggs' |

### Response: 

```
{
        "id": 78632,
        "title": "Omelets (usa Version - Imperial)",
        "image": "https://spoonacular.com/recipeImages/78632-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 1009,
                "amount": 1,
                "unit": "small handful",
                "unitLong": "small handful",
                "unitShort": "small handful",
                "aisle": "Cheese",
                "name": "cheddar cheese",
                "original": "a small handful of grated Cheddar cheese",
                "originalString": "a small handful of grated Cheddar cheese",
                "originalName": "a of grated Cheddar cheese",
                "metaInformation": [
                    "grated"
                ],
                "meta": [
                    "grated"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 1001,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "butter",
                "original": "a pat of butter",
                "originalString": "a pat of butter",
                "originalName": "a pat of butter",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
            },
            {
                "id": 1123,
                "amount": 0.6666666666666666,
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "2/3 large eggs preferably free range or organic",
                "originalString": "2/3 large eggs preferably free range or organic",
                "originalName": "eggs preferably free range or organic",
                "metaInformation": [
                    "organic",
                    "free range"
                ],
                "meta": [
                    "organic",
                    "free range"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            }
        ],
        "unusedIngredients": [],
        "likes": 91
    }
```

### Get single ingredient.
`GET /api/ingredients/:ingredient`

| Params | Type |
| ------ | ---- |
|:ingredients | `string` |

### Response: 

```
   {
        "id": 11124,
        "name": "carrots",
        "image": "sliced-carrot.png"
    }
```

### Get recipe details with recipe id.
`GET /api/recipe/details/:id`

| Params | Type |
| ------ | ---- |
|:id | `number` |

