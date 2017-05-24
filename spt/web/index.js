var express = require('express');
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.redirect('/login');
});

app.get('/login', function(req, res) {
    res.render('login', {defaultLayout: "otro.handlebars"})
});

app.get('/login/:id', function(req, res) {
    var id = req.params.id;
    res.render('login',{error_message: "AUTHENTICATION ERROR"})
});

app.post('/login', function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

	if(username == "usuario" && password == "password") {
            res.redirect('/dashboard');
        } else {
            res.redirect("/login/1");
        }

});



app.listen(3000);
