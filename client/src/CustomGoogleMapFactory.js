const CustomGoogleMapFactory = function(GoogleMap, el, options){

  class CustomGoogleMap extends GoogleMap {

    constructor(el, options){
      super(el, options)
      this.markers = []
    }

    addMarker(){
      this.markers.push(new google.maps.Marker())
    }

  }
  return new CustomGoogleMap(el, options)
}

export default CustomGoogleMapFactory
