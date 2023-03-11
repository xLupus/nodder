const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash')
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const adminRoutes = require('./routes/adminRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use('/storage', express.static(__dirname + '/storage'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 30000000 } //se secure for true n funciona se n tiver https
}))
app.use(flash());

app.get('/', (req, res) => {res.render('home')});
app.get('/sobre', (req, res) => {res.render('about')});

app.use(userRoutes);
app.use(adminRoutes);
app.use(postRoutes);
app.use(categoryRoutes);

app.use((req, res) => {res.render('page404')});

app.listen(8000, () => console.log("Servidor Rodando"));
