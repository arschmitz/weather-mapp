import Ember from 'ember';

export default Ember.Route.extend({
	geolocation: Ember.inject.service(),
	setupController: function() {
		this.get('geolocation').getLocation().then(() => {
			var currentLocation = this.get('geolocation').get('currentLocation');
			currentLocation = {
				latitude: currentLocation[ 0 ],
				longititude: currentLocation[ 1 ]
			};
			this.controllerFor('application').set('userLocation', currentLocation);
		});
	}
});
