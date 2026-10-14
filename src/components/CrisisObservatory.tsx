'use client';

import React, { useState } from 'react';
import { REGIONAL_CRISES } from '@/data/politicalData';
import { RegionalCrisis } from '@/types/politics';
import { ShieldAlert, AlertTriangle, Clock, MapPin, Building2, Flame, Droplets, Leaf, HeartPulse, CheckCircle2, Mountain, ExternalLink } from 'lucide-react';

export const CrisisObservatory: React.FC = () => {
  const [selectedCrisis, setSelectedCrisis] = useState<RegionalCrisis>(REGIONAL_CRISES[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const getCrisisIcon = (type: string) => {
    switch (type) {
      case 'DANA_INUNDACION':
        return <Droplets className="w-4 h-4 text-sky-600" />;
      case 'INCENDIO_FORESTAL':
        return <Flame className="w-4 h-4 text-orange-600" />;
      case 'MEDIOAMBIENTE':
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case 'RESIDENCIAS_COVID':
        return <HeartPulse className="w-4 h-4 text-rose-600" />;
      case 'VOLCAN_GEOLOGICO':
        return <Mountain className="w-4 h-4 text-amber-700" />;
      case 'EMERGENCIA_URBANA':
        return <Building2 className="w-4 h-4 text-purple-600" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
    }
  };

  const filteredCrises = REGIONAL_CRISES.filter((c) => {
    if (selectedCategory === 'ALL') return true;
    return c.crisisType === selectedCategory;
  });

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <ShieldAlert className="w-4 h-4 text-zinc-800" />
          <span>Protección Civil y Responsabilidad Institucional</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-1">
          Observatorio de Catástrofes y Gestión de Emergencias Regionales
        </h2>
        <p className="text-sm text-zinc-600 mt-1">
          En el sistema descentralizado español, las Comunidades Autónomas ostentan las competencias operativas directas de Protección Civil (Niveles 1 y 2), sanidad, montes y extinción de incendios. Este módulo analiza de forma objetiva la cronología de alertas, el marco legal de competencias (Ley 17/2015) y la rendición de cuentas presupuestaria en las <strong>{REGIONAL_CRISES.length} mayores catástrofes y crisis autonómicas</strong>.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-4 pt-3 border-t border-zinc-200 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-zinc-500 font-semibold mr-1">Filtrar tipo:</span>
          {[
            { id: 'ALL', label: `Todas (${REGIONAL_CRISES.length})` },
            { id: 'DANA_INUNDACION', label: 'Inundaciones y DANA' },
            { id: 'INCENDIO_FORESTAL', label: 'Incendios Forestales' },
            { id: 'MEDIOAMBIENTE', label: 'Medioambiente y Aguas' },
            { id: 'VOLCAN_GEOLOGICO', label: 'Volcanes y Geología' },
            { id: 'EMERGENCIA_URBANA', label: 'Emergencias Urbanas' },
            { id: 'RESIDENCIAS_COVID', label: 'Residencias COVID' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Crisis Selector List */}
        <div className="lg:col-span-1 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 px-1">
            Catástrofes Registradas ({filteredCrises.length})
          </div>
          {filteredCrises.map((crisis) => {
            const isSelected = selectedCrisis.id === crisis.id;
            return (
              <button
                key={crisis.id}
                onClick={() => setSelectedCrisis(crisis)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                    : 'bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                    {getCrisisIcon(crisis.crisisType)}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-700'
                  }`}>
                    {crisis.regionName}
                  </span>
                </div>

                <h3 className="font-bold text-sm mt-2 leading-snug">{crisis.title}</h3>
                <div className={`text-xs mt-1 ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Gobierno: {crisis.governingParty} • {crisis.date}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Crisis Full Dossier */}
        <div className="lg:col-span-2 bg-white border border-zinc-200 rounded-xl p-6 shadow-xs space-y-6">
          <div className="pb-4 border-b border-zinc-100">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span className="font-bold text-zinc-900">{selectedCrisis.regionName}</span>
              <span>• Fecha: {selectedCrisis.date}</span>
              <span>• Impacto: {selectedCrisis.humanAndMaterialCost}</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mt-2">{selectedCrisis.title}</h3>
            <div className="mt-2 p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-xs text-zinc-700">
              <span className="font-semibold text-zinc-900">Gobierno autonómico en el momento: </span>
              {selectedCrisis.governingDetails}
            </div>
          </div>

          {/* Legal Competency Matrix (Ley 17/2015 Protección Civil) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-zinc-600" />
              Marco Legal de Competencias (Ley 17/2015 del Sistema Nacional de Protección Civil)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-1.5">
                <span className="font-bold text-blue-900 block text-sm">
                  Competencia Autonómica (Comunidad Autónoma):
                </span>
                <p className="text-blue-950 leading-relaxed">
                  {selectedCrisis.competencyMatrix.ccaaResponsibility}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 space-y-1.5">
                <span className="font-bold text-purple-900 block text-sm">
                  Competencia Estatal (Gobierno Central / MITECO / UME):
                </span>
                <p className="text-purple-950 leading-relaxed">
                  {selectedCrisis.competencyMatrix.centralGovernmentResponsibility}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline of Key Alert Points */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-600" />
              Cronología Oficial de Alertas y Respuestas Operativas
            </h4>
            <div className="space-y-2.5">
              {selectedCrisis.timelineKeyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <span className="font-bold text-zinc-900 whitespace-nowrap bg-zinc-200 px-2 py-0.5 rounded">
                    {point.time}
                  </span>
                  <span className="text-zinc-700 leading-relaxed">{point.event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budgets & Prevention Controversy */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 space-y-1">
            <span className="font-bold text-amber-900 block text-sm">
              Debate Presupuestario y Medidas de Prevención Previas:
            </span>
            <p className="leading-relaxed">{selectedCrisis.preventionBudgetAnalysis}</p>
          </div>

          {/* Investigative Commission & Judicial Follow-up */}
          <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-600 space-y-1">
            <div className="font-semibold text-zinc-800">Comisiones de Investigación y Sedes Judiciales:</div>
            <p>{selectedCrisis.investigativeCommissionStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
