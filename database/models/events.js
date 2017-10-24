'use strict';

const Schema = require('mongoose').Schema;
const eventsSchema = new Schema({

      dateEvent:{
        type: String
      },
      titreEvent:{
        type:String
      },
      linkEvent:{
        type:String
      },
      linkPodcastOne:{
        type: String
      },
      linkPodcastTwo:{
        type:String
      }
});
module.exports =  eventsSchema;

// db.events.insert({"dateEvent":"2015","titreEvent":"Interview, That special Record","linkEvent":"https://www.thatspecialrecord.com/blog"})
// db.events.insert({"dateEvent":"2016","titreEvent":"Linear Movement, Showcase Audub, Hvl, Idealist, Grad_U","linkEvent":"https://www.facebook.com/events/1659809944296198/","linkPodcastOne":"https://soundcloud.com/linear-movement/sets/linear-movement-serie","linkPodcastTwo":"https://soundcloud.com/linear-movement/linear-movement-podcast-02-grad_u?in=linear-movement/sets/linear-movement-serie"})
// db.events.insert({"dateEvent":"2016","titreEvent":"Unlearn Show invit Linear Movement with HVL & Audub","podcastOne":"https://soundcloud.com/nraelnu/unlearnshowinvitelinearmovementhvl320","podcastTwo":"https://soundcloud.com/nraelnu/unlearnshowinvitelinearmovementaudub320"})
// db.events.insert({"dateEvent":"2016","titreEvent":"Linear Movement Podcast - Babe Roots","podcastOne":"https://soundcloud.com/linear-movement/linear-movement-serie-babe-roots-selection-reggae-ambassador?in=linear-movement/sets/linear-movement-serie"})
// db.events.insert({"dateEvent":"2016","titreEvent":"Linear Movement Podcast - Audub","podcastOne":"https://soundcloud.com/linear-movement/linear-movement-serie-audub?in=linear-movement/sets/linear-movement-serie"})
// db.events.insert({"dateEvent":"2016","titreEvent":"Linear Movement Podcast - Emanuele Pertoldi","podcastOne":"https://soundcloud.com/linear-movement/emanuele-pertoldi?in=linear-movement%2Fsets%2Flinear-movement-serie"})
// db.events.insert({"dateEvent":"2017","titreEvent":"Linear Movement Showcase Deepchord, Shaded Explorer, Refracted, Audub","linkEvent":"https://www.facebook.com/events/730404587123176","linkPodcastOne":"https://soundcloud.com/linear-movement/shaded-explorer-live-preview?in=linear-movement/sets/linear-movement-serie","linkPodcastTwo":"https://soundcloud.com/linear-movement/linear-movement-podcast-06-refracted?in=linear-movement/sets/linear-movement-serie"})