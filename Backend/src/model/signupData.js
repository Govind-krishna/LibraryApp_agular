const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://userone:userone@fsd.6jvof.mongodb.net/Library?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');

const Schema=mongoose.Schema;

const SignupSchema=new Schema({
    name: String,
    username: String,
    password: String,
});

var Bookdata = mongoose.model('userData',SignupSchema);

module.exports = Bookdata;
