'use client';

import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, 
  Quote, 
  Vote, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Filter, 
  ShieldAlert, 
  ArrowRight,
  TrendingDown,
  Building2,
  Users,
  Coins,
  Scale
} from 'lucide-react';
import { INCONGRUENCIAS_DATA, IncongruenciaItem } from '@/data/incongruenciasData';
import { PROMISES } from '@/data/politicalData';
import { PromisometroItem, PromiseStatus } from '@/types/politics';

export type PromisometroTab = 'INCONGRUENCIAS' | 'PROGRAMAS_JEC';

const STATUS_BADGE_STYLES: Record<PromiseStatus, string> = {
  CUMPLIDA: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  PARCIAL: 'bg-amber-50 text-amber-800 border-amber-200',
  INCUMPLIDA: 'bg-rose-50 text-rose-800 border-rose-200',
};

const PARTY_THEMES: Record<string, { bg: string; text: string; border: string; badge: string; accent: string }> = {
  PP: {
    bg: 'bg-sky-50',
    text: 'text-sky-900',
    border: 'border-sky-200',
    badge: 'bg-sky-600 text-white',
    accent: 'text-sky-700',
  },
  VOX: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-900',
    border: 'border-emerald-200',
    badge: 'bg-emerald-600 text-white',
    accent: 'text-emerald-700',
  },
  PSOE: {
    bg: 'bg-rose-50',
    text: 'text-rose-900',
    border: 'border-rose-200',
    badge: 'bg-rose-600 text-white',
    accent: 'text-rose-700',
  },
};

