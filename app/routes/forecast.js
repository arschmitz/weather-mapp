import Ember from 'ember';
import decode from 'arschmitz-weather/utils/decode-model-params';
import geocode from 'arschmitz-weather/utils/route-geocode';

export default Ember.Route.extend({
  model(params) {
    let modelParams = decode(params);
    let forecastModel = params.name === '3-day-forecast' ? 'forecast' : 'forecast10day';
    let title = params.name.replace('-', ' ');
    this.controllerFor('application').set('title', `${modelParams.title} - ${title}`);

    return Ember.RSVP.hash({
      forecast: this.store.findRecord(forecastModel, modelParams.forecastId),
      geocode: this.store.findRecord('geocode', modelParams.geocodeId)
    });
  },
  afterModel: geocode
});
