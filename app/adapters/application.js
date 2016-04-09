import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/d32d70d113b63652',
  host: 'http://owm.arschmitz.me?url=https://api.wunderground.com',
  buildURL(model, id) {
    if (/forecast/.test(model)){
      id = id.split('/');
      id.pop();
      id = id.join('/');
    }
    return `${this.host}/${this.namespace}/${model}/q/${id}.json`;
  }
});
