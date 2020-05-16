const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./src/routes');

// connect to DB
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING ||
    'mongodb://database:27017/db',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html')),
);

app.listen(process.env.PORT || 1337);
console.log('Server listening...');
