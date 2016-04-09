import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.forecast10day = payload.forecast || { simpleforecast: { }, 'txt_forecast': { }, date: { } };

    payload.forecast10day.days = payload.forecast.simpleforecast.forecastday || { };
    payload.forecast10day.id = id;
    // jscs:disable
    payload.forecast10day.text = payload.forecast['txt_forecast'].forecastday || { };
    payload.forecast10day.date = payload.forecast['txt_forecast'].date || { };
    // jscs:enable
    delete payload.response;
    delete payload.forecast;
    return this._super(...arguments);
  }
});
