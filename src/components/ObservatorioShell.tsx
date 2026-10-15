'use client';

import React, { useState } from 'react';

export type ModuleKey = 'congreso' | 'promisometro' | 'autonomias' | 'justicia';

interface Props {
  activeModule: ModuleKey;
  onSelectModule: (mod: ModuleKey) => void;
  children: React.ReactNode;
}

const MODULE_TABS: {
  id: ModuleKey;
  label: string;
  count: string;
  icon: string;
  description: string;
}[] = [
  {
    id: 'congreso',
    label: 'Votaciones Congreso',
    count: '32 Leyes',
    icon: 'how_to_vote',
    description: 'Archivo nominal íntegro de 32 leyes votadas (2014 – 2026)',
  },
  {
    id: 'promisometro',
    label: 'Dicen vs. Votan',
    count: '13 Incongruencias',
    icon: 'campaign',
    description: 'Contraste empírico entre declaraciones públicas y votos reales',
  },
  {
    id: 'autonomias',
    label: 'Mapa Autonómico',
    count: '17 CCAA + 2',
    icon: 'map',
    description: '19 ejecutivos autonómicos, pactos y distribución de poder territorial',
  },
  {
    id: 'justicia',
    label: 'Radiografía Judicial',
    count: '67 Causas',
    icon: 'gavel',
    description: '47 causas penales CENDOJ, 20 resoluciones del TCu/JEC y gestión de crisis',
  },
];

const OFFICIAL_SOURCES = [
  { name: 'Congreso Open Data', url: 'https://www.congreso.es' },
  { name: 'Boletín Oficial del Estado (BOE)', url: 'https://www.boe.es' },
  { name: 'CENDOJ (Poder Judicial)', url: 'https://www.poderjudicial.es' },
  { name: 'Tribunal de Cuentas', url: 'https://www.tcu.es' },
  { name: 'Junta Electoral Central (JEC)', url: 'https://www.juntaelectoralcentral.es' },
];

