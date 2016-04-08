import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.forecast.days = payload.forecast.simpleforecast.forecastday;
    payload.forecast.id = id;
    payload.forecast.text = payload.forecast.txt_forecast.forecastday;
    payload.forecast.date = payload.forecast.txt_forecast.date;
    delete payload.response;
    return this._super(...arguments);
  }
});
