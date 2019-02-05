// Call Geocode

// Get location form
const locationForm = document.getElementById('location-form');

// Listen for submit
locationForm.addEventListener('submit', geocode);

function geocode(e){
  // Prevent actual submit
  e.preventDefault();
  const location = document.getElementById('location-input').value;
  const distance = document.getElementById('location-distance').value;

  axios.get('https://sandbox.api.hub-box.com/v1/public/collectpoints/nearest',{
    params:{
      query:location,
      dist: distance
    }
  })
  .then(function(response){
    // Log full response
    // console.log(response);

    // Address Components
    let addressComponents = response.data._embedded.collectpoints;
    let addressComponentsOutput = '<ul class="list-group">';
    for(let i = 0;i < addressComponents.length;i++){
      addressComponentsOutput += `
        <li class="list-group-item"><strong>${addressComponents[i].name}</strong>: ${addressComponents[i].address.postcode}</li>
      `;
    }
    addressComponentsOutput += '</ul>';
    
    const geoLat = response.data.point.x;
    const geoLng = response.data.point.y;
    // console.log(geoLat, geoLng);
    initMap(geoLng,geoLat,addressComponents)

    // Output to app
    document.getElementById('address-components').innerHTML = addressComponentsOutput;
  })

  .catch(function(error){
    console.log(error);
  });
}


// Build and initialize map
function initMap(geoLng,geoLat,addressList) {
  // The location of pinpoint
  const pinPoint = {lat: geoLng, lng: geoLat};
  // console.log(addressList);
  const map = new google.maps.Map(
    document.getElementById('address-pinpoint'),{
      zoom: 14,
      center: pinPoint
    });
  
  var marker = new google.maps.Marker({
    position: pinPoint,
    label: 'Home',
    map: map
  });


  for(i = 0; i < addressList.length; i++) { 
    let coord = addressList[i].address.location.coordinates;
    let coordLat = coord[0];
    let coordLng = coord[1];
    let coords = {lat: coordLng, lng: coordLat};

    var marker = new google.maps.Marker({
      position: coords,
      map: map
    });

    marker.addListener('click', function() {
      let originCoords = `${pinPoint.lat},${pinPoint.lng}`;
      let desinationCoords = `${coords.lat},${coords.lng}`;
      
      map.setCenter(coords);
      axios.get('https://maps.googleapis.com/maps/api/directions/json',{
        crossdomain: true,
        params: {
          origin: originCoords,
          destination: desinationCoords,
          key: keys.mapsAPI
        }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
    });
  }
}


