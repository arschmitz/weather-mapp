import Ember from 'ember';

export default Ember.Controller.extend({
	userLocation: {
		latitude: 43.633192,
		longititude: -70.185644
	},
	actions: {
		placeChanged: function( val ) {
			var that = this;
			this.store.findRecord( "forecast", val.address_components[ 2 ].long_name + "/" + val.address_components[ 0 ].long_name );
			this.store.findRecord( "geocode", val.formatted_address ).then(function(geo){
				that.set( "userLocation", {
					latitude: geo.get( "geometry" ).location.lat,
					longititude: geo.get( "geometry" ).location.lng
				} );
			});
		}
	}
});
