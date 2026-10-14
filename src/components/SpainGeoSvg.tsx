'use client';

import React, { useState } from 'react';
import { REGIONS } from '@/data/politicalData';
import { Region } from '@/types/politics';

interface SpainGeoSvgProps {
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
}

export const SpainGeoSvg: React.FC<SpainGeoSvgProps> = ({
  selectedRegion,
  onSelectRegion,
}) => {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);

  // Helper to get region object by ID
  const getRegion = (id: string) => REGIONS.find((r) => r.id === id);

  const getFillColor = (region?: Region, isSelected?: boolean) => {
    if (!region) return '#cbd5e1';
    if (isSelected) return '#09090b'; // dark highlight for selected
    if (region.governingParty === 'PP') return '#2563eb'; // blue
    if (region.governingParty === 'PSOE') return '#dc2626'; // red
    if (region.governingParty === 'COALICION_PP_VOX') return '#4f46e5';
    return '#7c3aed'; // purple
  };

  // SVG Paths for the 17 Autonomous Communities + Ceuta / Melilla
  // Designed in an 800x620 coordinate viewBox
  const regionPaths: Array<{
    id: string;
    name: string;
    path: string;
    labelX: number;
    labelY: number;
    shortLabel: string;
  }> = [
    {
      id: 'galicia',
      name: 'Galicia',
      shortLabel: 'GALICIA',
      labelX: 115,
      labelY: 105,
      path: 'M 60,60 L 140,40 L 175,65 L 180,120 L 155,160 L 120,165 L 75,155 L 55,115 Z',
    },
    {
      id: 'principado-de-asturias',
      name: 'Asturias',
      shortLabel: 'ASTURIAS',
      labelX: 230,
      labelY: 75,
      path: 'M 175,65 L 285,60 L 290,95 L 245,105 L 180,100 Z',
    },
    {
      id: 'cantabria',
      name: 'Cantabria',
      shortLabel: 'CANT.',
      labelX: 325,
      labelY: 80,
      path: 'M 285,60 L 360,65 L 365,100 L 290,95 Z',
    },
    {
      id: 'pais-vasco',
      name: 'País Vasco',
      shortLabel: 'EUSKADI',
      labelX: 410,
      labelY: 85,
      path: 'M 360,65 L 435,70 L 440,115 L 390,125 L 365,100 Z',
    },
    {
      id: 'comunidad-foral-de-navarra',
      name: 'Navarra',
      shortLabel: 'NAVARRA',
      labelX: 460,
      labelY: 120,
      path: 'M 435,70 L 495,95 L 490,155 L 435,165 L 420,120 L 440,115 Z',
    },
    {
      id: 'la-rioja',
      name: 'La Rioja',
      shortLabel: 'RIOJA',
      labelX: 385,
      labelY: 135,
      path: 'M 365,115 L 420,120 L 425,150 L 370,145 Z',
    },
    {
      id: 'castilla-y-leon',
      name: 'Castilla y León',
      shortLabel: 'CASTILLA Y LEÓN',
      labelX: 260,
      labelY: 185,
      path: 'M 180,100 L 245,105 L 290,95 L 365,100 L 365,115 L 370,145 L 425,150 L 435,165 L 420,205 L 380,240 L 330,245 L 310,295 L 225,290 L 195,245 L 155,160 L 180,120 Z',
    },
    {
      id: 'aragon',
      name: 'Aragón',
      shortLabel: 'ARAGÓN',
      labelX: 520,
      labelY: 195,
      path: 'M 495,95 L 565,130 L 580,200 L 565,275 L 500,285 L 470,225 L 490,155 Z',
    },
    {
      id: 'cataluna',
      name: 'Cataluña',
      shortLabel: 'CATALUÑA',
      labelX: 660,
      labelY: 165,
      path: 'M 565,130 L 675,100 L 730,135 L 710,210 L 640,240 L 580,200 Z',
    },
    {
      id: 'comunidad-de-madrid',
      name: 'Madrid',
      shortLabel: 'MADRID',
      labelX: 355,
      labelY: 275,
      path: 'M 330,245 L 380,240 L 390,295 L 340,305 Z',
    },
    {
      id: 'extremadura',
      name: 'Extremadura',
      shortLabel: 'EXTREMADURA',
      labelX: 200,
      labelY: 360,
      path: 'M 195,245 L 265,260 L 275,340 L 280,420 L 190,430 L 165,345 L 185,290 Z',
    },
    {
      id: 'castilla-la-mancha',
      name: 'Castilla-La Mancha',
      shortLabel: 'CASTILLA-LA MANCHA',
      labelX: 395,
      labelY: 350,
      path: 'M 310,295 L 340,305 L 390,295 L 420,205 L 500,285 L 525,355 L 485,425 L 415,445 L 320,440 L 280,420 L 275,340 L 265,260 Z',
    },
    {
      id: 'comunitat-valenciana',
      name: 'C. Valenciana',
      shortLabel: 'VALENCIA',
      labelX: 565,
      labelY: 340,
      path: 'M 580,200 L 640,240 L 610,315 L 585,415 L 540,410 L 525,355 L 500,285 L 565,275 Z',
    },
    {
      id: 'illes-balears',
      name: 'Baleares',
      shortLabel: 'BALEARES',
      labelX: 715,
      labelY: 310,
      path: 'M 670,300 L 705,285 L 725,305 L 715,325 L 680,320 Z M 725,270 L 745,265 L 740,280 Z M 650,335 L 665,330 L 660,345 Z',
    },
    {
      id: 'region-de-murcia',
      name: 'Murcia',
      shortLabel: 'MURCIA',
      labelX: 515,
      labelY: 445,
      path: 'M 485,425 L 540,410 L 550,460 L 495,480 Z',
    },
    {
      id: 'andalucia',
      name: 'Andalucía',
      shortLabel: 'ANDALUCÍA',
      labelX: 330,
      labelY: 495,
      path: 'M 190,430 L 280,420 L 320,440 L 415,445 L 485,425 L 495,480 L 475,540 L 360,560 L 245,550 L 195,500 L 180,465 Z',
    },
    {
      id: 'canarias',
      name: 'Canarias',
      shortLabel: 'CANARIAS',
      labelX: 110,
      labelY: 560,
      path: 'M 45,550 L 75,545 L 80,565 L 50,565 Z M 95,540 L 125,535 L 130,555 L 100,555 Z M 145,530 L 170,525 L 175,545 L 150,545 Z',
    },
    {
      id: 'ceuta',
      name: 'Ceuta',
      shortLabel: 'CEU',
      labelX: 290,
      labelY: 590,
      path: 'M 285,580 L 305,580 L 305,595 L 285,595 Z',
    },
    {
      id: 'melilla',
      name: 'Melilla',
      shortLabel: 'MEL',
      labelX: 430,
      labelY: 590,
      path: 'M 425,580 L 445,580 L 445,595 L 425,595 Z',
    },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Mapa Esquemático Vectorial de España (CCAA)</h3>
          <p className="text-xs text-slate-500">
            Haz clic en cualquier territorio para consultar su composición parlamentaria y presidente.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs font-bold">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-blue-600"></span>
            <span className="text-slate-700">PP (11)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-600"></span>
            <span className="text-slate-700">PSOE (3)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-purple-600"></span>
            <span className="text-slate-700">Otros / Coalición (3)</span>
          </div>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full max-w-4xl mx-auto aspect-4/3 flex items-center justify-center">
        <svg
          viewBox="0 0 800 620"
          className="w-full h-full filter drop-shadow-sm select-none"
        >
          {/* Background Ocean / Canvas */}
          <rect width="800" height="620" fill="#f8fafc" rx="12" />

          {/* Canary Islands Inset Border */}
          <rect
            x="20"
            y="500"
            width="180"
            height="100"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            rx="8"
          />
          <text x="30" y="520" fill="#94a3b8" fontSize="10" fontWeight="bold">
            ISLAS CANARIAS
          </text>

          {/* Regions Polygons */}
          {regionPaths.map((rp) => {
            const region = getRegion(rp.id);
            const isSelected = selectedRegion.id === rp.id;
            const isHovered = hoveredRegion?.id === rp.id;

            const fillColor = getFillColor(region, isSelected);

            return (
              <g
                key={rp.id}
                onClick={() => region && onSelectRegion(region)}
                onMouseEnter={() => region && setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
                className="cursor-pointer transition-all duration-150"
              >
                <path
                  d={rp.path}
                  fill={fillColor}
                  stroke={isSelected ? '#09090b' : '#ffffff'}
                  strokeWidth={isSelected ? '3' : '1.5'}
                  strokeLinejoin="round"
                  className={`transition-all ${
                    isHovered ? 'filter brightness-110 opacity-90' : ''
                  }`}
                />
                {/* Region Text Label */}
                <text
                  x={rp.labelX}
                  y={rp.labelY}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="10"
                  fontWeight="bold"
                  className="pointer-events-none drop-shadow-xs"
                >
                  {rp.shortLabel}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Overlay */}
        {hoveredRegion && (
          <div className="absolute top-4 right-4 bg-zinc-900/95 text-white p-3 rounded-lg shadow-xl text-xs space-y-1 pointer-events-none backdrop-blur-xs border border-zinc-700 animate-fade-in z-20">
            <div className="font-bold text-sm text-amber-400">{hoveredRegion.name}</div>
            <div>Presidente: <span className="font-semibold text-zinc-100">{hoveredRegion.president}</span></div>
            <div>Gobierno: <span className="font-semibold text-zinc-100">{hoveredRegion.governingParty} ({hoveredRegion.coalitionDetail})</span></div>
            <div className="text-[11px] text-zinc-400 pt-1 border-t border-zinc-700">
              Parlamento: PP ({hoveredRegion.seats.PP}), PSOE ({hoveredRegion.seats.PSOE}), VOX ({hoveredRegion.seats.VOX})
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
