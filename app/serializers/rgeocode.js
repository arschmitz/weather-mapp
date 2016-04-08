import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.rgeocode = payload.results[ 0 ] || {};
    payload.rgeocode.id = id;
    delete payload.results;
    delete payload.status;
    return this._super(...arguments);
  }
});
