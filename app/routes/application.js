import Ember from 'ember';

export default Ember.Route.extend({
	geolocation: Ember.inject.service(),
	actions: {
		placeChanged( val ) {
			var city = val.address_components[0];
			var state = val.address_components[2];

			state = (state.types[0].indexOf('1') !== -1 ||
					state.long_name === city.long_name ||
					val.address_components.length < 4) ?
				val.address_components[2] :
				val.address_components[3];

			state = state.long_name === city.long_name ? val.address_components[val.address_components.length - 1] : state;

			this.store.findRecord('geocode', val.formatted_address ).then((geo) => {
				this.controllerFor('application').set('userLocation', {
					latitude: geo.get('geometry').location.lat,
					longititude: geo.get('geometry').location.lng
				} );
				this.transitionTo(
					'/forecast/' + state.long_name + '/' + city.long_name + '/3-day-forecast'
				);
			});
		}
	}
});
