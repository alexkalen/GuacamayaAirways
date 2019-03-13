const express = require('express'); 
const bodyParser = require('body-parser');
const path = require ('path');
const expbhs = require('express-handlebars');

//Inicializacion Express
const app = express();

//Database
const db = require('./config/db');

//Body-Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser ());

//Carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

//HandleBars
app.engine('handlebars', expbhs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//Verifacion de DataBase y Port
db.authenticate()
.then(() => console.log('Database conncected...'))
.catch(err=> console.log('Error: ' + err))

app.listen(5000, function() {
    console.log('ready on port 5000');
});

//Home Route
app.get('/' , (req, res) =>{
    res.render('index');
});

//Vuelos Route 
app.use('/vuelos', require('./routes/vuelos'));