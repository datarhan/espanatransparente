'use client';

import React, { useState } from 'react';
import { BILLS } from '@/data/politicalData';
import { BillCategory, VoteOutcome } from '@/types/politics';
import { Vote, ExternalLink, Filter, Check, X, Minus, BookOpen, Search, RotateCcw } from 'lucide-react';

export const VotingTracker: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [filterType, setFilterType] = useState<'ALL' | 'CONSENSO' | 'POLARIZADA' | 'RECHAZADA'>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories: { id: string; label: string }[] = [
    { id: 'ALL', label: `Todas (${BILLS.length})` },
    { id: 'JUSTICIA_TERRITORIO', label: `Justicia y Estado (${BILLS.filter(b => b.category === 'JUSTICIA_TERRITORIO').length})` },
    { id: 'DEFENSA_SEGURIDAD', label: `Seguridad y Defensa (${BILLS.filter(b => b.category === 'DEFENSA_SEGURIDAD').length})` },
    { id: 'SANIDAD_EDUCACION', label: `Sanidad y Educación (${BILLS.filter(b => b.category === 'SANIDAD_EDUCACION').length})` },
    { id: 'LABORAL', label: `Laboral y Empleo (${BILLS.filter(b => b.category === 'LABORAL').length})` },
    { id: 'FISCALIDAD', label: `Fiscalidad (${BILLS.filter(b => b.category === 'FISCALIDAD').length})` },
    { id: 'VIVIENDA', label: `Vivienda (${BILLS.filter(b => b.category === 'VIVIENDA').length})` },
    { id: 'PENSIONES', label: `Pensiones (${BILLS.filter(b => b.category === 'PENSIONES').length})` },
    { id: 'ENERGIA_CLIMA', label: `Clima y Energía (${BILLS.filter(b => b.category === 'ENERGIA_CLIMA').length})` }
  ];

  const filteredBills = BILLS.filter((bill) => {
    const matchesCategory = selectedCategory === 'ALL' || bill.category === selectedCategory;
    const matchesSearch =
      bill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.shortTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.objectiveSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.proArguments.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.conArguments.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesFilterType = true;
    if (filterType === 'CONSENSO') {
      matchesFilterType = bill.votes.PSOE === 'A_FAVOR' && bill.votes.PP === 'A_FAVOR';
    } else if (filterType === 'POLARIZADA') {
      matchesFilterType = (bill.votes.PSOE === 'A_FAVOR' && bill.votes.PP === 'EN_CONTRA') ||
                          (bill.votes.PSOE === 'EN_CONTRA' && bill.votes.PP === 'A_FAVOR');
    } else if (filterType === 'RECHAZADA') {
      matchesFilterType = bill.result === 'RECHAZADA';
    }

    return matchesCategory && matchesSearch && matchesFilterType;
  });

  const stats = {
    total: BILLS.length,
    aprobadas: BILLS.filter(b => b.result === 'APROBADA').length,
    rechazadas: BILLS.filter(b => b.result === 'RECHAZADA').length,
    consenso: BILLS.filter(b => b.votes.PSOE === 'A_FAVOR' && b.votes.PP === 'A_FAVOR').length,
    polarizadas: BILLS.filter(b => 
      (b.votes.PSOE === 'A_FAVOR' && b.votes.PP === 'EN_CONTRA') ||
      (b.votes.PSOE === 'EN_CONTRA' && b.votes.PP === 'A_FAVOR')
    ).length
  };

  const renderVoteBadge = (outcome: VoteOutcome) => {
    if (outcome === 'A_FAVOR') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
          <Check className="w-3 h-3 text-emerald-600" /> A FAVOR
        </span>
      );
    }
    if (outcome === 'EN_CONTRA') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200">
          <X className="w-3 h-3 text-rose-600" /> EN CONTRA
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
        <Minus className="w-3 h-3 text-amber-600" /> ABSTENCIÓN
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Vote className="w-4 h-4 text-slate-900" />
            <span>Votaciones Nominales en el Congreso de los Diputados</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-1">
            Monitor de Votaciones Parlamentarias y Acuerdos
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Registro nominal de cómo votó cada partido en el Congreso en <strong>{stats.total} leyes y mociones decisivas</strong> de las legislaturas XIV y XV, con los argumentos oficiales de los proponentes y las objeciones de la oposición recogidas en el <em>Diario de Sesiones</em>.
          </p>
        </div>

        {/* Quick Political Consensus Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <button
            onClick={() => setFilterType('ALL')}
            className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              filterType === 'ALL'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-1 ring-slate-900/10'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <span className="font-bold block uppercase text-[10px] opacity-75">Total Leyes</span>
            <span className="text-xl font-black mt-0.5 block tracking-tight">{stats.total} Leyes</span>
            <span className="text-[11px] opacity-80">{stats.aprobadas} aprobadas • {stats.rechazadas} rechazadas</span>
          </button>

          <button
            onClick={() => setFilterType('CONSENSO')}
            className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              filterType === 'CONSENSO'
                ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm ring-2 ring-emerald-500/20'
                : 'bg-emerald-50/50 text-emerald-900 border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-300'
            }`}
          >
            <span className="font-bold block uppercase text-[10px]">Pactos de Estado</span>
            <span className="text-xl font-black mt-0.5 block tracking-tight">{stats.consenso} Leyes</span>
            <span className="text-[11px] opacity-80">PP y PSOE votaron Sí</span>
          </button>

          <button
            onClick={() => setFilterType('POLARIZADA')}
            className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              filterType === 'POLARIZADA'
                ? 'bg-indigo-800 text-white border-indigo-900 shadow-sm ring-2 ring-indigo-500/20'
                : 'bg-indigo-50/50 text-indigo-900 border-indigo-200/80 hover:bg-indigo-50 hover:border-indigo-300'
            }`}
          >
            <span className="font-bold block uppercase text-[10px]">Choque Frontal</span>
            <span className="text-xl font-black mt-0.5 block tracking-tight">{stats.polarizadas} Leyes</span>
            <span className="text-[11px] opacity-80">Voto opuesto PSOE vs PP</span>
          </button>

          <button
            onClick={() => setFilterType('RECHAZADA')}
            className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
              filterType === 'RECHAZADA'
                ? 'bg-rose-800 text-white border-rose-900 shadow-sm ring-2 ring-rose-500/20'
                : 'bg-rose-50/50 text-rose-900 border-rose-200/80 hover:bg-rose-50 hover:border-rose-300'
            }`}
          >
            <span className="font-bold block uppercase text-[10px]">Iniciativas Caídas</span>
            <span className="text-xl font-black mt-0.5 block tracking-tight">{stats.rechazadas} Leyes</span>
            <span className="text-[11px] opacity-80">Rechazadas en pleno</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative pt-2">
          <Search className="w-4 h-4 absolute left-3.5 top-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por ley, tema o palabra clave (eutanasia, solo sí es sí, ucrania, amnistía, vivienda)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white text-slate-900 placeholder-slate-400 transition-all"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex gap-1.5 overflow-x-auto pt-2 scrollbar-none border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bill Cards */}
      <div className="space-y-4">
        {filteredBills.length === 0 ? (
          <div className="text-center py-12 bg-white border border-slate-200/90 rounded-2xl text-slate-500 text-sm shadow-xs space-y-3">
            <Vote className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="font-semibold text-slate-700">No se encontraron leyes con los filtros seleccionados.</p>
            <button
              onClick={() => { setSelectedCategory('ALL'); setFilterType('ALL'); setSearchTerm(''); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Restablecer filtros
            </button>
          </div>
        ) : (
          filteredBills.map((bill) => (
            <div
              key={bill.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all duration-200 space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {bill.category}
                    </span>
                    <span className="text-xs text-slate-400">• {bill.legislature} • {bill.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{bill.shortTitle}</h3>
                  <p className="text-xs text-slate-500 max-w-3xl leading-snug">{bill.title}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    bill.result === 'APROBADA'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border-rose-200'
                  }`}>
                    {bill.result}
                  </span>
                  {bill.officialBoeUrl && (
                    <a
                      href={bill.officialBoeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline px-3 py-1 bg-blue-50/60 rounded-xl border border-blue-100 font-bold"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>BOE</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900">Resumen Oficial de la Medida: </span>
                {bill.objectiveSummary}
              </div>

              {/* Dual Arguments Grid (Proponent vs Opponents) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-100 space-y-1.5">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                    Argumentos Oficiales a Favor (Impulsores)
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">{bill.proArguments}</p>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-100 space-y-1.5">
                  <div className="font-bold text-rose-900 flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-rose-600"></span>
                    Objeciones Oficiales en Contra (Oposición)
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">{bill.conArguments}</p>
                </div>
              </div>

              {/* Vote Table */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Sentido del Voto Oficial por Partido:
                </div>

                <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-red-700">PSOE:</span>
                    {renderVoteBadge(bill.votes.PSOE)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-blue-700">PP:</span>
                    {renderVoteBadge(bill.votes.PP)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-emerald-700">VOX:</span>
                    {renderVoteBadge(bill.votes.VOX)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
