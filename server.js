const express = require ('express');
const bodyParser = require ('body-parser');
const exphbs = require ('express-handlebars');

const app = express();

const PORT = process.env. PORT || 5000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require ('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen (PORT, () => console.log (`Server listening on port ${PORT}`));



