'use client';

import React, { useState } from 'react';
import { CRIMINAL_CASES, ADMINISTRATIVE_SANCTIONS } from '@/data/politicalData';
import { JudicialStatus } from '@/types/politics';
import { 
  ShieldAlert, 
  Scale, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileWarning, 
  Search, 
  Building, 
  Coins, 
  UserCheck, 
  Info,
  Filter
} from 'lucide-react';

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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-rose-600" />
            Sentencia Firme (Tribunal Supremo)
          </span>
        );
      case 'JUICIO_ORAL':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            Apertura de Juicio Oral
          </span>
        );
      case 'EN_INSTRUCCION':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs">
            <AlertTriangle className="w-3.5 h-3.5 text-slate-500" />
            En Instrucción (Art. 24.2 CE Inocencia)
          </span>
        );
      case 'ARCHIVADO_ABSUELTO':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Archivado / Exonerado
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Box with Slate Design */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-1">
              <Scale className="w-4 h-4 text-slate-800" />
              <span>Poder Judicial • Art. 117 y 24.2 Constitución Española</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Observatorio Judicial, Causas Penales y Sanciones Oficiales
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Base de datos neutral y contrastada sobre procesos penales y resoluciones sancionadoras firmes que afectan a dirigentes y estructuras orgánicas de <strong>PP</strong>, <strong>PSOE</strong> y <strong>Vox</strong>. Toda causa se clasifica rigurosamente por su fase procesal oficial, respetando la presunción de inocencia en diligencias previas e identificando las resoluciones firmes del Tribunal Supremo.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              <span>Fuentes: CENDOJ, TS, AN, TCU, JEC, CNMC</span>
            </span>
          </div>
        </div>

        {/* Breakdown Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-5">
          <div className="bg-slate-50/70 border border-slate-200 p-3 rounded-xl text-center transition-all hover:bg-slate-100/60">
            <span className="text-[11px] text-slate-500 font-bold block uppercase tracking-wider">Causas Penales</span>
            <span className="text-2xl font-black text-slate-900 tracking-tight mt-0.5 block">{stats.totalPenal}</span>
          </div>
          <div className="bg-rose-50/50 border border-rose-200 p-3 rounded-xl text-center transition-all hover:bg-rose-50">
            <span className="text-[11px] text-rose-700 font-bold block uppercase tracking-wider">Sentencias Firmes</span>
            <span className="text-2xl font-black text-rose-700 tracking-tight mt-0.5 block">{stats.firmes}</span>
          </div>
          <div className="bg-amber-50/50 border border-amber-200 p-3 rounded-xl text-center transition-all hover:bg-amber-50">
            <span className="text-[11px] text-amber-700 font-bold block uppercase tracking-wider">Juicio Oral</span>
            <span className="text-2xl font-black text-amber-700 tracking-tight mt-0.5 block">{stats.juicioOral}</span>
          </div>
          <div className="bg-slate-50/70 border border-slate-200 p-3 rounded-xl text-center transition-all hover:bg-slate-100/60">
            <span className="text-[11px] text-slate-600 font-bold block uppercase tracking-wider">En Instrucción</span>
            <span className="text-2xl font-black text-slate-800 tracking-tight mt-0.5 block">{stats.instruccion}</span>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-200 p-3 rounded-xl text-center col-span-2 sm:col-span-1 transition-all hover:bg-emerald-50">
            <span className="text-[11px] text-emerald-700 font-bold block uppercase tracking-wider">Archivados / Exonerados</span>
            <span className="text-2xl font-black text-emerald-700 tracking-tight mt-0.5 block">{stats.archivados}</span>
          </div>
        </div>

        {/* Segmented Control & Search Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-5 border-t border-slate-100">
          {/* Segmented sub-tab switcher */}
          <div className="inline-flex rounded-xl bg-slate-100/90 p-1 border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setSubTab('PENAL')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                subTab === 'PENAL'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>1. Causas Penales ({stats.totalPenal})</span>
            </button>
            <button
              onClick={() => setSubTab('ADMINISTRATIVO')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                subTab === 'ADMINISTRATIVO'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileWarning className="w-3.5 h-3.5" />
              <span>2. Sanciones Administrativas ({stats.totalSanctions})</span>
            </button>
          </div>

          {/* Search & Party Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar causa, delito o juzgado..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-800 transition-all text-slate-900 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200 text-xs font-bold">
              {(['ALL', 'PP', 'PSOE', 'VOX'] as const).map((p) => {
                const isActive = partyFilter === p;
                let activeClass = 'bg-slate-900 text-white shadow-xs';
                if (isActive && p === 'PP') activeClass = 'bg-blue-600 text-white shadow-xs';
                if (isActive && p === 'PSOE') activeClass = 'bg-red-600 text-white shadow-xs';
                if (isActive && p === 'VOX') activeClass = 'bg-emerald-600 text-white shadow-xs';

                return (
                  <button
                    key={p}
                    onClick={() => setPartyFilter(p)}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      isActive ? activeClass : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {p === 'ALL' ? 'Todos' : p}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Phase Filter for Criminal Cases */}
        {subTab === 'PENAL' && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-slate-400" />
              Fase procesal:
            </span>
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                statusFilter === 'ALL'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Todas ({stats.totalPenal})
            </button>
            <button
              onClick={() => setStatusFilter('SENTENCIA_FIRME')}
              className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                statusFilter === 'SENTENCIA_FIRME'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
              }`}
            >
              Sentencia Firme ({stats.firmes})
            </button>
            <button
              onClick={() => setStatusFilter('JUICIO_ORAL')}
              className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                statusFilter === 'JUICIO_ORAL'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
              }`}
            >
              Juicio Oral ({stats.juicioOral})
            </button>
            <button
              onClick={() => setStatusFilter('EN_INSTRUCCION')}
              className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                statusFilter === 'EN_INSTRUCCION'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              En Instrucción ({stats.instruccion})
            </button>
            <button
              onClick={() => setStatusFilter('ARCHIVADO_ABSUELTO')}
              className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                statusFilter === 'ARCHIVADO_ABSUELTO'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'
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
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-sm">
              <Scale className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              No se encontraron causas penales con los filtros seleccionados.
            </div>
          ) : (
            filteredCriminalCases.map((c) => {
              const partyColor = 
                c.party === 'PP' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                c.party === 'PSOE' ? 'bg-red-50 text-red-800 border-red-200' :
                'bg-emerald-50 text-emerald-800 border-emerald-200';

              return (
                <div
                  key={c.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all space-y-4"
                >
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${partyColor}`}>
                          {c.party}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                          <Building className="w-3 h-3 text-slate-400" />
                          {c.court}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {c.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                      {renderStatusBadge(c.judicialStatus)}
                      <a
                        href={c.officialResolutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 px-3 py-1 bg-blue-50/80 hover:bg-blue-100 rounded-full border border-blue-200 transition-colors"
                      >
                        <span>CENDOJ</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Crimes & Amounts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-500 block font-semibold">Delitos investigados o condenados:</span>
                      <span className="font-bold text-slate-800 mt-0.5 block leading-relaxed">
                        {c.crimesCharged.join(', ')}
                      </span>
                    </div>
                    {c.defraudedAmountEur ? (
                      <div>
                        <span className="text-slate-500 block font-semibold flex items-center gap-1">
                          <Coins className="w-3 h-3 text-rose-500" />
                          Fondos / Perjuicio público estimado:
                        </span>
                        <span className="font-extrabold text-rose-700 text-sm mt-0.5 block">
                          {c.defraudedAmountEur}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-slate-500 block font-semibold">Perjuicio económico cuantificado:</span>
                        <span className="text-slate-600 italic mt-0.5 block">Sin cuantía patrimonial directa</span>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-500 block font-semibold flex items-center gap-1">
                        <UserCheck className="w-3 h-3 text-slate-500" />
                        Condenados o personas procesadas:
                      </span>
                      <span className="font-bold text-slate-800 mt-0.5 block">
                        {c.convictedCount ? `${c.convictedCount} personas con condena firme` : 'Cargos con imputación / apertura de juicio'}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {c.summary}
                  </p>

                  {/* Party Institutional Liability */}
                  {c.partyInstitutionalLiability && (
                    <div className="p-3.5 bg-amber-50/80 border border-amber-200/90 rounded-xl text-xs text-amber-950 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Responsabilidad civil / institucional del partido: </span>
                        <span>{c.partyInstitutionalLiability}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* View 2: Administrative & Regulatory Sanctions */}
      {subTab === 'ADMINISTRATIVO' && (
        <div className="space-y-4">
          {filteredSanctions.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-sm">
              <FileWarning className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              No se encontraron resoluciones sancionadoras con los filtros seleccionados.
            </div>
          ) : (
            filteredSanctions.map((s) => {
              const partyColor = 
                s.party === 'PP' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                s.party === 'PSOE' ? 'bg-red-50 text-red-800 border-red-200' :
                'bg-emerald-50 text-emerald-800 border-emerald-200';

              return (
                <div
                  key={s.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${partyColor}`}>
                          {s.party}
                        </span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          Órgano: {s.body}
                        </span>
                        <span className="text-xs text-slate-400">• {s.date}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {s.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 shadow-2xs">
                        Sanción Administrativa Oficial
                      </span>
                      <a
                        href={s.officialDocUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 px-3 py-1 bg-blue-50/80 hover:bg-blue-100 rounded-full border border-blue-200 transition-colors"
                      >
                        <span>Resolución BOE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Sanction Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-500 block font-semibold">Sujeto / Estructura sancionada:</span>
                      <span className="font-bold text-slate-800 mt-0.5 block">{s.targetPersonOrEntity}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block font-semibold">Infracción legal declarada:</span>
                      <span className="font-bold text-slate-800 mt-0.5 block">{s.infractionType}</span>
                    </div>
                    <div className="sm:col-span-2 pt-2 border-t border-slate-200/60">
                      <span className="text-slate-500 block font-semibold">Multa o penalización impuesta:</span>
                      <span className="font-black text-rose-700 text-sm mt-0.5 block">{s.penalty}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {s.summary}
                  </p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
