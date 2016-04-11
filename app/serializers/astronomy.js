import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.astronomy = { };
    payload.astronomy.id = id;
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    payload.astronomy.moon = payload.moon_phase;

    delete payload.response;
    delete payload.moon_phase;
    delete payload.sun_phase;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    return this._super(...arguments);
  }
});
