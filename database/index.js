const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mvp', { useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

module.exports = db;
