const express = require('express'); 
const bodyParser = require('body-parser');
const path = require ('path');
const expbhs = require('express-handlebars');

//Database
const db = require('./config/db');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser ());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', expbhs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.get('/' , function(req, res){
    res.render('index');
});

db.authenticate()
.then(() => console.log('Database conncected...'))
.catch(err=> console.log('Error: ' + err))

app.listen(5000, function() {
    console.log('ready on port 5000');
});