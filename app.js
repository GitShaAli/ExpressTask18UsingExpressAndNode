const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');

const sequelize = require('./util/database');

const app = express();
const userRoutes = require('./routes/userRoutes');





app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);
sequelize
  .sync()
  .then(result => {
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });