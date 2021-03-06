var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var lichbantyc = require('../model/lichlamviectho');
var utils = require('../utils/utils');
var lichbantycmodel = mongoose.model('lichlamviectho');

/* GET users listing. */
lichbantyc.methods(['post']);
lichbantyc.register(router,'/lichlamviectho'); 

router.get('/lichlamviectho', function(req, res, next) {
	lichbantycmodel.find({}, function(err, data) {
		if(err)
			res.send(err);
		else
			res.send(utils.response(true, data));
	})
});

router.get('/lichlamviectho/:cmnd', function(req, res, next) {
	lichbantycmodel.find({'cmnd': req.params.cmnd}, function(err, data) {
		if(err)
			res.send(err);
		else
			res.send(utils.response(true, data));
	})
});

router.put('/lichlamviectho/:id', function(req, res, next) {
	lichbantycmodel.update({'_id': req.params.id}, req.body, function(err, data) {
		if(err)
			res.send(err);
		else 
			res.send(utils.response(true, data));
	})
});

router.delete('/lichlamviectho/:id', function(req, res, next) {
	lichbantycmodel.remove({'_id': req.params.id}, function(err, data) {
		if(err)
			res.send(err);
		else
			res.send(utils.response(true, data));
	})
});

module.exports = router;