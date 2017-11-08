/**
 * Created by Vinodh.P on 23-05-2017.
 */
var express=require('express');
var router=express.Router();
var User=require('../model/user');
var mongoose=require('mongoose');

var passport=require('../config/passport');


//Register
router.get('/signup', function(req, res, next){
    res.render('signup',{message:"Enter Required values"});
    req.session.errors=null;
});
//Login
router.get('/login', function(req,res){
    res.render('login');
});
//signup
router.post('/signup',function(req,res){
     //read form data
	 var firstname=req.body.firstname;
	 var lastname=req.body.lastname;
	 var email=req.body.email;
	 var password=req.body.password;

     //assigning form data
	  var newUser=new User();
	  newUser.firstname=firstname;
	  newUser.laststname=lastname;
	  newUser.email=email;
	  newUser.password=password;
	  
          newUser.save(function(err, savedUser){
          	if(err) {
          		console.log(err);
          		res.status(500).send();
          	}
          	else{
          		console.log('user registerd in database');
          		res.redirect('/trending');
          	}
          });
 
       	});

//User Login
router.post('/login', function(req,res){

	res.redirect('/index');

})

router.get('/logout', function(req, res){
    res.redirect('/users/login');
});

module.exports=router;