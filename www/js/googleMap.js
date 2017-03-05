      function initMap() {

        if (navigator.geolocation) { //Checks if browser supports geolocation
           navigator.geolocation.getCurrentPosition(function (position) {        //This gets the
             var latitude = position.coords.latitude;                    //users current
             var longitude = position.coords.longitude;                 //location
             coords = new google.maps.LatLng(latitude, longitude); //Creates variable for map coordinate

             directionsService = new google.maps.DirectionsService();
             directionsDisplay = new google.maps.DirectionsRenderer();

             var mapOptions = //Sets map options
             {
               zoom: 15,  //Sets zoom level (0-21)
               center: coords, //zoom in on users location
               mapTypeControl: false, //allows you to select map type eg. map or satellite
               mapTypeId: google.maps.MapTypeId.ROADMAP, //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRIAN
               disableDefaultUI: true
             };
             var map = new google.maps.Map( /*creates Map variable*/ document.getElementById("map"), mapOptions /*Creates a new map using the passed optional parameters in the mapOptions parameter.*/);

             var marker = new google.maps.Marker({
                 position: coords,
                 title:"My Location"
             });

             marker.setMap(map);

             directionsDisplay.setMap(map);
             directionsDisplay.setPanel(document.getElementById("directions"));
          });
         }
       }
       function calculateRoute(){
         var end;
         if(document.getElementById("end").value == "thomson")
         {
           console.log("In Thomson");
           end = new google.maps.LatLng(34.942015, -81.033072);
         }
         else if(document.getElementById("end").value == "rutledge")
         {
           console.log("in Rutledge");
           end = new google.maps.LatLng(34.936884, -81.029561);
         }
         else if(document.getElementById("end").value == "roddey")
         {
           console.log("in Roddey");
           end = new google.maps.LatLng(34.936800, -81.030071);
         }
         else if(document.getElementById("end").value == "johnson")
         {
           console.log("in Johnson");
           end = new google.maps.LatLng(34.936488, -81.030899);
         }


         var request = {
           origin: coords,
           destination: end,
           travelMode: google.maps.DirectionsTravelMode.WALKING
         };

         directionsService.route(request, function (response, status) {
           if (status == google.maps.DirectionsStatus.OK) {
             directionsDisplay.setDirections(response);
           }
         });
       }
