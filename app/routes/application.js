import Ember from 'ember';
import decode from 'arschmitz-weather/utils/decode-address';

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),
  setupController() {
    this.controllerFor('application').set('api', localStorage.apikey || '');
    this.controllerFor('application').set('showModal', !!localStorage.apikey);
  },
  actions: {
    placeChanged(val) {
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      let address = val.address_components;
      let route;
      if (address) {
        route = decode(address);
        this.transitionTo(route);
      }

      this.store.findRecord('geocode', val.formatted_address).then((geo) => {
        this.controllerFor('application').set('userLocation', {
          latitude: geo.get('geometry').location.lat,
          longititude: geo.get('geometry').location.lng
        });
      });
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    },
    apiSubmit() {
      localStorage.apikey = this.controllerFor('application').get('api');
      this.controllerFor('application').set('showModal', true);
    }
  }
});
