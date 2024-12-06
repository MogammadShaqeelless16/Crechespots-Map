import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { School, MapPin } from 'lucide-react';
import { Creche } from '../types/creche';
import { Event } from '../types/event';
import { Playground } from '../types/playground';
import { cityCoordinates } from '../data/cityCoordinates';
import { events } from '../data/events';
import 'leaflet/dist/leaflet.css';

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom, {
      animate: true,
      duration: 1
    });
  }, [center, zoom, map]);

  return null;
}

interface MapProps {
  creches: Creche[];
  selectedCreche: Creche | null;
  selectedCity?: string;
  playgrounds?: Playground[];
}

export default function Map({ creches, selectedCreche, selectedCity, playgrounds = [] }: MapProps) {
  const defaultPosition: [number, number] = [-30.5595, 22.9375];
  const defaultZoom = 6;

  let center: [number, number] = defaultPosition;
  let zoom = defaultZoom;

  if (selectedCity && cityCoordinates[selectedCity]) {
    const coords = cityCoordinates[selectedCity];
    center = [coords.lat, coords.lng];
    zoom = coords.zoom;
  } else if (selectedCreche) {
    center = [selectedCreche.location.lat, selectedCreche.location.lng];
    zoom = 15;
  }

  const playgroundIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={defaultPosition}
      zoom={defaultZoom}
      className="w-full h-[600px] rounded-lg shadow-lg"
    >
      <MapController center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Creche Markers */}
      {creches.map((creche) => (
        <Marker
          key={creche.id}
          position={[creche.location.lat, creche.location.lng]}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{creche.name}</h3>
              <p className="text-sm">{creche.address}</p>
              <p className="text-sm">Children: {creche.numberOfChildren}</p>
              <p className="text-sm">Teacher Ratio: 1:{Math.round(1/creche.teacherChildRatio)}</p>
              <p className="text-sm">Hours: {creche.operatingHours}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Playground Markers */}
      {playgrounds.map((playground) => (
        <Marker
          key={`playground-${playground.id}`}
          position={[playground.location.lat, playground.location.lng]}
          icon={playgroundIcon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{playground.name}</h3>
              <p className="text-sm">{playground.address}</p>
              <p className="text-sm">Age Range: {playground.ageRange}</p>
              <p className="text-sm">Rating: {playground.rating}/5</p>
              <div className="text-sm mt-1">
                <strong>Facilities:</strong>
                <ul className="list-disc list-inside">
                  {playground.facilities.slice(0, 3).map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Event Markers */}
      {events.map((event) => (
        <Marker
          key={`event-${event.id}`}
          position={[event.location.lat, event.location.lng]}
          icon={new Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm">{event.description}</p>
              <p className="text-sm">Date: {event.date}</p>
              <p className="text-sm">Time: {event.time}</p>
              <p className="text-sm">Price: {event.price}</p>
              <p className="text-sm">Age Range: {event.ageRange}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}