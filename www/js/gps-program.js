document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
		
		document.getElementById("getPosition").addEventListener("click", getPosition);
		document.getElementById("watchPosition").addEventListener("click", watchPosition);
	 
		function getPosition() {

		   var options = {
		      enableHighAccuracy: true,
		      maximumAge: 3600000
		   }
	
		   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

		   function onSuccess(position) {

		      alert('Latitude: '          + position.coords.latitude          + '\n' +
		         'Longitude: '         + position.coords.longitude         + '\n' +
		         'Altitude: '          + position.coords.altitude          + '\n' +
		         'Accuracy: '          + position.coords.accuracy          + '\n' +
		         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		         'Heading: '           + position.coords.heading           + '\n' +
		         'Speed: '             + position.coords.speed             + '\n' +
		         'Timestamp: '         + position.timestamp                + '\n');
		   };

		   function onError(error) {
		      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
		   }
		}

		function watchPosition() {

		   var options = {
		      maximumAge: 3600000,
		      timeout: 3000,
		      enableHighAccuracy: true,
		   }

		   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

		   function onSuccess(position) {
			   
			   function distance(lat1,lon1,lat2,lon2) {
			   	var R = 6371; // km (change this constant to get miles)
			   	var dLat = (lat2-lat1) * Math.PI / 180;
			   	var dLon = (lon2-lon1) * Math.PI / 180;
			   	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			   		Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
			   		Math.sin(dLon/2) * Math.sin(dLon/2);
			   	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			   	var d = R * c;
			   	if (d>1) return Math.round(d)+"km";
			   	else if (d<=1) return Math.round(d*1000)+"m";
			   	return d;
			   }
			   
			   var startlat = position.coords.latitude;
			   var startlong = position.coords.longitude;
			   var endlat = 34.943539799999996;
			   var endlong = -81.03657299999999;

			   
			   
			   var kilo = distance(startlat, startlong, endlat, endlong);

		      alert('Current Latitude: '          + position.coords.latitude          + '\n' +
		         'Current Longitude: '         + position.coords.longitude         + '\n' +
		         'Destination Lat: '          + endlat          + '\n' +
		         'Destination Long: '          + endlong          + '\n' +
		         'Distance to Destination: '         + kilo               + '\n');
		   };

		   function onError(error) {
		      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
		   }

		}
	 
	 
    }
	
// Latitude: 34.943539799999996
// Longitude: -81.03657299999999