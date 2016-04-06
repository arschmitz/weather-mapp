import Ember from 'ember';

export default Ember.Route.extend({
	geolocation: Ember.inject.service(),
	setupController: function(controller, model) {
		controller.set( "forecast", model );
		console.log( "running" );
		this.get('geolocation').getLocation().then((geoObject) => {
			var currentLocation = this.get('geolocation').get('currentLocation');
			currentLocation = {
				latitude: currentLocation[ 0 ],
				longititude: currentLocation[ 1 ]
			};
			this.controllerFor('index').set('userLocation', currentLocation);
		}).catch((err) => {

		});
	}
});
