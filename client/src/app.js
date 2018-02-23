import CustomGoogleMapFactory from './CustomGoogleMapFactory'
import GoogleMapsLoader from 'google-maps';

const init = function(){
  GoogleMapsLoader.load(function(google) {
      app(google.maps.Map);
  });
}

const app = function(GoogleMap){
  const el = document.getElementById('main-map')
  const options = {
    zoom: 10,
    center: {
      lat: 55.9533,
      lng: -3.1883
    }
  }
  const customGoogleMap = CustomGoogleMapFactory(GoogleMap, el, options)
  console.log(customGoogleMap)

}

document.addEventListener('DOMContentLoaded', init);
