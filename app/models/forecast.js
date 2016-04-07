import DS from 'ember-data';

export default DS.Model.extend({
	days: DS.attr(),
	date: DS.attr(),
	text: DS.attr()
});
