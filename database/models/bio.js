'use strict';

const Schema = require('mongoose').Schema;

const bioSchema = new Schema({

  descriptionFr:{
  	type: String
  },
  descriptionAng:{
    type: String
  }
});

module.exports =  bioSchema;

// db.bios.insert({"titre":"Biography","descriptionFr":"Linear Movement est un label techno basé à Paris. Il voit le jour en 2015 avec la réunion de l'artiste Audub et du collectif graphique Miranda. La génèse du label puise sa force dans une volonté de prendre le parti de rendre à la techno sa richesse et sa pluralité.","descriptionAng":"Linear is a Paris based techno label founded in 2015 with the graphic collective Miranda. At the origin of the label, the desire to offer an aesthetic who brings together complementary and convergent views."})