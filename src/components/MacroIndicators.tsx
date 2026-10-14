'use client';

import React, { useState } from 'react';
import { MACRO_INDICATORS } from '@/data/politicalData';
import { MacroIndicator } from '@/types/politics';
import { TrendingUp, TrendingDown, Minus, BarChart3, ExternalLink, Building2, Users, DollarSign, Home, CheckCircle2, AlertCircle } from 'lucide-react';

export const MacroIndicators: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredIndicators = MACRO_INDICATORS.filter((ind) => {
    if (selectedCategory === 'ALL') return true;
    return ind.category === selectedCategory;
  });

  const getTrendBadge = (trend: MacroIndicator['trend']) => {
    switch (trend) {
      case 'MEJORA':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            Evolución Favorable
          </span>
        );
      case 'ESTABLE':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
            <Minus className="w-3.5 h-3.5 text-amber-600" />
            Estable / Moderada
          </span>
        );
      case 'DETERIORO':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
            <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
            Tensión / Deterioro
          </span>
        );
    }
  };

  const getCategoryIcon = (cat: MacroIndicator['category']) => {
    switch (cat) {
      case 'EMPLEO':
        return <Users className="w-4 h-4 text-blue-600" />;
      case 'ECONOMIA':
        return <Building2 className="w-4 h-4 text-purple-600" />;
      case 'PRECIOS':
        return <DollarSign className="w-4 h-4 text-amber-600" />;
      case 'BIENESTAR':
        return <Home className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Intro */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <BarChart3 className="w-4 h-4 text-zinc-800" />
          <span>Contexto Socioeconómico Oficial (INE, Banco de España, Eurostat)</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-1">
          Observatorio Macroeconómico y Termómetro Social
        </h2>
        <p className="text-sm text-zinc-600 mt-1">
          Las disputas electorales giran habitualmente en torno a la economía. Este módulo presenta los indicadores macroeconómicos clave del Estado español con datos oficiales certificados y contrasta de manera neutral la lectura y relato que hacen de ellos el <strong>Gobierno (PSOE)</strong> y la oposición (<strong>PP</strong> y <strong>Vox</strong>).
        </p>

        {/* Category Filters */}
        <div className="mt-4 pt-3 border-t border-zinc-200 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-zinc-500 font-semibold mr-1">Categoría:</span>
          {[
            { id: 'ALL', label: `Todos los Indicadores (${MACRO_INDICATORS.length})` },
            { id: 'EMPLEO', label: 'Empleo y Seguridad Social' },
            { id: 'PRECIOS', label: 'Precios e Inflación' },
            { id: 'ECONOMIA', label: 'Deuda y PIB' },
            { id: 'BIENESTAR', label: 'Salarios y Vivienda' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Indicators Cards Grid */}
      <div className="space-y-6">
        {filteredIndicators.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-zinc-200 rounded-xl p-6 shadow-xs hover:border-zinc-300 transition-colors space-y-5"
          >
            {/* Top row: Indicator title, value, and trend */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-zinc-100 border border-zinc-200">
                    {getCategoryIcon(item.category)}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {item.category}
                  </span>
                  <span>•</span>
                  <span className="text-xs text-zinc-500 font-medium">Fuente: {item.officialSource}</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-black text-zinc-900 tracking-tight">{item.currentValue2026}</div>
                  <div className="text-[11px] text-zinc-500 font-medium">{item.comparisonBaseline}</div>
                </div>
                {getTrendBadge(item.trend)}
              </div>
            </div>

            {/* Objective summary */}
            <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-100 text-xs text-zinc-700 leading-relaxed">
              <span className="font-semibold text-zinc-900">Contexto objetivo contrastado: </span>
              {item.contextSummary}
            </div>

            {/* 3 Parties Political Perspectives Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {/* PSOE */}
              <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-600"></span>
                    PSOE (Gobierno)
                  </span>
                </div>
                <p className="text-zinc-700 leading-relaxed">{item.psoePerspective}</p>
              </div>

              {/* PP */}
              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    PP (Oposición)
                  </span>
                </div>
                <p className="text-zinc-700 leading-relaxed">{item.ppPerspective}</p>
              </div>

              {/* VOX */}
              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                    VOX (Oposición)
                  </span>
                </div>
                <p className="text-zinc-700 leading-relaxed">{item.voxPerspective}</p>
              </div>
            </div>

            {/* Source link */}
            <div className="flex justify-end pt-1">
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                <span>Verificar datos en portal oficial ({item.officialSource.split('(')[0].trim()})</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
