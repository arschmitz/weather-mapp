import DS from 'ember-data';

export default DS.Model.extend({
  // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  address_components: DS.attr(),
  formatted_address: DS.attr(),
  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
  geometry: DS.attr()
});
