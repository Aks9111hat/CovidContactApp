import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useFetchCountriesData } from '../api/countryData';

// import markerIcon from 'images/pin.png';
// import markerShadow from './images/gps.png';

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
        return (
            <div className='h-screen w-full flex justify-center items-center bg-slate-300 bg-opacity-50'>
                <div role="status">
                    <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleCountryClick = (e: any) => {
        const { properties } = e.target.feature;
        setSelectedCountry(properties);
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

    const geojsonMarkerOptions = {
        radius: 5,
        fillColor: "red",
        color: "black",
        weight: 5,
        opacity: 1,
        fillOpacity: 0.8
    }

    return (
        <div className="h-screen w-full">
            <h1>Click on the points to see data for each country</h1>
            <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <GeoJSON
                    data={geoJsonData}
                    pointToLayer={(feature, latlng) => {
                        return L.circleMarker(latlng, geojsonMarkerOptions);
                    }}
                    onEachFeature={(feature, layer) => {
                        layer.bindPopup(`
                            <div className="bg-red-200">
                                <h2 className="text-3xl font-bold bg-red-500 p-2">${feature.properties.country}</h2>
                                <p>Total cases: ${feature.properties.cases}</p>
                                <p>Total active cases: ${feature.properties.active}</p>
                                <p>Total deaths: ${feature.properties.deaths}</p>
                                <p>Total recovered: ${feature.properties.recovered}</p>
                                <p>Total tests conducted: ${feature.properties.tests}</p>
                                <p>Population: ${feature.properties.population}</p>
                            </div>
                        `);
                        layer.on('click', (e) => handleCountryClick(e));
                    }}
                />
                {/* {selectedCountry && (
                    <Marker position={[selectedCountry.countryInfo.lat, selectedCountry.countryInfo.long]}
                        // icon={customIcon}
                    >
                        <Popup>
                            <div className="bg-red-200">
                                <h2 className="text-3xl font-bold bg-red-500 p-2">{selectedCountry.country}</h2>
                                <p>Total cases: {selectedCountry.cases}</p>
                                <p>Total deaths: {selectedCountry.deaths}</p>
                                <p>Total recovered: {selectedCountry.recovered}</p>
                                <p>Total tests conducted: {selectedCountry.tests}</p>
                                <p>Population: {selectedCountry.population}</p>
                            </div>
                        </Popup>
                    </Marker>
                )} */}
            </MapContainer>
        </div>
    );
};

export default Map;
