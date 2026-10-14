'use client';

import React from 'react';
import { REGIONS } from '@/data/politicalData';
import { Region } from '@/types/politics';
import { MapPin } from 'lucide-react';

interface SpainVisualMapProps {
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
}

export const SpainVisualMap: React.FC<SpainVisualMapProps> = ({
  selectedRegion,
  onSelectRegion,
}) => {
  // Region mapping to geographic layout coordinates for responsive visual cartogram
  const regionPositions: Record<string, { col: number; row: number; label: string }> = {
    galicia: { col: 1, row: 1, label: 'GAL' },
    'principado-de-asturias': { col: 2, row: 1, label: 'AST' },
    cantabria: { col: 3, row: 1, label: 'CAN' },
    'pais-vasco': { col: 4, row: 1, label: 'PV' },
    'comunidad-foral-de-navarra': { col: 5, row: 1, label: 'NAV' },
    'la-rioja': { col: 4, row: 2, label: 'RIO' },
    aragon: { col: 5, row: 2, label: 'ARA' },
    cataluna: { col: 6, row: 2, label: 'CAT' },
    'castilla-y-leon': { col: 2, row: 2, label: 'CYL' },
    'comunidad-de-madrid': { col: 3, row: 3, label: 'MAD' },
    'castilla-la-mancha': { col: 4, row: 3, label: 'CLM' },
    'comunitat-valenciana': { col: 5, row: 3, label: 'VAL' },
    'illes-balears': { col: 6, row: 3, label: 'BAL' },
    extremadura: { col: 2, row: 3, label: 'EXT' },
    andalucia: { col: 3, row: 4, label: 'AND' },
    'region-de-murcia': { col: 4, row: 4, label: 'MUR' },
    ceuta: { col: 3, row: 5, label: 'CEU' },
    melilla: { col: 4, row: 5, label: 'MEL' },
    canarias: { col: 1, row: 5, label: 'CNR' },
  };

  const getPartyBg = (party: string, isSelected: boolean) => {
    if (isSelected) return 'ring-3 ring-zinc-900 shadow-md scale-105 z-10';
    if (party === 'PP') return 'bg-blue-600 text-white hover:bg-blue-700';
    if (party === 'PSOE') return 'bg-red-600 text-white hover:bg-red-700';
    if (party === 'COALICION_PP_VOX') return 'bg-indigo-600 text-white hover:bg-indigo-700';
    return 'bg-purple-600 text-white hover:bg-purple-700';
  };

  return (
    <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 sm:p-5">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-zinc-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
            Mapa Cartográfico de Gobiernos Autonómicos
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-semibold">
          <span className="inline-flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span> PP (11)
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600"></span> PSOE (3)
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-600"></span> Otros (3)
          </span>
        </div>
      </div>

      {/* Grid of CCAA */}
      <div className="grid grid-cols-6 gap-2 sm:gap-3 max-w-xl mx-auto py-2">
        {REGIONS.map((region) => {
          const isSelected = selectedRegion.id === region.id;
          const pos = regionPositions[region.id] || { col: 1, row: 1, label: region.name.slice(0, 3) };

          let colClass = '';
          if (pos.col === 1) colClass = 'col-start-1';
          if (pos.col === 2) colClass = 'col-start-2';
          if (pos.col === 3) colClass = 'col-start-3';
          if (pos.col === 4) colClass = 'col-start-4';
          if (pos.col === 5) colClass = 'col-start-5';
          if (pos.col === 6) colClass = 'col-start-6';

          let rowClass = '';
          if (pos.row === 1) rowClass = 'row-start-1';
          if (pos.row === 2) rowClass = 'row-start-2';
          if (pos.row === 3) rowClass = 'row-start-3';
          if (pos.row === 4) rowClass = 'row-start-4';
          if (pos.row === 5) rowClass = 'row-start-5';

          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region)}
              className={`${colClass} ${rowClass} h-14 sm:h-16 p-1.5 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                isSelected
                  ? 'bg-zinc-900 text-white ring-2 ring-zinc-900 scale-105 shadow-md'
                  : getPartyBg(region.governingParty, false)
              }`}
            >
              <span className="text-[11px] sm:text-xs font-black tracking-tight leading-tight line-clamp-1">
                {region.name}
              </span>
              <span className="text-[9px] font-semibold opacity-90 mt-0.5">
                {region.governingParty}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-[11px] text-zinc-500 text-center mt-3">
        Haz clic en cualquier comunidad para ver su presidente, fórmula de gobierno y reparto de escaños.
      </p>
    </div>
  );
};
