'use strict';
const mongoose = require('mongoose');
// const mongoDb = 'mongodb://localhost:27017/linearDatabase';
// mongoose.connect(mongoDb);
mongoose.connect('mongodb://jean:linear2a@ds231315.mlab.com:31315/lineardatabase');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const epSchema = require('./models/ep.js');
const bioSchema = require('./models/bio.js');
const eventsSchema = require('./models/events.js');
const bookingSchema = require('./models/booking.js');
 // db.epSchema.save({nameEp:"Babe Roots"});
module.exports ={
	ep : mongoose.model('ep', epSchema),
	bio : mongoose.model('bio', bioSchema),
	events : mongoose.model('events', eventsSchema),
	booking : mongoose.model('booking', bookingSchema)

} 

 // db.epSchema.find()
 // { "_id" : ObjectId("4dbac7bfea37068bd0987573"), "nameEp" : "Babe Roots" }