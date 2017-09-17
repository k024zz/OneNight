const express = require('express');
const router = express.Router();

const db = require("../config/mongoConnection");

/* GET home page. */
router.get('/', function(req, res, next) {
	function test(err, collection) {
		collection.insert({b: 2});
	}
    db.collection("test_insert", test);

  	res.render('index', { title: 'Express' });
});

module.exports = router;