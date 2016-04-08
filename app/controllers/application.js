import Ember from 'ember';

export default Ember.Controller.extend({
  userLocation: {
    latitude: 43.633192,
    longititude: -70.185644,
    name: 'Portland, ME'
  },
  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.store.findRecord('rgeocode', `${center.lat},${center.lng}`).then((rgeo) => {
        var address = rgeo.get('formatted_address');
        if ( address ) {
          var city = address.split(',')[1].trim();
          var stateZip = (address.split(',')[2] || address.split(',')[1]).trim();
          var state = stateZip.split(' ')[0].trim();
          var country = (address.split(',')[3] || address.split(',')[2] || address.split(',')[1]).trim();

          state = country === 'USA' ? state : country;
          this.userLocation.name = `${city}, ${state}`;
          this.transitionToRoute(`/forecast/${state}/${city}/3-day-forecast`);
        }
      });
    }
  }
});
