'use client';

import React, { useState } from 'react';
import {
  REGIONS_DATA,
  PARTY_BADGE_STYLES,
  PartyId,
  getTerritorialSummary,
} from '@/lib/data';

export default function AutonomiasSplitView() {
  const [selectedId, setSelectedId] = useState<string>('andalucia');
  const [includeCities, setIncludeCities] = useState<boolean>(false);
  const [partyFilter, setPartyFilter] = useState<'ALL' | PartyId>('ALL');

  const summary = getTerritorialSummary(includeCities);

  const visibleRegions = REGIONS_DATA.filter((r) => {
    if (!includeCities && r.isAutonomousCity) return false;
    if (partyFilter !== 'ALL' && r.rulingParty !== partyFilter) return false;
    return true;
  });

  const activeRegion =
    visibleRegions.find((r) => r.id === selectedId) ||
    visibleRegions[0] ||
    REGIONS_DATA[0];

  return (
    <div className="space-y-4">
      {/* Top Banner and Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            Mapa Autonómico • Poder Territorial ({summary.total} territorios)
          </span>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Distribución de Presidencias y Parlamentos Autonómicos
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* 17 CCAA vs 19 Territorios Toggle */}
          <button
            type="button"
            onClick={() => setIncludeCities(!includeCities)}
            className="text-xs px-3.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 font-bold text-slate-700 cursor-pointer transition-colors shadow-2xs"
          >
            {includeCities
              ? 'Mostrando: 17 CCAA + Ceuta y Melilla (19)'
              : 'Mostrando: 17 Comunidades Autónomas'}
          </button>

          {/* Party Presidency Counter Pills */}
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => setPartyFilter(partyFilter === 'PP' ? 'ALL' : 'PP')}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-2xs ${
                partyFilter === 'PP'
                  ? 'bg-sky-600 text-white border-sky-600'
                  : 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100'
              }`}
            >
              PP: {summary.PP}
            </button>
            <button
              type="button"
              onClick={() => setPartyFilter(partyFilter === 'PSOE' ? 'ALL' : 'PSOE')}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-2xs ${
                partyFilter === 'PSOE'
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100'
              }`}
            >
              PSOE: {summary.PSOE}
            </button>
            <button
              type="button"
              onClick={() => setPartyFilter(partyFilter === 'OTROS' ? 'ALL' : 'OTROS')}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-2xs ${
                partyFilter === 'OTROS'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
              }`}
            >
              Nacionalistas / Otros: {summary.OTROS}
            </button>
            {partyFilter !== 'ALL' && (
              <button
                type="button"
                onClick={() => setPartyFilter('ALL')}
                className="text-xs text-slate-500 hover:text-slate-900 font-semibold underline ml-1 cursor-pointer"
              >
                Ver todas
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2-Column Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Cartographic List Selector */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between min-h-[480px] shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Cartografía Autonómica de España (IGN)
              </h3>
              <p className="text-xs text-slate-500">
                Haz clic en cualquier comunidad para inspeccionar su parlamento y presidente a la derecha
              </p>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              Filtro: {partyFilter === 'ALL' ? 'Todos' : partyFilter}
            </span>
          </div>

          <div className="my-auto py-8 flex flex-col items-center justify-center bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
            <p className="text-xs text-slate-500 font-semibold mb-3">
              Territorios en vista ({visibleRegions.length}):
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center px-4 max-w-xl">
              {visibleRegions.map((region) => {
                const isSelected = activeRegion.id === region.id;
                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedId(region.id)}
                    className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10 scale-105'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 shadow-2xs'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        region.rulingParty === 'PP'
                          ? 'bg-sky-500'
                          : region.rulingParty === 'PSOE'
                          ? 'bg-rose-500'
                          : 'bg-amber-500'
                      }`}
                    />
                    <span>{region.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
            <span className="font-bold">Total Presidencias ({summary.total}):</span>
            <div className="flex items-center gap-4 font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600" /> PP ({summary.PP})
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" /> PSOE ({summary.PSOE})
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Otros ({summary.OTROS})
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Parliament Inspector */}
        <aside className="lg:col-span-5 lg:sticky lg:top-20 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-5 shadow-xs">
          <div>
            <label
              htmlFor="region-select"
              className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1.5"
            >
              Comunidad Autónoma Seleccionada
            </label>
            <select
              id="region-select"
              value={activeRegion.id}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-bold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
            >
              {visibleRegions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} — Gobierna {r.rulingParty}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start justify-between gap-3 pt-2 border-t border-slate-100">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">{activeRegion.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Capital: <strong className="text-slate-700">{activeRegion.capital}</strong> • Población:{' '}
                <strong className="text-slate-700">{activeRegion.population}</strong>
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-xl text-xs font-bold border ${
                PARTY_BADGE_STYLES[activeRegion.rulingParty]
              }`}
            >
              Gobierna: {activeRegion.rulingParty}
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-1">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Presidencia de la Comunidad Autónoma
            </div>
            <div className="text-base font-bold text-slate-900">{activeRegion.president}</div>
            <div className="text-xs text-slate-600 leading-relaxed pt-0.5">
              <strong>Fórmula de gobernabilidad:</strong> {activeRegion.governanceFormula}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <h4 className="font-bold text-slate-900">
                Parlamento Autonómico ({activeRegion.totalSeats} escaños)
              </h4>
              <span className="text-slate-500 font-medium">
                Mayoría absoluta: <strong className="text-slate-900 font-mono">{activeRegion.majorityThreshold}</strong>
              </span>
            </div>

            <div
              role="img"
              aria-label={`Composición del parlamento de ${activeRegion.name}: ${activeRegion.parliament
                .map((p) => `${p.name} ${p.seats} escaños`)
                .join(', ')}`}
              className="h-4 w-full rounded-full overflow-hidden flex bg-slate-100 gap-0.5"
            >
              {activeRegion.parliament.map((item) => {
                const widthPct = (item.seats / activeRegion.totalSeats) * 100;
                return (
                  <div
                    key={item.name}
                    style={{ width: `${widthPct}%` }}
                    className={`${item.color} h-full transition-all duration-300`}
                    title={`${item.name}: ${item.seats} escaños`}
                  />
                );
              })}
            </div>

            <ul className="divide-y divide-slate-100 text-xs">
              {activeRegion.parliament.map((item) => {
                const pct = Math.round((item.seats / activeRegion.totalSeats) * 100);
                return (
                  <li key={item.name} className="py-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-medium text-slate-800">
                      <span className={`w-2.5 h-2.5 rounded-xs ${item.color}`} />
                      {item.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900 font-mono">{item.seats} escaños</span>
                      <span className="text-slate-500 w-10 text-right font-mono">({pct}%)</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Fuente: {activeRegion.officialBulletinName}</span>
            <a
              href={activeRegion.officialBulletinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-900 hover:underline inline-flex items-center gap-1"
            >
              Ver fuente oficial &#8599;
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
