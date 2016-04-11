import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.almanac = payload.almanac || { };
    payload.almanac.id = id;
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    payload.almanac.airport = payload.almanac.airport_code;
    payload.almanac.high = payload.almanac.temp_high;
    payload.almanac.low = payload.almanac.temp_low;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

    delete payload.response;
    return this._super(...arguments);
  }
});
