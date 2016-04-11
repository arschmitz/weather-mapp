import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload.currentAlerts = payload.alerts || { };
    payload.alerts = { id };
    payload.alerts.alerts = payload.currentAlerts || [];
    payload.alerts.alerts.forEach((alert, i) => {
      payload.alerts.alerts[i].raw = alert.message;
      let message = alert.message.replace(/\n\n/g, '</p><p>');
      payload.alerts.alerts[i].message = `<p>${message}</p>`;
    });
    delete payload.response;
    delete payload.currentAlerts;
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    delete payload.query_zone;
    return this._super(...arguments);
  }
});
