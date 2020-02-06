var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("conan");
    var myobj = {
        UserName: "MadFist", UserId: "23827484392112923", Accesstoken: "34534353"
    };
    dbo.collection("DiscordUser").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

//Insert multiple
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("conan");
    var myobj = [
        { accesstoken: 'John'},
        { yourUserId: 'Peter'},
        { urUserName: 'Amy'},
        { name: 'Hannah'},
    ];
    dbo.collection("DiscordUser").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});