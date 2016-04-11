export default function decodeAddress(address) {
  let model = window.location.href.split('/');
  let country;
  let state;
  let city;
  let route;
  model = model.length >= 5 ? model[model.length - 1] : 'dashboard';

  if (address) {
    address.forEach((component) => {
      let [type] = component.types;
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      switch (type) {
        case 'country':
          country = component.short_name;
          break;
        case 'administrative_area_level_1':
          state = component.long_name;
          break;
        case 'locality':
          city = component.long_name;
      }
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    });
    route = city ?
      `/forecast/${country}/${state}/${city}/${model}` :
      `/forecast/${country}/${state}/${model}`;
    return route;
  }
}
