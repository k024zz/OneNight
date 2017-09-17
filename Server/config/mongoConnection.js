const duappConfig = require('./duappConfig.js');
const Db = require('mongodb').Db;
const Server = require('mongodb').Server;
const http = require('http');

// const db_host = 'mongo.duapp.com'; //数据库地址
// const db_port = '8908'; // 数据库端口
const db_host = 'localhost'; //数据库地址
const db_port = '27017'; // 数据库端口

const db_name = duappConfig.db_name; //数据库名称
const username = duappConfig.username; //用户AK
const password = duappConfig.password; //用户SK

let _connection = undefined;

let connectDb = () => {
	if(!_connection) {
		_connection = new Db(db_name, new Server(db_host, db_port, {}), {
    		w: 1
		});

		_connection.open(function(err, _connection) {
    		_connection.authenticate(username, password, function(err, result) {
        		if (err) {
            		_connection.close();
            		res.end('Authenticate failed!');
            		return;
        		}
        		console.log("open db");
    		});
		});
	}
	return _connection;
};

exports = module.exports = connectDb();
