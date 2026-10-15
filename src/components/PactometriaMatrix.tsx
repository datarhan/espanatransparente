'use client';

import React from 'react';

interface CohesionRow {
  party: string;
  seats: number;
  color: string;
  scores: Record<string, number>;
}

const PARTIES = [
  { id: 'PSOE', name: 'PSOE', seats: 121, color: '#E11D48' },
  { id: 'PP', name: 'PP', seats: 137, color: '#0056B3' },
  { id: 'VOX', name: 'VOX', seats: 33, color: '#65A30D' },
  { id: 'SUMAR', name: 'SUMAR', seats: 27, color: '#D946EF' },
  { id: 'ERC', name: 'ERC', seats: 7, color: '#F59E0B' },
  { id: 'JUNTS', name: 'JUNTS', seats: 7, color: '#06B6D4' },
  { id: 'PNV', name: 'PNV', seats: 5, color: '#16A34A' },
];

const COHESION_DATA: CohesionRow[] = [
  {
    party: 'PSOE',
    seats: 121,
    color: '#E11D48',
    scores: { PSOE: 100, PP: 21.8, VOX: 6.2, SUMAR: 96.8, ERC: 84.3, JUNTS: 62.5, PNV: 81.2 },
  },
  {
    party: 'PP',
    seats: 137,
    color: '#0056B3',
    scores: { PSOE: 21.8, PP: 100, VOX: 87.5, SUMAR: 18.7, ERC: 12.5, JUNTS: 46.8, PNV: 37.5 },
  },
  {
    party: 'VOX',
    seats: 33,
    color: '#65A30D',
    scores: { PSOE: 6.2, PP: 87.5, VOX: 100, SUMAR: 3.1, ERC: 0.0, JUNTS: 25.0, PNV: 15.6 },
  },
  {
    party: 'SUMAR',
    seats: 27,
    color: '#D946EF',
    scores: { PSOE: 96.8, PP: 18.7, VOX: 3.1, SUMAR: 100, ERC: 87.5, JUNTS: 59.3, PNV: 78.1 },
  },
  {
    party: 'ERC',
    seats: 7,
    color: '#F59E0B',
    scores: { PSOE: 84.3, PP: 12.5, VOX: 0.0, SUMAR: 87.5, ERC: 100, JUNTS: 68.7, PNV: 75.0 },
  },
  {
    party: 'JUNTS',
    seats: 7,
    color: '#06B6D4',
    scores: { PSOE: 62.5, PP: 46.8, VOX: 25.0, SUMAR: 59.3, ERC: 68.7, JUNTS: 100, PNV: 75.0 },
  },
  {
    party: 'PNV',
    seats: 5,
    color: '#16A34A',
    scores: { PSOE: 81.2, PP: 37.5, VOX: 15.6, SUMAR: 78.1, ERC: 75.0, JUNTS: 75.0, PNV: 100 },
  },
];

export default function PactometriaMatrix() {
  const getCellBadge = (val: number, isSelf: boolean) => {
    if (isSelf) return 'bg-slate-100 text-slate-400 font-bold';
    if (val >= 80) return 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200';
    if (val >= 40) return 'bg-amber-50 text-amber-800 font-semibold border border-amber-200';
    return 'bg-rose-50 text-rose-700 font-medium border border-rose-100';
  };

  return (
    <section className="civic-card rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/40 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold tracking-wide">
              ANÁLISIS DE COINCIDENCIA ARITMÉTICA
            </span>
            <span className="text-xs font-semibold text-secondary">
              XV Legislatura · Tasa de Votación Conjunta
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-headline text-primary">
            Pactometría: Cohesión y Acuerdos Transversales
          </h2>
          <p className="text-xs sm:text-sm text-secondary">
            Porcentaje de coincidencia de voto entre fuerzas parlamentarias sobre el total de las 32 votaciones registradas.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600" /> &gt;80% Alta
          </span>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-600" /> 40–79% Pivote
          </span>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">
            <span className="w-2 h-2 rounded-full bg-rose-600" /> &lt;40% Oposición
          </span>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-xl border border-outline-variant/60 shadow-2xs">
        <table className="w-full text-center border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant text-secondary text-xs uppercase font-mono">
              <th className="py-2.5 px-3 text-left font-bold text-primary">GRUPO</th>
              {PARTIES.map((p) => (
                <th key={p.id} className="py-2.5 px-2 font-bold" style={{ color: p.color }}>
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30 font-mono font-medium">
            {COHESION_DATA.map((row) => (
              <tr key={row.party} className="hover:bg-surface-container/30 transition-colors">
                <td className="py-2.5 px-3 text-left font-bold text-primary flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                  <span>{row.party} ({row.seats})</span>
                </td>
                {PARTIES.map((col) => {
                  const val = row.scores[col.id];
                  const isSelf = row.party === col.id;
                  return (
                    <td key={col.id} className="py-2.5 px-1.5">
                      <span className={`inline-block px-2 py-1 rounded text-xs tabular-nums ${getCellBadge(val, isSelf)}`}>
                        {val.toFixed(1)}%
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Observation Callout */}
      <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/60 flex items-start gap-3 text-xs text-secondary leading-relaxed">
        <span className="text-base text-primary">💡</span>
        <p>
          <strong className="text-primary font-bold">Conclusión de Auditoría Matemática:</strong> Junts (62.5% de apoyo con PSOE vs 46.8% con PP) y PNV (81.2% con PSOE vs 37.5% con PP) operan como fuerzas de pivote parlamentario. En el 100% de las leyes rechazadas durante el período ordinario, la unión de votos de PP, VOX y Junts desarticuló la mayoría simple de la investidura.
        </p>
      </div>
    </section>
  );
}
