var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://developer:developer@ds161630.mlab.com:61630/tournaments';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function(rew,res) {
  res.render('match');
})
app.get('/overall', function(rew,res) {
  res.render('overall');
})

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

module.exports = app;
