'use client';

import React from 'react';
import { PARTIES } from '@/data/politicalData';
import { ExternalLink, Users, Building, Coins, FileText, ChevronRight } from 'lucide-react';

export const PartyOverviewCards: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Radiografía Comparativa de Partidos</h2>
        <p className="text-sm text-zinc-600 mt-1">
          Datos institucionales auditados: escaños, presupuestos públicos del BOE, deudas bancarias fiscalizadas por el Tribunal de Cuentas y compromisos de programa oficial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(PARTIES).map((party) => (
          <div
            key={party.id}
            className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Top Party Banner */}
            <div
              className="p-5 border-b border-zinc-100 flex items-start justify-between"
              style={{ borderTop: `4px solid ${party.color}` }}
            >
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${party.color}15`, color: party.color }}>
                  {party.acronym}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">{party.name}</h3>
                <p className="text-xs text-zinc-500 mt-0.5">{party.ideology}</p>
              </div>
            </div>

            <div className="p-5 space-y-4 flex-1">
              {/* Leaders & Foundation */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                <div>
                  <span className="text-zinc-500 block">Líder actual</span>
                  <span className="font-semibold text-zinc-800">{party.currentLeader}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Fundación</span>
                  <span className="font-semibold text-zinc-800">{party.foundingYear}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-zinc-500 block">Grupo en el Parlamento Europeo</span>
                  <span className="font-semibold text-zinc-800">{party.europeanGroup}</span>
                </div>
              </div>

              {/* Institutional Representation */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Representación Institucional
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-zinc-50 border border-zinc-100 p-2.5 rounded-lg">
                    <span className="text-lg font-bold text-zinc-900 block">{party.seatsCongreso}</span>
                    <span className="text-[10px] text-zinc-500">Congreso (350)</span>
                  </div>
                  <div className="bg-zinc-50 border border-zinc-100 p-2.5 rounded-lg">
                    <span className="text-lg font-bold text-zinc-900 block">{party.seatsSenado}</span>
                    <span className="text-[10px] text-zinc-500">Senado (266)</span>
                  </div>
                  <div className="bg-zinc-50 border border-zinc-100 p-2.5 rounded-lg">
                    <span className="text-lg font-bold text-zinc-900 block">{party.ccaaPresidencies}</span>
                    <span className="text-[10px] text-zinc-500">Presidencias CCAA (17)</span>
                  </div>
                </div>
              </div>

              {/* Finances & Debt */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5" /> Finanzas y Deuda Oficial
                </h4>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">Subvención pública anual:</span>
                    <span className="font-semibold text-zinc-900">{party.publicSubsidiesAnnualEur}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">Deuda con entidades de crédito:</span>
                    <span className="font-semibold text-zinc-900">{party.bankDebtEur}</span>
                  </div>
                </div>
              </div>

              {/* Manifesto Pillars */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Ejes Programáticos Clave
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                    <span className="font-semibold text-zinc-800 block mb-0.5">Vivienda:</span>
                    <p className="text-zinc-600 text-[11px] leading-relaxed">{party.manifestoSummary.housing}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                    <span className="font-semibold text-zinc-800 block mb-0.5">Economía e Impuestos:</span>
                    <p className="text-zinc-600 text-[11px] leading-relaxed">{party.manifestoSummary.economy}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                    <span className="font-semibold text-zinc-800 block mb-0.5">Inmigración:</span>
                    <p className="text-zinc-600 text-[11px] leading-relaxed">{party.manifestoSummary.immigration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Link to Official Manifesto */}
            <div className="p-4 bg-zinc-50 border-t border-zinc-100">
              <a
                href={party.officialManifestoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-100 transition-colors shadow-2xs"
              >
                <span>Consultar Programa Oficial Registrado</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
