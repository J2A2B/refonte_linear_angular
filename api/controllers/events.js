'use strict';
const mongoose = require('mongoose');
const eventsModel =  require('../../database').events;

const eventsController = {
	find : (req, res) =>{
		eventsModel.find()
		.then(data =>{
			res.send(data);
		})
		.catch(err =>{
			res.send('Failed :::' + err);
		})
	}
}
module.exports = eventsController;