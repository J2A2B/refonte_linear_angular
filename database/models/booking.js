'use strict';

const Schema = require('mongoose').Schema;

const bookingSchema = new Schema({
  titre: {
    type: String,
    unique: true,
    required: true 
  },
  artists: [
    {
      name:{
        type: String
      },
      facebook:{
        type:String
      },
      soundcloud:{
        type:String
      },
      bio:{
        type:String
      },
      photo:{
        type:String
      }
    }
  ]
});

module.exports =  bookingSchema;