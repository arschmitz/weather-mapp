import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('forecast', { path: '/forecast/:country/:state/:name' });
  this.route('forecast', { path: '/forecast/:country/:state/:city/:name' });
  this.route('satellite', { path: '/forecast/:country/:state/:city/satellite' });
  this.route('satellite', { path: '/forecast/:country/:state/satellite' });
  this.route('hourly');
});

export default Router;
