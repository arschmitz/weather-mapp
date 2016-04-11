import Ember from 'ember';
import decode from 'arschmitz-weather/utils/decode-model-params';
import geocode from 'arschmitz-weather/utils/route-geocode';

export default Ember.Route.extend({
  model(params) {
    let modelParams = decode(params);
    this.controllerFor('application').set('title', `${modelParams.title} - Weather Dashboard`);
    return Ember.RSVP.hash({
      conditions: this.store.findRecord('condition', modelParams.forecastId),
      alert: this.store.findRecord('alert', modelParams.forecastId),
      forecast: this.store.findRecord('forecast', `${modelParams.forecastId}/remove`),
      menu: [
        {
          name: 'Almanac Data',
          model: 'almanac'
        },
        {
          name: 'Astronomical Data',
          model: 'astronomy'
        },
        {
          name: 'Tidal Data',
          model: 'tide'
        },
        {
          name: 'Satellite Imagry',
          model: 'satellite'
        },
        {
          name: 'Webcam Imagry',
          model: 'webcam'
        },
        {
          name: 'Weather Alerts',
          model: 'alert'
        }
      ],
      forecasts: [
        {
          name: '3 Day',
          model: '3-day-forecast'
        },
        {
          name: '10 Day',
          model: '10-day-forecast'
        },
        {
          name: 'Hourly',
          model: 'hourly'
        }
      ],
      geocode: this.store.findRecord('geocode', modelParams.geocodeId)
    });
  },
  afterModel: geocode,
  actions: {
    navigate(newRoute) {
      let route = window.location.pathname.split('/');
      route.pop();
      route = route.join('/');
      this.transitionTo(`${route}/${newRoute}`);
    }
  }
});
