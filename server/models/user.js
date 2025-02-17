// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

    azure_ad           : {
        id           : {type:String,required:true},
        token        : {type:String,required:true},
        email        : {type:String,required:true},
        name         : {type:String,required:true}
    },
    grid : {type:Array},
    missions: {type:Array}

});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
