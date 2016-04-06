import Ember from 'ember';

export default Ember.Component.extend({
	leafletEvents: [
		'load'
	],

	leafletProperties: [
		'opacity'
	],

	createLayer() {
		return this.L.OWM.clouds({showLegend: false, opacity: 0.5});
	}
});
