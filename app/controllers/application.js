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
        let model = window.location.href.split("/");
        let country;
        let state;
        let city;
        let route;
        model = model.length >= 5 ? model[model.length -1] : '3-day-forecast';

        if (address) {
          address.forEach((component) => {
            let [type] = component.types;
            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            switch (type) {
              case 'country':
                country = component.short_name;
                break;
              case 'administrative_area_level_1':
                state = component.long_name;
                break;
              case 'locality':
                city = component.long_name;
            }
            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
          });
          this.userLocation.name = `${city}, ${state}`;
          route = city ?
            `/forecast/${country}/${state}/${city}/${model}` :
            `/forecast/${country}/${state}/${model}`;
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
