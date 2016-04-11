import DS from 'ember-data';

export default DS.Model.extend({
  airport: DS.attr(),
  high: DS.attr(),
  low: DS.attr()
});
