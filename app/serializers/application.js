import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		payload.forecast.days = payload.forecast.simpleforecast.forecastday;
		payload.forecast.id = id;
		delete payload.response;
		return this._super(...arguments)
	}
});
