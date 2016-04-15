import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  let routes = [
    'dashboard',
    'hourly',
    'webcam',
    'tide',
    'satellite',
    'condition',
    'astronomy',
    'almanac',
    'alert',
    'map'
  ];
  routes.forEach((route) => {
    this.route(route, { path: `/forecast/:country/:state/${route}` });
    this.route(route, { path: `/forecast/:country/:state/:city/${route}` });
  });
  this.route('forecast', { path: '/forecast/:country/:state/:name' });
  this.route('forecast', { path: '/forecast/:country/:state/:city/:name' });
});

export default Router;
