const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const key = require('../spoonacular.config.js');
const Ingredient = require('../database/Ingredients.js');
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3000;

const url = 'https://api.spoonacular.com';

app.get('/api/recipes/:ingredients', (req, res) => {
  const str = req.params.ingredients;
  let reqUrl = `${url}/recipes/findByIngredients?number=5&ranking=1&ingredients=`;
  reqUrl = `${reqUrl}${str}%2C&apiKey=${key}`;

  axios(reqUrl)
  .then(({ data }) => res.send(data))
  .catch((err) => console.log(err));
});

app.get('/api/ingredients/:ingredient', (req, res) => {
  const { ingredient } = req.params;
  let reqUrl = `${url}/food/ingredients/search?query=${ingredient}&number=5`
  reqUrl = `${reqUrl}&apiKey=${key}`;

  axios(reqUrl)
  .then(({ data }) => res.send(data.results))
  .catch((err) => console.log(err));
});

app.get('/api/recipe/details/:id', (req, res) => {
  const { id } = req.params;
  let reqUrl = `${url}/recipes/${id}/analyzedInstructions?apiKey=${key}`
  axios(reqUrl)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

app.get('/api/ingredients', (req, res) => {
  Ingredient.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err)); 
})

app.post('/api/ingredients', (req, res) => {
  const { name } = req.body;
  const { amount } = req.body;
  const  { measure } = req.body;
  Ingredient.create({
    name,
    amount,
    measure
  })
    .then((ingredient) => res.send(ingredient))
    .catch((err) => res.send(err));
});

app.patch('/api/ingredients/timeLine/:id', (req, res) => {
  const { id } = req.params;
  const { qualifier } = req.body.timeLine;
  const { amount } = req.body.timeLine;
  const options = {
    $set: {
      timeLine: {
        qualifier,
        amount 
      }
    }
  };
  Ingredient.findByIdAndUpdate(id, options, { new: true })
    .then((addition) => res.send(addition))
    .catch((err) => res.send(err));
});

app.patch('/api/ingredients/amount/:id', (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  const { measure } = req.body;
  const options = {
    amount,
    measure
  }
  Ingredient.findByIdAndUpdate(id, options, { new: true })
    .then((update) => res.send(update))
    .catch((err) => res.send(err));
});

app.patch('/api/ingredients/useAmount/:id', (req, res) => {
  const { id } = req.params;
  const options = {
    $inc: {
      amount: -1,
    }
  }
  Ingredient.findOne({ _id: id })
    .then((data) => {
      if (data.amount > 0) {
        Ingredient.findByIdAndUpdate(id, options, { new: true })
          .then((data) => res.send(data))
      }
      res.status(412).send(data);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
