import Ember from 'ember';

export default Ember.Controller.extend({
  userLocation: {
    latitude: 43.633192,
    longititude: -70.185644
  },
  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.store.findRecord('rgeocode', `${center.lat},${center.lng}`).then((rgeo) => {
        var address = rgeo.get('formatted_address')
        var city = address.split(',')[1];
        var stateZip = address.split(',')[2];
        var state = stateZip.split(' ')[1];

        this.transitionToRoute(`/forecast/${state}/${city}/3-day-forecast`);
      });
    }
  }
});
