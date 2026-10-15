'use client';

import React, { useState } from 'react';

export type ModuleKey = 'congreso' | 'autonomias' | 'promisometro' | 'justicia';

interface Props {
  activeModule: ModuleKey;
  onSelectModule: (mod: ModuleKey) => void;
  children: React.ReactNode;
}

const KPI_MODULES: {
  id: ModuleKey;
  category: string;
  metric: string;
  submetric: string;
  detail: string;
  cta: string;
}[] = [
  {
    id: 'congreso',
    category: 'Congreso de los Diputados',
    metric: '291',
    submetric: 'de 350 escaños (83%)',
    detail: 'PP 137 • PSOE 121 • VOX 33 (+59 otros grupos)',
    cta: 'Explorar hemiciclo y votaciones',
  },
  {
    id: 'autonomias',
    category: 'Poder Autonómico (17 CCAA)',
    metric: '11 CCAA',
    submetric: 'presididas por PP',
    detail: 'PSOE 4 • PNV/CC 2 • (+Ceuta y Melilla PP)',
    cta: 'Ver mapa de presidencias y pactos',
  },
  {
    id: 'promisometro',
    category: 'Rendición de Cuentas',
    metric: '13 Casos',
    submetric: 'Dicen vs. Votan (28 JEC/BOE)',
    detail: 'Auditoría de contradicciones: discursos de líderes frente a actas del Congreso',
    cta: 'Ver radar Dicen vs. Votan',
  },
  {
    id: 'justicia',
    category: 'Justicia y Emergencias',
    metric: '67',
    submetric: 'causas y 8 catástrofes',
    detail: '47 penales CENDOJ • 20 sanciones TCu/JEC',
    cta: 'Sentencias firmes y emergencias',
  },
];

const OFFICIAL_SOURCES = [
  { name: 'Congreso Open Data', url: 'https://www.congreso.es' },
  { name: 'Boletín Oficial del Estado (BOE)', url: 'https://www.boe.es' },
  { name: 'CENDOJ (Poder Judicial)', url: 'https://www.poderjudicial.es' },
  { name: 'Tribunal de Cuentas', url: 'https://www.tcu.es' },
  { name: 'INE (Estadística)', url: 'https://www.ine.es' },
];

export default function ObservatorioShell({ activeModule, onSelectModule, children }: Props) {
  const [showMethodology, setShowMethodology] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <header className="sticky top-0 z-30 h-14 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs tracking-wider shadow-2xs">
            ES
          </span>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900 tracking-tight text-sm sm:text-base">EspañaTransparente</span>
            <span className="hidden sm:inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
              Fuentes 100% Primarias
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-600">
          <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Corte oficial: <strong>14 Oct 2026 • XV Legislatura</strong>
          </span>
          <button
            type="button"
            aria-expanded={showMethodology}
            onClick={() => setShowMethodology(!showMethodology)}
            className="text-slate-700 hover:text-slate-900 font-bold underline underline-offset-4 cursor-pointer"
          >
            ¿Cómo verificamos?
          </button>
        </div>
      </header>

      {showMethodology && (
        <div className="bg-slate-900 text-slate-100 px-4 lg:px-8 py-4 text-xs border-b border-slate-800 animate-fade-in">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
            <p className="leading-relaxed max-w-4xl text-slate-200">
              <strong>Metodología de Verificación Primaria:</strong> Todos los registros provienen directamente del{' '}
              <span className="underline font-semibold text-white">Boletín Oficial del Estado (BOE)</span>,{' '}
              <span className="underline font-semibold text-white">Congreso Open Data</span>,{' '}
              <span className="underline font-semibold text-white">CENDOJ (Poder Judicial)</span> y el{' '}
              <span className="underline font-semibold text-white">Tribunal de Cuentas</span>. La indexación semántica se emplea exclusivamente para enlazar los programas registrados ante la JEC con los decretos publicados; cada tarjeta incluye enlace directo al documento primario oficial.
            </p>
            <button
              type="button"
              onClick={() => setShowMethodology(false)}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold shrink-0 cursor-pointer border border-slate-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 shadow-xs">
          <div className="space-y-1.5 max-w-3xl">
            <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
              Observatorio Democrático Independiente • Rumbo al Ciclo Electoral 2027
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              Auditoría Comparada de Partidos sin Opinión Editorial
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Compara qué votaron en las Cortes Generales, el grado de cumplimiento de sus programas ante la JEC frente al BOE, causas en el CENDOJ y gestión de emergencias autonómicas.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs text-slate-600 lg:max-w-xs shrink-0 space-y-1">
            <div className="font-bold text-slate-800">
              Alcance de la Muestra (83% del Congreso)
            </div>
            <p className="text-slate-600 leading-relaxed">
              Foco principal en los 3 partidos estatales (PP, PSOE, Vox) con desglose de los 59 escaños de socios parlamentarios en votaciones clave.
            </p>
          </div>
        </section>

        <nav aria-label="Módulos del Observatorio">
          <div role="tablist" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {KPI_MODULES.map((card) => {
              const isActive = activeModule === card.id;
              return (
                <button
                  key={card.id}
                  id={`tab-${card.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${card.id}`}
                  onClick={() => onSelectModule(card.id)}
                  className={`text-left rounded-2xl p-5 transition-all border flex flex-col justify-between relative cursor-pointer ${
                    isActive
                      ? 'bg-white border-slate-900 ring-2 ring-slate-900/10 shadow-md'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {card.category}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-900 text-white">
                          Activo
                        </span>
                      )}
                    </div>
                    <div className="mt-2.5 flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-slate-900 font-mono tracking-tight">{card.metric}</span>
                      <span className="text-xs font-semibold text-slate-600">{card.submetric}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-1">{card.detail}</p>
                  </div>

                  <div
                    className={`mt-4 pt-3 border-t text-xs font-bold flex items-center justify-between ${
                      isActive ? 'border-slate-200 text-slate-900' : 'border-slate-100 text-slate-600'
                    }`}
                  >
                    <span>{card.cta}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </button>
              );
            })}
          </div>
        </nav>

        <section
          id={`panel-${activeModule}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeModule}`}
          aria-live="polite"
        >
          {children}
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8 px-4 lg:px-8 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-md">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-slate-900 text-white text-[11px] font-black">
                ES
              </span>
              EspañaTransparente
            </div>
            <p className="leading-relaxed">
              Observatorio Democrático de Datos Electorales y Rendición de Cuentas. Iniciativa ciudadana independiente, sin financiación de partidos ni entidades gubernamentales.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {OFFICIAL_SOURCES.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 font-semibold text-slate-700 inline-flex items-center gap-1 transition-colors"
              >
                <span>{source.name}</span>
                <span className="text-slate-400">&#8599;</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
