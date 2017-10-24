'use strict';
const mongoose = require('mongoose');
const bioModel =  require('../../database').bio;

const bioController = {
	find : (req, res) =>{
		bioModel.find()
		.then(data =>{
			res.send(data);
		})
		.catch(err =>{
			res.send('Failed :::' + err);
		})
	}
}
module.exports = bioController;