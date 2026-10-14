'use client';

import React from 'react';
import { PARTIES } from '@/data/politicalData';
import { ExternalLink, Users, Coins, FileText, Landmark } from 'lucide-react';

export const PartyOverviewCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <Landmark className="w-4 h-4 text-slate-800" />
          <span>Fichas Institucionales Auditadas</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
          Radiografía Comparativa de Partidos: PSOE, PP y Vox
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Datos institucionales certificados por los boletines y registros oficiales del Estado: escaños, subvenciones públicas anuales (BOE), deudas con entidades de crédito (Tribunal de Cuentas) y pilares de los programas electorales oficiales registrados ante la Junta Electoral Central.
        </p>
      </div>

      {/* 3 Party Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(PARTIES).map((party) => (
          <div
            key={party.id}
            className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02),0_8px_16px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            {/* Top Party Banner */}
            <div
              className="p-6 border-b border-slate-100 flex items-start justify-between relative overflow-hidden"
              style={{ borderTop: `4px solid ${party.color}` }}
            >
              <div className="space-y-1">
                <span
                  className="inline-flex items-center text-xs uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${party.color}15`, color: party.color }}
                >
                  {party.acronym}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">{party.name}</h3>
                <p className="text-xs text-slate-500 leading-snug">{party.ideology}</p>
              </div>
            </div>

            <div className="p-6 space-y-5 flex-1">
              {/* Leaders & Foundation */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div>
                  <span className="text-slate-500 block text-[11px]">Líder actual</span>
                  <span className="font-bold text-slate-900">{party.currentLeader}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Fundación</span>
                  <span className="font-bold text-slate-900">{party.foundingYear}</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-slate-200/60">
                  <span className="text-slate-500 block text-[11px]">Grupo en el Parlamento Europeo</span>
                  <span className="font-semibold text-slate-800">{party.europeanGroup}</span>
                </div>
              </div>

              {/* Institutional Representation */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-600" />
                  Representación Institucional
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                    <span className="text-xl font-black text-slate-900 block">{party.seatsCongreso}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Congreso (350)</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                    <span className="text-xl font-black text-slate-900 block">{party.seatsSenado}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Senado (266)</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                    <span className="text-xl font-black text-slate-900 block">{party.ccaaPresidencies}</span>
                    <span className="text-[10px] text-slate-500 font-medium">CCAA (17)</span>
                  </div>
                </div>
              </div>

              {/* Finances & Debt */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-slate-600" />
                  Financiación y Deuda Oficial
                </h4>
                <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center pb-1.5 border-b border-slate-200/60">
                    <span className="text-slate-600">Subvención pública anual:</span>
                    <span className="font-bold text-slate-900">{party.publicSubsidiesAnnualEur}</span>
                  </div>
                  <div className="flex justify-between items-center pt-0.5">
                    <span className="text-slate-600">Deuda bancaria auditada:</span>
                    <span className="font-bold text-slate-900">{party.bankDebtEur}</span>
                  </div>
                </div>
              </div>

              {/* Manifesto Pillars */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-600" />
                  Ejes Programáticos Oficiales
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                    <span className="font-bold text-slate-900 block">Vivienda:</span>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{party.manifestoSummary.housing}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                    <span className="font-bold text-slate-900 block">Economía e Impuestos:</span>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{party.manifestoSummary.economy}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                    <span className="font-bold text-slate-900 block">Inmigración:</span>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{party.manifestoSummary.immigration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Link to Official Manifesto */}
            <div className="p-5 bg-slate-50 border-t border-slate-100">
              <a
                href={party.officialManifestoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200/90 hover:bg-slate-100 transition-colors shadow-2xs"
              >
                <span>Consultar Programa Electoral Registrado</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
