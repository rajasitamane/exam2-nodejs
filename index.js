var app = require('./express');

var mongoose = require('mongoose');
var DB_URL = "mongodb://localhost:27017/uccss-dev";
mongoose.connect(DB_URL);

app.listen(3000,function(){
    console.log('I am listening on 3000');
});