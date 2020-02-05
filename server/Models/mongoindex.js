var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');  //for testing

//Rolle, Discordname,

var url = 'mongodb://localhost:27017/test'

router.get('/', function(req, res, next){
    res.render('index');
});

router.get('/get-data', function(req, res, next){
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();                     //find = um alle eintraege zu finden
        cursor.forEach(function(doc,err){
           assert(null, err);
           resultArray.push(doc);                                           //eintraege in den resultArray pushen
        }, function(){
            db.close();
            res.render('index', {html ausgabe: resultArray})                       //
        });
    });
});

router.post('/insert', function(req, res, next){
    var item = {
       title: req.body.title,
       content: req.body.content,
       author: req.body.author,

    };

    mongo.connect(url, function(err, db){                                   //verbindung zu mongodb
        assert.equal(null, err);                                            //ueberpruefen ob es einen Fehler gibt
        db.collection('user-data').insertOne(item, function(err, result){   //einfuegen eines datensatzes
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

