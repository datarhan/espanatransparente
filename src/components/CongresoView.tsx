'use client';

import React, { useState } from 'react';

export type VoteDecision = 'AFIRMATIVO' | 'CONTRA' | 'ABSTENCIÓN';

interface VotingRecord {
  id: string;
  lawName: string;
  date: string;
  summary: string;
  ppVote: VoteDecision;
  psoeVote: VoteDecision;
  voxVote: VoteDecision;
  otrosVoteSummary: string;
  totalYes: number;
  totalNo: number;
  totalAbstain: number;
  journalUrl: string;
}

const VOTE_BADGE_STYLES: Record<VoteDecision, string> = {
  AFIRMATIVO: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  CONTRA: 'bg-rose-50 text-rose-800 border-rose-200',
  ABSTENCIÓN: 'bg-amber-50 text-amber-800 border-amber-200',
};

const CONGRESO_VOTES: VotingRecord[] = [
  {
    id: 'v-1',
    lawName: 'Ley Orgánica de Amnistía para la Normalización Institucional',
    date: '30 de mayo de 2024 (Vigente XV Leg.)',
    summary: 'Votación final de conjunto sobre el levantamiento de veto del Senado.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Junts (7), Bildu (6), PNV (5), BNG (1), Podemos (4): AFIRMATIVO',
    totalYes: 177,
    totalNo: 172,
    totalAbstain: 0,
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'v-2',
    lawName: 'Real Decreto-Ley de Medidas Anticrisis y Bonificación del Transporte',
    date: '28 de enero de 2026',
    summary: 'Prórroga de bonificaciones al transporte público y rebaja de IVA en alimentos básicos.',
    ppVote: 'ABSTENCIÓN',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar, ERC, EH Bildu, PNV, BNG, CC: AFIRMATIVO (52)',
    totalYes: 173,
    totalNo: 34,
    totalAbstain: 143,
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'v-3',
    lawName: 'Revalorización de las Pensiones Públicas Conforme al IPC',
    date: '10 de enero de 2024',
    summary: 'Garantía legal de suficiencia de ingresos y actualización periódica del poder adquisitivo de las pensiones.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar, ERC, Bildu, PNV, BNG, CC: AFIRMATIVO (54) • UPN: AFIRMATIVO',
    totalYes: 315,
    totalNo: 33,
    totalAbstain: 1,
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'v-4',
    lawName: 'Renovación y Reforma Institucional del Consejo General del Poder Judicial (CGPJ)',
    date: '23 de julio de 2024',
    summary: 'Acuerdo bipartito de renovación de los 20 vocales del CGPJ y refuerzo de los requisitos de independencia judicial.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar: AFIRMATIVO (27) • ERC, Junts, Bildu, Podemos: CONTRA o ABSTENCIÓN',
    totalYes: 258,
    totalNo: 47,
    totalAbstain: 33,
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
];

export default function CongresoView() {
  const [selectedLaw, setSelectedLaw] = useState<string>(CONGRESO_VOTES[0].id);
  const activeVote = CONGRESO_VOTES.find((v) => v.id === selectedLaw) || CONGRESO_VOTES[0];

  const parties: { name: string; seats: number; vote: VoteDecision; color: string }[] = [
    { name: 'Partido Popular (PP)', seats: 137, vote: activeVote.ppVote, color: 'bg-sky-600' },
    { name: 'Partido Socialista (PSOE)', seats: 121, vote: activeVote.psoeVote, color: 'bg-rose-600' },
    { name: 'Vox', seats: 33, vote: activeVote.voxVote, color: 'bg-emerald-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            Congreso de los Diputados • XV Legislatura
          </span>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Composición del Hemiciclo (350 Escaños) y Registro de Votaciones Nominales
          </h2>
        </div>
        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
          Mayoría absoluta: 176 escaños
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 350-Seat Distribution */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-4 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900">
            Distribución del Hemiciclo (350 escaños)
          </h3>

          <div
            className="h-4 w-full rounded-full overflow-hidden flex bg-slate-100 gap-0.5"
            role="img"
            aria-label="Composición del Congreso: PP 137 escaños, PSOE 121 escaños, Vox 33 escaños, Otros grupos 59 escaños"
          >
            <div style={{ width: '39.1%' }} className="bg-sky-600 h-full" title="PP: 137" />
            <div style={{ width: '34.5%' }} className="bg-rose-600 h-full" title="PSOE: 121" />
            <div style={{ width: '9.4%' }} className="bg-emerald-600 h-full" title="VOX: 33" />
            <div style={{ width: '17%' }} className="bg-amber-500 h-full" title="Otros: 59" />
          </div>

          <ul className="divide-y divide-slate-100 text-xs">
            <li className="py-2.5 flex justify-between items-center">
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span className="w-2.5 h-2.5 bg-sky-600 rounded-xs" /> Partido Popular (PP)
              </span>
              <span className="font-bold text-slate-900 font-mono">137 escaños (39,1%)</span>
            </li>
            <li className="py-2.5 flex justify-between items-center">
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span className="w-2.5 h-2.5 bg-rose-600 rounded-xs" /> Partido Socialista (PSOE)
              </span>
              <span className="font-bold text-slate-900 font-mono">121 escaños (34,6%)</span>
            </li>
            <li className="py-2.5 flex justify-between items-center">
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-xs" /> Vox
              </span>
              <span className="font-bold text-slate-900 font-mono">33 escaños (9,4%)</span>
            </li>
            <li className="py-2.5 flex justify-between items-center">
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-xs" /> Otros Grupos (Sumar, ERC, Junts, Bildu, PNV...)
              </span>
              <span className="font-bold text-slate-900 font-mono">59 escaños (16,9%)</span>
            </li>
          </ul>

          <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
            <strong>Matemática parlamentaria:</strong> Ninguna formación alcanza la mayoría absoluta en solitario. La investidura y las leyes orgánicas requieren el concurso de bloques de 176 diputados.
          </div>
        </div>

        {/* Right Column: Nominal Voting Comparator */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-slate-900">Comparador de Votaciones Nominales</h3>
            <select
              aria-label="Seleccionar votación parlamentaria"
              value={selectedLaw}
              onChange={(e) => setSelectedLaw(e.target.value)}
              className="text-xs rounded-xl border border-slate-300 bg-white px-3 py-1.5 font-bold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
            >
              {CONGRESO_VOTES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.lawName}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span>Fecha: {activeVote.date}</span>
              <span className="text-slate-900">
                Resultado Oficial: <strong className="text-emerald-700 font-mono">{activeVote.totalYes} Sí</strong> •{' '}
                <strong className="text-rose-700 font-mono">{activeVote.totalNo} No</strong> •{' '}
                <strong className="text-amber-700 font-mono">{activeVote.totalAbstain} Abst.</strong>
              </span>
            </div>
            <div className="text-sm font-bold text-slate-900">{activeVote.lawName}</div>
            <p className="text-xs text-slate-600 leading-relaxed">{activeVote.summary}</p>
          </div>

          <div className="space-y-2.5">
            {parties.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-white text-xs shadow-2xs"
              >
                <span className="font-bold text-slate-800 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 ${p.color} rounded-xs`} />
                  {p.name} ({p.seats} escaños)
                </span>
                <span
                  className={`px-3 py-1 rounded-full font-extrabold border ${VOTE_BADGE_STYLES[p.vote]}`}
                >
                  {p.vote}
                </span>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-amber-200/80 bg-amber-50/40 text-xs gap-2">
              <span className="font-bold text-slate-800 flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-xs shrink-0" />
                Socios Parlamentarios y Otros (59 escaños)
              </span>
              <span className="text-[11px] font-semibold text-slate-700">
                {activeVote.otrosVoteSummary}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
            <span className="text-slate-500">Fuente: Registro electrónico del Congreso de los Diputados</span>
            <a
              href={activeVote.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-900 hover:underline inline-flex items-center gap-1"
            >
              Consultar Diario de Sesiones &#8599;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
