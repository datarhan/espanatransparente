'use client';

import React, { useState } from 'react';

export type LegalCategory = 'PENAL' | 'ADMINISTRATIVA' | 'EMERGENCIAS';

interface JudicialRecord {
  id: string;
  category: LegalCategory;
  entity: string;
  title: string;
  status: string;
  description: string;
  citationId: string;
  citationUrl: string;
}

const CASES_DATA: JudicialRecord[] = [
  {
    id: 'j-1',
    category: 'PENAL',
    entity: 'Partido Popular',
    title: 'Audiencia Nacional / Tribunal Supremo — Sentencia Firme Caso Gürtel (Época I)',
    status: 'Sentencia Firme (Tribunal Supremo)',
    description:
      'Condena penal por delitos continuados de malversación, cohecho, falsedad y prevaricación, con condena al Partido Popular como partícipe a título lucrativo (STS 507/2020).',
    citationId: 'CENDOJ Roj: STS 3200/2020',
    citationUrl: 'https://www.poderjudicial.es/search/index.jsp',
  },
  {
    id: 'j-2',
    category: 'PENAL',
    entity: 'PSOE',
    title: 'Tribunal Supremo — Sentencia Firme Caso ERE de Andalucía',
    status: 'Sentencia Firme (Tribunal Supremo)',
    description:
      'Condena penal por delitos de prevaricación continuada y malversación de caudales públicos por la creación de un sistema de concesión de ayudas sociolaborales sin control previo (STS 749/2022).',
    citationId: 'CENDOJ Roj: STS 3270/2022',
    citationUrl: 'https://www.poderjudicial.es/search/index.jsp',
  },
  {
    id: 'j-3',
    category: 'ADMINISTRATIVA',
    entity: 'Vox',
    title: 'Tribunal de Cuentas — Sanción Firme por Financiación Irregular / Donaciones Finalistas',
    status: 'Sanción Administrativa Firme',
    description:
      'Imposición de sanción económica de 233.324 € por infracción muy grave de la Ley Orgánica de Financiación de Partidos Políticos (LOFPP), ratificada por la Sala de lo Contencioso del TS.',
    citationId: 'Tribunal de Cuentas • Res. Exp. SANC-2022/14',
    citationUrl: 'https://www.tcu.es',
  },
  {
    id: 'j-4',
    category: 'ADMINISTRATIVA',
    entity: 'PSOE',
    title: 'Resolución Sancionadora de la Junta Electoral Central (JEC)',
    status: 'Firme (Sanción Económica)',
    description:
      'Sanción por vulneración del principio de neutralidad institucional (Art. 50.2 LOREG) durante periodo electoral por manifestaciones en sedes oficiales de representación pública.',
    citationId: 'Expediente JEC 2024-889',
    citationUrl: 'https://www.juntaelectoralcentral.es',
  },
  {
    id: 'j-5',
    category: 'EMERGENCIAS',
    entity: 'Generalitat Valenciana (PP) / Gobierno Central (PSOE)',
    title: 'Auditoría de Gestión de Emergencia Nivel 2 — DANA Valencia (Octubre 2024)',
    status: 'Instrucción Judicial / Comisión Parlamentaria',
    description:
      'Auditoría y análisis cronológico de avisos meteorológicos de AEMET, caudales de la CHJ, constitución y deliberaciones del CECOPI, emisión de ES-Alert a las 20:11h y activación operativa de la UME conforme a la Ley 17/2015 del Sistema Nacional de Protección Civil.',
    citationId: 'Diligencias Previas • Juzgados de Instrucción de Torrent y Catarroja',
    citationUrl: 'https://www.poderjudicial.es/search/index.jsp',
  },
  {
    id: 'j-6',
    category: 'EMERGENCIAS',
    entity: 'Junta de Castilla y León (PP)',
    title: 'Auditoría Operativa de Extinción de Incendios — Sierra de la Culebra (Zamora)',
    status: 'Comisión en Cortes de Castilla y León',
    description:
      'Investigación sobre el grado de operatividad y cobertura temporal del operativo INFOCAL tras calcinarse más de 60.000 hectáreas con el dispositivo de máximo riesgo aún no activado.',
    citationId: 'Diario de Sesiones Cortes CyL • X Leg.',
    citationUrl: 'https://www.ccyl.es',
  },
];

export default function JusticiaView() {
  const [filter, setFilter] = useState<'ALL' | LegalCategory>('ALL');

  const records =
    filter === 'ALL' ? CASES_DATA : CASES_DATA.filter((r) => r.category === filter);

  return (
    <div className="space-y-4">
      {/* Header and Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            Justicia y Emergencias • Observatorio Legal y Territorial
          </span>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Causas Penales (CENDOJ), Sanciones TCu/JEC y Gestión de Catástrofes
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {(
            [
              { id: 'ALL', label: `Todos (${CASES_DATA.length})` },
              { id: 'PENAL', label: 'Penal CENDOJ' },
              { id: 'ADMINISTRATIVA', label: 'Sanciones TCu/JEC' },
              { id: 'EMERGENCIAS', label: 'Catástrofes y Emergencias' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cases List */}
      <div className="space-y-4">
        {records.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3.5 shadow-xs hover:border-slate-300 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-slate-900 text-white">
                  {item.entity}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.category}
                </span>
              </div>
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-3 py-0.5 rounded-full border border-rose-200">
                {item.status}
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="font-mono font-semibold text-slate-600">
                Referencia documental: {item.citationId}
              </span>
              <a
                href={item.citationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 hover:underline inline-flex items-center gap-1"
              >
                <span>Consultar expediente oficial</span>
                <span className="text-slate-400">&#8599;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
