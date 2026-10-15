'use client';

import React, { useState } from 'react';

export interface HemicycleLawPreset {
  id: string;
  name: string;
  date: string;
  result: 'APROBADA' | 'RECHAZADA';
  yesCount: number;
  noCount: number;
  abstainCount: number;
  majorityThreshold: number;
  summary: string;
  partyVotes: {
    pp: 'SÍ' | 'NO' | 'ABS';
    psoe: 'SÍ' | 'NO' | 'ABS';
    vox: 'SÍ' | 'NO' | 'ABS';
    sumar: 'SÍ' | 'NO' | 'ABS';
    erc: 'SÍ' | 'NO' | 'ABS';
    junts: 'SÍ' | 'NO' | 'ABS';
    bildu: 'SÍ' | 'NO' | 'ABS';
    pnv: 'SÍ' | 'NO' | 'ABS';
    mixto: 'DIVIDIDO' | 'SÍ' | 'NO' | 'ABS';
  };
}

export const HEMICYCLE_PRESETS: HemicycleLawPreset[] = [
  {
    id: 'transparencia-medios-emfa-2024',
    name: 'Ley de Transparencia de Medios y Publicidad Institucional (EMFA)',
    date: '17 Sep 2024 (XV Leg.)',
    result: 'APROBADA',
    yesCount: 178,
    noCount: 171,
    abstainCount: 1,
    majorityThreshold: 176,
    summary: 'Apertura obligatoria del registro de la CNMC con desglose de subvenciones y publicidad institucional en CCAA y ayuntamientos.',
    partyVotes: {
      pp: 'NO',
      psoe: 'SÍ',
      vox: 'NO',
      sumar: 'SÍ',
      erc: 'SÍ',
      junts: 'SÍ',
      bildu: 'SÍ',
      pnv: 'SÍ',
      mixto: 'DIVIDIDO',
    },
  },
  {
    id: 'ley-amnistia-2024',
    name: 'Ley Orgánica 1/2024 de Amnistía (Normalización en Cataluña)',
    date: '30 May 2024 (XV Leg.)',
    result: 'APROBADA',
    yesCount: 177,
    noCount: 172,
    abstainCount: 0,
    majorityThreshold: 176,
    summary: 'Extinción de responsabilidad penal, contable y administrativa vinculada a la consulta de 2014 y 2017.',
    partyVotes: {
      pp: 'NO',
      psoe: 'SÍ',
      vox: 'NO',
      sumar: 'SÍ',
      erc: 'SÍ',
      junts: 'SÍ',
      bildu: 'SÍ',
      pnv: 'SÍ',
      mixto: 'NO',
    },
  },
  {
    id: 'ley-arrendamientos-2024',
    name: 'Reforma de la LAU y Regulación de Alquileres de Temporada',
    date: '17 Sep 2024 (XV Leg.)',
    result: 'RECHAZADA',
    yesCount: 172,
    noCount: 178,
    abstainCount: 0,
    majorityThreshold: 176,
    summary: 'Bloqueada por el voto conjunto de PP, VOX y Junts en el Congreso.',
    partyVotes: {
      pp: 'NO',
      psoe: 'SÍ',
      vox: 'NO',
      sumar: 'SÍ',
      erc: 'SÍ',
      junts: 'NO',
      bildu: 'SÍ',
      pnv: 'NO',
      mixto: 'DIVIDIDO',
    },
  },
  {
    id: 'reforma-laboral-2022',
    name: 'Reforma Laboral de Estabilidad en el Empleo (RDL 32/2021)',
    date: '03 Feb 2022 (XIV Leg.)',
    result: 'APROBADA',
    yesCount: 175,
    noCount: 174,
    abstainCount: 0,
    majorityThreshold: 175,
    summary: 'Aprobada in extremis por el voto telemático de Casero (PP) y el apoyo de Cs.',
    partyVotes: {
      pp: 'NO',
      psoe: 'SÍ',
      vox: 'NO',
      sumar: 'SÍ',
      erc: 'NO',
      junts: 'NO',
      bildu: 'NO',
      pnv: 'NO',
      mixto: 'DIVIDIDO',
    },
  },
  {
    id: 'ley-ela-2024',
    name: 'Ley ELA de Atención Integral a Personas con Procesos Neurológicos',
    date: '10 Oct 2024 (XV Leg.)',
    result: 'APROBADA',
    yesCount: 344,
    noCount: 0,
    abstainCount: 0,
    majorityThreshold: 176,
    summary: 'Aprobada por unanimidad histórica de todos los grupos parlamentarios de la Cámara.',
    partyVotes: {
      pp: 'SÍ',
      psoe: 'SÍ',
      vox: 'SÍ',
      sumar: 'SÍ',
      erc: 'SÍ',
      junts: 'SÍ',
      bildu: 'SÍ',
      pnv: 'SÍ',
      mixto: 'SÍ',
    },
  },
];

