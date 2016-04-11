export default function routeGeocode(model) {
  if (model.geocode) {
    this.controllerFor('application').set('userLocation', {
      latitude: model.geocode.get('geometry').location.lat,
      longititude: model.geocode.get('geometry').location.lng
    });
  }
}
