
var logger = require('morgan');
var express = require('express');
var app = express();
var bodyParser=require('body-parser');

var routes = require('./routes/movie-crud');
var routesCity = require('./routes/city-crud');
var routesTheater = require('./routes/theater-crud');
var routesShow = require('./routes/showtime-crud');
var routesMapping = require('./routes/mapping-crud');
var routesConfirm = require('./routes/confirmation-crud');
var routesBooking = require('./routes/booking-crud');
var routesRating = require('./routes/rating-crud');




app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/movie', routes);
app.use('/cty', routesCity);
app.use('/theater', routesTheater);
app.use('/showt', routesShow);
app.use('/map', routesMapping);
app.use('/bok', routesBooking);
app.use('/con', routesConfirm);
app.use('/rt', routesRating);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});



var mongo = require('mongodb');
var mongoose = require('mongoose');

var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});
// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}



var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});
