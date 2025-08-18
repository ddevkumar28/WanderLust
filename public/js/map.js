let map = L.map("map").setView([28.6139, 77.209], 13); // Delhi

// Load and display tile layer from OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 9,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add a marker
L.marker([28.6139, 77.209])
  .addTo(map)
  .bindPopup("<b>Hello!</b><br>This is Delhi.")
  .openPopup();
