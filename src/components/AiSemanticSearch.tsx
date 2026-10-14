'use client';

import React, { useState } from 'react';
import { searchPolicies } from '@/services/aiService';
import { AiSearchResult } from '@/types/politics';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  ShieldAlert, 
  Droplets, 
  CheckCircle, 
  ExternalLink, 
  ArrowRight, 
  Target,
  Bot,
  Zap,
  CheckCircle2,
  HelpCircle,
  Cpu
} from 'lucide-react';

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
      {/* Premier AI Hero Card */}
      <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-9 shadow-xl border border-slate-800 relative overflow-hidden">
        {/* Subtle Ambient Light Orb */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Motor Neuronal de Neutralidad Electoral</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-medium">
              <Cpu className="w-3.5 h-3.5 text-slate-400" />
              <span>Gemma 4 + Embeddings Multilingües</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Buscador Semántico y Asistente Neutro de Políticas
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Formula cualquier pregunta en lenguaje natural sobre las propuestas programáticas, el diario de sesiones del Congreso, sentencias judiciales del Tribunal Supremo o la gestión de catástrofes. El modelo procesa y sintetiza las fuentes oficiales sin adjetivos valorativos ni sesgos de opinión.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Ej: ¿Qué posición tienen sobre la energía nuclear? o ¿Quién votó la Ley de Amnistía?..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-11 pr-24 py-3 bg-slate-900/90 text-white placeholder-slate-400 border border-slate-700/80 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400/80 transition-all shadow-inner"
              />
              <div className="absolute right-3.5 top-3 hidden sm:flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                ↵ Enter
              </div>
            </div>

            <button
              onClick={() => handleSearch()}
              disabled={loading}
              className="px-6 py-3 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold rounded-2xl text-sm transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shadow-md shadow-amber-500/10 shrink-0"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Analizando fuentes...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Consultar Asistente</span>
                </>
              )}
            </button>
          </div>

          {/* Sample Prompts Pills */}
          <div className="pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Preguntas preparadas de auditoría pública:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(p);
                    handleSearch(p);
                  }}
                  className="text-xs bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-700/60 transition-all text-left cursor-pointer hover:border-slate-600 shadow-2xs"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results View */}
      {result && (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-7 animate-fade-in">
          {/* AI Synthesized Answer */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Bot className="w-4 h-4 text-amber-500" />
                Síntesis Neuronal Neutra (Gemma 4):
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Verificado contra datos oficiales
              </span>
            </div>

            <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal bg-slate-50/90 p-5 sm:p-6 rounded-2xl border border-slate-200/80 whitespace-pre-line">
              {result.answer}
            </div>
          </div>

          {/* Sources Cited */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 p-3.5 bg-slate-100/60 rounded-xl border border-slate-200/70">
            <span className="font-bold text-slate-700">Fuentes institucionales contrastadas:</span>
            {result.sourcesCited.map((src, idx) => (
              <span key={idx} className="bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-700 font-semibold shadow-2xs">
                {src}
              </span>
            ))}
          </div>

          {/* Matched Bills in Congress */}
          {result.relatedBills.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-slate-700" />
                Votaciones Parlamentarias Vinculadas en el Congreso
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {result.relatedBills.map((b) => (
                  <div key={b.id} className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/90 text-xs space-y-3 shadow-2xs">
                    <div className="font-bold text-slate-900 text-sm leading-snug">{b.shortTitle}</div>
                    <p className="text-slate-600 line-clamp-2 leading-relaxed">{b.objectiveSummary}</p>
                    <div className="flex items-center gap-3 pt-2.5 border-t border-slate-200/70 text-xs">
                      <span className="font-bold text-slate-700">Votos:</span>
                      <span className="text-red-700 font-bold">PSOE: {b.votes.PSOE}</span>
                      <span className="text-blue-700 font-bold">PP: {b.votes.PP}</span>
                      <span className="text-emerald-700 font-bold">VOX: {b.votes.VOX}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Electoral Promises */}
          {result.relatedPromises && result.relatedPromises.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-slate-700" />
                Compromisos Electorales Vinculados en El Promisómetro
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {result.relatedPromises.map((p) => (
                  <div key={p.id} className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/90 text-xs space-y-2.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                        p.party === 'PP' ? 'bg-blue-100 text-blue-800' :
                        p.party === 'PSOE' ? 'bg-red-100 text-red-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {p.party}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        p.status === 'CUMPLIDA' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                        p.status === 'PARCIAL' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                        'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 text-sm leading-snug">{p.headline}</div>
                    <div className="text-slate-600 italic">"{p.manifestoPromise}"</div>
                    <p className="text-slate-700 pt-2 border-t border-slate-200/70 leading-relaxed font-normal">{p.governingReality}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Cases or Crises */}
          {result.relatedCases.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-slate-700" />
                Causas Judiciales Penales Relevantes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {result.relatedCases.map((c) => (
                  <div key={c.id} className="p-5 bg-rose-50/50 rounded-2xl border border-rose-200 text-xs space-y-2 shadow-2xs">
                    <div className="font-bold text-rose-950 text-sm">{c.title} ({c.party})</div>
                    <div className="text-rose-700 font-semibold">{c.judicialStatus} • {c.court}</div>
                    <p className="text-slate-600 leading-relaxed">{c.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.relatedCrises.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-slate-700" />
                Catástrofes y Emergencias Registradas
              </h4>
              <div className="grid grid-cols-1 gap-3.5">
                {result.relatedCrises.map((r) => (
                  <div key={r.id} className="p-5 bg-sky-50/50 rounded-2xl border border-sky-200 text-xs space-y-2 shadow-2xs">
                    <div className="font-bold text-sky-950 text-sm">{r.title}</div>
                    <div className="text-sky-800 font-medium">Gobierno autonómico: {r.governingDetails}</div>
                    <p className="text-slate-700 leading-relaxed">{r.summary}</p>
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
