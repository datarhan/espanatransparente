'use client';

import React, { useState } from 'react';
import { MACRO_INDICATORS } from '@/data/politicalData';
import { MacroIndicator } from '@/types/politics';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  BarChart3, 
  ExternalLink, 
  Building2, 
  Users, 
  DollarSign, 
  Home, 
  CheckCircle2, 
  AlertCircle,
  Layers,
  ArrowUpRight
} from 'lucide-react';

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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            Evolución Favorable
          </span>
        );
      case 'ESTABLE':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
            <Minus className="w-3.5 h-3.5 text-amber-600" />
            Estable / Moderada
          </span>
        );
      case 'DETERIORO':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs">
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
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-1">
              <BarChart3 className="w-4 h-4 text-slate-800" />
              <span>Contexto Socioeconómico Oficial • INE, BdE y Eurostat</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Observatorio Macroeconómico y Termómetro Social
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Las contiendas electorales se deciden en gran medida sobre la situación material de la ciudadanía. Este módulo recoge las magnitudes macroeconómicas oficiales certificadas a finales de la XV Legislatura (2026) y contrasta objetivamente la interpretación del <strong>Gobierno (PSOE)</strong> frente a las réplicas de la oposición (<strong>PP</strong> y <strong>Vox</strong>).
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span>{MACRO_INDICATORS.length} Indicadores Oficiales</span>
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-500 font-semibold mr-1">Filtrar por ámbito:</span>
          {[
            { id: 'ALL', label: `Todos (${MACRO_INDICATORS.length})` },
            { id: 'EMPLEO', label: 'Empleo y Seguridad Social' },
            { id: 'PRECIOS', label: 'Precios e Inflación' },
            { id: 'ECONOMIA', label: 'Deuda Pública y PIB' },
            { id: 'BIENESTAR', label: 'Salarios y Vivienda' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 border border-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Indicators Cards Grid */}
      <div className="space-y-5">
        {filteredIndicators.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all space-y-5"
          >
            {/* Top row: Indicator title, value, and trend */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="p-1 rounded-md bg-slate-100 border border-slate-200">
                    {getCategoryIcon(item.category)}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {item.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-medium">Fuente: {item.officialSource}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">{item.title}</h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">{item.currentValue2026}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{item.comparisonBaseline}</div>
                </div>
                {getTrendBadge(item.trend)}
              </div>
            </div>

            {/* Objective summary */}
            <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed font-normal">
              <span className="font-bold text-slate-900">Contexto objetivo certificado: </span>
              {item.contextSummary}
            </div>

            {/* 3 Parties Political Perspectives Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
              {/* PSOE */}
              <div className="p-4 rounded-2xl bg-red-50/40 border border-red-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-red-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-600"></span>
                    PSOE (Gobierno)
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed font-normal">{item.psoePerspective}</p>
              </div>

              {/* PP */}
              <div className="p-4 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-blue-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    PP (Oposición)
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed font-normal">{item.ppPerspective}</p>
              </div>

              {/* VOX */}
              <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-emerald-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                    VOX (Oposición)
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed font-normal">{item.voxPerspective}</p>
              </div>
            </div>

            {/* Source link */}
            <div className="flex justify-end pt-1">
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline"
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
