export default function decodeModelParams(params) {
  let geocodeId = params.city ?
    `${params.country}, ${params.state}, ${params.city}` :
    `${params.country}, ${params.state}`;
  let title = params.city ?
    `${params.city}, ${params.state}, ${params.country}` :
    `${params.state}, ${params.country}`;
  let forecastId = Object.keys(params).map((param) => {
    return params[param];
  }).join('/');
  return {
    title,
    geocodeId,
    forecastId
  };
}
