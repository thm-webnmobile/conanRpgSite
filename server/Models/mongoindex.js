var express = require('express');
var router = express.Router();
var assert = require('assert');  //for testing
var mongo = require('mongodb');


//Rolle, Discordname,
const collection = db.collection('dogs')
collection.findOne({disc}, (err, item) => {
    console.log(item)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/conan";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});



var url = 'mongodb://localhost:27017/test'

router.get('/', function(req, res, next){
    res.render('app');
});
/*
router.get('/get-data', function(req, res, next){
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        var cursor = db.collection('discord.js').find();                     //find = um alle eintraege zu finden
        cursor.forEach(function(doc,err){
           assert(null, err);
           resultArray.push(doc);                                           //eintraege in den resultArray pushen
        }, function(){
            db.close();
            res.render('index', {html ausgabe: resultArray})                       //
        });
    });
});
*/
router.post('/insert', function(req, res, next){
    var item = {
        UserId: req.y
       token: req.acces,
       UserName: req.,

    };

    mongo.connect(url, function(err, db){                                   //verbindung zu mongodb
        assert.equal(null, err);                                            //ueberpruefen ob es einen Fehler gibt
        db.collection('discord.js').insertOne(item, function(err, result){   //einfuegen eines datensatzes
            assert.equal(null, err);
            console.log('item-insert');
            db.close();
        });
    });
    res.redirect('/');

});

router.post('/update', function(req, res, next){

});

router.post('/delete', function(req, res, next){

});

module.exports = router;
*/
