'use client';

import React from 'react';
import { Landmark, ShieldAlert, Vote, MapPin, Sparkles, Compass, Target, BarChart3 } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'mapa', label: 'Poder Territorial', icon: MapPin },
    { id: 'partidos', label: 'Radiografía de Partidos', icon: Landmark },
    { id: 'promisometro', label: 'El Promisómetro', icon: Target },
    { id: 'votaciones', label: 'Votaciones en Congreso', icon: Vote },
    { id: 'judicial', label: 'Casos y Sanciones', icon: ShieldAlert },
    { id: 'crisis', label: 'Catástrofes Regionales', icon: ShieldAlert },
    { id: 'macro', label: 'Indicadores Macro', icon: BarChart3 },
    { id: 'buscador_ai', label: 'Buscador AI (Gemma 4)', icon: Sparkles },
    { id: 'test', label: 'Test de Afinidad', icon: Compass },
  ];

  return (
    <header className="border-b border-zinc-200 bg-white sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-linear-to-br from-red-600 via-amber-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              ES
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-zinc-900 tracking-tight">EspañaTransparente</span>
                <span className="text-[10px] uppercase font-semibold bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full border border-zinc-200">
                  Datos Oficiales
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  14 Octubre 2026 • Pre-electoral XV Leg.
                </span>
              </div>
              <p className="text-xs text-zinc-500 hidden sm:block">
                Observatorio electoral independiente: Congreso, BOE, CENDOJ y Tribunal de Cuentas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium bg-red-50 text-red-700 border border-red-200">
              <span className="h-2 w-2 rounded-full bg-red-600"></span> PSOE
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span> PP
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-600"></span> VOX
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2 scrollbar-none border-t border-zinc-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
