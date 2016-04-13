import Ember from 'ember';
import decode from 'arschmitz-weather/utils/decode-address';
export default Ember.Controller.extend({
  userLocation: {
    latitude: 43.633192,
    longititude: -70.185644,
    name: 'Portland, ME'
  },
  owm: {
    precipitation: true,
    clouds: false
  },
  owmTypes: [
    'clouds',
    'pressure',
    'rain',
    'snow',
    'temperature',
    'wind'
  ],
  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.store.findRecord('rgeocode', `${center.lat},${center.lng}`).then((rgeo) => {
        let address = rgeo.get('address_components');
        let route;

        if (address) {
          route = decode(address);
          console.log(route);
          this.transitionToRoute(route);
        }
      });
    }
  }
});
