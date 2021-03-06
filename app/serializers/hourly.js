import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.hourly = {
      id,
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      hours: payload.hourly_forecast || {}
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    };
    return this._super(...arguments);
  }
});
