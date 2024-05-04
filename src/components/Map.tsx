// Map.tsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapProps {
    countries: any[];
}

const Map: React.FC<MapProps> = ({ countries }) => {
    return (
        <div>
            <h2>World Map</h2>
            {/* <MapContainer style={{ height: '400px' }} center={[0, 0]} zoom={2} scrollWheelZoom={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {countries.map((country, index) => (
                    <Marker key={index} position={[country.lat, country.long]}>
                        <Popup>
                            <div>
                                <h3>{country.country}</h3>
                                <p>Total Active Cases: {country.active}</p>
                                <p>Total Recovered Cases: {country.recovered}</p>
                                <p>Total Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer> */}
        </div>
    );
};

export default Map;
