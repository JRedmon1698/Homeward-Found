const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const key = require('../spoonacular.config.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3000;

const url = 'https://api.spoonacular.com';

app.get('/api/recipes/:ingredientStr', (req, res) => {
  const str = req.params.ingredientStr;
  let reqUrl = `${url}/recipes/findByIngredients?number=5&ranking=1&ingredients=`;
  reqUrl = `${reqUrl}${str}%2C&apiKey=${key}`;

  axios({
    method: 'get',
    url: reqUrl,
  })
  .then((recipes) => console.log(recipes.data))
  .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
