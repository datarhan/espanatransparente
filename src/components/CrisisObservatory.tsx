'use client';

import React, { useState } from 'react';
import { REGIONAL_CRISES } from '@/data/politicalData';
import { RegionalCrisis } from '@/types/politics';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Building2, 
  Flame, 
  Droplets, 
  Leaf, 
  HeartPulse, 
  CheckCircle2, 
  Mountain, 
  ExternalLink,
  Info,
  Calendar,
  Layers,
  FileCheck
} from 'lucide-react';

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
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-1">
              <ShieldAlert className="w-4 h-4 text-slate-800" />
              <span>Protección Civil • Ley 17/2015 • Rendición de Cuentas</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Observatorio de Catástrofes y Gestión de Emergencias Autonómicas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              En el modelo autonómico español, las Comunidades Autónomas asumen la dirección operativa y mando único de Protección Civil (Niveles 1 y 2, CECOPI) y extinción de incendios. Este módulo analiza con neutralidad forense la cronología de alertas oficiales, las competencias concurrentes del Estado (UME, AEMET, CHJ) y las comisiones parlamentarias y judiciales en las <strong>{REGIONAL_CRISES.length} mayores crisis registradas</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span>{REGIONAL_CRISES.length} Catástrofes Auditadas</span>
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-500 font-semibold mr-1">Filtrar por tipología:</span>
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
              className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 border border-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Crisis Selector List */}
        <div className="lg:col-span-1 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 flex items-center justify-between">
            <span>Catástrofes Registradas ({filteredCrises.length})</span>
            <span className="text-[11px] font-normal text-slate-400">Selecciona para ver informe</span>
          </div>

          <div className="space-y-2.5">
            {filteredCrises.map((crisis) => {
              const isSelected = selectedCrisis.id === crisis.id;
              return (
                <button
                  key={crisis.id}
                  onClick={() => setSelectedCrisis(crisis)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                      : 'bg-white text-slate-800 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/70 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-slate-800' : 'bg-slate-100'}`}>
                        {getCrisisIcon(crisis.crisisType)}
                      </span>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {crisis.regionName}
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold ${isSelected ? 'text-slate-400' : 'text-slate-400'}`}>
                      {crisis.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm leading-snug line-clamp-2">{crisis.title}</h3>

                  <div className={`text-xs flex items-center justify-between pt-1 border-t ${
                    isSelected ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-500'
                  }`}>
                    <span>Gobierno: <strong className={isSelected ? 'text-white' : 'text-slate-800'}>{crisis.governingParty}</strong></span>
                    <span className="text-[11px] truncate max-w-[140px]">{crisis.humanAndMaterialCost}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Crisis Full Dossier */}
        <div className="lg:col-span-2 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
          {/* Dossier Header */}
          <div className="pb-5 border-b border-slate-100 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-black text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-md">
                {selectedCrisis.regionName}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-slate-600 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                {selectedCrisis.date}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
                Coste e Impacto: {selectedCrisis.humanAndMaterialCost}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              {selectedCrisis.title}
            </h3>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700">
              <span className="font-bold text-slate-900">Gobierno autonómico en el momento del suceso: </span>
              {selectedCrisis.governingDetails}
            </div>
          </div>

          {/* Legal Competency Matrix (Ley 17/2015 Protección Civil) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-slate-700" />
              Marco Legal de Competencias y Mando Único (Ley 17/2015 del Sistema Nacional de Protección Civil)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* CCAA Responsibility Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-black text-blue-900 block text-xs uppercase tracking-wider">
                    Competencia Autonómica (Mando y CECOPI)
                  </span>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    Nivel 1 y 2
                  </span>
                </div>
                <p className="text-blue-950 leading-relaxed font-normal">
                  {selectedCrisis.competencyMatrix.ccaaResponsibility}
                </p>
              </div>

              {/* Central Government Responsibility Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-black text-purple-900 block text-xs uppercase tracking-wider">
                    Competencia Estatal (AEMET, CHJ, UME, Nivel 3)
                  </span>
                  <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                    Coordinación
                  </span>
                </div>
                <p className="text-purple-950 leading-relaxed font-normal">
                  {selectedCrisis.competencyMatrix.centralGovernmentResponsibility}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline of Key Alert Points */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-700" />
              Cronología Oficial de Alertas, Avisos y Respuestas Operativas
            </h4>

            <div className="space-y-2.5">
              {selectedCrisis.timelineKeyPoints.map((point, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3.5 text-xs p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 transition-all hover:bg-slate-50"
                >
                  <span className="font-bold text-slate-900 whitespace-nowrap bg-white border border-slate-200 px-2.5 py-1 rounded-lg shrink-0 shadow-2xs font-mono text-[11px]">
                    {point.time}
                  </span>
                  <span className="text-slate-700 leading-relaxed pt-0.5">{point.event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budgets & Prevention Controversy */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
            <span className="font-black text-amber-900 block text-xs uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Auditoría Presupuestaria y Medidas Previas de Contención
            </span>
            <p className="leading-relaxed font-normal">{selectedCrisis.preventionBudgetAnalysis}</p>
          </div>

          {/* Investigative Commission & Judicial Follow-up */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
            <div className="font-black text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-slate-700" />
              Comisiones de Investigación Parlamentarias y Diligencias Judiciales
            </div>
            <p className="leading-relaxed text-slate-600">{selectedCrisis.investigativeCommissionStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
