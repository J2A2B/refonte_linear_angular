'use strict';

const Router = require('express').Router;
const bodyParser = require('body-parser');
const apiRoutes = new Router();

apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const epController = require('./controllers/ep');
const bioController = require('./controllers/bio');
const eventsController = require('./controllers/events');
const bookingController = require('./controllers/booking');

apiRoutes.get('/ep', epController.find);
apiRoutes.get('/ep/:id', epController.findOne);
apiRoutes.get('/bio', bioController.find);
apiRoutes.get('/events', eventsController.find);
apiRoutes.get('/booking', epController.find);

apiRoutes.post('/ep', epController.add);

apiRoutes.use('/api', apiRoutes);
module.exports = apiRoutes;