declare function require(name:string);
const GoogleMapsLoader = require('google-maps')
import CustomGoogleMapFactory from './CustomGoogleMapFactory'

const init = function(){
  GoogleMapsLoader.load(function(google) {
      app(google.maps.Map);
  })
}

const app = function(GoogleMap: google.maps.Map){
  const el = document.getElementById('main-map')
  const options: google.maps.MapOptions = {
    zoom: 10,
    center: {
      lat: 55.9533,
      lng: -3.1883
    }
  }
  
  const customGoogleMapFactory = new CustomGoogleMapFactory(GoogleMap)
  const customGoogleMap = customGoogleMapFactory.createMap(el, options)
  console.log(customGoogleMap)
  customGoogleMap.addMarkerWithInfoWindowPopup(<google.maps.LatLngLiteral> options.center, 'Edinburgh YO!')
  customGoogleMap.bounceMarkers()
  
}


document.addEventListener('DOMContentLoaded', init)
