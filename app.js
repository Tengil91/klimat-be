const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
 
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

app.get('/test', (req, res) => {
  res.send('hello?');

});

app.listen(process.env.PORT || '3000');


