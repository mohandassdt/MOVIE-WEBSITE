
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var confirmSchema = mongoose.Schema({
  cnbookingid:String,
  cnUser:String,
  cnTitle:String,
  cnCityName:String,
  cnHallName:String,
    cnDay:String,
  cnShowTime:String,
    cnAmount:String,
    cnNoTickets:String,
   cnseatnumbers:Array,
   cnMail:String
 });
var Confirm = mongoose.model('Confirm',confirmSchema, 'confirmTable');


router.get('/con', function (req, res) {
    console.log("REACHED GET FUNCTION ON Booking SERVER");
    Book.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/con/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON booking SERVER");
     Book.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/con', function(req, res){
  console.log(req.body);
  var cId = req.body.cnbookingid;
  var cuser = req.body.cnUser;
  var cMovie = req.body.cnTitle;
  var cCity= req.body.cnCityName;
  var ctheater = req.body.cnHallName;
 var cDate= req.body.cnDay;
  var cShow = req.body.cnShowTime;
  var cAmnt = req.body.cnAmount;
  var cNumbers = req.body.cnNoTickets;
  var cSeat = req.body.cnseatnumbers;
  var mail = req.body.cnMail;


var book1 = new Book({
  cnbookingid:cId,
  cnUser:cuser,
  cnTitle:cMovie,
    cnMail:mail,
    cnCityName:cCity,
    cnHallName:ctheater,
    cnDay:cDate,
    cnShowTime:cShow,
    cnAmount:cAmnt,
    cnNoTickets:cNumbers,
    cnseatnumbers:cSeat
});

  book1.save(function(err, docs){
    if ( err ) throw err;
    console.log("booking Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/con/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Book.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/con/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Book.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
