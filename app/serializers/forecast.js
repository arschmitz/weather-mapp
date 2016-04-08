import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.forecast = payload.forecast || {simpleforecast:{},"txt_forecast":{},date:{}};

    payload.forecast.days = payload.forecast.simpleforecast.forecastday || {};
    payload.forecast.id = id;
    // jscs:disable
    payload.forecast.text = payload.forecast['txt_forecast'].forecastday || {};
    payload.forecast.date = payload.forecast['txt_forecast'].date || {};
    // jscs:enable
    console.log( payload );
    delete payload.response;
    return this._super(...arguments);
  }
});
