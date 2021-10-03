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
const LOCAL_ADDRESS= '0.0.0.0';

console.log('>>>>>>', process.env)
server.listen(PORT, LOCAL_ADDRESS, () => {
  const address = server.address();
  console.log('server listening at', address);
});
