import DS from 'ember-data';

export default DS.Model.extend({
  address_components: DS.attr(),
  formatted_address: DS.attr(),
  geometry:DS.attr()
});
