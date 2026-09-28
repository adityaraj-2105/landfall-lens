import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>LandfallLens</h1>
      <p>Odisha Cyclone Risk Map</p>

      <MapContainer
        center={[20.3, 85.8]}
        zoom={7}
        className="map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;