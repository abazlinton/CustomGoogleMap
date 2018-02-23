class CustomGoogleMapFactory {

  constructor(GoogleMap){
    this.GoogleMap = GoogleMap;
  }

  getMap(el, options){
    class CustomGoogleMap extends this.GoogleMap {

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
}



export default CustomGoogleMapFactory
