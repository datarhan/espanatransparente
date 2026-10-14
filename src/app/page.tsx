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
import { Promisometro } from '@/components/Promisometro';
import { MacroIndicators } from '@/components/MacroIndicators';
import { BILLS, CRIMINAL_CASES, ADMINISTRATIVE_SANCTIONS, REGIONAL_CRISES, PROMISES, MACRO_INDICATORS } from '@/data/politicalData';
import { Landmark, Vote, ShieldAlert, Sparkles, MapPin, Compass, ExternalLink, Target, ArrowRight, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('mapa');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 relative selection:bg-amber-100 selection:text-amber-900">
      {/* Ambient background light gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-linear-to-b from-amber-100/40 via-sky-100/30 to-transparent blur-3xl opacity-70"></div>
      </div>

      {/* Top Application Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8">
        {/* Pre-Electoral Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_12px_24px_-8px_rgba(0,0,0,0.04)]">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  14 de Octubre de 2026 • Recta Final XV Legislatura
                </span>
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  Elecciones Autonómicas y Municipales en mayo 2027
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Observatorio Democrático de Datos Electorales
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
                Plataforma independiente y no partidista. Compara la realidad verificada de <strong>PSOE</strong>, <strong>PP</strong> y <strong>Vox</strong> sin sesgos ni opiniones editoriales: qué votaron en las Cortes Generales, sus promesas de campaña frente al BOE, causas judiciales con sentencia firme y gestión de emergencias autonómicas.
              </p>

              {/* Quick Exploration Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  onClick={() => setActiveTab('test')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Test de Afinidad (12 Preguntas)</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </button>

                <button
                  onClick={() => setActiveTab('promisometro')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200/80 transition-colors cursor-pointer"
                >
                  <Target className="w-3.5 h-3.5 text-rose-600" />
                  <span>El Promisómetro ({PROMISES.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('buscador_ai')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Asistente Gemma 4</span>
                </button>
              </div>
            </div>

            {/* Micro Badge / Neutrality Seal */}
            <div className="lg:border-l lg:border-slate-200 lg:pl-6 space-y-2 text-xs text-slate-500 max-w-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fuentes 100% Primarias</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Cotejo automatizado con el Boletín Oficial del Estado, Diario de Sesiones del Congreso, base CENDOJ del CGPJ y registros del Tribunal de Cuentas.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Interactive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Congreso */}
          <div
            onClick={() => setActiveTab('votaciones')}
            className="group bg-white border border-slate-200/90 hover:border-slate-300 p-5 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Congreso de los Diputados</span>
                <Vote className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-slate-950 tracking-tight">291</span>
                <span className="text-xs text-slate-500 font-medium">de 350 escaños (83%)</span>
              </div>
              {/* Micro seat distribution bar */}
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex mt-2.5">
                <div style={{ width: `${(137 / 350) * 100}%` }} className="bg-blue-600" title="PP: 137"></div>
                <div style={{ width: `${(121 / 350) * 100}%` }} className="bg-red-600" title="PSOE: 121"></div>
                <div style={{ width: `${(33 / 350) * 100}%` }} className="bg-emerald-600" title="VOX: 33"></div>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
              <span>PP 137 • PSOE 121 • VOX 33</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: Poder Autonómico */}
          <div
            onClick={() => setActiveTab('mapa')}
            className="group bg-white border border-slate-200/90 hover:border-slate-300 p-5 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Poder Autonómico (17 CCAA)</span>
                <MapPin className="w-4 h-4 text-blue-600 group-hover:text-blue-800 transition-colors" />
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-blue-700 tracking-tight">11 CCAA</span>
                <span className="text-xs text-slate-500 font-medium">presididas por PP</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">
                PSOE preside 3 • PNV/CC 3 • Vox en oposición tras ruptura
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-700 font-bold">
              <span>Ver mapa de presidencias y pactos</span>
              <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Leyes y Promesas */}
          <div
            onClick={() => setActiveTab('promisometro')}
            className="group bg-white border border-slate-200/90 hover:border-slate-300 p-5 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Rendición de Cuentas</span>
                <Target className="w-4 h-4 text-rose-600 group-hover:text-rose-800 transition-colors" />
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-slate-950 tracking-tight">{PROMISES.length}</span>
                <span className="text-xs text-slate-500 font-medium">promesas • {BILLS.length} leyes</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">
                Auditoría exhaustiva: programas ante la JEC vs BOE
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-rose-700 font-bold">
              <span>Explorar El Promisómetro</span>
              <ChevronRight className="w-3.5 h-3.5 text-rose-600 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 4: Judicial y Emergencias */}
          <div
            onClick={() => setActiveTab('judicial')}
            className="group bg-white border border-slate-200/90 hover:border-slate-300 p-5 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Justicia y Emergencias</span>
                <ShieldAlert className="w-4 h-4 text-amber-600 group-hover:text-amber-800 transition-colors" />
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-rose-700 tracking-tight">
                  {CRIMINAL_CASES.length + ADMINISTRATIVE_SANCTIONS.length}
                </span>
                <span className="text-xs text-slate-500 font-medium">causas y {REGIONAL_CRISES.length} catástrofes</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">
                {CRIMINAL_CASES.length} penales • {ADMINISTRATIVE_SANCTIONS.length} sanciones TCu/JEC
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-700 font-bold">
              <span>Sentencias firmes e instrucción</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Tab Content Rendering */}
        <div className="transition-all duration-200">
          {activeTab === 'mapa' && <TerritorialMap />}
          {activeTab === 'partidos' && <PartyOverviewCards />}
          {activeTab === 'promisometro' && <Promisometro />}
          {activeTab === 'votaciones' && <VotingTracker />}
          {activeTab === 'judicial' && <JudicialMonitor />}
          {activeTab === 'crisis' && <CrisisObservatory />}
          {activeTab === 'macro' && <MacroIndicators />}
          {activeTab === 'buscador_ai' && <AiSemanticSearch />}
          {activeTab === 'test' && <AlignmentQuiz />}
        </div>
      </main>

      {/* Footer & Neutrality Statement */}
      <footer className="border-t border-slate-200/90 bg-white py-10 text-xs text-slate-500 mt-16 shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="h-6 w-6 rounded-md bg-linear-to-tr from-rose-600 via-amber-500 to-blue-700 flex items-center justify-center text-white font-black text-xs">
                  ES
                </div>
                <span className="font-extrabold text-slate-900 text-sm tracking-tight">EspañaTransparente</span>
              </div>
              <p className="text-slate-500 text-xs max-w-lg">
                Observatorio Democrático de Datos Electorales. Iniciativa no gubernamental, no financiada por ningún partido ni fundación política.
              </p>
            </div>

            {/* Official Source Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <a
                href="https://www.congreso.es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 flex items-center gap-1 font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors"
              >
                <span>Congreso Open Data</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://www.boe.es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 flex items-center gap-1 font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors"
              >
                <span>Boletín Oficial del Estado</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://www.poderjudicial.es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 flex items-center gap-1 font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors"
              >
                <span>CENDOJ (Poder Judicial)</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://www.tcu.es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 flex items-center gap-1 font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors"
              >
                <span>Tribunal de Cuentas</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://www.ine.es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 flex items-center gap-1 font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors"
              >
                <span>INE (Estadística)</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-2">
            <div>
              Modelo neuronal de inferencia asistida por <strong>Gemma 4</strong> y vectorización semántica por <strong>Gemini Embedding 2</strong>.
            </div>
            <div>
              Temporalidad: Datos vigentes a <strong>14 de octubre de 2026</strong>.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
