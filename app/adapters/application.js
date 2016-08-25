import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/',
  host: 'https://api.wunderground.com',
  buildURL(model, id) {
    let key = localStorage.apikey || 'e7c863ca90d971b4';
    if (/forecast/.test(model)) {
      id = id.split('/');
      id.pop();
      id = id.join('/');
    }
    if (/alert|webcam|condition/.test(model)) {
      model = `${model}s`;
    }
    return `${this.host}/${this.namespace}${key}/${model}/q/${id}.json`;
  }
});
