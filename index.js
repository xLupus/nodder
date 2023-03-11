const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use('/storage', express.static(__dirname + '/storage'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {res.render('home')});
app.get('/sobre', (req, res) => {res.render('about')});


app.use(userRoutes);
app.use(postRoutes);
app.use(categoryRoutes);

app.use((req, res) => {res.render('page404')});

app.listen(8000, () => console.log("Servidor Rodando"));
