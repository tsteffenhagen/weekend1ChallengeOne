var express = require('express');

var app = express();

app.use(express.static('server/public'));

app.listen(5000, function() {
    console.log('listening to port 5000');   
})