'use client';

import React, { useState } from 'react';
import { ALIGNMENT_QUESTIONS, PARTIES } from '@/data/politicalData';
import { calculateAlignmentScores } from '@/services/aiService';
import { Compass, CheckCircle2, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
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
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <Compass className="w-4 h-4 text-zinc-800" />
          <span>Brújula Electoral Basada en Votaciones Reales</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-1">
          Test de Afinidad y Coincidencia Política
        </h2>
        <p className="text-sm text-zinc-600 mt-1">
          Responde a 6 cuestiones clave de la actualidad política y económica. El sistema calcula matemáticamente tu afinidad objetiva con el registro real de votaciones en el Congreso de los Diputados de <strong>PSOE</strong>, <strong>PP</strong> y <strong>Vox</strong>.
        </p>
      </div>

      {!isFinished ? (
        <div className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-xs max-w-3xl mx-auto space-y-6">
          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs text-zinc-500 font-semibold mb-2">
              <span>Tema: {currentQ.topic}</span>
              <span>Pregunta {currentStep + 1} de {ALIGNMENT_QUESTIONS.length}</span>
            </div>
            <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-zinc-900 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / ALIGNMENT_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question & Context */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug">
              {currentQ.question}
            </h3>
            <p className="text-xs text-zinc-500 mt-1 italic">
              Contexto oficial: {currentQ.context}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.alignment)}
                className="w-full text-left p-4 rounded-xl border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-50 transition-all cursor-pointer group space-y-1"
              >
                <div className="font-semibold text-sm text-zinc-900 group-hover:text-zinc-950 flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full border border-zinc-300 flex items-center justify-center text-xs shrink-0 mt-0.5 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.label}</span>
                </div>
                <div className="text-xs text-zinc-500 pl-7">
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
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-800 font-semibold cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Volver a la pregunta anterior
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results Card */
        <div className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-xs max-w-3xl mx-auto space-y-6">
          <div className="text-center pb-5 border-b border-zinc-100">
            <span className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </span>
            <h3 className="text-2xl font-bold text-zinc-900">Resultado de Afinidad Electoral</h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg mx-auto">
              Grado de concordancia matemática con las posiciones oficiales y votaciones de cada formación parlamentaria:
            </p>
          </div>

          {/* Scores Breakdown */}
          <div className="space-y-4">
            {(['PSOE', 'PP', 'VOX'] as PartyId[]).map((partyId) => {
              const party = PARTIES[partyId];
              const score = scores[partyId];

              return (
                <div key={partyId} className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="flex items-center gap-2" style={{ color: party.color }}>
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: party.color }}></span>
                      {party.name} ({party.acronym})
                    </span>
                    <span className="text-lg font-extrabold text-zinc-900">{score}% de afinidad</span>
                  </div>

                  <div className="h-3 w-full bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${score}%`, backgroundColor: party.color }}
                    ></div>
                  </div>

                  <p className="text-xs text-zinc-500 pt-1">
                    Ideología declarada: {party.ideology} • Líder: {party.currentLeader}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Restart */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Repetir cuestionario
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
