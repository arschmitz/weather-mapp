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
        let address = rgeo.get('address_components');
        let country;
        let state;
        let city;
        let route;
        if ( address ) {
          address.forEach((component,i) => {
            let type = component.types[0];
            switch(type) {
              case 'country':
                country = component.short_name;
                break;
              case 'administrative_area_level_1':
                state = component.long_name;
                break;
              case 'locality':
                city = component.long_name;
            }
          });
          this.userLocation.name = `${city}, ${state}`;
          console.log(this.userLocation.name);
          route = city ?
            `/forecast/${country}/${state}/${city}/3-day-forecast` :
            `/forecast/${country}/${state}/3-day-forecast`;
          this.transitionToRoute(route);
        }
      });
    },
    layerControlEvent(event) {
      console.log(event);
      return true;
    }
  }
});
