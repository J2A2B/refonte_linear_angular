'use strict';
const mongoose = require('mongoose');
const epModel =  require('../../database').ep;

const epController = {
	find : (req, res) =>{
		epModel.find()
		.then(data =>{
			res.send(data);
		})
		.catch(err =>{
			res.send('Failed :::' + err);
		})
	},
	add :(req,res) =>{
		const newEp = new epModel(req.body);
		newEp.save()
		.then( data => {
			res.send(data);
		})
		.catch( err => {
			res.send(err);
		});
	},
      // epModel.findById(id, function(err, doc){
      //   if (err) {
      //     throw err;
      //   }else{
      //     res.json(doc)
      //   }
      // })
  findOne :(req, res) => {
    const id = req.params.id;
    epModel.findOne({_id : id}, function (err, doc){
      if (err) {
        throw err;
      }else{
        res.json(doc)
      }
    });
  }
}
module.exports = epController;