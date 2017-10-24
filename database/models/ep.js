'use strict';

const Schema = require('mongoose').Schema;

const epSchema = new Schema({
  nameEp: {
    type: String,
    required: true 
  },
  nameArtist:{
  	type: String,
  	required: true
  },
  catVynil:{
    type: String,
    lowercase: true,
    required: true
  },
  distrib:{
    type: String,
    lowercase: true,
    required: true
  },
  mastering:{
    type: String,
    lowercase: true,
    required: true
  },
  press:{
    type: String,
    lowercase: true,
    required:true
  },
  conception:{
    type: String,
    lowercase: true,
    required:true
  },
  artwork:{
    type: String,
    lowercase: true,
    required:true
  },
  date:{
    type: String,
    lowercase: true,
    required:true
  },
  description:{
    type: String,
    lowercase: true,
    required:true
  },
  photos: [
    {
      photo:{
        type: String
      }
    }
  ]
});

module.exports =  epSchema;

// db.eps.insert({"nameEp":"Blue Magic","nameArtist":"Marco Cassanelli","catVynil":"Vinyl 12 Ep","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"Photo by Pierre Dufresne","artwork":"Artwork by Miranda","date":"2015","description":"no descr","photos":[{"photo1":"photo1"},{"photo2":"photo2"},{"photo3":"phot31"},{"photo4":"photo4"},{"photo5":"photo5"},{"photo6":"photo6"}]})
// db.eps.insert({"nameEp":"Tribal War / Sweet","nameArtist":"Babe Roots","catVynil":"Vinyl 12 Ep / 7 inch","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"Photo by Geoffrey Abolivier","artwork":"Artwork by Miranda","date":"2017","description":"no descr","photos":[{"photo":"linear1.jpg"},{"photo":"linear2.jpg"},{"photo":"linear3jpg"},{"photo":"linear4.jpg"}]})
// db.eps.insert({"nameEp":"Land of bogomils","nameArtist":"Shaded Explorer","catVynil":"Vinyl 12 Ep","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"","artwork":"Artwork by Miranda","date":"2017","description":"no descr","photos":[{"photo":"audub1.jpg"},{"photo":"audub2.jpg"},{"photo":"audub3.jpg"}]})
// db.eps.insert({"nameEp":"Babe Roots","nameArtist":"Babe Roots","catVynil":"Vinyl 12 Ep","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"","artwork":"Artwork by Miranda","date":"2017","description":"no descr","photos":[{"photo1":"photo1"},{"photo2":"photo2"},{"photo3":"phot31"},{"photo4":"photo4"},{"photo5":"photo5"},{"photo6":"photo6"}]})
// db.eps.insert({"nameEp":"Unknown","nameArtist":"Edanticonf","catVynil":"Vinyl 12 Ep","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"","artwork":"Artwork by Miranda","date":"2017","description":"no descr","photos":[{"photo1":"photo1"},{"photo2":"photo2"},{"photo3":"phot31"},{"photo4":"photo4"},{"photo5":"photo5"},{"photo6":"photo6"}]})
// db.eps.insert({"nameEp":"Tribal War / Sweet","nameArtist":"Hydergine","catVynil":"Vinyl 12 Ep / 7 inch","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"Photo by Geoffrey Abolivier","artwork":"Artwork by Miranda","date":"2017","description":"no descr","photos":[{"photo1":"photo1"},{"photo2":"photo2"},{"photo3":"phot31"},{"photo4":"photo4"},{"photo5":"photo5"},{"photo6":"photo6"}]})
// db.eps.insert({"nameEp":"Sunset","nameArtist":"Deepchord","catVynil":"Vinyl 12 Ep","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"","artwork":"Artwork by Miranda","date":"2017","description":"no descr","photos":[{"photo1":"photo1"},{"photo2":"photo2"},{"photo3":"phot31"},{"photo4":"photo4"},{"photo5":"photo5"},{"photo6":"photo6"}]})
// db.eps.insert({"nameEp":"Rick & Morty","nameArtist":"Various","catVynil":"Vinyl 12 Ep","distrib":"Distrib. by Lobster Theremin","mastering":"Mastered by Mathieu Berthet","press":"Pressed by Rpm","conception":"","artwork":"Artwork by Miranda","date":"2017","description":"no descr","photos":[{"photo1":"audub1.jpg"},{"photo2":"audub2.jpg"},{"photo3":"audub2.jpg"},{"photo4":""},{"photo5":""},{"photo6":""}]})




