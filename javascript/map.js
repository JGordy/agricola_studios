// Maps credentials
const mapKey = 'MAPS_API_KEY';
const mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=Alpharetta,Georgia&zoom=10&size=450x225&maptype=roadmap&markers=color:0xf57255%7CAlpharetta,GA&style=feature:all|element:labels|visibility:on&style=feature:all|element:labels.text.fill|saturation:36|color:0x000000|lightness:40&style=feature:all|element:labels.text.stroke|visibility:on|color:0x000000|lightness:16&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry.fill|color:0x000000|lightness:20&style=feature:administrative|element:geometry.stroke|color:0x000000|lightness:17|weight:1.2&style=feature:administrative.country|element:labels.text.fill|color:0xe5c163&style=feature:administrative.locality|element:labels.text.fill|color:0xc4c4c4&style=feature:administrative.neighborhood|element:labels.text.fill|color:0xe5c163&style=feature:landscape|element:geometry|color:0x393e42&style=feature:poi|element:geometry|color:0x393e42|visibility:on&style=feature:poi.business|element:geometry|visibility:on&style=feature:road.highway|element:geometry.fill|color:0x55f5cd|lightness:0&style=feature:road.highway|element:geometry.stroke|visibility:off&style=feature:road.highway|element:labels|visibility:off&style=feature:road.highway|element:labels.text.fill|color:0xffffff&style=feature:road.highway|element:labels.text.stroke|color:0xe5c163&style=feature:road.arterial|element:geometry|color:0x000000|lightness:100&style=feature:road.arterial|element:geometry.fill|color:0x575757&style=feature:road.arterial|element:labels|visibility:off&style=feature:road.arterial|element:labels.text.fill|color:0xffffff&style=feature:road.arterial|element:labels.text.stroke|color:0x2c2c2c&style=feature:road.local|element:geometry|color:0x000000|lightness:16&style=feature:road.local|element:labels.text.fill|color:0x999999&style=feature:transit|element:geometry|color:0x000000|lightness:19&style=feature:water|element:geometry|color:0x000000|lightness:17&key=${mapKey}`;



function embedMap() {
  mapImage = document.getElementById('map');

  map.innerHTML = `<img src="${mapURL}" alt="Google Maps of Alpharetta, GA"/>`;
};

// NOTE comment out when we want to save requests. Only get 300 free/month
// embedMap();
