'use client';

import React, { useState } from 'react';
import { BILLS } from '@/data/politicalData';
import { BillCategory, VoteOutcome } from '@/types/politics';
import { Vote, ExternalLink, Filter, Check, X, Minus, BookOpen } from 'lucide-react';

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

  const renderVoteBadge = (partyName: string, outcome: VoteOutcome) => {
    if (outcome === 'A_FAVOR') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <Check className="w-3 h-3" /> A FAVOR
        </span>
      );
    }
    if (outcome === 'EN_CONTRA') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
          <X className="w-3 h-3" /> EN CONTRA
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
        <Minus className="w-3 h-3" /> ABSTENCIÓN
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Monitor Objetivo de Votaciones Parlamentarias</h2>
        <p className="text-sm text-zinc-600 mt-1">
          Registro nominal de cómo votó cada partido en el Congreso de los Diputados en <strong>{stats.total} leyes y mociones decisivas</strong>, acompañado de los argumentos oficiales tanto de los impulsores como de la oposición registrada en el <em>Diario de Sesiones</em>.
        </p>

        {/* Quick Political Consensus Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-3 border-t border-zinc-200 text-xs">
          <button
            onClick={() => setFilterType('ALL')}
            className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
              filterType === 'ALL' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100'
            }`}
          >
            <span className="font-semibold block uppercase text-[10px] opacity-80">Total Votaciones</span>
            <span className="text-base font-black">{stats.total} Leyes</span>
          </button>
          <button
            onClick={() => setFilterType('CONSENSO')}
            className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
              filterType === 'CONSENSO' ? 'bg-emerald-800 text-white border-emerald-800' : 'bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50'
            }`}
          >
            <span className="font-semibold block uppercase text-[10px] opacity-80">Pactos de Estado</span>
            <span className="text-base font-black">{stats.consenso} Leyes (PP + PSOE)</span>
          </button>
          <button
            onClick={() => setFilterType('POLARIZADA')}
            className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
              filterType === 'POLARIZADA' ? 'bg-indigo-800 text-white border-indigo-800' : 'bg-white text-indigo-800 border-indigo-200 hover:bg-indigo-50'
            }`}
          >
            <span className="font-semibold block uppercase text-[10px] opacity-80">Choque de Bloques</span>
            <span className="text-base font-black">{stats.polarizadas} Leyes (PP vs PSOE)</span>
          </button>
          <button
            onClick={() => setFilterType('RECHAZADA')}
            className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
              filterType === 'RECHAZADA' ? 'bg-rose-800 text-white border-rose-800' : 'bg-white text-rose-800 border-rose-200 hover:bg-rose-50'
            }`}
          >
            <span className="font-semibold block uppercase text-[10px] opacity-80">Iniciativas Rechazadas</span>
            <span className="text-base font-black">{stats.rechazadas} Leyes / Mociones</span>
          </button>
        </div>

        {/* Search & Filters */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 pt-3 border-t border-zinc-200">
          <input
            type="text"
            placeholder="Buscar por ley, tema o palabra clave (eutanasia, solo sí es sí, ucrania, amnistía, vivienda)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3.5 py-2 text-sm bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex gap-1.5 overflow-x-auto pt-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bill Cards */}
      <div className="space-y-5">
        {filteredBills.length === 0 ? (
          <div className="text-center py-12 bg-white border border-zinc-200 rounded-xl text-zinc-500 text-sm">
            No se encontraron leyes con los filtros seleccionados.
          </div>
        ) : (
          filteredBills.map((bill) => (
            <div
              key={bill.id}
              className="bg-white border border-zinc-200 rounded-xl p-6 shadow-xs hover:border-zinc-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-zinc-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                      {bill.category}
                    </span>
                    <span className="text-xs text-zinc-400">• {bill.legislature} • {bill.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1">{bill.shortTitle}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{bill.title}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                    Resultado: {bill.result}
                  </span>
                  {bill.officialBoeUrl && (
                    <a
                      href={bill.officialBoeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline px-2.5 py-1 bg-blue-50 rounded-lg border border-blue-100"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>BOE</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="py-4 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <span className="font-semibold text-zinc-900">Resumen Oficial de la Medida: </span>
                {bill.objectiveSummary}
              </div>

              {/* Dual Arguments Grid (Proponent vs Opponents) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 bg-zinc-50 p-4 rounded-xl border border-zinc-100 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                    Argumentos Oficiales a Favor (Impulsores)
                  </div>
                  <p className="text-zinc-600 leading-relaxed">{bill.proArguments}</p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-rose-800 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-600"></span>
                    Objeciones Oficiales en Contra (Oposición)
                  </div>
                  <p className="text-zinc-600 leading-relaxed">{bill.conArguments}</p>
                </div>
              </div>

              {/* Vote Table */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Sentido del Voto Oficial por Partido:
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-red-700">PSOE:</span>
                    {renderVoteBadge('PSOE', bill.votes.PSOE)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-700">PP:</span>
                    {renderVoteBadge('PP', bill.votes.PP)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-700">VOX:</span>
                    {renderVoteBadge('VOX', bill.votes.VOX)}
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
