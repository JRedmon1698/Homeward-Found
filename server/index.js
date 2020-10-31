const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
