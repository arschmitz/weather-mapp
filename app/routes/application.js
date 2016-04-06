import Ember from 'ember';

export default Ember.Route.extend({
	geolocation: Ember.inject.service(),
	setupController: function(controller, model) {
		this.get('geolocation').getLocation().then((geoObject) => {
			var currentLocation = this.get('geolocation').get('currentLocation');
			currentLocation = {
				latitude: currentLocation[ 0 ],
				longititude: currentLocation[ 1 ]
			};
			this.controllerFor('application').set('userLocation', currentLocation);
		});
	},
	actions: {
		placeChanged: function( val ) {
			console.log( val );
			var that = this;
			this.store.findRecord( "forecast", val.address_components[ 2 ].long_name + "/" + val.address_components[ 0 ].long_name );
			this.store.findRecord( "geocode", val.formatted_address ).then((geo) => {
				this.controllerFor('application').set('userLocation', {
					latitude: geo.get( "geometry" ).location.lat,
					longititude: geo.get( "geometry" ).location.lng
				} );
				this.transitionTo("/" + val.address_components[ 2 ].long_name + "/" + val.address_components[ 0 ].long_name + "/3-day-forecast" );
			});
		}
	}
});