interface CongressHemicycleProps {
  onSelectLaw?: (lawId: string) => void;
}

export default function CongressHemicycle({ onSelectLaw }: CongressHemicycleProps) {
  const [selectedLawIndex, setSelectedLawIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'VOTE' | 'PARTY'>('VOTE');
  const [hoveredParty, setHoveredParty] = useState<string | null>(null);

  const activeLaw = HEMICYCLE_PRESETS[selectedLawIndex];

  // Helper to color seats depending on view mode
  const getSeatColor = (party: string, vote: 'SÍ' | 'NO' | 'ABS' | 'DIVIDIDO') => {
    if (viewMode === 'PARTY') {
      switch (party) {
        case 'PP': return '#0056B3';
        case 'PSOE': return '#E11D48';
        case 'VOX': return '#65A30D';
        case 'SUMAR': return '#D946EF';
        case 'ERC': return '#F59E0B';
        case 'JUNTS': return '#06B6D4';
        case 'BILDU': return '#0D9488';
        case 'PNV': return '#16A34A';
        default: return '#64748B';
      }
    } else {
      if (vote === 'SÍ') return '#059669'; // Emerald
      if (vote === 'NO') return '#DC2626'; // Red
      if (vote === 'ABS') return '#D97706'; // Amber
      return '#64748B'; // Divided/neutral
    }
  };

  const isInvestitureMajority = activeLaw.yesCount >= activeLaw.majorityThreshold;

  return (
    <section className="civic-card rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header and selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-outline-variant/40 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold tracking-wide">
              REPRESENTACIÓN NOMINAL
            </span>
            <span className="text-xs font-semibold text-secondary">
              Congreso de los Diputados · Salón de Sesiones
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-headline text-primary mt-1">
            Hemiciclo de Votación: 350 Escaños
          </h2>
          <p className="text-xs sm:text-sm text-secondary">
            Visualización interactiva de correlación de fuerzas y mayorías parlamentarias en el pleno.
          </p>
        </div>

        {/* View Mode Switcher and Law Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-lg border border-outline-variant p-0.5 bg-surface-container-low text-xs font-semibold">
            <button
              type="button"
              onClick={() => setViewMode('VOTE')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'VOTE'
                  ? 'bg-white text-primary font-bold shadow-xs'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Por Voto (Sí/No/Abs)
            </button>
            <button
              type="button"
              onClick={() => setViewMode('PARTY')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'PARTY'
                  ? 'bg-white text-primary font-bold shadow-xs'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Por Bancadas
            </button>
          </div>

          <select
            value={selectedLawIndex}
            onChange={(e) => {
              const idx = Number(e.target.value);
              setSelectedLawIndex(idx);
              if (onSelectLaw) onSelectLaw(HEMICYCLE_PRESETS[idx].id);
            }}
            className="h-9 px-3 rounded-lg bg-white border border-outline-variant text-xs font-semibold text-primary focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer max-w-xs truncate shadow-2xs"
          >
            {HEMICYCLE_PRESETS.map((preset, idx) => (
              <option key={preset.id} value={idx}>
                {preset.name} ({preset.result})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active law detail badge */}
      <div className="bg-surface-container-low/80 p-3 sm:p-4 rounded-xl border border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-bold border ${
                activeLaw.result === 'APROBADA'
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : 'bg-rose-100 text-rose-800 border-rose-300'
              }`}
            >
              {activeLaw.result}
            </span>
            <span className="text-xs font-mono text-secondary">{activeLaw.date}</span>
          </div>
          <div className="text-sm font-bold text-primary">{activeLaw.name}</div>
          <div className="text-xs text-secondary">{activeLaw.summary}</div>
        </div>

        <div className="flex items-center gap-3 shrink-0 bg-white px-3 py-2 rounded-lg border border-outline-variant/60 shadow-2xs">
          <div className="text-center">
            <span className="text-[10px] font-mono uppercase text-secondary block">Votos Sí</span>
            <span className="text-base font-bold font-mono text-emerald-700">{activeLaw.yesCount}</span>
          </div>
          <div className="h-6 w-px bg-outline-variant/60" />
          <div className="text-center">
            <span className="text-[10px] font-mono uppercase text-secondary block">Votos No</span>
            <span className="text-base font-bold font-mono text-rose-700">{activeLaw.noCount}</span>
          </div>
          <div className="h-6 w-px bg-outline-variant/60" />
          <div className="text-center">
            <span className="text-[10px] font-mono uppercase text-secondary block">Mayoría</span>
            <span className="text-base font-bold font-mono text-primary">176</span>
          </div>
        </div>
      </div>

      {/* SVG Arc of 350 seats */}
      <div className="relative bg-surface-container-low rounded-xl p-4 sm:p-6 overflow-hidden flex flex-col items-center">
        {/* Threshold Indicator Badge Top */}
        <div className="mb-2 sm:mb-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-outline-variant shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block" />
          <span className="text-xs font-semibold text-primary tracking-tight">
            Umbral de Mayoría Absoluta: 176 Escaños
          </span>
          <span
            className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border ${
              isInvestitureMajority
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-rose-50 text-rose-700 border-rose-200'
            }`}
          >
            {activeLaw.yesCount >= 176
              ? `+${activeLaw.yesCount - 176} sobre mayoría`
              : `${activeLaw.yesCount - 176} para mayoría`}
          </span>
        </div>

        <div className="w-full max-w-4xl">
          <svg
            className="w-full h-auto drop-shadow-xs select-none"
            viewBox="0 0 800 420"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Concentric arcs */}
            <path d="M 120 380 A 280 280 0 0 1 680 380" fill="none" stroke="#E2E8F0" strokeDasharray="3,3" strokeWidth="1" />
            <path d="M 170 380 A 230 230 0 0 1 630 380" fill="none" stroke="#E2E8F0" strokeDasharray="3,3" strokeWidth="1" />
            <path d="M 220 380 A 180 180 0 0 1 580 380" fill="none" stroke="#E2E8F0" strokeDasharray="3,3" strokeWidth="1" />
            <path d="M 270 380 A 130 130 0 0 1 530 380" fill="none" stroke="#E2E8F0" strokeDasharray="3,3" strokeWidth="1" />

            {/* Central Absolute Majority Axis (176) */}
            <line stroke="#0D1B2A" strokeDasharray="4,4" strokeWidth="1.5" x1="400" x2="400" y1="70" y2="380" />
            <text fill="#0D1B2A" fontFamily="sans-serif" fontSize="11" fontWeight="700" x="408" y="90">
              EJE 176 (50% + 1)
            </text>

            {/* Presidencia / Mesa del Congreso */}
            <rect fill="#0D1B2A" height="24" rx="3" width="130" x="335" y="360" />
            <text fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" fontWeight="700" textAnchor="middle" x="400" y="376">
              PRESIDENCIA Y MESA
            </text>

            {/* Row 1: Inner Arc */}
            <g fill={getSeatColor('PSOE', activeLaw.partyVotes.psoe)} className="seat-dot">
              <circle cx="280" cy="350" r="5" />
              <circle cx="286" cy="336" r="5" />
              <circle cx="295" cy="322" r="5" />
              <circle cx="305" cy="309" r="5" />
              <circle cx="318" cy="298" r="5" />
              <circle cx="332" cy="288" r="5" />
              <circle cx="347" cy="280" r="5" />
              <circle cx="363" cy="274" r="5" />
              <circle cx="380" cy="270" r="5" />
            </g>
            <g fill={getSeatColor('SUMAR', activeLaw.partyVotes.sumar)} className="seat-dot">
              <circle cx="276" cy="365" r="5" />
              <circle cx="268" cy="350" r="5" />
              <circle cx="262" cy="334" r="5" />
            </g>
            <g fill={getSeatColor('PP', activeLaw.partyVotes.pp)} className="seat-dot">
              <circle cx="420" cy="270" r="5" />
              <circle cx="437" cy="274" r="5" />
              <circle cx="453" cy="280" r="5" />
              <circle cx="468" cy="288" r="5" />
              <circle cx="482" cy="298" r="5" />
              <circle cx="495" cy="309" r="5" />
              <circle cx="505" cy="322" r="5" />
              <circle cx="514" cy="336" r="5" />
              <circle cx="520" cy="350" r="5" />
            </g>
            <g fill={getSeatColor('VOX', activeLaw.partyVotes.vox)} className="seat-dot">
              <circle cx="524" cy="365" r="5" />
              <circle cx="532" cy="350" r="5" />
              <circle cx="538" cy="334" r="5" />
            </g>

            {/* Row 2: Middle Arc 1 */}
            <g fill={getSeatColor('PSOE', activeLaw.partyVotes.psoe)} className="seat-dot">
              <circle cx="230" cy="350" r="5" />
              <circle cx="236" cy="332" r="5" />
              <circle cx="245" cy="315" r="5" />
              <circle cx="256" cy="298" r="5" />
              <circle cx="269" cy="282" r="5" />
              <circle cx="284" cy="268" r="5" />
              <circle cx="301" cy="256" r="5" />
              <circle cx="319" cy="245" r="5" />
              <circle cx="338" cy="237" r="5" />
              <circle cx="358" cy="231" r="5" />
              <circle cx="379" cy="227" r="5" />
            </g>
            <g fill={getSeatColor('SUMAR', activeLaw.partyVotes.sumar)} className="seat-dot">
              <circle cx="220" cy="365" r="5" />
              <circle cx="212" cy="348" r="5" />
              <circle cx="206" cy="330" r="5" />
              <circle cx="202" cy="312" r="5" />
            </g>
            <g fill={getSeatColor('ERC', activeLaw.partyVotes.erc)} className="seat-dot">
              <circle cx="198" cy="294" r="5" />
              <circle cx="196" cy="276" r="5" />
              <circle cx="196" cy="258" r="5" />
            </g>
            <g fill={getSeatColor('PP', activeLaw.partyVotes.pp)} className="seat-dot">
              <circle cx="421" cy="227" r="5" />
              <circle cx="442" cy="231" r="5" />
              <circle cx="462" cy="237" r="5" />
              <circle cx="481" cy="245" r="5" />
              <circle cx="499" cy="256" r="5" />
              <circle cx="516" cy="268" r="5" />
              <circle cx="531" cy="282" r="5" />
              <circle cx="544" cy="298" r="5" />
              <circle cx="555" cy="315" r="5" />
              <circle cx="564" cy="332" r="5" />
              <circle cx="570" cy="350" r="5" />
            </g>
            <g fill={getSeatColor('VOX', activeLaw.partyVotes.vox)} className="seat-dot">
              <circle cx="580" cy="365" r="5" />
              <circle cx="588" cy="348" r="5" />
              <circle cx="594" cy="330" r="5" />
              <circle cx="598" cy="312" r="5" />
            </g>
            <g fill={getSeatColor('JUNTS', activeLaw.partyVotes.junts)} className="seat-dot">
              <circle cx="602" cy="294" r="5" />
              <circle cx="604" cy="276" r="5" />
              <circle cx="604" cy="258" r="5" />
            </g>

            {/* Row 3: Middle Arc 2 */}
            <g fill={getSeatColor('PSOE', activeLaw.partyVotes.psoe)} className="seat-dot">
              <circle cx="178" cy="350" r="5" />
              <circle cx="184" cy="330" r="5" />
              <circle cx="192" cy="310" r="5" />
              <circle cx="203" cy="290" r="5" />
              <circle cx="216" cy="272" r="5" />
              <circle cx="231" cy="255" r="5" />
              <circle cx="247" cy="239" r="5" />
              <circle cx="266" cy="225" r="5" />
              <circle cx="286" cy="213" r="5" />
              <circle cx="308" cy="202" r="5" />
              <circle cx="330" cy="194" r="5" />
              <circle cx="353" cy="188" r="5" />
              <circle cx="376" cy="184" r="5" />
            </g>
            <g fill={getSeatColor('SUMAR', activeLaw.partyVotes.sumar)} className="seat-dot">
              <circle cx="168" cy="365" r="5" />
              <circle cx="160" cy="345" r="5" />
              <circle cx="154" cy="324" r="5" />
              <circle cx="149" cy="302" r="5" />
              <circle cx="146" cy="280" r="5" />
            </g>
            <g fill={getSeatColor('BILDU', activeLaw.partyVotes.bildu)} className="seat-dot">
              <circle cx="145" cy="258" r="5" />
              <circle cx="146" cy="236" r="5" />
              <circle cx="149" cy="214" r="5" />
              <circle cx="154" cy="193" r="5" />
            </g>
            <g fill={getSeatColor('PP', activeLaw.partyVotes.pp)} className="seat-dot">
              <circle cx="424" cy="184" r="5" />
              <circle cx="447" cy="188" r="5" />
              <circle cx="470" cy="194" r="5" />
              <circle cx="492" cy="202" r="5" />
              <circle cx="514" cy="213" r="5" />
              <circle cx="534" cy="225" r="5" />
              <circle cx="553" cy="239" r="5" />
              <circle cx="569" cy="255" r="5" />
              <circle cx="584" cy="272" r="5" />
              <circle cx="597" cy="290" r="5" />
              <circle cx="608" cy="310" r="5" />
              <circle cx="616" cy="330" r="5" />
              <circle cx="622" cy="350" r="5" />
            </g>
            <g fill={getSeatColor('VOX', activeLaw.partyVotes.vox)} className="seat-dot">
              <circle cx="632" cy="365" r="5" />
              <circle cx="640" cy="345" r="5" />
              <circle cx="646" cy="324" r="5" />
              <circle cx="651" cy="302" r="5" />
              <circle cx="654" cy="280" r="5" />
            </g>
            <g fill={getSeatColor('PNV', activeLaw.partyVotes.pnv)} className="seat-dot">
              <circle cx="655" cy="258" r="5" />
              <circle cx="654" cy="236" r="5" />
              <circle cx="651" cy="214" r="5" />
              <circle cx="646" cy="193" r="5" />
            </g>

            {/* Row 4: Outer Arc */}
            <g fill={getSeatColor('PSOE', activeLaw.partyVotes.psoe)} className="seat-dot">
              <circle cx="125" cy="350" r="5" />
              <circle cx="130" cy="326" r="5" />
              <circle cx="138" cy="302" r="5" />
              <circle cx="149" cy="279" r="5" />
              <circle cx="162" cy="257" r="5" />
              <circle cx="178" cy="236" r="5" />
              <circle cx="196" cy="216" r="5" />
              <circle cx="216" cy="198" r="5" />
              <circle cx="238" cy="182" r="5" />
              <circle cx="261" cy="168" r="5" />
              <circle cx="286" cy="156" r="5" />
              <circle cx="312" cy="147" r="5" />
              <circle cx="339" cy="140" r="5" />
              <circle cx="367" cy="136" r="5" />
              <circle cx="395" cy="134" r="5" />
            </g>
            <g fill={getSeatColor('MIXTO', activeLaw.partyVotes.mixto)} className="seat-dot">
              <circle cx="115" cy="368" r="5" />
              <circle cx="107" cy="344" r="5" />
              <circle cx="101" cy="319" r="5" />
              <circle cx="97" cy="294" r="5" />
            </g>
            <g fill={getSeatColor('PP', activeLaw.partyVotes.pp)} className="seat-dot">
              <circle cx="405" cy="134" r="5" />
              <circle cx="433" cy="136" r="5" />
              <circle cx="461" cy="140" r="5" />
              <circle cx="488" cy="147" r="5" />
              <circle cx="514" cy="156" r="5" />
              <circle cx="539" cy="168" r="5" />
              <circle cx="562" cy="182" r="5" />
              <circle cx="584" cy="198" r="5" />
              <circle cx="604" cy="216" r="5" />
              <circle cx="622" cy="236" r="5" />
              <circle cx="638" cy="257" r="5" />
              <circle cx="651" cy="279" r="5" />
              <circle cx="662" cy="302" r="5" />
              <circle cx="670" cy="326" r="5" />
              <circle cx="675" cy="350" r="5" />
            </g>
            <g fill={getSeatColor('MIXTO', activeLaw.partyVotes.mixto)} className="seat-dot">
              <circle cx="685" cy="368" r="5" />
              <circle cx="693" cy="344" r="5" />
              <circle cx="699" cy="319" r="5" />
              <circle cx="703" cy="294" r="5" />
            </g>

            {/* Block labels */}
            <text fill="#E11D48" fontFamily="sans-serif" fontSize="11" fontWeight="700" textAnchor="middle" x="210" y="398">
              BANCADA IZQUIERDA (PSOE + SOCIOS)
            </text>
            <text fill="#0056B3" fontFamily="sans-serif" fontSize="11" fontWeight="700" textAnchor="middle" x="590" y="398">
              BANCADA DERECHA (PP + VOX + OTROS)
            </text>
          </svg>
        </div>

        {/* Bench & Party Pills Footer */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 pt-3 border-t border-outline-variant/40 mt-2">
          {[
            { name: 'PP', count: 137, color: '#0056B3', vote: activeLaw.partyVotes.pp },
            { name: 'PSOE', count: 121, color: '#E11D48', vote: activeLaw.partyVotes.psoe },
            { name: 'VOX', count: 33, color: '#65A30D', vote: activeLaw.partyVotes.vox },
            { name: 'SUMAR', count: 27, color: '#D946EF', vote: activeLaw.partyVotes.sumar },
            { name: 'ERC', count: 7, color: '#F59E0B', vote: activeLaw.partyVotes.erc },
            { name: 'JUNTS', count: 7, color: '#06B6D4', vote: activeLaw.partyVotes.junts },
            { name: 'BILDU', count: 6, color: '#0D9488', vote: activeLaw.partyVotes.bildu },
            { name: 'PNV', count: 5, color: '#16A34A', vote: activeLaw.partyVotes.pnv },
            { name: 'MIXTO', count: 8, color: '#64748B', vote: activeLaw.partyVotes.mixto },
          ].map((party) => (
            <div
              key={party.name}
              className="flex items-center gap-2 p-1.5 bg-white rounded border border-outline-variant/50 text-left text-xs shadow-2xs"
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: party.color }} />
              <div className="leading-tight truncate">
                <span className="font-bold text-primary block">{party.name} ({party.count})</span>
                <span className="text-[10px] font-mono font-semibold text-secondary">
                  {viewMode === 'VOTE' ? `Voto: ${party.vote}` : '100% disc.'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
