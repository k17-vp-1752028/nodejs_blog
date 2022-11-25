const express = require('express');
const morgan = require('morgan');
const engineHandlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

//Set static
app.use(express.static(path.join(__dirname, '/public')));

//http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engineHandlebars.engine({ defaultLayout: 'main', extname: ".hbs" }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route
app.get('/homepage', (req, res) => {
  res.render('home');
});

//127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
