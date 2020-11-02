const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3000;

const url = 'https://api.spoonacular.com';

app.get('/api/recipes/ingredients', (req, res) => {
  axios({
    method: 'get',
    url: `${url}/recipes/findByIngredients`,
    data: {
      'ingredients': req.body,
      'number': 5,
      'ranking': 1
    }
  })
  .then((recipes) => console.log(recipes))
  .catch((err) => console.log(err));
})


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
