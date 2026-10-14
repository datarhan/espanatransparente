'use client';

import React, { useState, useMemo } from 'react';
import { PROMISES } from '@/data/politicalData';
import { PromiseStatus, PartyId } from '@/types/politics';
import { Target, CheckCircle2, Clock, XCircle, ExternalLink, Quote, Search, RotateCcw, Filter } from 'lucide-react';

export const Promisometro: React.FC = () => {
  const [selectedParty, setSelectedParty] = useState<'ALL' | PartyId>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | PromiseStatus>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const stats = useMemo(() => {
    const total = PROMISES.length;
    const cumplidas = PROMISES.filter((p) => p.status === 'CUMPLIDA').length;
    const parciales = PROMISES.filter((p) => p.status === 'PARCIAL').length;
    const incumplidas = PROMISES.filter((p) => p.status === 'INCUMPLIDA').length;
    return { total, cumplidas, parciales, incumplidas };
  }, []);

  const partyCounts = useMemo(() => {
    return {
      ALL: PROMISES.length,
      PSOE: PROMISES.filter((p) => p.party === 'PSOE').length,
      PP: PROMISES.filter((p) => p.party === 'PP').length,
      VOX: PROMISES.filter((p) => p.party === 'VOX').length,
    };
  }, []);

  const filteredPromises = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PROMISES.filter((p) => {
      const matchesParty = selectedParty === 'ALL' || p.party === selectedParty;
      const matchesStatus = selectedStatus === 'ALL' || p.status === selectedStatus;
      const matchesSearch =
        q === '' ||
        p.headline.toLowerCase().includes(q) ||
        p.topic.toLowerCase().includes(q) ||
        p.manifestoPromise.toLowerCase().includes(q) ||
        p.governingReality.toLowerCase().includes(q) ||
        p.manifestoSourceCitation.toLowerCase().includes(q);
      return matchesParty && matchesStatus && matchesSearch;
    });
  }, [selectedParty, selectedStatus, searchQuery]);

  const renderStatusBadge = (status: PromiseStatus) => {
    switch (status) {
      case 'CUMPLIDA':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            CUMPLIDA EN EL BOE / CCAA
          </span>
        );
      case 'PARCIAL':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            PARCIAL / MODIFICADA
          </span>
        );
      case 'INCUMPLIDA':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            INCUMPLIDA / GIRO 180°
          </span>
        );
    }
  };

  const clearFilters = () => {
    setSelectedParty('ALL');
    setSelectedStatus('ALL');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Target className="w-4 h-4 text-slate-900" />
              <span>Auditoría de Compromisos de Campaña vs Hechos Reales</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-1">
              El Promisómetro: Programas Electorales vs Realidad Parlamentaria
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Auditoría neutral de <strong>{stats.total} compromisos electorales</strong> registrados por <strong>PSOE</strong>, <strong>PP</strong> y <strong>Vox</strong> ante la Junta Electoral Central frente a lo efectivamente votado y ejecutado en el Congreso, Senado y Boletines Oficiales (BOE y autonómicos).
            </p>
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <button
            onClick={() => setSelectedStatus('ALL')}
            className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              selectedStatus === 'ALL'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-1 ring-slate-900/10'
                : 'bg-slate-50/70 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">Total Auditadas</span>
            <span className="text-2xl font-black mt-1 block tracking-tight">{stats.total}</span>
            <span className="text-[11px] opacity-80">10 PSOE • 9 PP • 9 Vox</span>
          </button>

          <button
            onClick={() => setSelectedStatus('CUMPLIDA')}
            className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              selectedStatus === 'CUMPLIDA'
                ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm ring-2 ring-emerald-500/20'
                : 'bg-emerald-50/50 text-emerald-900 border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Cumplidas</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-2xl font-black mt-1 block tracking-tight">{stats.cumplidas}</span>
            <span className="text-[11px] opacity-80">En BOE o ejecutivos CCAA</span>
          </button>

          <button
            onClick={() => setSelectedStatus('PARCIAL')}
            className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              selectedStatus === 'PARCIAL'
                ? 'bg-amber-700 text-white border-amber-800 shadow-sm ring-2 ring-amber-500/20'
                : 'bg-amber-50/50 text-amber-900 border-amber-200/80 hover:bg-amber-50 hover:border-amber-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Parciales</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-2xl font-black mt-1 block tracking-tight">{stats.parciales}</span>
            <span className="text-[11px] opacity-80">Matizadas o trabadas</span>
          </button>

          <button
            onClick={() => setSelectedStatus('INCUMPLIDA')}
            className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              selectedStatus === 'INCUMPLIDA'
                ? 'bg-rose-800 text-white border-rose-900 shadow-sm ring-2 ring-rose-500/20'
                : 'bg-rose-50/50 text-rose-900 border-rose-200/80 hover:bg-rose-50 hover:border-rose-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Incumplidas</span>
              <XCircle className="w-4 h-4 text-rose-600" />
            </div>
            <span className="text-2xl font-black mt-1 block tracking-tight">{stats.incumplidas}</span>
            <span className="text-[11px] opacity-80">Giro de 180° o bloqueo</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Party Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-bold mr-1">Partido:</span>
            {(['ALL', 'PSOE', 'PP', 'VOX'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setSelectedParty(p)}
                className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all text-xs ${
                  selectedParty === p
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {p === 'ALL' ? `Todos (${partyCounts.ALL})` : `${p} (${partyCounts[p]})`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar tema, ley o promesa..."
              className="w-full text-xs pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Promises Cards List */}
      <div className="space-y-4">
        {filteredPromises.length === 0 ? (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-10 text-center space-y-3 shadow-xs">
            <Target className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No se encontraron promesas con los filtros actuales</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Prueba a cambiar el estado, seleccionar otro partido o limpiar el buscador de texto.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer filtros
            </button>
          </div>
        ) : (
          filteredPromises.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-300 transition-all duration-200 space-y-4"
            >
              {/* Top Row: Party, Topic, Title & Status */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                        item.party === 'PP' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                        item.party === 'PSOE' ? 'bg-red-50 text-red-800 border border-red-200' :
                        'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {item.party}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">• {item.topic}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.headline}</h3>
                </div>

                <div>{renderStatusBadge(item.status)}</div>
              </div>

              {/* Promise vs Reality Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* What was promised */}
                <div className="p-5 rounded-2xl bg-sky-50/40 border border-sky-100 space-y-2.5">
                  <span className="font-bold text-sky-950 block text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Quote className="w-3.5 h-3.5 text-sky-600" />
                    Lo prometido en campaña electoral:
                  </span>
                  <p className="text-slate-700 leading-relaxed italic text-xs">
                    "{item.manifestoPromise}"
                  </p>
                  <div className="text-[11px] font-semibold text-sky-800 pt-2 border-t border-sky-100/80">
                    Fuente oficial: {item.manifestoSourceCitation}
                  </div>
                </div>

                {/* What was actually done */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-slate-700" />
                    Lo que ocurrió en las instituciones / BOE:
                  </span>
                  <p className="text-slate-700 leading-relaxed text-xs">
                    {item.governingReality}
                  </p>
                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/80">
                    <span className="font-bold text-slate-800">Evaluación objetiva: </span>
                    {item.statusExplanation}
                  </div>
                </div>
              </div>

              {/* Official verification link */}
              <div className="flex justify-end pt-2 border-t border-slate-50">
                <a
                  href={item.officialVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 hover:underline font-bold"
                >
                  <span>Verificar en documento oficial (BOE / Congreso / TC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
