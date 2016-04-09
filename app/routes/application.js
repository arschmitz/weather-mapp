import Ember from 'ember';

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),
  actions: {
    placeChanged(val) {
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      let address = val.address_components;
      let country;
      let state;
      let city;
      let route;
      if (address) {
        address.forEach((component) => {
          let [type] = component.types;
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
        });
        route = city ?
          `/forecast/${country}/${state}/${city}/3-day-forecast` :
          `/forecast/${country}/${state}/3-day-forecast`;
        this.transitionTo(route);
      }

      this.store.findRecord('geocode', val.formatted_address).then((geo) => {
        this.controllerFor('application').set('userLocation', {
          latitude: geo.get('geometry').location.lat,
          longititude: geo.get('geometry').location.lng
        });
      });
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    }
  }
});
