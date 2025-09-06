import React, { useState } from 'react';
import { MapPin, Phone, Loader, AlertTriangle, Send } from 'lucide-react';

interface LocationData {
  latitude: number;
  longitude: number;
  timestamp: number;
}

const EmergencyGeoLocation: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLocationSent, setIsLocationSent] = useState(false);

  const getCurrentLocation = () => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('La géolocalisation n\'est pas supportée par ce navigateur.');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: Date.now()
        };
        setLocation(locationData);
        setIsLoading(false);
      },
      (error) => {
        let errorMessage = 'Erreur lors de la récupération de votre position.';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Vous devez autoriser l\'accès à votre position.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Votre position n\'est pas disponible.';
            break;
          case error.TIMEOUT:
            errorMessage = 'La demande de position a expiré.';
            break;
        }
        setError(errorMessage);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const sendEmergencyWithLocation = () => {
    if (!location) {
      getCurrentLocation();
      return;
    }

    const googleMapsUrl = `https://maps.google.com/maps?q=${location.latitude},${location.longitude}`;
    const message = `URGENCE - AS7J7.ma
Position: ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}
Lien Google Maps: ${googleMapsUrl}
Heure: ${new Date(location.timestamp).toLocaleString('fr-FR')}`;

    const whatsappUrl = `https://wa.me/212520443322?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsLocationSent(true);
    
    setTimeout(() => {
      window.location.href = 'tel:+212520443322';
    }, 1000);
  };

  const resetLocation = () => {
    setLocation(null);
    setError(null);
    setIsLocationSent(false);
  };

  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
      <div className="text-center mb-6">
        <div className="bg-red-600 p-4 rounded-full inline-block mb-4">
          <AlertTriangle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-red-800 mb-2">Urgence avec Géolocalisation</h3>
        <p className="text-red-600">
          Partagez votre position exacte pour une intervention ultra-rapide.
        </p>
      </div>

      {!location && !isLoading && (
        <button
          onClick={getCurrentLocation}
          className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-3 mb-4"
        >
          <MapPin className="h-6 w-6" />
          Obtenir ma Position d'Urgence
        </button>
      )}

      {isLoading && (
        <div className="text-center py-8">
          <Loader className="h-8 w-8 animate-spin text-red-600 mx-auto mb-4" />
          <p className="text-red-600 font-semibold">Récupération de votre position...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
          <p className="text-red-700 text-center font-semibold">{error}</p>
          <button
            onClick={getCurrentLocation}
            className="w-full mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Réessayer
          </button>
        </div>
      )}

      {location && !isLocationSent && (
        <div className="space-y-4">
          <div className="bg-green-100 border border-green-300 rounded-lg p-4">
            <h4 className="font-bold text-green-800 mb-2">📍 Position Trouvée</h4>
            <p className="text-green-700 text-sm mb-2">
              <strong>Latitude:</strong> {location.latitude.toFixed(6)}<br />
              <strong>Longitude:</strong> {location.longitude.toFixed(6)}<br />
              <strong>Heure:</strong> {new Date(location.timestamp).toLocaleString('fr-FR')}
            </p>
            <a
              href={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Voir sur Google Maps
            </a>
          </div>

          <button
            onClick={sendEmergencyWithLocation}
            className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-3 animate-pulse"
          >
            <Send className="h-6 w-6" />
            ENVOYER URGENCE + POSITION
          </button>

          <button
            onClick={resetLocation}
            className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Nouvelle Position
          </button>
        </div>
      )}

      {isLocationSent && (
        <div className="bg-green-100 border border-green-300 rounded-lg p-6 text-center">
          <div className="bg-green-600 p-3 rounded-full inline-block mb-4">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <h4 className="font-bold text-green-800 mb-2">Position Envoyée !</h4>
          <p className="text-green-700 mb-4">
            Votre position a été envoyée. L'appel d'urgence va être lancé.
          </p>
          <button
            onClick={resetLocation}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Nouvelle Urgence
          </button>
        </div>
      )}

      <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-lg p-4">
        <h5 className="font-bold text-yellow-800 mb-2">ℹ️ Comment ça marche ?</h5>
        <ol className="text-yellow-700 text-sm space-y-1 list-decimal list-inside">
          <li>Cliquez sur "Obtenir ma Position d'Urgence"</li>
          <li>Autorisez l'accès à votre géolocalisation</li>
          <li>Votre position sera envoyée par WhatsApp à AS7J7.ma</li>
          <li>Un appel d'urgence sera lancé automatiquement</li>
          <li>Nos équipes interviendront à votre position exacte</li>
        </ol>
      </div>
    </div>
  );
};

export default EmergencyGeoLocation;
