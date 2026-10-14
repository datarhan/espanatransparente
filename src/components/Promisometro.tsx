'use client';

import React, { useState } from 'react';
import { PROMISES } from '@/data/politicalData';
import { PromiseStatus, PartyId } from '@/types/politics';
import { Target, CheckCircle2, Clock, XCircle, ExternalLink, Filter, Quote } from 'lucide-react';

export const Promisometro: React.FC = () => {
  const [selectedParty, setSelectedParty] = useState<'ALL' | PartyId>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | PromiseStatus>('ALL');

  const filteredPromises = PROMISES.filter((p) => {
    const matchesParty = selectedParty === 'ALL' || p.party === selectedParty;
    const matchesStatus = selectedStatus === 'ALL' || p.status === selectedStatus;
    return matchesParty && matchesStatus;
  });

  const renderStatusBadge = (status: PromiseStatus) => {
    switch (status) {
      case 'CUMPLIDA':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            CUMPLIDA EN EL BOE / GOBIERNO
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

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <Target className="w-4 h-4 text-zinc-800" />
          <span>Auditoría de Compromisos de Campaña vs Hechos Reales</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-1">
          El Promisómetro: Promesas Electorales vs Realidad Parlamentaria
        </h2>
        <p className="text-sm text-zinc-600 mt-1">
          Compara lo que <strong>PSOE</strong>, <strong>PP</strong> y <strong>Vox</strong> estipularon expresamente en sus programas electorales registrados ante la Junta Electoral Central frente a lo que realmente votaron y aprobaron en las instituciones.
        </p>

        {/* Filters Bar */}
        <div className="mt-4 pt-3 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
          {/* Party Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500 font-semibold">Partido:</span>
            {(['ALL', 'PSOE', 'PP', 'VOX'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setSelectedParty(p)}
                className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                  selectedParty === p
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                {p === 'ALL' ? 'Todos los Partidos' : p}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500 font-semibold">Estado:</span>
            {(['ALL', 'CUMPLIDA', 'PARCIAL', 'INCUMPLIDA'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  selectedStatus === st
                    ? 'bg-zinc-800 text-white'
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                {st === 'ALL' ? 'Todos los Estados' : st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Promises Cards List */}
      <div className="space-y-4">
        {filteredPromises.map((item) => (
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
                <span>Verificar en documento oficial (BOE / Congreso)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