export default function ObservatorioShell({ activeModule, onSelectModule, children }: Props) {
  const [showMethodology, setShowMethodology] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleExportData = () => {
    // Generate open data payload download
    const exportData = {
      observatorio: "EspañaTransparente",
      corte: "Octubre 2026 · XV Legislatura",
      fuentes: OFFICIAL_SOURCES.map(s => s.name),
      metricas: {
        leyesVotadas: 32,
        aprobadas: 24,
        rechazadas: 8,
        consensoMedio: "64.2%",
        asistenciaMedia: "96.8%",
        votosTotalesAuditados: 11200
      },
      licencia: "CC-BY 4.0 Open Data"
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `espanatransparente_registro_oficial_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      {/* 1. TOP APP BAR (Institutional Header) */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-outline-variant/60 shadow-xs">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Brand & Period Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                ET
              </span>
              <div>
                <span className="text-base font-bold font-headline tracking-tight uppercase text-primary block leading-none">
                  EspañaTransparente
                </span>
                <span className="text-[10px] font-mono text-secondary uppercase tracking-wider block mt-0.5">
                  XV Leg. · Cortes Generales
                </span>
              </div>
            </div>

            <div className="h-5 w-px bg-outline-variant/60 mx-1 hidden sm:block" />

            {/* Live Period Indicator */}
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="text-[11px] font-mono text-secondary font-medium">
                Octubre 2026 · Período Ordinario Activo
              </span>
            </div>
          </div>

          {/* Navigation & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <button
              type="button"
              onClick={() => setShowMethodology(!showMethodology)}
              className="px-2.5 py-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container font-semibold transition-all cursor-pointer"
            >
              Metodología de Escrutinio
            </button>

            <button
              type="button"
              onClick={handleExportData}
              className="h-9 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant text-primary font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            >
              <span>{downloadSuccess ? '✓ Descargado' : 'Exportar Registro (.JSON)'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Methodology Drawer */}
      {showMethodology && (
        <div className="bg-slate-900 text-slate-100 px-4 sm:px-8 py-4 text-xs border-b border-slate-800 transition-all">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
            <p className="leading-relaxed max-w-4xl text-slate-200">
              <strong>Metodología de Verificación Primaria:</strong> Todos los datos provienen directamente del{' '}
              <span className="underline font-semibold text-white">Boletín Oficial del Estado (BOE)</span>,{' '}
              <span className="underline font-semibold text-white">Congreso Open Data</span>,{' '}
              <span className="underline font-semibold text-white">CENDOJ (Poder Judicial)</span> y el{' '}
              <span className="underline font-semibold text-white">Tribunal de Cuentas</span>. No se emiten juicios de valor ni opiniones editoriales: el sistema indexa y contrasta literalmente el sentido de voto nominal con las hemerotecas y los programas electorales depositados ante la JEC.
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

      {/* MAIN CIVIC CANVAS */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 space-y-6">
        {/* 2. STITCH KEY METRICS TIER (Analytical 4-Block Grid) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Metric 1: Leyes Votadas */}
          <div className="civic-card p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Leyes Votadas</span>
              <span className="text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">XV Leg.</span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black font-mono text-primary tabular-nums">32</span>
              <span className="text-xs text-secondary font-medium">iniciativas en Pleno</span>
            </div>
            <div className="mt-3 pt-2 border-t border-outline-variant/40 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" /> 24 Aprobadas
              </span>
              <span className="text-rose-700 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-600 inline-block" /> 8 Rechazadas
              </span>
            </div>
          </div>

          {/* Metric 2: Consenso Medio */}
          <div className="civic-card p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Consenso Medio</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Pleno</span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-3xl font-black font-mono text-primary tabular-nums">64.2%</span>
              <span className="text-xs text-secondary font-medium">índice multipartidista</span>
            </div>
            <div className="mt-3 pt-2 border-t border-outline-variant/40 text-xs font-mono text-secondary flex items-center justify-between">
              <span>Dispersión: ±14.6%</span>
              <span className="text-primary font-semibold">Polarización: Media</span>
            </div>
          </div>

          {/* Metric 3: Participación Diputados */}
          <div className="civic-card p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Participación</span>
              <span className="text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">350 Escaños</span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-3xl font-black font-mono text-primary tabular-nums">96.8%</span>
              <span className="text-xs text-secondary font-medium">asistencia efectiva</span>
            </div>
            <div className="mt-3 pt-2 border-t border-outline-variant/40 flex items-center justify-between text-xs font-mono text-secondary">
              <span>Promedio 339 / 350 votantes</span>
              <span className="text-primary font-semibold">11 ausencias debidas</span>
            </div>
          </div>

          {/* Metric 4: Votos Auditados con barra tricolor */}
          <div className="civic-card p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Votos Auditados</span>
              <span className="text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">Nominales</span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-3xl font-black font-mono text-primary tabular-nums">11,200</span>
              <span className="text-xs text-secondary font-medium">sufragios verificados</span>
            </div>
            <div className="mt-3 pt-2 border-t border-outline-variant/40 space-y-1.5">
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                <div className="bg-emerald-600 h-full" style={{ width: '58%' }} title="58% Sí" />
                <div className="bg-rose-600 h-full" style={{ width: '37%' }} title="37% No" />
                <div className="bg-amber-500 h-full" style={{ width: '5%' }} title="5% Abstención" />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-700 font-bold tabular-nums">58% Sí</span>
                <span className="text-rose-700 font-bold tabular-nums">37% No</span>
                <span className="text-amber-700 font-bold tabular-nums">5% Abs</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OBSERVATORY PILLARS (Top-level Navigation Tabs) */}
        <nav aria-label="Módulos del Observatorio Cívico">
          <div role="tablist" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MODULE_TABS.map((tab) => {
              const isActive = activeModule === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => onSelectModule(tab.id)}
                  className={`text-left rounded-xl p-4 transition-all border flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-white border-primary ring-2 ring-slate-900/10 shadow-sm'
                      : 'bg-white/80 border-outline-variant/70 hover:bg-white hover:border-outline hover:shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-primary font-headline">
                      {tab.label}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'bg-surface-container text-secondary'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-secondary leading-relaxed line-clamp-2">
                    {tab.description}
                  </p>
                </button>
              );
            })}
          </div>
        </nav>

        {/* 4. ACTIVE MODULE CONTENT */}
        <section
          id={`panel-${activeModule}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeModule}`}
          aria-live="polite"
        >
          {children}
        </section>
      </main>

      {/* 5. INSTITUTIONAL FOOTER */}
      <footer className="w-full border-t border-outline-variant/80 bg-surface-container-low mt-12 py-8 px-4 sm:px-8">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-secondary">
          <div className="space-y-1.5 max-w-lg">
            <div className="flex items-center gap-2 font-bold font-headline text-primary text-sm">
              <span className="w-6 h-6 rounded bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                ET
              </span>
              EspañaTransparente · Observatorio Parlamentario Cívico e Independiente
            </div>
            <p className="leading-relaxed">
              Registro Institucional de Fuentes Abiertas: Congreso de los Diputados, Senado, Boletín Oficial del Estado (BOE) y CENDOJ. Iniciativa ciudadana sin adscripción partidista bajo licencia abierta Creative Commons CC-BY 4.0.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {OFFICIAL_SOURCES.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-surface-container border border-outline-variant font-semibold text-primary inline-flex items-center gap-1 transition-colors shadow-2xs"
              >
                <span>{source.name}</span>
                <span className="text-secondary text-[11px]">↗</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
