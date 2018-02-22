const CustomGoogleMapClassFactory = function(GoogleMap){

  return class CustomGoogleMap extends GoogleMap {

    constructor(el, options){
      super(el, options)
      this.markers = []
    }

    addMarker(){
      this.markers.push(new google.maps.Marker())
    }

  }
}

export default CustomGoogleMapClassFactory
