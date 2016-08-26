import Ember from 'ember';
import decode from 'arschmitz-weather/utils/decode-address';

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),
  setupController() {
    this.controllerFor('application').set('api', localStorage.apikey || '');
    this.controllerFor('application').set('showModal', !!localStorage.apikey);
    this.controllerFor('application').set('menu', [
        {
          name: '3 Day Forecast',
          model: '3-day-forecast'
        },
        {
          name: '10 Day Forecast',
          model: '10-day-forecast'
        },
        {
          name: 'Almanac Data',
          model: 'almanac'
        },
        {
          name: 'Astronomical Data',
          model: 'astronomy'
        },
        {
          name: 'Current Conditions',
          model: 'conditions'
        },
        {
          name: 'Dashboard',
          model: 'dashboard'
        },
        {
          name: 'Hourly',
          model: 'hourly'
        },
        {
          name: 'Map View',
          model: 'map'
        },
        {
          name: 'Satellite Imagry',
          model: 'satellite'
        },
        {
          name: 'Tidal Data',
          model: 'tide'
        },
        {
          name: 'Weather Alerts',
          model: 'alert'
        },
        {
          name: 'Webcam Imagry',
          model: 'webcam'
        }
      ]);
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
    },
    openMenu() {
      this.controllerFor('application').set('menuOpen', true);
    },
    closeMenu() {
      this.controllerFor('application').set('menuOpen', false);
    },
    openSettings() {
      this.controllerFor('application').set('menuOpen', false);
      this.controllerFor('application').set('settingsOpen', true);
    },
    closeSettings() {
      this.controllerFor('application').set('menuOpen', true);
      this.controllerFor('application').set('settingsOpen', false);
    },
    navigate(newRoute) {
      let loc = window.location;
      let route = loc.hash ? loc.hash.split('/') : loc.pathname.split('/');
      route.pop();
      if (location.hash) {
        route.shift();
      }
      route = route.join('/');
      route = `/${route}/${newRoute}`;
      console.log( route );
      console.log( location.hash )
      window.location.hash = route;
    },
    toggleOWM(owmType) {
      if (this.controllerFor('application').get(`owm.${owmType}`)) {
        this.controllerFor('application').set(`owm.${owmType}`, false);
        return;
      }
      this.controllerFor('application').set(`owm.${owmType}`, true);
    }
  }
});
