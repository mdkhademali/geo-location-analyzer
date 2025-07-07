const loc = localStorage.getItem("location") || "Dhaka, Bangladesh";

fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${loc}`)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const lat = data[0].lat;
      const lon = data[0].lon;

      const map = L.map('map').setView([lat, lon], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([lat, lon]).addTo(map).bindPopup(loc).openPopup();
    } else {
      alert("Location not found.");
    }
  });