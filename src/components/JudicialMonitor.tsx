'use client';

import React, { useState } from 'react';
import { CRIMINAL_CASES, ADMINISTRATIVE_SANCTIONS } from '@/data/politicalData';
import { JudicialStatus } from '@/types/politics';
import { ShieldAlert, Scale, ExternalLink, AlertTriangle, CheckCircle, Clock, FileWarning } from 'lucide-react';

export const JudicialMonitor: React.FC = () => {
  const [subTab, setSubTab] = useState<'PENAL' | 'ADMINISTRATIVO'>('PENAL');
  const [partyFilter, setPartyFilter] = useState<'ALL' | 'PP' | 'PSOE' | 'VOX'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | JudicialStatus>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCriminalCases = CRIMINAL_CASES.filter((c) => {
    const matchesParty = partyFilter === 'ALL' || c.party === partyFilter;
    const matchesStatus = statusFilter === 'ALL' || c.judicialStatus === statusFilter;
    const matchesQuery = !searchQuery.trim() || 
      `${c.title} ${c.summary} ${c.court} ${c.crimesCharged.join(' ')} ${c.partyInstitutionalLiability || ''}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
    return matchesParty && matchesStatus && matchesQuery;
  });

  const filteredSanctions = ADMINISTRATIVE_SANCTIONS.filter((s) => {
    const matchesParty = partyFilter === 'ALL' || s.party === partyFilter;
    const matchesQuery = !searchQuery.trim() ||
      `${s.title} ${s.summary} ${s.targetPersonOrEntity} ${s.infractionType} ${s.penalty}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
    return matchesParty && matchesQuery;
  });

  const stats = {
    totalPenal: CRIMINAL_CASES.length,
    firmes: CRIMINAL_CASES.filter(c => c.judicialStatus === 'SENTENCIA_FIRME').length,
    juicioOral: CRIMINAL_CASES.filter(c => c.judicialStatus === 'JUICIO_ORAL').length,
    instruccion: CRIMINAL_CASES.filter(c => c.judicialStatus === 'EN_INSTRUCCION').length,
    archivados: CRIMINAL_CASES.filter(c => c.judicialStatus === 'ARCHIVADO_ABSUELTO').length,
    totalSanctions: ADMINISTRATIVE_SANCTIONS.length
  };

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
          Registro contrastado de causas judiciales contra dirigentes de partidos y resoluciones sancionadoras oficiales. Para evitar sesgos y respetar el Estado de Derecho, se clasifican estrictamente según su fase procesal oficial (Sentencia firme, Juicio oral o Instrucción con presunción de inocencia, conforme al Art. 24.2 CE).
        </p>

        {/* Quick Breakdown Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-4 pt-3 border-t border-zinc-200">
          <div className="bg-white border border-zinc-200 p-2.5 rounded-lg text-center">
            <span className="text-[11px] text-zinc-500 font-semibold block uppercase">Causas Penales</span>
            <span className="text-lg font-black text-zinc-900">{stats.totalPenal}</span>
          </div>
          <div className="bg-white border border-rose-200 p-2.5 rounded-lg text-center">
            <span className="text-[11px] text-rose-600 font-semibold block uppercase">Sentencias Firmes</span>
            <span className="text-lg font-black text-rose-700">{stats.firmes}</span>
          </div>
          <div className="bg-white border border-amber-200 p-2.5 rounded-lg text-center">
            <span className="text-[11px] text-amber-600 font-semibold block uppercase">Juicio Oral</span>
            <span className="text-lg font-black text-amber-700">{stats.juicioOral}</span>
          </div>
          <div className="bg-white border border-zinc-200 p-2.5 rounded-lg text-center">
            <span className="text-[11px] text-zinc-500 font-semibold block uppercase">En Instrucción</span>
            <span className="text-lg font-black text-zinc-800">{stats.instruccion}</span>
          </div>
          <div className="bg-white border border-emerald-200 p-2.5 rounded-lg text-center col-span-2 sm:col-span-1">
            <span className="text-[11px] text-emerald-600 font-semibold block uppercase">Archivados / Exonerados</span>
            <span className="text-lg font-black text-emerald-700">{stats.archivados}</span>
          </div>
        </div>

        {/* Sub-tab Toggle & Filters */}
        <div className="mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-3 border-t border-zinc-200">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSubTab('PENAL')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                subTab === 'PENAL'
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              1. Causas Penales ({stats.totalPenal})
            </button>
            <button
              onClick={() => setSubTab('ADMINISTRATIVO')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                subTab === 'ADMINISTRATIVO'
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              2. Sanciones Administrativas ({stats.totalSanctions})
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Buscar causa, persona o tribunal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-xs px-3 py-1.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-800 w-full sm:w-56"
            />

            <div className="flex items-center gap-1 text-xs">
              <span className="text-zinc-500 font-medium">Partido:</span>
              {(['ALL', 'PP', 'PSOE', 'VOX'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPartyFilter(p)}
                  className={`px-2 py-1 rounded-md font-semibold cursor-pointer ${
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

        {/* Phase Filter for Criminal Cases */}
        {subTab === 'PENAL' && (
          <div className="mt-3 pt-3 border-t border-zinc-200 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-zinc-500 font-medium mr-1">Fase procesal:</span>
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                statusFilter === 'ALL' ? 'bg-zinc-800 text-white' : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              Todas las fases
            </button>
            <button
              onClick={() => setStatusFilter('SENTENCIA_FIRME')}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                statusFilter === 'SENTENCIA_FIRME' ? 'bg-rose-700 text-white' : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
              }`}
            >
              Sentencia Firme ({stats.firmes})
            </button>
            <button
              onClick={() => setStatusFilter('JUICIO_ORAL')}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                statusFilter === 'JUICIO_ORAL' ? 'bg-amber-600 text-white' : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
              }`}
            >
              Juicio Oral ({stats.juicioOral})
            </button>
            <button
              onClick={() => setStatusFilter('EN_INSTRUCCION')}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                statusFilter === 'EN_INSTRUCCION' ? 'bg-zinc-700 text-white' : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              En Instrucción ({stats.instruccion})
            </button>
            <button
              onClick={() => setStatusFilter('ARCHIVADO_ABSUELTO')}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                statusFilter === 'ARCHIVADO_ABSUELTO' ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              Archivado / Exonerado ({stats.archivados})
            </button>
          </div>
        )}
      </div>

      {/* View 1: Criminal Cases */}
      {subTab === 'PENAL' && (
        <div className="space-y-4">
          {filteredCriminalCases.length === 0 ? (
            <div className="bg-white border border-zinc-200 rounded-xl p-8 text-center text-zinc-500 text-sm">
              No se encontraron causas penales con los filtros seleccionados.
            </div>
          ) : (
            filteredCriminalCases.map((c) => (
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
            ))
          )}
        </div>
      )}

      {/* View 2: Administrative & Regulatory Sanctions */}
      {subTab === 'ADMINISTRATIVO' && (
        <div className="space-y-4">
          {filteredSanctions.length === 0 ? (
            <div className="bg-white border border-zinc-200 rounded-xl p-8 text-center text-zinc-500 text-sm">
              No se encontraron resoluciones sancionadoras con los filtros seleccionados.
            </div>
          ) : (
            filteredSanctions.map((s) => (
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
            ))
          )}
        </div>
      )}
    </div>
  );
};
