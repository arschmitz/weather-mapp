import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.webcam = {
      id,
      webcams: payload.webcams
    };

    delete payload.webcams;
    delete payload.response;
    return this._super(...arguments);
  }
});
