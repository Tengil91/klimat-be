const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const uri = require('./atlas-credentials').uri;
const addRoutes = require('./routes/user');

mongoose.connect(uri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  if (err) {
    console.log('Invalid Request data');
    res.send({error: 405});
  } else {
    next();
  }
})

app.use(cors());

/* app.get('/test', (req, res) => {
  res.send('hello?');
}); */

addRoutes(app);

app.listen(process.env.PORT || '3000');


