import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api/d32d70d113b63652',
	host: 'https://api.wunderground.com',
	buildURL( model, id ) {
		switch ( model ) {
			case "forecast":
				return this.host + "/" + this.namespace + "/" + model + "/q/" + id + ".json";
		}
	}
});
