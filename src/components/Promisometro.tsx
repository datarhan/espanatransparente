'use client';

import React, { useState, useMemo } from 'react';
import { PROMISES } from '@/data/politicalData';
import { PromiseStatus, PartyId } from '@/types/politics';
import { Target, CheckCircle2, Clock, XCircle, ExternalLink, Quote, Search, RotateCcw } from 'lucide-react';

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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            CUMPLIDA EN EL BOE / CCAA
          </span>
        );
      case 'PARCIAL':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            PARCIAL / MODIFICADA
          </span>
        );
      case 'INCUMPLIDA':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            INCUMPLIDA / GIRO DE 180°
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
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <Target className="w-4 h-4 text-zinc-800" />
          <span>Auditoría de Compromisos Electorales vs Hechos Reales</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-1">
          El Promisómetro: Programas Electorales vs Realidad Parlamentaria
        </h2>
        <p className="text-sm text-zinc-600 mt-1">
          Auditoría objetiva y documentada de <strong>{stats.total} compromisos electorales</strong> registrados por <strong>PSOE</strong>, <strong>PP</strong> y <strong>Vox</strong> ante la Junta Electoral Central frente a lo efectivamente votado y ejecutado en el Congreso, Senado y Boletines Oficiales (BOE y autonómicos).
        </p>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-3 border-t border-zinc-200">
          <button
            onClick={() => setSelectedStatus('ALL')}
            className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
              selectedStatus === 'ALL'
                ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                : 'bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/50'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">Total Auditadas</span>
            <span className="text-2xl font-black mt-0.5 block">{stats.total}</span>
            <span className="text-[11px] opacity-80">10 PSOE • 9 PP • 9 Vox</span>
          </button>

          <button
            onClick={() => setSelectedStatus('CUMPLIDA')}
            className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
              selectedStatus === 'CUMPLIDA'
                ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs ring-2 ring-emerald-500/20'
                : 'bg-emerald-50/60 text-emerald-900 border-emerald-200 hover:bg-emerald-100/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Cumplidas</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-2xl font-black mt-0.5 block">{stats.cumplidas}</span>
            <span className="text-[11px] opacity-80">En BOE o ejecutivos CCAA</span>
          </button>

          <button
            onClick={() => setSelectedStatus('PARCIAL')}
            className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
              selectedStatus === 'PARCIAL'
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs ring-2 ring-amber-500/20'
                : 'bg-amber-50/60 text-amber-900 border-amber-200 hover:bg-amber-100/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Parciales</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-2xl font-black mt-0.5 block">{stats.parciales}</span>
            <span className="text-[11px] opacity-80">Matizadas o trabadas</span>
          </button>

          <button
            onClick={() => setSelectedStatus('INCUMPLIDA')}
            className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
              selectedStatus === 'INCUMPLIDA'
                ? 'bg-rose-700 text-white border-rose-800 shadow-xs ring-2 ring-rose-500/20'
                : 'bg-rose-50/60 text-rose-900 border-rose-200 hover:bg-rose-100/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Incumplidas</span>
              <XCircle className="w-4 h-4 text-rose-600" />
            </div>
            <span className="text-2xl font-black mt-0.5 block">{stats.incumplidas}</span>
            <span className="text-[11px] opacity-80">Giro de 180° o bloqueo</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-4 pt-3 border-t border-zinc-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Party Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-zinc-500 font-semibold mr-1">Partido:</span>
            {(['ALL', 'PSOE', 'PP', 'VOX'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setSelectedParty(p)}
                className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                  selectedParty === p
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                {p === 'ALL' ? `Todos (${partyCounts.ALL})` : `${p} (${partyCounts[p]})`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar tema, ley o promesa..."
              className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700"
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
          <div className="bg-white border border-zinc-200 rounded-xl p-8 text-center space-y-3">
            <Target className="w-8 h-8 text-zinc-400 mx-auto" />
            <h3 className="text-base font-bold text-zinc-900">No se encontraron promesas con los filtros actuales</h3>
            <p className="text-xs text-zinc-500 max-w-md mx-auto">
              Prueba a cambiar el estado, seleccionar otro partido o borrar la búsqueda de texto.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-lg cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer filtros
            </button>
          </div>
        ) : (
          filteredPromises.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-200 rounded-xl p-6 shadow-xs hover:border-zinc-300 transition-colors space-y-4"
            >
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-zinc-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        item.party === 'PP' ? 'bg-blue-100 text-blue-800' :
                        item.party === 'PSOE' ? 'bg-red-100 text-red-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item.party}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">• {item.topic}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1">{item.headline}</h3>
                </div>

                <div>{renderStatusBadge(item.status)}</div>
              </div>

              {/* Promise vs Reality Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* What was promised */}
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
                  <span className="font-bold text-blue-900 block text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Quote className="w-3.5 h-3.5 text-blue-600" />
                    Lo prometido en campaña electoral:
                  </span>
                  <p className="text-zinc-700 leading-relaxed italic">
                    "{item.manifestoPromise}"
                  </p>
                  <div className="text-[11px] font-semibold text-blue-800 pt-1 border-t border-blue-100">
                    Fuente oficial: {item.manifestoSourceCitation}
                  </div>
                </div>

                {/* What was actually done */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <span className="font-bold text-zinc-900 block text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-zinc-700" />
                    Lo que ocurrió en las instituciones / BOE:
                  </span>
                  <p className="text-zinc-700 leading-relaxed">
                    {item.governingReality}
                  </p>
                  <div className="text-[11px] text-zinc-500 pt-1 border-t border-zinc-200">
                    <span className="font-semibold text-zinc-800">Evaluación objetiva: </span>
                    {item.statusExplanation}
                  </div>
                </div>
              </div>

              {/* Official verification link */}
              <div className="flex justify-end pt-2">
                <a
                  href={item.officialVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 hover:underline font-semibold"
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
