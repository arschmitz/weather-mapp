import Ember from 'ember';

export default Ember.Route.extend({
	geolocation: Ember.inject.service(),
	actions: {
		placeChanged( val ) {
			var that = this;
			var state = val.address_components[2].types[0].indexOf('1') !== -1 ?
				val.address_components[2] :
				val.address_components[3];
			var city = val.address_components[ 0 ]
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
