import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
interface LocationSearchProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onLocationSelect }) => {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC_XFoCxYSaH0vCtdFKvTS3zQoZ0g54OLM',
    libraries: ['places'],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setMapLoaded(true);
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
          setMapLoaded(true);
        }
      );

    } else {
      console.error("Geolocalización no soportada por este navegador.");
      setMapLoaded(true);
    }
  }, []);

  const handleLoad = useCallback((autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  }, []);

  const handlePlaceChanged = useCallback(() => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location?.lat() || 0,
          lng: place.geometry.location?.lng() || 0,
          address: place.formatted_address || '',
        };
        onLocationSelect(location);

        if (mapRef.current) {
          mapRef.current.panTo(location);
          mapRef.current.setZoom(16);
        }
      }
    }
  }, [autocomplete, onLocationSelect]);

  if (loadError) {
    return <div>Error al cargar el mapa</div>;
  }

  if (!isLoaded || !mapLoaded) {
    return <div className="flex items-center justify-center">
      <div className="text-center">
        <FontAwesomeIcon icon={faMap} size="4x" />
        <div className="mt-4">Cargando Mapa...</div>
      </div>
    </div>;
  }

  return (
    <GoogleMap
      id="search-map"
      mapContainerStyle={{ height: '500px', width: '100%' }}
      zoom={17}
      center={currentLocation || { lat: 0, lng: 0 }} // Default center if location is not available
      onLoad={(map) => { mapRef.current = map; }} // Save map instance
    >
      {currentLocation && (
        <MarkerF position={currentLocation} />
      )}
    </GoogleMap>
  );
};

export default LocationSearch;
