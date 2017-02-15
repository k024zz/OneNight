// database stuff
const duappConfig = require('../config/duappConfig.js');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var http = require('http'); 
/*数据库连接信息host,port,user,pwd*/
var db_name = duappConfig.db_name; //数据库名称
// var db_host = 'mongo.duapp.com'; //数据库地址
// var db_port = '8908'; // 数据库端口
var db_host = 'localhost'; //数据库地址
var db_port = '27017'; // 数据库端口
var username = duappConfig.username; //用户AK
var password = duappConfig.password; //用户SK

var db = new Db(db_name, new Server(db_host, db_port, {}), {
    w: 1
});

db.open(function(err, db) {
    db.authenticate(username, password, function(err, result) {
        if (err) {
            db.close();
            res.end('Authenticate failed!');
            return;
        }
        console.log("open db");
    });
});
////////////////////////////////////////////////


var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	function test(err, collection) {
		collection.insert({a: 1});
	}
	db.collection("test_insert", test);

  	res.render('index', { title: 'Express' });
});

module.exports = router;
