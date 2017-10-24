'use strict';
const mongoose = require('mongoose');
const bookingModel =  require('../../database').booking;

const bookingController = {
	find : (req, res) =>{
		bookingModel.find()
		.then(data =>{
			res.send(data);
		})
		.catch(err =>{
			res.send('Failed :::' + err);
		})
	}
}
module.exports = bookingController;