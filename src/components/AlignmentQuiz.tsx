'use client';

import React, { useState } from 'react';
import { ALIGNMENT_QUESTIONS, PARTIES } from '@/data/politicalData';
import { calculateAlignmentScores } from '@/services/aiService';
import { Compass, CheckCircle2, RotateCcw, ArrowRight, ArrowLeft, Sparkles, Award } from 'lucide-react';
import { PartyId } from '@/types/politics';

export const AlignmentQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, { PSOE: number; PP: number; VOX: number }>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = ALIGNMENT_QUESTIONS[currentStep];

  const handleSelectOption = (alignment: { PSOE: number; PP: number; VOX: number }) => {
    const updated = {
      ...answers,
      [currentQ.id]: alignment
    };
    setAnswers(updated);

    if (currentStep < ALIGNMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  const scores = calculateAlignmentScores(answers);

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-1">
          <Compass className="w-4 h-4 text-slate-800" />
          <span>Brújula Parlamentaria • Votaciones Contrastadas</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Test de Afinidad y Coincidencia Política Basado en Datos Reales
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Responde a las {ALIGNMENT_QUESTIONS.length} cuestiones centrales del debate nacional. A diferencia de las encuestas tradicionales de opinión, nuestro algoritmo no evalúa eslóganes, sino que calcula tu afinidad matemática con el registro efectivo de votaciones en el Congreso de los Diputados de <strong>PSOE</strong>, <strong>PP</strong> y <strong>Vox</strong>.
        </p>
      </div>

      {!isFinished ? (
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-sm max-w-3xl mx-auto space-y-7">
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-500 font-bold">
              <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                Tema: {currentQ.topic}
              </span>
              <span className="font-mono text-slate-600">
                Pregunta {currentStep + 1} de {ALIGNMENT_QUESTIONS.length}
              </span>
            </div>

            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / ALIGNMENT_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question & Context */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {currentQ.question}
            </h3>
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
              <span className="font-bold text-slate-700">Contexto oficial: </span>
              {currentQ.context}
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.alignment)}
                className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-slate-800 hover:bg-slate-50/80 transition-all cursor-pointer group space-y-1.5 shadow-2xs hover:shadow-sm"
              >
                <div className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-slate-950 flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug">{opt.label}</span>
                </div>
                <div className="text-xs text-slate-500 pl-9 leading-relaxed font-normal">
                  {opt.explanation}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Controls */}
          {currentStep > 0 && (
            <div className="pt-2 flex justify-start">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-bold cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver a la pregunta anterior</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results Card */
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center pb-6 border-b border-slate-100">
            <span className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-600 mb-3 border border-emerald-200 shadow-2xs">
              <Award className="w-8 h-8" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Resultado de Afinidad Parlamentaria</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
              Concordancia matemática calculada cruzando tus respuestas con los votos efectivos en el Congreso de los Diputados (XV Legislatura):
            </p>
          </div>

          {/* Scores Breakdown */}
          <div className="space-y-4">
            {(['PSOE', 'PP', 'VOX'] as PartyId[]).map((partyId) => {
              const party = PARTIES[partyId];
              const score = scores[partyId];

              return (
                <div key={partyId} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="flex items-center gap-2" style={{ color: party.color }}>
                      <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: party.color }}></span>
                      <span className="font-black text-base">{party.name} ({party.acronym})</span>
                    </span>
                    <span className="text-xl font-black text-slate-900 font-mono">{score}% afinidad</span>
                  </div>

                  <div className="h-3 w-full bg-slate-200/80 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${score}%`, backgroundColor: party.color }}
                    ></div>
                  </div>

                  <div className="text-xs text-slate-500 pt-1 flex flex-wrap items-center justify-between gap-2">
                    <span>Ideología: <strong className="text-slate-700">{party.ideology}</strong></span>
                    <span>Líder: <strong className="text-slate-700">{party.currentLeader}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Restart Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md shadow-slate-900/10"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir cuestionario</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
