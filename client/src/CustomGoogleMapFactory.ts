
class CustomGoogleMapFactory {

  GoogleMap: google.maps.Map;  

  constructor(GoogleMap: google.maps.Map){
    this.GoogleMap = GoogleMap;
  }

  createMap(el: HTMLElement, options: google.maps.MapOptions){

    class CustomGoogleMap extends google.maps.Map {

      markers: Array<google.maps.Marker>;

      constructor(el: HTMLElement, options: google.maps.MapOptions){
        super(el, options)
        this.markers = []
      }

      addMarker(coords: google.maps.LatLngLiteral) : google.maps.Marker {
        const marker: google.maps.Marker = new google.maps.Marker({
          position: coords,
          map: this,
          animation: google.maps.Animation.DROP
        });
        this.markers.push(marker)
        return marker
      } 

      addMarkerWithInfoWindowPopup(coords: google.maps.LatLngLiteral, text: string) : google.maps.Marker {
        const marker: google.maps.Marker = this.addMarker(coords);
        marker.addListener('click', function () {
          const infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow({
            content: text
          })
          infoWindow.open(this.map, marker)
        })
        return marker
      }

      bounceMarkers(){
        this.markers.forEach(function(marker: google.maps.Marker) {
          marker.setAnimation(google.maps.Animation.BOUNCE)
        })
      }

    }
    return new CustomGoogleMap(el, options)
  }
}

export default CustomGoogleMapFactory
