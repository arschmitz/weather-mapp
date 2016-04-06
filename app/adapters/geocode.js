import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: '/maps/api/geocode/json?address=',
	host: 'http://maps.googleapis.com',
	buildURL( model, id ) {
		switch ( model ) {
			case "geocode":
				return this.host + this.namespace + id;
		}
	}
});