export default function PromisometroView() {
  const [activeTab, setActiveTab] = useState<PromisometroTab>('INCONGRUENCIAS');
  
  // State for Incongruencias radar
  const [incongruencePartyFilter, setIncongruencePartyFilter] = useState<'ALL' | 'DERECHAS' | 'PP' | 'VOX' | 'PSOE'>('ALL');
  const [incongruenceCategoryFilter, setIncongruenceCategoryFilter] = useState<string>('ALL');
  const [incongruenceSearch, setIncongruenceSearch] = useState<string>('');

  // State for JEC vs BOE commitments
  const [jecPartyFilter, setJecPartyFilter] = useState<'ALL' | 'PP' | 'PSOE' | 'VOX'>('ALL');
  const [jecStatusFilter, setJecStatusFilter] = useState<'ALL' | PromiseStatus>('ALL');
  const [jecSearch, setJecSearch] = useState<string>('');

  // Filtered Incongruencias
  const filteredIncongruencias = useMemo(() => {
    return INCONGRUENCIAS_DATA.filter((item) => {
      // Party or Bloc filter
      if (incongruencePartyFilter === 'DERECHAS' && item.bloc !== 'DERECHAS') return false;
      if (incongruencePartyFilter === 'PP' && item.party !== 'PP') return false;
      if (incongruencePartyFilter === 'VOX' && item.party !== 'VOX') return false;
      if (incongruencePartyFilter === 'PSOE' && item.party !== 'PSOE') return false;

      // Category filter
      if (incongruenceCategoryFilter !== 'ALL' && item.category !== incongruenceCategoryFilter) return false;

      // Search term
      if (incongruenceSearch.trim()) {
        const query = incongruenceSearch.toLowerCase();
        const matchesQuery = 
          item.title.toLowerCase().includes(query) ||
          item.discursoPublico.protagonist.toLowerCase().includes(query) ||
          item.discursoPublico.quoteText.toLowerCase().includes(query) ||
          item.discursoPublico.claim.toLowerCase().includes(query) ||
          item.votacionReal.lawReference.toLowerCase().includes(query) ||
          item.analisisContradiccion.toLowerCase().includes(query) ||
          item.topic.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [incongruencePartyFilter, incongruenceCategoryFilter, incongruenceSearch]);

  // Filtered JEC vs BOE promises
  const filteredJecPromises = useMemo(() => {
    return PROMISES.filter((item) => {
      if (jecPartyFilter !== 'ALL' && item.party !== jecPartyFilter) return false;
      if (jecStatusFilter !== 'ALL' && item.status !== jecStatusFilter) return false;
      if (jecSearch.trim()) {
        const query = jecSearch.toLowerCase();
        const matchesQuery =
          item.headline.toLowerCase().includes(query) ||
          item.manifestoPromise.toLowerCase().includes(query) ||
          item.governingReality.toLowerCase().includes(query) ||
          item.topic.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }
      return true;
    });
  }, [jecPartyFilter, jecStatusFilter, jecSearch]);

  const derechasCount = INCONGRUENCIAS_DATA.filter(i => i.bloc === 'DERECHAS').length;
  const izquierdasCount = INCONGRUENCIAS_DATA.filter(i => i.bloc === 'IZQUIERDAS').length;

  return (
    <div className="space-y-6">
      {/* Main Header & View Mode Switcher */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Rendición de Cuentas Ciudadana • Registro Oficial</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              El Promisómetro: Dicen en Campaña vs. Votan en el Congreso
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl leading-relaxed">
              Auditoría independiente sin opinión editorial. Contrasta las declaraciones públicas y programas electorales con las actas de votación nominal en el <strong>Diario de Sesiones del Congreso</strong> y las publicaciones vinculantes del <strong>BOE</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 self-start lg:self-center">
            <button
              type="button"
              onClick={() => setActiveTab('INCONGRUENCIAS')}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'INCONGRUENCIAS'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Radar &quot;Dicen vs. Votan&quot; ({INCONGRUENCIAS_DATA.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('PROGRAMAS_JEC')}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'PROGRAMAS_JEC'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Vote className="w-3.5 h-3.5 text-slate-400" />
              <span>Programas JEC vs. BOE ({PROMISES.length})</span>
            </button>
          </div>
        </div>

        {/* Quick KPI stats banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Incongruencias Auditadas</div>
              <div className="text-xl font-black text-slate-900 font-mono mt-0.5">{INCONGRUENCIAS_DATA.length} Casos</div>
            </div>
            <div className="text-right text-[11px] text-slate-500">
              Actas del Pleno del Congreso<br />y resoluciones BOE
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3.5 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">Foco en Bloque Derechas (PP + Vox)</div>
              <div className="text-xl font-black text-amber-950 font-mono mt-0.5">{derechasCount} Casos</div>
            </div>
            <div className="text-right text-[11px] text-amber-800">
              Pensiones IPC, SMI, Subvenciones,<br />Impuestos a la banca, etc.
            </div>
          </div>

          <div className="bg-rose-50/60 border border-rose-200/80 rounded-xl p-3.5 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-rose-900 uppercase tracking-wider">Bloque Izquierda (PSOE)</div>
              <div className="text-xl font-black text-rose-950 font-mono mt-0.5">{izquierdasCount} Casos</div>
            </div>
            <div className="text-right text-[11px] text-rose-800">
              Amnistía, Concierto catalán,<br />184.000 viviendas, Ley Mordaza
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: RADAR "DICEN VS. VOTAN" (INCONGRUENCIAS FLAGRANTES) */}
      {/* ========================================================================= */}
      {activeTab === 'INCONGRUENCIAS' && (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                Filtrar por:
              </span>
              <button
                type="button"
                onClick={() => setIncongruencePartyFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  incongruencePartyFilter === 'ALL'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Todos ({INCONGRUENCIAS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setIncongruencePartyFilter('DERECHAS')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer border ${
                  incongruencePartyFilter === 'DERECHAS'
                    ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs'
                    : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                }`}
              >
                🔥 Foco Derechas: PP & VOX ({derechasCount})
              </button>
              <button
                type="button"
                onClick={() => setIncongruencePartyFilter('PP')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  incongruencePartyFilter === 'PP'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100'
                }`}
              >
                PP ({INCONGRUENCIAS_DATA.filter(i => i.party === 'PP').length})
              </button>
              <button
                type="button"
                onClick={() => setIncongruencePartyFilter('VOX')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  incongruencePartyFilter === 'VOX'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                Vox ({INCONGRUENCIAS_DATA.filter(i => i.party === 'VOX').length})
              </button>
              <button
                type="button"
                onClick={() => setIncongruencePartyFilter('PSOE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  incongruencePartyFilter === 'PSOE'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
                }`}
              >
                PSOE ({INCONGRUENCIAS_DATA.filter(i => i.party === 'PSOE').length})
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <select
                aria-label="Filtrar por temática"
                value={incongruenceCategoryFilter}
                onChange={(e) => setIncongruenceCategoryFilter(e.target.value)}
                className="text-xs rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer shadow-2xs"
              >
                <option value="ALL">Todas las temáticas</option>
                <option value="PENSIONES_SALARIOS">Pensiones y Salarios</option>
                <option value="FISCALIDAD_CHIRINGUITOS">Fiscalidad y Subvenciones</option>
                <option value="TERRITORIO_PACTOS">Territorio, Inmigración y Pactos</option>
                <option value="LABORAL_EMPLEO">Laboral y Empleo</option>
                <option value="DERECHOS_JUSTICIA">Justicia y Derechos</option>
                <option value="VIVIENDA">Vivienda</option>
              </select>

              <div className="relative flex-1 md:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar dirigente, ley, cita..."
                  value={incongruenceSearch}
                  onChange={(e) => setIncongruenceSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Incongruence Cards List */}
          {filteredIncongruencias.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-xs text-slate-500">
              No se han encontrado casos de incongruencia con los filtros seleccionados.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredIncongruencias.map((item) => {
                const theme = PARTY_THEMES[item.party] || PARTY_THEMES.PP;
                return (
                  <article
                    key={item.id}
                    className="civic-card rounded-2xl overflow-hidden space-y-0"
                  >
                    {/* Top Header of Card */}
                    <div className="p-4 sm:p-5 border-b border-outline-variant/50 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-surface-container-low/50">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider ${theme.badge}`}>
                          {item.party}
                        </span>
                        <span className={`text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${
                          item.bloc === 'DERECHAS'
                            ? 'bg-amber-50 text-amber-900 border-amber-200'
                            : 'bg-rose-50 text-rose-900 border-rose-200'
                        }`}>
                          {item.bloc === 'DERECHAS' ? 'Bloque Derechas' : 'Bloque Izquierda'}
                        </span>
                        <span className="text-xs font-bold text-secondary">
                          • {item.topic}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono font-bold uppercase tracking-wide text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                        {item.badgeLabel}
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="px-5 pt-4 pb-2">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* 2-Column Split: Lo que dijeron vs. Lo que votaron */}
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Left: Discurso Público */}
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                            <span className="flex items-center gap-1.5 text-slate-700">
                              <Quote className="w-3.5 h-3.5 text-slate-400" />
                              1. Lo que dijeron en público / campaña
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">{item.discursoPublico.date}</span>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                            <span className="w-2 h-2 rounded-full bg-slate-400" />
                            <span>{item.discursoPublico.protagonist}</span>
                            <span className="text-slate-400 font-normal">({item.discursoPublico.role})</span>
                          </div>

                          <blockquote className="text-xs sm:text-sm font-serif italic font-semibold text-slate-900 bg-white p-3 rounded-lg border border-slate-200/80 leading-relaxed">
                            {item.discursoPublico.quoteText}
                          </blockquote>

                          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                            <strong className="text-slate-700">Contexto:</strong> {item.discursoPublico.context}
                          </p>
                        </div>
                      </div>

                      {/* Right: Votación Real / Gestión */}
                      <div className="bg-amber-50/30 rounded-xl p-4 border border-amber-200/80 space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                            <span className="flex items-center gap-1.5">
                              <Vote className="w-3.5 h-3.5 text-amber-700" />
                              2. Lo que votaron / ejecutaron en las Cortes
                            </span>
                            <span className="text-[10px] text-amber-800 font-mono">{item.votacionReal.date}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-1 rounded-md text-xs font-black tracking-wider uppercase border shadow-2xs ${
                              item.votacionReal.officialVote === 'NO'
                                ? 'bg-rose-600 text-white border-rose-700'
                                : item.votacionReal.officialVote === 'SÍ'
                                ? 'bg-emerald-600 text-white border-emerald-700'
                                : 'bg-amber-600 text-white border-amber-700'
                            }`}>
                              Voto Oficial: {item.votacionReal.officialVote}
                            </span>
                            <span className="text-xs font-bold text-slate-800">
                              {item.votacionReal.action}
                            </span>
                          </div>

                          <div className="bg-white p-3 rounded-lg border border-amber-200 text-xs space-y-1">
                            <div className="font-bold text-slate-900 leading-snug">
                              {item.votacionReal.lawReference}
                            </div>
                            <div className="text-[11px] text-slate-500 font-mono">
                              Registro: {item.votacionReal.actaOficial}
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-amber-900 font-semibold">Fuente institucional oficial</span>
                          <a
                            href={item.votacionReal.lawUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-slate-900 hover:text-amber-800 hover:underline inline-flex items-center gap-1 text-[11px]"
                          >
                            <span>Abrir acta en BOE / Cortes</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Analysis & Citizen Impact */}
                    <div className="px-5 pb-5 pt-1 space-y-2.5">
                      <div className="bg-slate-100/70 rounded-xl p-3.5 border border-slate-200 text-xs space-y-1.5">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <Scale className="w-3.5 h-3.5 text-slate-700" />
                          <span>Análisis del Hecho Contrastado:</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed font-normal">
                          {item.analisisContradiccion}
                        </p>
                        <div className="pt-1.5 border-t border-slate-200 text-[11px] text-slate-600">
                          <strong className="text-slate-800">Impacto directo en ciudadanos:</strong> {item.impactoCiudadano}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: AUDITORÍA DE PROGRAMAS JEC VS. BOE (28 COMPROMISOS) */}
      {/* ========================================================================= */}
      {activeTab === 'PROGRAMAS_JEC' && (
        <div className="space-y-4">
          {/* Controls Bar for JEC promises */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                Partido:
              </span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                {(['ALL', 'PP', 'PSOE', 'VOX'] as const).map((party) => (
                  <button
                    key={party}
                    type="button"
                    onClick={() => setJecPartyFilter(party)}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      jecPartyFilter === party
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {party === 'ALL' ? 'Todos' : party}
                  </button>
                ))}
              </div>

              <select
                aria-label="Filtrar por estado de promesa"
                value={jecStatusFilter}
                onChange={(e) => setJecStatusFilter(e.target.value as 'ALL' | PromiseStatus)}
                className="text-xs rounded-xl border border-slate-300 bg-white px-3.5 py-2 font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer shadow-2xs"
              >
                <option value="ALL">Todos los estados ({PROMISES.length})</option>
                <option value="CUMPLIDA">Cumplidas</option>
                <option value="PARCIAL">Parciales / En trámite</option>
                <option value="INCUMPLIDA">Incumplidas</option>
              </select>
            </div>

            <div className="relative flex-1 md:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar promesa o tema..."
                value={jecSearch}
                onChange={(e) => setJecSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>

          {/* Promises List */}
          <div className="space-y-4">
            {filteredJecPromises.map((item) => {
              const theme = PARTY_THEMES[item.party] || PARTY_THEMES.PP;
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-4 shadow-xs hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider ${theme.badge}`}>
                        {item.party}
                      </span>
                      <span className="text-xs font-bold text-slate-700">{item.topic}</span>
                    </div>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${STATUS_BADGE_STYLES[item.status]}`}>
                      Estado: {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {item.headline}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Program Statement */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                        1. Promesa Registrada (Programa Electoral ante la JEC)
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        “{item.manifestoPromise}”
                      </p>
                      <div className="text-[11px] text-slate-500 pt-1 font-medium">
                        Cita oficial: {item.manifestoSourceCitation}
                      </div>
                    </div>

                    {/* Governing Reality */}
                    <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 space-y-2 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                          2. Evidencia de Gestión y Cortes Generales (BOE)
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed">
                          {item.governingReality}
                        </p>
                      </div>
                      <div className="pt-2 flex items-center justify-between text-[11px] border-t border-slate-200">
                        <span className="text-slate-600 font-medium">
                          {item.statusExplanation}
                        </span>
                        <a
                          href={item.officialVerificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-slate-900 hover:underline inline-flex items-center gap-1 shrink-0 ml-2"
                        >
                          Ver documento oficial &#8599;
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
