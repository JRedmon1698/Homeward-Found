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

app.get('/api/recipes/:ingredients', (req, res) => {
  const str = req.params.ingredients;
  const reqUrl = `${url}/recipes/findByIngredients?number=5&ranking=1&ingredients=`;
  reqUrl = `${reqUrl}${str}%2C&apiKey=${key}`;

  axios({
    method: 'get',
    url: reqUrl,
  })
  .then((recipes) => res.send(recipes.data))
  .catch((err) => console.log(err));
});

app.get('/api/ingredients/:ingredient', (req, res) => {
  const { ingredient } = req.params;
  let reqUrl = `${url}/food/ingredients/search?query=${ingredient}&number=5`
  reqUrl = `${reqUrl}&apiKey=${key}`;

  console.log(reqUrl);
  axios({
    method: 'get',
    url: reqUrl,
  })
  .then(({ data }) => res.send(data.results))
  .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
