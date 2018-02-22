import CustomGoogleMapClassFactory from './CustomGoogleMapClassFactory'
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
      lat: 50,
      lng: 50
    }
  }
  const CustomGoogleMap = CustomGoogleMapClassFactory(GoogleMap)
  const customGoogleMap = new CustomGoogleMap(el, options)
  console.log(customGoogleMap)

}

document.addEventListener('DOMContentLoaded', init);
