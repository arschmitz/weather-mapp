import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			forecast: this.store.findRecord('forecast', params.state + '/' + params.city),
			geocode: this.store.findRecord('geocode', params.city + ' ' + params.state),
			location: { name: `${params.city}, ${params.state}` }
		});
	},
	afterModel(model) {
		if ( model.geocode ) {
			this.controllerFor('application').set('userLocation', {
				latitude: model.geocode.get('geometry').location.lat,
				longititude: model.geocode.get('geometry').location.lng
			} );
		}
	}
});
