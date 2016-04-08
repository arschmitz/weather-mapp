import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('forecast', {path: '/forecast/:country/:state/:name'});
  this.route('forecast', {path: '/forecast/:country/:state/:city/:name'});
  this.route('satellite', {path: '/forecast/:state/:city/satellite'});
});

export default Router;
