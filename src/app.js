import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
const WBS = [52.457131, 13.54007]; 
const map = Leaflet.map('map').setView(WBS, 13); 
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
}); 
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map); 
 
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 
