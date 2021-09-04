const express = require('express');
const config = require('config');
const connectDB = require('./config/db');

const PORT = process.env.PORT || config.get('PORT');

const app = express();

connectDB();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('port', PORT);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
