import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let forecastId = Object.keys(params).map((param)=>{
			return params[param];
		}).join('/');
		console.log(forecastId)
		let geocodeId = params.city ?
			`${params.country}, ${params.state}, ${params.city}` :
			`${params.country}, ${params.state}`;
		let title = params.city ?
			`${params.city}, ${params.state}, ${params.country}`:
			`${params.state}, ${params.country}`;
		let forecastModel = params.name === "3-day-forecast" ? 'forecast' : 'forecast10day';
		return Ember.RSVP.hash({
			forecast: this.store.findRecord(forecastModel, forecastId),
			geocode: this.store.findRecord('geocode', geocodeId),
			meta: { name: title }
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
