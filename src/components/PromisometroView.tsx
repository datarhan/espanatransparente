'use client';

import React, { useState } from 'react';
import { PARTY_SOLID_STYLES } from '@/lib/data';

export type PromiseStatus = 'CUMPLIDA' | 'PARCIAL' | 'INCUMPLIDA' | 'BLOQUEADA';

interface PromiseAuditItem {
  id: string;
  party: 'PSOE' | 'PP' | 'VOX';
  topic: string;
  status: PromiseStatus;
  promiseText: string;
  programCitation: string;
  boeRealityText: string;
  boeId: string;
  boeUrl: string;
}

const STATUS_STYLES: Record<PromiseStatus, string> = {
  CUMPLIDA: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  PARCIAL: 'bg-amber-50 text-amber-800 border-amber-200',
  INCUMPLIDA: 'bg-rose-50 text-rose-800 border-rose-200',
  BLOQUEADA: 'bg-slate-100 text-slate-700 border-slate-300',
};

const PROMISES_DATA: PromiseAuditItem[] = [
  {
    id: 'p-1',
    party: 'PSOE',
    topic: 'Vivienda y Alquileres',
    status: 'PARCIAL',
    promiseText: 'Ampliación del parque público de vivienda al 20% del total nacional y control de precios en zonas tensionadas.',
    programCitation: 'Programa Electoral 23J (JEC) • Pág. 84, Punto 2.4',
    boeRealityText:
      'Aprobación de la línea de avales ICO y aplicación de topes en Cataluña, sin alcanzar el ritmo anual comprometido de construcción de parque público social.',
    boeId: 'BOE-A-2023-12203',
    boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203',
  },
  {
    id: 'p-2',
    party: 'PP',
    topic: 'Fiscalidad y Renta',
    status: 'CUMPLIDA',
    promiseText: 'Deflactación de la tarifa autonómica del IRPF para compensar el impacto de la inflación.',
    programCitation: 'Programa Marco Autonómico y 23J (JEC) • Pág. 32, Punto 1.1',
    boeRealityText:
      'Aprobado y ejecutado en las comunidades gobernadas por el PP (Madrid, Andalucía, Galicia, Castilla y León y Comunitat Valenciana) en los tramos autonómicos.',
    boeId: 'BOE-A-2024-04112',
    boeUrl: 'https://www.boe.es',
  },
  {
    id: 'p-3',
    party: 'VOX',
    topic: 'Transición Energética',
    status: 'BLOQUEADA',
    promiseText: 'Derogación integral de la Ley de Cambio Climático y prórroga forzosa de centrales nucleares.',
    programCitation: 'Programa Electoral 23J (JEC) • Pág. 19, Punto 4',
    boeRealityText:
      'Proposición de Ley rechazada en el Pleno del Congreso de los Diputados por mayoría absoluta de los grupos parlamentarios.',
    boeId: 'DSCD-15-PL-42',
    boeUrl: 'https://www.congreso.es',
  },
  {
    id: 'p-4',
    party: 'PSOE',
    topic: 'Pensiones y Seguridad Social',
    status: 'CUMPLIDA',
    promiseText: 'Revalorización de las pensiones públicas conforme al IPC real de forma obligatoria por ley.',
    programCitation: 'Programa Electoral 23J (JEC) • Pág. 112, Punto 5.1',
    boeRealityText:
      'Garantizado en la Ley 21/2021 y aplicado en los decretos de actualización presupuestaria de 2024, 2025 y 2026.',
    boeId: 'BOE-A-2021-21652',
    boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    id: 'p-5',
    party: 'PP',
    topic: 'Justicia y Poder Judicial',
    status: 'PARCIAL',
    promiseText: 'Reforma del sistema de elección de los vocales judiciales del CGPJ para que los elijan los propios jueces.',
    programCitation: 'Programa Electoral 23J (JEC) • Pág. 58, Punto 3.2',
    boeRealityText:
      'Pacto de renovación del CGPJ acordado en 2024 con encomienda al propio Consejo para elevar una propuesta de reforma al Parlamento, aún pendiente de aprobación final.',
    boeId: 'BOE-A-2024-15901',
    boeUrl: 'https://www.boe.es',
  },
  {
    id: 'p-6',
    party: 'VOX',
    topic: 'Organización Territorial',
    status: 'BLOQUEADA',
    promiseText: 'Supresión de las policías autonómicas y recentralización de competencias en Educación y Sanidad.',
    programCitation: 'Programa Electoral 23J (JEC) • Pág. 7, Punto 1',
    boeRealityText:
      'Iniciativas parlamentarias rechazadas por el 90% de la cámara al chocar con el Título VIII de la Constitución Española.',
    boeId: 'DSCD-15-MOC-18',
    boeUrl: 'https://www.congreso.es',
  },
];

export default function PromisometroView() {
  const [selectedParty, setSelectedParty] = useState<'ALL' | 'PSOE' | 'PP' | 'VOX'>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | PromiseStatus>('ALL');

  const items = PROMISES_DATA.filter((item) => {
    if (selectedParty !== 'ALL' && item.party !== selectedParty) return false;
    if (selectedStatus !== 'ALL' && item.status !== selectedStatus) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Header and Controls */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            El Promisómetro • Auditoría JEC vs BOE
          </span>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Contraste Directo: Programa Electoral frente al Boletín Oficial del Estado
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            {(['ALL', 'PP', 'PSOE', 'VOX'] as const).map((party) => (
              <button
                key={party}
                type="button"
                onClick={() => setSelectedParty(party)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedParty === party
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {party === 'ALL' ? 'Todos' : party}
              </button>
            ))}
          </div>

          <select
            aria-label="Filtrar por estado de promesa"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as 'ALL' | PromiseStatus)}
            className="text-xs rounded-xl border border-slate-300 bg-white px-3.5 py-2 font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer shadow-2xs"
          >
            <option value="ALL">Todos los estados ({PROMISES_DATA.length})</option>
            <option value="CUMPLIDA">Cumplidas</option>
            <option value="PARCIAL">En trámite / Parcial</option>
            <option value="BLOQUEADA">Bloqueadas en Cortes</option>
            <option value="INCUMPLIDA">Incumplidas</option>
          </select>
        </div>
      </div>

      {/* Promises List */}
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-4 shadow-xs hover:border-slate-300 transition-all"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
                    PARTY_SOLID_STYLES[item.party]
                  }`}
                >
                  {item.party}
                </span>
                <span className="text-xs font-bold text-slate-600">{item.topic}</span>
              </div>
              <span
                className={`px-3 py-0.5 rounded-full text-xs font-bold border ${
                  STATUS_STYLES[item.status]
                }`}
              >
                Estado: {item.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Program Statement */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  1. Promesa Registrada (Programa Electoral JEC)
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">“{item.promiseText}”</p>
                <div className="text-[11px] text-slate-500 pt-1 font-medium">
                  Referencia documental: {item.programCitation}
                </div>
              </div>

              {/* Legislative Reality */}
              <div className="bg-emerald-50/40 rounded-xl p-4 border border-emerald-200/80 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                    2. Evidencia Legislativa (BOE / Cortes Generales)
                  </div>
                  <p className="text-sm text-slate-800 mt-1 leading-relaxed">{item.boeRealityText}</p>
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] border-t border-emerald-100">
                  <span className="font-mono font-bold text-slate-700">
                    Expediente: {item.boeId}
                  </span>
                  <a
                    href={item.boeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-800 hover:text-emerald-950 hover:underline inline-flex items-center gap-1"
                  >
                    Abrir documento oficial &#8599;
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
