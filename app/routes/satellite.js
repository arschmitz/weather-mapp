import Ember from 'ember';
import decode from 'arschmitz-weather/utils/decode-model-params';
import geocode from 'arschmitz-weather/utils/route-geocode';

export default Ember.Route.extend({
  model(params) {
    let modelParams = decode(params);
    let key = localStorage.apikey || 'e7c863ca90d971b4';
    let imgParams = '&num=8&timelabel=1&smooth=1&borders=1&basemap=1';
    let imgBase = `http://api.wunderground.com/api/${key}/`;
    this.controllerFor('application').set('title', `${modelParams.title} - Satelite Imagry`);

    return Ember.RSVP.hash({
      images: [
        {
          name: 'Radar',
          url: `${imgBase}animatedradar/q/${params.country}/${params.state}/${params.city}.gif?newmaps=1&noclutter=1${imgParams}`
        },
        {
          name: 'Infrared Satelite',
          url: `${imgBase}animatedsatellite/q/${params.country}/${params.state}/${params.city}.gif?key=sat_ir4_bottom${imgParams}`
        },
        {
          name: 'Visible Satelite',
          url: `${imgBase}animatedsatellite/q/${params.country}/${params.state}/${params.city}.gif?key=sat_vis_bottom${imgParams}`
        }
      ],
      geocode: this.store.findRecord('geocode', modelParams.geocodeId)
    });
  },
  afterModel: geocode
});
