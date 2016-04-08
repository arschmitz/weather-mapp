import DS from 'ember-data';

export default DS.Model.extend({
  image_url: DS.attr(),
  image_url_ir4: DS.attr(),
  image_url_vis: DS.attr()
});
