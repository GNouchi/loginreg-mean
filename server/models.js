const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
// import masterValidator - function call is VERY important
const { emailValidator, alphaOnly, pw1, } = require('./masterValidator')(); 

mongoose.connect(
    'mongodb://localhost/loginreg',
    {useNewUrlParser:true},
    (err)=> err?console.log(err):console.log("====> db running fine"),    
)


// model stuff here
const userSchema = new Schema({
    name:
    {
        type : String,
        required : [true,'Please enter a name'],
        minlength: [2,'Names can be between 2-50 characters'],
        maxlength: [50,'Names can be between 2-50 characters'],
        validate:  [ alphaOnly.validator, alphaOnly.description, ],
    },

    email:{
        type : String,
        required : [true,'Please enter an email'],
        minlength: [3,'Please enter an email - too short'],    
        maxlength: [50,'Please enter a different email - too long'],    
        validate:  [ emailValidator.validator, emailValidator.description, ],
        unique: true,
        uniqueCaseInsensitive: true ,
    },        

    password:{
        type : String,
        required : [true,'Please enter a password'],
        minlength: [8,'Passwords may be 8-30 characters long'],
        maxlength: [30,'Passwords may be 8-30 characters long'],
        validate:  [ pw1.validator, pw1.description, ],
    },

},
{timestamps:true})

userSchema.plugin(uniqueValidator, { message: 'Sorry, that email seems to be taken!' });


module.exports ={
    User : mongoose.model('User', userSchema), 
}    