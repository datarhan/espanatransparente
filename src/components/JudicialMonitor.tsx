'use client';

import React, { useState } from 'react';
import { CRIMINAL_CASES, ADMINISTRATIVE_SANCTIONS } from '@/data/politicalData';
import { JudicialStatus } from '@/types/politics';
import { ShieldAlert, Scale, ExternalLink, AlertTriangle, CheckCircle, Clock, FileWarning } from 'lucide-react';

export const JudicialMonitor: React.FC = () => {
  const [subTab, setSubTab] = useState<'PENAL' | 'ADMINISTRATIVO'>('PENAL');
  const [partyFilter, setPartyFilter] = useState<'ALL' | 'PP' | 'PSOE' | 'VOX'>('ALL');

  const filteredCriminalCases = CRIMINAL_CASES.filter(
    (c) => partyFilter === 'ALL' || c.party === partyFilter
  );

  const filteredSanctions = ADMINISTRATIVE_SANCTIONS.filter(
    (s) => partyFilter === 'ALL' || s.party === partyFilter
  );

  const renderStatusBadge = (status: JudicialStatus) => {
    switch (status) {
      case 'SENTENCIA_FIRME':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
            <Scale className="w-3 h-3 text-rose-600" />
            Sentencia Firme (Tribunal Supremo)
          </span>
        );
      case 'JUICIO_ORAL':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Clock className="w-3 h-3 text-amber-600" />
            Apertura de Juicio Oral
          </span>
        );
      case 'EN_INSTRUCCION':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-700 border border-zinc-300">
            <AlertTriangle className="w-3 h-3 text-zinc-500" />
            En Instrucción Preliminar (Presunción de Inocencia)
          </span>
        );
      case 'ARCHIVADO_ABSUELTO':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Archivado / Exonerado
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
          Observatorio Judicial, Penal y Sancionador Administrativo
        </h2>
        <p className="text-sm text-zinc-600 mt-1">
          Registro contrastado de causas judiciales contra dirigentes de partidos y resoluciones sancionadoras oficiales. Para evitar sesgos y respetar el Estado de Derecho, se clasifican estrictamente según su fase procesal oficial (Sentencia firme, Juicio oral o Instrucción con presunción de inocencia).
        </p>

        {/* Sub-tab Toggle & Party Filters */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-zinc-200">
          <div className="flex gap-2">
            <button
              onClick={() => setSubTab('PENAL')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                subTab === 'PENAL'
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              1. Causas Penales (Corrupción en Tribunales)
            </button>
            <button
              onClick={() => setSubTab('ADMINISTRATIVO')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                subTab === 'ADMINISTRATIVO'
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              2. Sanciones Administrativas (Tribunal de Cuentas y JEC)
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500 font-medium">Filtrar por partido:</span>
            {(['ALL', 'PP', 'PSOE', 'VOX'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPartyFilter(p)}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  partyFilter === p
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {p === 'ALL' ? 'Todos' : p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* View 1: Criminal Cases */}
      {subTab === 'PENAL' && (
        <div className="space-y-4">
          {filteredCriminalCases.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-zinc-200 rounded-xl p-6 shadow-xs hover:border-zinc-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-zinc-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                        c.party === 'PP' ? 'bg-blue-100 text-blue-800' :
                        c.party === 'PSOE' ? 'bg-red-100 text-red-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {c.party}
                    </span>
                    <span className="text-xs text-zinc-400">• {c.court}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1">{c.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  {renderStatusBadge(c.judicialStatus)}
                  <a
                    href={c.officialResolutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline px-2.5 py-1 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <span>CENDOJ</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Crimes & Amounts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 bg-zinc-50 p-3.5 rounded-lg border border-zinc-100 text-xs">
                <div>
                  <span className="text-zinc-500 block">Delitos objeto de condena/acusación:</span>
                  <span className="font-semibold text-zinc-800">{c.crimesCharged.join(', ')}</span>
                </div>
                {c.defraudedAmountEur && (
                  <div>
                    <span className="text-zinc-500 block">Caudal público defraudado / Fondos:</span>
                    <span className="font-semibold text-rose-700">{c.defraudedAmountEur}</span>
                  </div>
                )}
                <div>
                  <span className="text-zinc-500 block">Condenados / Procesados:</span>
                  <span className="font-semibold text-zinc-800">
                    {c.convictedCount ? `${c.convictedCount} personas condenadas` : 'Cargos pendientes de juicio'}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">{c.summary}</p>

              {/* Party Institutional Liability */}
              {c.partyInstitutionalLiability && (
                <div className="mt-3 p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900">
                  <span className="font-bold">Responsabilidad o condena institucional del partido: </span>
                  {c.partyInstitutionalLiability}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* View 2: Administrative & Regulatory Sanctions */}
      {subTab === 'ADMINISTRATIVO' && (
        <div className="space-y-4">
          {filteredSanctions.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-zinc-200 rounded-xl p-6 shadow-xs hover:border-zinc-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-zinc-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                        s.party === 'PP' ? 'bg-blue-100 text-blue-800' :
                        s.party === 'PSOE' ? 'bg-red-100 text-red-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {s.party}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                      Órgano: {s.body}
                    </span>
                    <span className="text-xs text-zinc-400">• {s.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1">{s.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                    Sanción Administrativa
                  </span>
                  <a
                    href={s.officialDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline px-2.5 py-1 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <span>Resolución</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Sanction Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 bg-zinc-50 p-3.5 rounded-lg border border-zinc-100 text-xs">
                <div>
                  <span className="text-zinc-500 block">Sujeto sancionado:</span>
                  <span className="font-semibold text-zinc-800">{s.targetPersonOrEntity}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Infracción legal declarada:</span>
                  <span className="font-semibold text-zinc-800">{s.infractionType}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-zinc-500 block">Multa o penalización impuesta:</span>
                  <span className="font-bold text-rose-700">{s.penalty}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">{s.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
