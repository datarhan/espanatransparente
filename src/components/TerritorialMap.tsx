'use client';

import React, { useState } from 'react';
import { REGIONS } from '@/data/politicalData';
import { Region } from '@/types/politics';
import { MapPin, Users, Building2, CheckCircle2, Map as MapIcon, LayoutGrid, Globe } from 'lucide-react';
import { SpainVisualMap } from '@/components/SpainVisualMap';
import { SpainGeoSvg } from '@/components/SpainGeoSvg';
import { RealSpainMap } from '@/components/RealSpainMap';

export const TerritorialMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(REGIONS[0]);
  const [mapViewMode, setMapViewMode] = useState<'REAL' | 'GEO' | 'GRID'>('REAL');

  // Aggregate stats
  const ppCount = REGIONS.filter(r => r.governingParty === 'PP').length;
  const psoeCount = REGIONS.filter(r => r.governingParty === 'PSOE').length;
  const otherCount = REGIONS.filter(r => r.governingParty === 'OTROS' || r.governingParty === 'COALICION_PP_VOX').length;

  return (
    <div className="space-y-6">
      {/* Header & Metrics */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Mapa de Poder Territorial y Gobiernos</h2>
            <p className="text-sm text-zinc-600 mt-1">
              Distribución de presidencias autonómicas, mayorías parlamentarias y peso de cada partido en los 17 parlamentos regionales y 2 ciudades autónomas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg text-center">
              <span className="text-xs text-blue-700 font-semibold block">Presidencias PP</span>
              <span className="text-lg font-bold text-blue-900">{ppCount}</span>
            </div>
            <div className="bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg text-center">
              <span className="text-xs text-red-700 font-semibold block">Presidencias PSOE</span>
              <span className="text-lg font-bold text-red-900">{psoeCount}</span>
            </div>
            <div className="bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-lg text-center">
              <span className="text-xs text-purple-700 font-semibold block">Coalición / Nacionalistas</span>
              <span className="text-lg font-bold text-purple-900">{otherCount}</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="mt-4 pt-3 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Formato de visualización del mapa:
          </span>
          <div className="inline-flex flex-wrap rounded-lg border border-zinc-200 bg-white p-1 gap-1">
            <button
              onClick={() => setMapViewMode('REAL')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                mapViewMode === 'REAL'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Mapa Geográfico Real (IGN / GeoJSON)</span>
            </button>
            <button
              onClick={() => setMapViewMode('GEO')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                mapViewMode === 'GEO'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Esquema Vectorial</span>
            </button>
            <button
              onClick={() => setMapViewMode('GRID')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                mapViewMode === 'GRID'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Rejilla Cartográfica</span>
            </button>
          </div>
        </div>
      </div>

      {/* Render selected map format */}
      {mapViewMode === 'REAL' ? (
        <RealSpainMap
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
        />
      ) : mapViewMode === 'GEO' ? (
        <SpainGeoSvg
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
        />
      ) : (
        <SpainVisualMap
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Region selector list */}
        <div className="lg:col-span-1 bg-white border border-zinc-200 rounded-xl overflow-hidden flex flex-col h-[580px]">
          <div className="p-3 bg-zinc-50 border-b border-zinc-200 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Seleccionar Comunidad o Ciudad Autónoma ({REGIONS.length})
          </div>
          <div className="overflow-y-auto divide-y divide-zinc-100 p-2 space-y-1">
            {REGIONS.map((region) => {
              const isSelected = selectedRegion.id === region.id;
              let partyColor = 'bg-zinc-100 text-zinc-700';
              if (region.governingParty === 'PP') partyColor = 'bg-blue-100 text-blue-800';
              if (region.governingParty === 'PSOE') partyColor = 'bg-red-100 text-red-800';
              if (region.governingParty === 'COALICION_PP_VOX') partyColor = 'bg-indigo-100 text-indigo-800';
              if (region.governingParty === 'OTROS') partyColor = 'bg-purple-100 text-purple-800';

              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className={`w-full text-left p-3 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                    isSelected ? 'bg-zinc-900 text-white shadow-xs' : 'hover:bg-zinc-50 text-zinc-800'
                  }`}
                >
                  <div>
                    <div className="font-semibold text-sm flex items-center gap-1.5">
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`} />
                      {region.name}
                    </div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {region.president}
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-zinc-800 text-zinc-200' : partyColor}`}>
                    {region.governingParty}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Region Detailed Card */}
        <div className="lg:col-span-2 bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-100">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-zinc-400">Detalle Autonómico</span>
                <h3 className="text-2xl font-bold text-zinc-900 mt-1">{selectedRegion.name}</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Capital: {selectedRegion.capital} • Población aprox: {selectedRegion.population}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${
                  selectedRegion.governingParty === 'PP' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                  selectedRegion.governingParty === 'PSOE' ? 'bg-red-50 text-red-800 border-red-200' :
                  'bg-purple-50 text-purple-800 border-purple-200'
                }`}>
                  Gobierna: {selectedRegion.governingParty}
                </span>
              </div>
            </div>

            {/* Government details */}
            <div className="mt-5 bg-zinc-50 border border-zinc-100 rounded-xl p-4">
              <div className="text-xs text-zinc-500 uppercase font-semibold">Presidente/a de la Comunidad</div>
              <div className="text-lg font-bold text-zinc-900 mt-0.5">{selectedRegion.president}</div>
              <div className="text-xs text-zinc-600 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-medium">Fórmula de gobierno:</span> {selectedRegion.coalitionDetail}
              </div>
            </div>

            {/* Regional Parliament seats breakdown */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" /> Composición del Parlamento Autonómico ({selectedRegion.totalSeats} escaños)
              </h4>

              {/* Progress Bar of Seats */}
              <div className="h-6 w-full rounded-lg overflow-hidden flex bg-zinc-100 border border-zinc-200">
                {selectedRegion.seats.PP > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.PP / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold"
                    title={`PP: ${selectedRegion.seats.PP}`}
                  >
                    PP {selectedRegion.seats.PP}
                  </div>
                )}
                {selectedRegion.seats.PSOE > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.PSOE / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-red-600 flex items-center justify-center text-[10px] text-white font-bold"
                    title={`PSOE: ${selectedRegion.seats.PSOE}`}
                  >
                    PSOE {selectedRegion.seats.PSOE}
                  </div>
                )}
                {selectedRegion.seats.VOX > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.VOX / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold"
                    title={`VOX: ${selectedRegion.seats.VOX}`}
                  >
                    VOX {selectedRegion.seats.VOX}
                  </div>
                )}
                {selectedRegion.seats.OTHERS > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.OTHERS / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-zinc-400 flex items-center justify-center text-[10px] text-white font-bold"
                    title={`Otros: ${selectedRegion.seats.OTHERS}`}
                  >
                    Otros {selectedRegion.seats.OTHERS}
                  </div>
                )}
              </div>

              {/* Detailed numbers grid */}
              <div className="grid grid-cols-4 gap-3 mt-4 text-center">
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                  <span className="text-xs text-blue-700 font-semibold block">Partido Popular</span>
                  <span className="text-xl font-extrabold text-blue-900">{selectedRegion.seats.PP}</span>
                  <span className="text-[10px] text-zinc-500 block">
                    {Math.round((selectedRegion.seats.PP / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>

                <div className="p-3 bg-red-50/60 border border-red-100 rounded-lg">
                  <span className="text-xs text-red-700 font-semibold block">PSOE</span>
                  <span className="text-xl font-extrabold text-red-900">{selectedRegion.seats.PSOE}</span>
                  <span className="text-[10px] text-zinc-500 block">
                    {Math.round((selectedRegion.seats.PSOE / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>

                <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-lg">
                  <span className="text-xs text-emerald-700 font-semibold block">Vox</span>
                  <span className="text-xl font-extrabold text-emerald-900">{selectedRegion.seats.VOX}</span>
                  <span className="text-[10px] text-zinc-500 block">
                    {Math.round((selectedRegion.seats.VOX / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>

                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <span className="text-xs text-zinc-600 font-semibold block">Otras Fuerzas</span>
                  <span className="text-xl font-extrabold text-zinc-800">{selectedRegion.seats.OTHERS}</span>
                  <span className="text-[10px] text-zinc-500 block">
                    {Math.round((selectedRegion.seats.OTHERS / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-500 flex items-center justify-between">
            <span>Fuente: Registros de los boletines oficiales autonómicos y Junta Electoral Central</span>
            <span className="font-semibold text-zinc-700">Mayoría absoluta: {Math.floor(selectedRegion.totalSeats / 2) + 1} escaños</span>
          </div>
        </div>
      </div>
    </div>
  );
};
