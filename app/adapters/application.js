import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/',
  host: 'http://owm.arschmitz.me?url=https://api.wunderground.com',
  buildURL(model, id) {
    let key = localStorage.apikey || 'd32d70d113b63652';
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
