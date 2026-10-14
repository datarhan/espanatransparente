'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { TerritorialMap } from '@/components/TerritorialMap';
import { PartyOverviewCards } from '@/components/PartyOverviewCards';
import { VotingTracker } from '@/components/VotingTracker';
import { JudicialMonitor } from '@/components/JudicialMonitor';
import { CrisisObservatory } from '@/components/CrisisObservatory';
import { AiSemanticSearch } from '@/components/AiSemanticSearch';
import { AlignmentQuiz } from '@/components/AlignmentQuiz';
import { Landmark, Vote, ShieldAlert, Sparkles, MapPin, Compass, ExternalLink } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('mapa');

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col font-sans text-zinc-900">
      {/* Top Application Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-6">
        {/* Pre-Electoral Context Banner: 14 October 2026 */}
        <div className="bg-white border-l-4 border-amber-500 rounded-r-xl border-y border-r border-zinc-200 p-4 sm:p-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  📅 14 de Octubre de 2026
                </span>
                <span className="text-xs font-semibold text-zinc-500">
                  XV Legislatura • Recta Final Pre-electoral
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-zinc-900 mt-1">
                La Realidad de los Partidos ante el Nuevo Ciclo Electoral
              </h1>
              <p className="text-xs text-zinc-600 mt-0.5 max-w-4xl leading-relaxed">
                A menos de un año de las elecciones municipales y autonómicas de mayo de 2027 y de las elecciones generales, esta plataforma ofrece un balance objetivo y contrastado sobre <strong>PSOE</strong>, <strong>PP</strong> y <strong>Vox</strong>: qué votaron en el Congreso frente a lo que prometieron, qué territorios gobiernan, sus causas judiciales oficiales y la gestión real de crisis y catástrofes.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Institutional Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <span className="text-xs text-zinc-500 font-semibold block uppercase tracking-wider">
              Congreso de los Diputados
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-zinc-900">291</span>
              <span className="text-xs text-zinc-500">de 350 escaños (83%)</span>
            </div>
            <div className="text-[11px] text-zinc-600 mt-1">
              PP: <strong className="text-blue-700">137</strong> • PSOE: <strong className="text-red-700">121</strong> • VOX: <strong className="text-emerald-700">33</strong>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <span className="text-xs text-zinc-500 font-semibold block uppercase tracking-wider">
              Poder Autonómico (17 CCAA)
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-blue-700">11 CCAA</span>
              <span className="text-xs text-zinc-500">presididas por PP</span>
            </div>
            <div className="text-[11px] text-zinc-600 mt-1">
              PSOE: <strong className="text-red-700">3</strong> • PNV/CC/Otros: <strong className="text-purple-700">3</strong>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <span className="text-xs text-zinc-500 font-semibold block uppercase tracking-wider">
              Leyes Decisivas Analizadas
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-zinc-900">10 Leyes</span>
              <span className="text-xs text-zinc-500">con votos y argumentos</span>
            </div>
            <div className="text-[11px] text-zinc-600 mt-1">
              Vivienda, Financiación, Amnistía, SMI
            </div>
          </div>

          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <span className="text-xs text-zinc-500 font-semibold block uppercase tracking-wider">
              Rendición Judicial y Alertas
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-rose-700">11 Causas</span>
              <span className="text-xs text-zinc-500">y 4 emergencias CCAA</span>
            </div>
            <div className="text-[11px] text-zinc-600 mt-1">
              Sentencias TS, T. Cuentas y cronología DANA
            </div>
          </div>
        </div>

        {/* Tab Content Rendering */}
        {activeTab === 'mapa' && <TerritorialMap />}
        {activeTab === 'partidos' && <PartyOverviewCards />}
        {activeTab === 'votaciones' && <VotingTracker />}
        {activeTab === 'judicial' && <JudicialMonitor />}
        {activeTab === 'crisis' && <CrisisObservatory />}
        {activeTab === 'buscador_ai' && <AiSemanticSearch />}
        {activeTab === 'test' && <AlignmentQuiz />}
      </main>

      {/* Footer & Neutrality Statement */}
      <footer className="border-t border-zinc-200 bg-white py-8 text-xs text-zinc-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="font-bold text-zinc-800 text-sm">EspañaTransparente</span> — Observatorio Democrático de Datos Electorales
              <p className="mt-0.5 text-zinc-500">
                Plataforma no gubernamental ni partidista. Los datos provienen estrictamente de los boletines oficiales y registros públicos del Estado español.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://www.congreso.es" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 flex items-center gap-1">
                <span>Congreso Open Data</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <a href="https://www.boe.es" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 flex items-center gap-1">
                <span>Boletín Oficial del Estado</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <a href="https://www.poderjudicial.es" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 flex items-center gap-1">
                <span>CENDOJ (Poder Judicial)</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <a href="https://www.tcu.es" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 flex items-center gap-1">
                <span>Tribunal de Cuentas</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <a href="https://www.juntaelectoralcentral.es" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 flex items-center gap-1">
                <span>Junta Electoral Central</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-100 text-center text-zinc-400 text-[11px]">
            Inferencia y extracción asistida por Gemma 4 y Gemini Embedding 2. Ningún partido político financia o supervisa esta herramienta.
          </div>
        </div>
      </footer>
    </div>
  );
}
