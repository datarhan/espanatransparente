'use client';

import React, { useEffect, useRef, useState } from 'react';
import { REGIONS } from '@/data/politicalData';
import { Region } from '@/types/politics';
import 'leaflet/dist/leaflet.css';
import { RotateCcw, MapPin, ZoomIn, ZoomOut } from 'lucide-react';

interface RealSpainMapProps {
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
}

const REGION_NAME_TO_ID: Record<string, string> = {
  'Castilla-Leon': 'castilla-y-leon',
  'Cataluña': 'cataluna',
  'Ceuta': 'ceuta',
  'Murcia': 'region-de-murcia',
  'La Rioja': 'la-rioja',
  'Baleares': 'illes-balears',
  'Canarias': 'canarias',
  'Cantabria': 'cantabria',
  'Andalucia': 'andalucia',
  'Asturias': 'principado-de-asturias',
  'Valencia': 'comunitat-valenciana',
  'Melilla': 'melilla',
  'Navarra': 'comunidad-foral-de-navarra',
  'Galicia': 'galicia',
  'Aragon': 'aragon',
  'Madrid': 'comunidad-de-madrid',
  'Extremadura': 'extremadura',
  'Castilla-La Mancha': 'castilla-la-mancha',
  'Pais Vasco': 'pais-vasco',
};

export const RealSpainMap: React.FC<RealSpainMapProps> = ({
  selectedRegion,
  onSelectRegion,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const geoJsonLayerRef = useRef<any>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Load official Spain GeoJSON
  useEffect(() => {
    fetch('/data/spain-communities.geojson')
      .then((res) => res.json())
      .then((data) => {
        setGeoData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading Spain communities GeoJSON:', err);
        setLoading(false);
      });
  }, []);

  const getPartyColor = (party: string) => {
    if (party === 'PP') return '#2563eb';
    if (party === 'PSOE') return '#dc2626';
    if (party === 'COALICION_PP_VOX') return '#4f46e5';
    return '#7c3aed';
  };

  const getRegionObj = (featureName: string): Region | undefined => {
    const id = REGION_NAME_TO_ID[featureName];
    return REGIONS.find((r) => r.id === id);
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || !geoData || typeof window === 'undefined') return;

    let isMounted = true;

    import('leaflet').then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      if (!mapInstanceRef.current) {
        // Spain center coordinates
        const map = L.map(mapContainerRef.current, {
          center: [40.0, -3.7],
          zoom: 6,
          minZoom: 5,
          maxZoom: 10,
          zoomControl: false,
        });

        // Add clean CartoDB Positron base tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }).addTo(map);

        mapInstanceRef.current = map;
      }

      const map = mapInstanceRef.current;

      // Remove existing geojson layer if any
      if (geoJsonLayerRef.current) {
        map.removeLayer(geoJsonLayerRef.current);
      }

      // Add GeoJSON layer with official real borders
      const geoLayer = L.geoJSON(geoData, {
        style: (feature) => {
          const region = getRegionObj(feature?.properties?.name);
          const isSelected = region?.id === selectedRegion.id;
          const color = region ? getPartyColor(region.governingParty) : '#94a3b8';

          return {
            fillColor: isSelected ? '#09090b' : color,
            fillOpacity: isSelected ? 0.8 : 0.6,
            weight: isSelected ? 3 : 1.5,
            color: isSelected ? '#000000' : '#ffffff',
            dashArray: '',
          };
        },
        onEachFeature: (feature, layer: any) => {
          const region = getRegionObj(feature?.properties?.name);
          if (!region) return;

          // Tooltip on hover
          layer.bindTooltip(
            `
            <div style="font-family: inherit; font-size: 12px; line-height: 1.4;">
              <strong style="font-size: 13px; color: #09090b;">${region.name}</strong><br/>
              <span>Presidente: <strong>${region.president}</strong></span><br/>
              <span>Gobierno: <strong style="color: ${getPartyColor(region.governingParty)};">${region.governingParty}</strong></span><br/>
              <span style="font-size: 10px; color: #64748b;">(Clic para ver detalle de escaños)</span>
            </div>
            `,
            { sticky: true, opacity: 0.95 }
          );

          // Interactions
          layer.on({
            mouseover: (e: any) => {
              const l = e.target;
              if (region.id !== selectedRegion.id) {
                l.setStyle({
                  fillOpacity: 0.85,
                  weight: 2.5,
                  color: '#09090b',
                });
              }
              l.bringToFront();
            },
            mouseout: (e: any) => {
              const isSelected = region.id === selectedRegion.id;
              e.target.setStyle({
                fillColor: isSelected ? '#09090b' : getPartyColor(region.governingParty),
                fillOpacity: isSelected ? 0.8 : 0.6,
                weight: isSelected ? 3 : 1.5,
                color: isSelected ? '#000000' : '#ffffff',
              });
            },
            click: (e: any) => {
              onSelectRegion(region);
              map.fitBounds(e.target.getBounds(), { maxZoom: 8, padding: [30, 30] });
            },
          });
        },
      }).addTo(map);

      geoJsonLayerRef.current = geoLayer;
    });

    return () => {
      isMounted = false;
    };
  }, [geoData, selectedRegion]);

  const handleResetZoom = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([40.0, -3.7], 6);
    }
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xs relative">
      {/* Header bar over map */}
      <div className="p-4 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-50/70">
        <div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-800" />
            <h3 className="text-sm font-bold text-zinc-900">
              Mapa Oficial Georreferenciado con Límites Autonómicos Reales (IGN / OpenStreetMap)
            </h3>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">
            Fronteras administrativas oficiales de las 17 Comunidades Autónomas, Ceuta y Melilla. Haz clic en cualquier comunidad para hacer zoom y consultar su parlamento.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-blue-600"></span>
            <span className="text-zinc-700">PP (11)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-600"></span>
            <span className="text-zinc-700">PSOE (3)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-purple-600"></span>
            <span className="text-zinc-700">Otros (3)</span>
          </div>
        </div>
      </div>

      {/* Map Canvas */}
      <div className="relative w-full h-[520px] bg-slate-100">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
              Cargando fronteras geográficas oficiales de España...
            </div>
          </div>
        )}

        <div ref={mapContainerRef} className="w-full h-full z-10" />

        {/* Custom Map Controls Overlay */}
        <div className="absolute bottom-5 right-5 z-20 flex flex-col gap-1.5 shadow-md rounded-lg overflow-hidden border border-zinc-200 bg-white">
          <button
            onClick={handleZoomIn}
            title="Acercar mapa"
            className="p-2 hover:bg-zinc-100 text-zinc-700 transition-colors border-b border-zinc-100"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            title="Alejar mapa"
            className="p-2 hover:bg-zinc-100 text-zinc-700 transition-colors border-b border-zinc-100"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            title="Restablecer vista completa de España"
            className="p-2 hover:bg-zinc-100 text-zinc-700 transition-colors flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
