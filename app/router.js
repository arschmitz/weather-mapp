import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('satellite', { path: '/forecast/:country/:state/satellite' });
  this.route('satellite', { path: '/forecast/:country/:state/:city/satellite' });
  this.route('animatedsatellite', { path: '/forecast/:country/:state/animatedsatellite' });
  this.route('animatedsatellite', { path: '/forecast/:country/:state/:city/animatedsatellite' });
  this.route('hourly', { path: '/forecast/:country/:state/hourly' });
  this.route('hourly', { path: '/forecast/:country/:state/:city/hourly' });
  this.route('radar', { path: '/forecast/:country/:state/:city/radar' });
  this.route('radar', { path: '/forecast/:country/:state/radar' });
  this.route('animatedradar', { path: '/forecast/:country/:state/:city/animatedradar' });
  this.route('animatedradar', { path: '/forecast/:country/:state/animatedradar' });
  this.route('forecast', { path: '/forecast/:country/:state/:name' });
  this.route('forecast', { path: '/forecast/:country/:state/:city/:name' });
});

export default Router;
