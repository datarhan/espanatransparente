'use client';

import React, { useEffect, useRef, useState } from 'react';
import { REGIONS } from '@/data/politicalData';
import { Region } from '@/types/politics';
import 'leaflet/dist/leaflet.css';
import { RotateCcw, MapPin, ZoomIn, ZoomOut, Key, Check, ShieldCheck } from 'lucide-react';

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
  const tileLayerRef = useRef<any>(null);

  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartoApiKey, setCartoApiKey] = useState<string>('');
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);
  const [tempKey, setTempKey] = useState<string>('');
  const [basemapStyle, setBasemapStyle] = useState<'carto_light' | 'carto_voyager' | 'osm'>('carto_light');

  // Load API key from env or localStorage
  useEffect(() => {
    const envKey = process.env.NEXT_PUBLIC_CARTO_API_KEY || '';
    const storedKey = typeof window !== 'undefined' ? localStorage.getItem('carto_api_key') || '' : '';
    const activeKey = envKey || storedKey;
    setCartoApiKey(activeKey);
    setTempKey(activeKey);
  }, []);

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

  // Construct Tile URL with CARTO API Key or fallback
  const getTileConfig = (L: any) => {
    const keyParam = cartoApiKey ? `?api_key=${encodeURIComponent(cartoApiKey)}` : '';

    if (basemapStyle === 'carto_voyager') {
      return {
        url: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png${keyParam}`,
        options: {
          attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
          subdomains: 'abcd',
          maxZoom: 19,
        },
      };
    }

    if (basemapStyle === 'osm') {
      return {
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        options: {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        },
      };
    }

    // Default: CARTO Positron Light (cleanest for election analysis)
    return {
      url: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png${keyParam}`,
      options: {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
        subdomains: 'abcd',
        maxZoom: 19,
      },
    };
  };

  // Initialize and Update Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || !geoData || typeof window === 'undefined') return;

    let isMounted = true;

    import('leaflet').then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      if (!mapInstanceRef.current) {
        const map = L.map(mapContainerRef.current, {
          center: [40.2, -3.7],
          zoom: 6,
          minZoom: 5,
          maxZoom: 10,
          zoomControl: false,
        });

        mapInstanceRef.current = map;
      }

      const map = mapInstanceRef.current;

      // Update Tile Layer
      if (tileLayerRef.current) {
        map.removeLayer(tileLayerRef.current);
      }
      const tileCfg = getTileConfig(L);
      const newTileLayer = L.tileLayer(tileCfg.url, tileCfg.options).addTo(map);
      tileLayerRef.current = newTileLayer;

      // Update GeoJSON Layer with Real CCAA Borders
      if (geoJsonLayerRef.current) {
        map.removeLayer(geoJsonLayerRef.current);
      }

      const geoLayer = L.geoJSON(geoData, {
        style: (feature) => {
          const region = getRegionObj(feature?.properties?.name);
          const isSelected = region?.id === selectedRegion.id;
          const color = region ? getPartyColor(region.governingParty) : '#94a3b8';

          return {
            fillColor: isSelected ? '#09090b' : color,
            fillOpacity: isSelected ? 0.82 : 0.62,
            weight: isSelected ? 3.5 : 1.5,
            color: isSelected ? '#000000' : '#ffffff',
          };
        },
        onEachFeature: (feature, layer: any) => {
          const region = getRegionObj(feature?.properties?.name);
          if (!region) return;

          layer.bindTooltip(
            `
            <div style="font-family: inherit; font-size: 12px; line-height: 1.4;">
              <strong style="font-size: 13px; color: #09090b;">${region.name}</strong><br/>
              <span>Presidente: <strong>${region.president}</strong></span><br/>
              <span>Gobierno: <strong style="color: ${getPartyColor(region.governingParty)};">${region.governingParty}</strong></span><br/>
              <span style="font-size: 10px; color: #64748b;">(Clic para ver reparto de escaños)</span>
            </div>
            `,
            { sticky: true, opacity: 0.95 }
          );

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
                fillOpacity: isSelected ? 0.82 : 0.62,
                weight: isSelected ? 3.5 : 1.5,
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

      // Ensure proper sizing immediately and after render
      map.invalidateSize();
      const timer = setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 250);

      return () => clearTimeout(timer);
    });

    return () => {
      isMounted = false;
    };
  }, [geoData, selectedRegion, cartoApiKey, basemapStyle]);

  const handleSaveKey = () => {
    setCartoApiKey(tempKey.trim());
    if (typeof window !== 'undefined') {
      localStorage.setItem('carto_api_key', tempKey.trim());
    }
    setShowKeyInput(false);
  };

  const handleResetZoom = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([40.2, -3.7], 6);
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
      {/* Top Map Toolbar */}
      <div className="p-4 border-b border-zinc-200 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-zinc-50/80">
        <div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-800" />
            <h3 className="text-sm font-bold text-zinc-900">
              Mapa Base CARTO — Límites Autonómicos Oficiales de España
            </h3>
            {cartoApiKey ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> CARTO Key Activa
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                CARTO Público / Fallback Activo
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">
            Fronteras administrativas de las 17 Comunidades Autónomas, Ceuta y Melilla con silueta real.
          </p>
        </div>

        {/* Controls: CARTO style switcher & Key Config */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Basemap Switcher */}
          <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-0.5 text-xs font-semibold">
            <button
              onClick={() => setBasemapStyle('carto_light')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                basemapStyle === 'carto_light' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              CARTO Positron
            </button>
            <button
              onClick={() => setBasemapStyle('carto_voyager')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                basemapStyle === 'carto_voyager' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              CARTO Voyager
            </button>
            <button
              onClick={() => setBasemapStyle('osm')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                basemapStyle === 'osm' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              OSM
            </button>
          </div>

          {/* CARTO Key button */}
          <button
            onClick={() => setShowKeyInput(!showKeyInput)}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-white border border-zinc-300 hover:bg-zinc-100 text-zinc-700 rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            <Key className="w-3.5 h-3.5 text-zinc-500" />
            <span>{cartoApiKey ? 'Editar Key' : 'Ingresar API Key'}</span>
          </button>
        </div>
      </div>

      {/* Modal/Dropdown for entering CARTO API Key */}
      {showKeyInput && (
        <div className="p-4 bg-amber-50/90 border-b border-amber-200 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
          <div className="flex-1 w-full sm:w-auto">
            <span className="font-bold text-amber-950 block">Ingresa tu API Key de CARTO:</span>
            <span className="text-amber-800 text-[11px]">
              Se guardará en tu navegador y se enviará en las solicitudes de teselas de CARTO.
            </span>
            <input
              type="text"
              placeholder="Pega aquí tu API key de CARTO..."
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
              className="mt-1.5 w-full max-w-md px-3 py-1.5 bg-white border border-amber-300 rounded-md text-xs font-mono focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleSaveKey}
              className="px-4 py-1.5 bg-zinc-900 text-white font-bold rounded-md hover:bg-zinc-800 transition-colors flex items-center gap-1"
            >
              <Check className="w-3.5 h-3.5" /> Guardar y Aplicar
            </button>
            <button
              onClick={() => setShowKeyInput(false)}
              className="px-3 py-1.5 bg-white text-zinc-600 border border-zinc-300 rounded-md hover:bg-zinc-50"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Map Canvas */}
      <div className="relative w-full h-[540px] bg-slate-100">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-30">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
              Cargando mapa base CARTO y límites de España...
            </div>
          </div>
        )}

        <div ref={mapContainerRef} className="w-full h-full z-10" />

        {/* Custom Map Controls Overlay */}
        <div className="absolute bottom-5 right-5 z-20 flex flex-col gap-1.5 shadow-md rounded-lg overflow-hidden border border-zinc-200 bg-white">
          <button
            onClick={handleZoomIn}
            title="Acercar mapa"
            className="p-2 hover:bg-zinc-100 text-zinc-700 transition-colors border-b border-zinc-100 cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            title="Alejar mapa"
            className="p-2 hover:bg-zinc-100 text-zinc-700 transition-colors border-b border-zinc-100 cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            title="Restablecer vista completa de España"
            className="p-2 hover:bg-zinc-100 text-zinc-700 transition-colors flex items-center justify-center cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-xs px-3 py-2 rounded-lg border border-zinc-200 shadow-sm text-xs space-y-1">
          <div className="font-bold text-[11px] text-zinc-500 uppercase tracking-wider">Presidencias CCAA:</div>
          <div className="flex items-center gap-3 font-semibold text-[11px]">
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span> PP (11)</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-red-600"></span> PSOE (3)</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-purple-600"></span> Otros (3)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
