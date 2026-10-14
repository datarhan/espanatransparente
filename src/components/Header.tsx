'use client';

import React from 'react';
import { Landmark, ShieldAlert, Vote, MapPin, Sparkles, Compass, Target, BarChart3 } from 'lucide-react';
import { BILLS, CRIMINAL_CASES, ADMINISTRATIVE_SANCTIONS, REGIONAL_CRISES, PROMISES, MACRO_INDICATORS } from '@/data/politicalData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'mapa', label: 'Poder Territorial', icon: MapPin, badge: '17 CCAA' },
    { id: 'partidos', label: 'Radiografía de Partidos', icon: Landmark, badge: 'PSOE • PP • Vox' },
    { id: 'promisometro', label: 'El Promisómetro', icon: Target, badge: `${PROMISES.length}` },
    { id: 'votaciones', label: 'Votaciones en Congreso', icon: Vote, badge: `${BILLS.length} Leyes` },
    { id: 'judicial', label: 'Casos y Sanciones', icon: ShieldAlert, badge: `${CRIMINAL_CASES.length + ADMINISTRATIVE_SANCTIONS.length}` },
    { id: 'crisis', label: 'Catástrofes Regionales', icon: ShieldAlert, badge: `${REGIONAL_CRISES.length}` },
    { id: 'macro', label: 'Indicadores Macro', icon: BarChart3, badge: `${MACRO_INDICATORS.length}` },
    { id: 'buscador_ai', label: 'Buscador AI', icon: Sparkles, badge: 'Gemma 4', highlight: 'amber' },
    { id: 'test', label: 'Test de Afinidad', icon: Compass, badge: '12 Preguntas', highlight: 'indigo' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding & Context Bar */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-linear-to-tr from-rose-600 via-amber-500 to-blue-700 flex items-center justify-center text-white font-black text-lg shadow-sm ring-1 ring-black/5">
              ES
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">EspañaTransparente</span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  Datos Oficiales
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200/80">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                  </span>
                  14 Octubre 2026 • XV Leg.
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block tracking-tight mt-0.5">
                Observatorio electoral independiente: Congreso, BOE, CENDOJ y Tribunal de Cuentas
              </p>
            </div>
          </div>

          {/* Quick Party Representation Summary */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200/80 font-medium">
              <span className="h-2 w-2 rounded-full bg-red-600"></span>
              <span className="font-bold">PSOE</span>
              <span className="text-[10px] text-red-500 hidden md:inline">• 121 escaños</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 font-medium">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="font-bold">PP</span>
              <span className="text-[10px] text-blue-500 hidden md:inline">• 137 escaños</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
              <span className="font-bold">VOX</span>
              <span className="text-[10px] text-emerald-500 hidden md:inline">• 33 escaños</span>
            </div>
          </div>
        </div>

        {/* Modern Tab Navigation */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 scrollbar-none border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-950/10'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 transition-colors ${
                  isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-600'
                }`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold tracking-tight transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : tab.highlight === 'amber'
                        ? 'bg-amber-100 text-amber-800'
                        : tab.highlight === 'indigo'
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
