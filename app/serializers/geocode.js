import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		console.log( payload );
		payload.geocode = payload.results[ 0 ];
		payload.geocode.id = id;
		delete payload.results;
		delete payload.status;
		return this._super(...arguments)
	}
});
