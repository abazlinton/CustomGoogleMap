class CustomGoogleMapFactory {

  constructor(GoogleMap){
    this.GoogleMap = GoogleMap;
  }

  createMap(el, options){
    class CustomGoogleMap extends this.GoogleMap {

      constructor(el, options){
        super(el, options)
        this.markers = []
      }

      addMarker(coords){
        const marker = new google.maps.Marker({
          position: coords,
          map: this,
          animation: google.maps.Animation.DROP
        });
        this.markers.push(marker)
        return marker
      }

      addMarkerWithInfoWindowPopup(coords, text){
        const marker = this.addMarker(coords);
        marker.addListener('click', function () {
          const infoWindow = new google.maps.InfoWindow({
            content: text
          })
          infoWindow.open(this, marker)
        })
      }

      bounceMarkers(){
        this.markers.forEach(function(marker) {
          marker.setAnimation(google.maps.Animation.BOUNCE)
        })
      }

    }
    return new CustomGoogleMap(el, options)
  }
}

export default CustomGoogleMapFactory
