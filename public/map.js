var map;
//var map2;
var currentCenter;

console.log('in Map');

var lastPosition = {lat: 0,lng: 0};


function initCurrentMap(geoLat, geoLon){
  
        geoLat = geoLat || 51.5255000;
        geoLon = geoLon || -0.0795000;

      currentCenter = {lat: geoLat,lng: geoLon};
 
      //map options
      var options = {
        zoom: 11,
        center: {lat: geoLat,lng: geoLon}
      }

      //new map
      map = new google.maps.Map(document.getElementById('map'), options);

      // Add Marker
      let lastKnownLocation = new google.maps.Marker({
        position: {lat: geoLat,lng: geoLon},
        map: map
        // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      })


      //new map
     // map2 = new google.maps.Map(document.getElementById('historyMap'), options);

      ///////////////////////////////////////////////////////////
      //   getHistoricalLocations(function(markers){

      //     var lat;
      //     var lng;
      //     var timestamp = '';
      //     var nameOfMarkerVar = Array(240);
      //     var infoWindow;
         
      //     //loop through markers
      //     for (var i = 0; i < markers.length; i++ ) {
          
      //       if (markers[i].lng !== undefined) {
      //                     var lng = Number(markers[i].lng);
      //       var lat = Number(markers[i].lat.slice(1,markers[i].lat.length));

      //       // Add Marker to Historical map
      //       nameOfMarkerVar[i] = new google.maps.Marker({
      //         position: {lat: lat,lng: lng},
      //         map: map2
      //       })
        
      //       timestamp = '<p>' + 'Timestamp: ' + markers[i].timestamp.slice(0, -1) + '</p>';
             
      //       var infoLat = lat + 0.02;
      //       var infoLng = lng;               
               
      //       infoWindow = new google.maps.InfoWindow({
      //         content: timestamp,
      //         position: {lat: infoLat,lng: infoLng}
      //       });
            
      //       //console.log('markers', markers);
      //       console.log('name', nameOfMarkerVar[i]);
      //       console.log('inforWindow', infoWindow);

      //       nameOfMarkerVar[i].addListener('mouseover', function(){
      //         infoWindow.open(map2, nameOfMarkerVar[i])
      //       });
             
            
      //       lastPosition = {lat: lat,lng: lng};
             
      //       lat = 0;
      //       lng = 0;
      //       timestamp = '';
      //       infoWindow = [];
             
      //       } else {
      //       }
      //     }
      //     map2.setCenter(lastPosition);
      // });
        ///////////////////
        // google map link
        //document.getElementById("googleMapsLink").href = 'https://www.google.co.uk/maps/?q=' + geoLat + ',' + geoLon + '';

    }// end of init function


//////////////////////////////////////////////////////////////////////////////////////
//These two functions perform a recet on the maps in the tabs so that they both appear
function ResetMap1() {
     //setTimeout(function(){
    //google.maps.event.trigger(map, 'resize');
    map.setCenter(currentCenter);
    map.setZoom(11);
    // window.location.hash = '#currentLoc';
    // }, 500);
}

// function ResetMap2() {
//    setTimeout(function(){
//       google.maps.event.trigger(map2, 'resize');
//  map2.setCenter(currentCenter);
//  map.setZoom(11);
//    window.location.hash = '#prevLoc';
//   }, 500);
// }
