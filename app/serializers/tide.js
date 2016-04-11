import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.tide = payload.tide || { };
    payload.tide.id = id;

    delete payload.response;
    return this._super(...arguments);
  }
});
