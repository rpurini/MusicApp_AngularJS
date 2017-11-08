var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
		firstname:String,
		lastname:String,
		email: String,
		password: String
});
var User=mongoose.model('local', userSchema);
module.exports=User;