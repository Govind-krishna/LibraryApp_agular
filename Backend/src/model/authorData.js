const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://userone:userone@fsd.6jvof.mongodb.net/Library?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');

const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    name: String,
    born: String,
    image: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
