'use client';

import React, { useState } from 'react';
import { searchPolicies } from '@/services/aiService';
import { AiSearchResult } from '@/types/politics';
import { Sparkles, Search, BookOpen, ShieldAlert, Droplets, CheckCircle, ExternalLink, ArrowRight, Target } from 'lucide-react';

export const AiSemanticSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<AiSearchResult | null>(null);

  const samplePrompts = [
    '¿Qué propone cada partido sobre topar el alquiler y cómo votaron en el Congreso?',
    '¿Quién votó a favor y quién en contra de revalorizar las pensiones con el IPC?',
    '¿Qué casos de corrupción tienen sentencia firme del Tribunal Supremo?',
    '¿Qué sanciones ha impuesto el Tribunal de Cuentas o la JEC a los partidos?',
    '¿Cómo fue la gestión de alertas y competencias legales en la DANA de Valencia?',
    '¿Quién apoya alargar la vida útil de las centrales nucleares?'
  ];

  const handleSearch = async (textToSearch?: string) => {
    const q = textToSearch || query;
    if (!q.trim()) return;

    setLoading(true);
    try {
      const res = await searchPolicies(q);
      setResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="bg-linear-to-r from-zinc-900 to-zinc-800 text-white rounded-xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
          <Sparkles className="w-4 h-4" />
          <span>Motor Neuronal de Búsqueda y Neutralidad</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mt-1">
          Buscador Semántico Multilingüe (Gemma 4 + Gemini Embedding 2)
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-3xl leading-relaxed">
          Haz cualquier pregunta en lenguaje natural sobre las propuestas, votaciones en el Congreso, sentencias judiciales o gestión de emergencias. El modelo analiza los documentos oficiales registrados y sintetiza una respuesta equilibrada y citada, eliminando sesgos partidistas.
        </p>

        {/* Input Bar */}
        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Ej: ¿Qué dicen de los autónomos? o ¿Quién votó la reforma laboral?..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-10 pr-4 py-2.5 bg-white/10 text-white placeholder-zinc-400 border border-white/20 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <button
            onClick={() => handleSearch()}
            disabled={loading}
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold rounded-lg text-sm transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5"
          >
            {loading ? 'Consultando fuentes...' : 'Consultar'}
          </button>
        </div>

        {/* Sample Prompt Chips */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <span className="text-[11px] text-zinc-400 block mb-2">Preguntas frecuentes preparadas:</span>
          <div className="flex flex-wrap gap-1.5">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(p);
                  handleSearch(p);
                }}
                className="text-[11px] bg-white/10 hover:bg-white/20 text-zinc-200 px-2.5 py-1 rounded-md border border-white/10 transition-colors text-left"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results View */}
      {result && (
        <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-xs space-y-6">
          {/* AI Synthesized Answer */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Síntesis Neuronal Neutra (Gemma 4):
              </span>
              <span className="text-[10px] text-zinc-400">Verificada contra fuentes primarias</span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-zinc-800 leading-relaxed font-normal bg-zinc-50 p-4 rounded-xl border border-zinc-100">
              {result.answer}
            </p>
          </div>

          {/* Sources Cited */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
            <span className="font-semibold text-zinc-700">Fuentes institucionales contrastadas:</span>
            {result.sourcesCited.map((src, idx) => (
              <span key={idx} className="bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200 text-zinc-700 font-medium">
                {src}
              </span>
            ))}
          </div>

          {/* Matched Bills */}
          {result.relatedBills.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
                Leyes y Votaciones Vinculadas en el Congreso
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.relatedBills.map((b) => (
                  <div key={b.id} className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 text-xs space-y-2">
                    <div className="font-bold text-zinc-900 text-sm">{b.shortTitle}</div>
                    <p className="text-zinc-600 line-clamp-2">{b.objectiveSummary}</p>
                    <div className="flex items-center gap-2 pt-1 border-t border-zinc-200 text-[11px]">
                      <span className="font-semibold text-zinc-700">Votos:</span>
                      <span className="text-red-700 font-bold">PSOE: {b.votes.PSOE}</span>
                      <span className="text-blue-700 font-bold">PP: {b.votes.PP}</span>
                      <span className="text-emerald-700 font-bold">VOX: {b.votes.VOX}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Cases or Crises */}
          {result.relatedCases.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-600" />
                Causas Judiciales Penales Relevantes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.relatedCases.map((c) => (
                  <div key={c.id} className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 text-xs space-y-1.5">
                    <div className="font-bold text-rose-950 text-sm">{c.title} ({c.party})</div>
                    <div className="text-rose-700 font-semibold">{c.judicialStatus} • {c.court}</div>
                    <p className="text-zinc-600">{c.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.relatedCrises.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-zinc-600" />
                Catástrofes y Emergencias Registradas
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {result.relatedCrises.map((r) => (
                  <div key={r.id} className="p-4 bg-sky-50/50 rounded-xl border border-sky-200 text-xs space-y-1.5">
                    <div className="font-bold text-sky-950 text-sm">{r.title}</div>
                    <div className="text-sky-800 font-medium">Gobierno autonómico: {r.governingDetails}</div>
                    <p className="text-zinc-700">{r.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Electoral Promises */}
          {result.relatedPromises && result.relatedPromises.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-zinc-600" />
                Compromisos Electorales Auditados en El Promisómetro
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.relatedPromises.map((p) => (
                  <div key={p.id} className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        p.party === 'PP' ? 'bg-blue-100 text-blue-800' :
                        p.party === 'PSOE' ? 'bg-red-100 text-red-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {p.party}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        p.status === 'CUMPLIDA' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                        p.status === 'PARCIAL' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                        'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="font-bold text-zinc-900 text-sm">{p.headline}</div>
                    <div className="text-zinc-600 italic">"{p.manifestoPromise}"</div>
                    <p className="text-zinc-700 pt-1 border-t border-zinc-200">{p.governingReality}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
