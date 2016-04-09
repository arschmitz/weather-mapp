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
    return Ember.RSVP.hash({
      satellite: this.store.findRecord('satellite', forecastId),
      geocode: this.store.findRecord('geocode', geocodeId)
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
