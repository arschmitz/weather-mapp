import DS from 'ember-data';

export default DS.Model.extend({
  tideInfo: DS.attr(),
  tideSummary: DS.attr(),
  tideSummaryStats: DS.attr()
});
