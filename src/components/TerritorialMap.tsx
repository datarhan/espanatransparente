'use client';

import React, { useState } from 'react';
import { REGIONS } from '@/data/politicalData';
import { Region } from '@/types/politics';
import { MapPin, Users, Building2, CheckCircle2, Map as MapIcon, LayoutGrid, Globe, Layers, Info } from 'lucide-react';
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
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-1">
              <MapPin className="w-4 h-4 text-slate-800" />
              <span>Mapa Autonómico • Poder Territorial de España</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Distribución de Presidencias y Gobiernos Autonómicos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Mapa interactivo de las 17 Comunidades Autónomas y las 2 Ciudades Autónomas (Ceuta y Melilla). Consulta las fórmulas de gobernabilidad, la composición exacta de los parlamentos autonómicos y el peso electoral de cada partido.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <div className="bg-blue-50 border border-blue-200/80 px-3.5 py-2 rounded-xl text-center shadow-2xs">
              <span className="text-[11px] text-blue-700 font-bold block uppercase tracking-wider">Presidencias PP</span>
              <span className="text-2xl font-black text-blue-900 leading-tight block mt-0.5">{ppCount}</span>
            </div>
            <div className="bg-red-50 border border-red-200/80 px-3.5 py-2 rounded-xl text-center shadow-2xs">
              <span className="text-[11px] text-red-700 font-bold block uppercase tracking-wider">Presidencias PSOE</span>
              <span className="text-2xl font-black text-red-900 leading-tight block mt-0.5">{psoeCount}</span>
            </div>
            <div className="bg-purple-50 border border-purple-200/80 px-3.5 py-2 rounded-xl text-center shadow-2xs">
              <span className="text-[11px] text-purple-700 font-bold block uppercase tracking-wider">Nacionalistas / Otros</span>
              <span className="text-2xl font-black text-purple-900 leading-tight block mt-0.5">{otherCount}</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            Formato de visualización del mapa:
          </span>
          <div className="inline-flex flex-wrap rounded-xl border border-slate-200 bg-slate-100/80 p-1 gap-1 text-xs font-bold">
            <button
              onClick={() => setMapViewMode('REAL')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                mapViewMode === 'REAL'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Mapa Geográfico Real (CARTO / IGN)</span>
            </button>
            <button
              onClick={() => setMapViewMode('GEO')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                mapViewMode === 'GEO'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Esquema Vectorial</span>
            </button>
            <button
              onClick={() => setMapViewMode('GRID')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                mapViewMode === 'GRID'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
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
        <div className="lg:col-span-1 bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col h-[580px] shadow-xs">
          <div className="p-3.5 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
            <span>Comunidades Autónomas ({REGIONS.length})</span>
            <span className="text-[10px] text-slate-400">Clic para inspeccionar</span>
          </div>
          <div className="overflow-y-auto divide-y divide-slate-100 p-2 space-y-1">
            {REGIONS.map((region) => {
              const isSelected = selectedRegion.id === region.id;
              let partyBadge = 'bg-slate-100 text-slate-700 border-slate-200';
              if (region.governingParty === 'PP') partyBadge = 'bg-blue-50 text-blue-800 border-blue-200';
              if (region.governingParty === 'PSOE') partyBadge = 'bg-red-50 text-red-800 border-red-200';
              if (region.governingParty === 'COALICION_PP_VOX') partyBadge = 'bg-indigo-50 text-indigo-800 border-indigo-200';
              if (region.governingParty === 'OTROS') partyBadge = 'bg-purple-50 text-purple-800 border-purple-200';

              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isSelected ? 'bg-slate-900 text-white shadow-xs' : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm flex items-center gap-1.5">
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`} />
                      {region.name}
                    </div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {region.president}
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    isSelected ? 'bg-slate-800 text-slate-200 border-slate-700' : partyBadge
                  }`}>
                    {region.governingParty}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Region Detailed Card */}
        <div className="lg:col-span-2 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs space-y-6">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Detalle Autonómico</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">{selectedRegion.name}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Capital: <strong className="text-slate-700">{selectedRegion.capital}</strong> • Población aprox: <strong className="text-slate-700">{selectedRegion.population}</strong>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-xl border ${
                  selectedRegion.governingParty === 'PP' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                  selectedRegion.governingParty === 'PSOE' ? 'bg-red-50 text-red-800 border-red-200' :
                  'bg-purple-50 text-purple-800 border-purple-200'
                }`}>
                  Gobierna: {selectedRegion.governingParty}
                </span>
              </div>
            </div>

            {/* Government details */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-1.5">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Presidencia de la Comunidad Autónoma</div>
              <div className="text-xl font-black text-slate-900">{selectedRegion.president}</div>
              <div className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span><strong className="text-slate-800">Fórmula de gobernabilidad:</strong> {selectedRegion.coalitionDetail}</span>
              </div>
            </div>

            {/* Regional Parliament seats breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-700" />
                Composición del Parlamento Autonómico ({selectedRegion.totalSeats} escaños)
              </h4>

              {/* Progress Bar of Seats */}
              <div className="h-7 w-full rounded-xl overflow-hidden flex bg-slate-100 border border-slate-200 shadow-inner">
                {selectedRegion.seats.PP > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.PP / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-blue-600 flex items-center justify-center text-[11px] text-white font-extrabold transition-all"
                    title={`PP: ${selectedRegion.seats.PP}`}
                  >
                    PP {selectedRegion.seats.PP}
                  </div>
                )}
                {selectedRegion.seats.PSOE > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.PSOE / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-red-600 flex items-center justify-center text-[11px] text-white font-extrabold transition-all"
                    title={`PSOE: ${selectedRegion.seats.PSOE}`}
                  >
                    PSOE {selectedRegion.seats.PSOE}
                  </div>
                )}
                {selectedRegion.seats.VOX > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.VOX / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-emerald-600 flex items-center justify-center text-[11px] text-white font-extrabold transition-all"
                    title={`VOX: ${selectedRegion.seats.VOX}`}
                  >
                    VOX {selectedRegion.seats.VOX}
                  </div>
                )}
                {selectedRegion.seats.OTHERS > 0 && (
                  <div
                    style={{ width: `${(selectedRegion.seats.OTHERS / selectedRegion.totalSeats) * 100}%` }}
                    className="bg-slate-400 flex items-center justify-center text-[11px] text-white font-extrabold transition-all"
                    title={`Otros: ${selectedRegion.seats.OTHERS}`}
                  >
                    Otros {selectedRegion.seats.OTHERS}
                  </div>
                )}
              </div>

              {/* Detailed numbers grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl">
                  <span className="text-xs text-blue-700 font-bold block uppercase tracking-wider">Partido Popular</span>
                  <span className="text-2xl font-black text-blue-900 font-mono mt-0.5 block">{selectedRegion.seats.PP}</span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {Math.round((selectedRegion.seats.PP / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>

                <div className="p-3.5 bg-red-50/60 border border-red-100 rounded-xl">
                  <span className="text-xs text-red-700 font-bold block uppercase tracking-wider">PSOE</span>
                  <span className="text-2xl font-black text-red-900 font-mono mt-0.5 block">{selectedRegion.seats.PSOE}</span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {Math.round((selectedRegion.seats.PSOE / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>

                <div className="p-3.5 bg-emerald-50/60 border border-emerald-100 rounded-xl">
                  <span className="text-xs text-emerald-700 font-bold block uppercase tracking-wider">Vox</span>
                  <span className="text-2xl font-black text-emerald-900 font-mono mt-0.5 block">{selectedRegion.seats.VOX}</span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {Math.round((selectedRegion.seats.VOX / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">Otras Fuerzas</span>
                  <span className="text-2xl font-black text-slate-800 font-mono mt-0.5 block">{selectedRegion.seats.OTHERS}</span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {Math.round((selectedRegion.seats.OTHERS / selectedRegion.totalSeats) * 100)}% escaños
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Fuente: Boletines Oficiales de las CCAA y actas de escrutinio de la JEC</span>
            <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Mayoría absoluta: {Math.floor(selectedRegion.totalSeats / 2) + 1} escaños
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
