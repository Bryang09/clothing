const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const guys = require('./routes/api/guys');
const girls = require('./routes/api/girls');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected ... '))
  .catch(err => console.log(err))


app.use('/api/guys', guys);
app.use('/api/girls', girls);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on ${port}`))