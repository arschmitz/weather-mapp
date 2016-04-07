import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('3-day-forecast', {path: '/forecast/:state/:city/3-day-forecast'});
  this.route('satellite', {path: '/forecast/:state/:city/satellite'});
});

export default Router;
