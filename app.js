//dependency modules
var express=require('express');

var publicDir = require(__dirname, '/public');
var routes=require(__dirname,'./routes');
var http=require('http');
var path=require('path');
var stylus = require('express-stylus');
var nib = require('nib');
var join = require('path').join;
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var users=require('./routes/users');
var routes=require('./routes/index');


var session=require('express-session');
var expressValidator=require('express-validator');
var flash=require('connect-flash');
var passport=require('passport');
var localStrategy=require('passport-local'), Strategy;

var cookieParser=require('cookie-parser');
var dbUrl='mongodb://localhost:27017/user-signup';

//starting app
var app=express();

//set static folder
app.use(express.static('public'));

//body parser-middleware
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
console.log('body parser added..');

//cookie parser
app.use(cookieParser());
console.log('cookies working..');

//all environments
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//express session-middle ware
app.use(session({
    secret:'secret',
    saveUninitialized:false,
    resave:false
}));
//connect flash
app.use(flash());
console.log('flash activated');

//express validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));
//user routes
app.use('/users',users);
app.use('/', routes);

//connect to database
 mongoose.connect(dbUrl, function(err, db){
 	if(err){
 		console.log(err);
 	}
 	else console.log('Connected to mongo database successfully..');
 });

//server
app.listen(3000,function(err){
	if(err){
		console.log(err);
	}else console.log('server listening at 3000');
})