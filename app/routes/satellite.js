import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let forecastId = Object.keys(params).map((param)=>{
      return params[param];
    }).join('/');
    let geocodeId = params.city ?
      `${params.country}, ${params.state}, ${params.city}` :
      `${params.country}, ${params.state}`;
    let title = params.city ?
      `${params.city}, ${params.state}, ${params.country}`:
      `${params.state}, ${params.country}`;
    let imgParams = '&num=8&timelabel=1&smooth=1&borders=1&basemap=1';
    let imgBase = 'http://api.wunderground.com/api/d32d70d113b63652/';
    return Ember.RSVP.hash({
      images: {
        'radar': {
          name: 'Radar',
          url: `${imgBase}animatedradar/q/${params.country}/${params.state}/${params.city}.gif?newmaps=1&noclutter=1${imgParams}`
        },
        'satellite': {
          name: 'Infrared Satelite',
          url: `${imgBase}animatedsatellite/q/${params.country}/${params.state}/${params.city}.gif?key=sat_ir4_bottom${imgParams}`
        },
        'visibleradar': {
          name: 'Visible Satelite',
          url: `${imgBase}animatedsatellite/q/${params.country}/${params.state}/${params.city}.gif?key=sat_vis_bottom${imgParams}`
        }
      },
      geocode: this.store.findRecord('geocode', geocodeId),
      meta: { name: title }
    });
  },
  afterModel(model) {
    if (model.geocode) {
      this.controllerFor('application').set('userLocation', {
        latitude: model.geocode.get('geometry').location.lat,
        longititude: model.geocode.get('geometry').location.lng
      });
    }
  }
});
