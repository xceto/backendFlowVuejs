require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const router = require('./app/router');
app.use(cors({
  origin: '*' 
})); 
app.use('/', router);

const portApp = process.env.APP_PORT || 5000;
console.log('>>>>>>', process.env)
app.listen(portApp, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${portApp}`);
});
