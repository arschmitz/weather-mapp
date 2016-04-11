import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.condition = { };
    payload.condition.id = id;
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    payload.condition.current = payload.current_observation;

    delete payload.response;
    delete payload.conditions;
    delete payload.current_observation;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    return this._super(...arguments);
  }
});