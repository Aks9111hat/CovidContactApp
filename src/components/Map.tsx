import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useFetchCountriesData } from '../api/countryData';

interface Country {
    country: string;
    countryInfo: {
        long: number;
        lat: number;
    };
    cases: number;
    deaths: number;
    recovered: number;
    tests: number;
    population: number;
}

const Map: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const { data, error, isLoading } = useFetchCountriesData();
    const countriesData = data;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleCountryClick = (e: any) => {
        const { properties } = e.target.feature;
        setSelectedCountry(properties);
    };

    const resetSelectedCountry = () => {
        setSelectedCountry(null);
    };

    // Calculate the center of the map based on the average latitude and longitude
    const center: [number, number] = [0, 0];
    const zoom: number = 2;

    // Convert the country data to GeoJSON format
    const geoJsonData: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: countriesData.map((country: Country) => ({
            type: "Feature",
            properties: country,
            geometry: {
                type: "Point",
                coordinates: [country.countryInfo.long, country.countryInfo.lat]
            }
        }))
    };

    return (
        <div className="h-screen w-full relative">
            <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* <Marker position={}> */}
                    <GeoJSON
                        data={geoJsonData}
                        style={() => ({
                            fillColor: '#ccc',
                            weight: 1,
                            color: '#333',
                            fillOpacity: 0.7,
                            border: 'none'
                        })}
                        onEachFeature={(feature, layer) => {
                            layer.bindPopup(`
              <div className="bg-red-200">
                <h2 className="text-3xl font-bold bg-red-500 p-2" >${feature.properties.country}</h2>
                <p>Total cases: ${feature.properties.cases}</p>
                <p>Total deaths: ${feature.properties.deaths}</p>
                <p>Total recovered: ${feature.properties.recovered}</p>
                <p>Total tests conducted: ${feature.properties.tests}</p>
                <p>Population: ${feature.properties.population}</p>
              </div>
            `);
                            layer.on('click', (e) => handleCountryClick(e));
                        }}
                    />
                {/* </Marker> */}
                
            </MapContainer>
        </div>
    );
};

export default Map;
