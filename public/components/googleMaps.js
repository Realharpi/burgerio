// Initialize and add the map
function initMap() {
  // Location of Toronto
  const toronto = { lat: 43.69, lng: -79.39 };

  // Create the map
  const map = new google.maps.Map(document.getElementById("googleMaps"), {
    zoom: 12, // Adjust the map with zoom level
    center: toronto, // Adjust the pivot point of the map
  });

  // Create the AdvancedMarkerElement
  const marker = new google.maps.marker.AdvancedMarkerElement({
    position: toronto,
    map: map,
  });
}
