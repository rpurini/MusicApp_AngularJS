var express=require('express');
var router=express.Router();
//home
router.get('/', function(req, res){
    res.render('login');
});
router.get('/index', function(req, res){
    res.render('index');
});

router.get('/trending', function(req, res){
    res.render('trending');
});
router.get('/telugu', function(req, res){
    res.render('telugu');
});
router.get('/tamil', function(req, res){
    res.render('tamil');
});
router.get('/hindi', function(req, res){
    res.render('hindi');
});
router.get('/about', function(req, res){
    res.render('about');
});
router.get('/contact', function(req, res){
    res.render('contact');
});

module.exports=router;