export type PartyId = 'PSOE' | 'PP' | 'VOX';

export interface Party {
  id: PartyId;
  name: string;
  acronym: string;
  color: string;
  accentBg: string;
  ideology: string;
  foundingYear: number;
  currentLeader: string;
  headquarters: string;
  europeanGroup: string;
  seatsCongreso: number; // Out of 350
  seatsSenado: number;   // Out of 266
  ccaaPresidencies: number; // Out of 17
  publicSubsidiesAnnualEur: string; // From BOE / Tribunal de Cuentas
  bankDebtEur: string;             // From Tribunal de Cuentas
  manifestoSummary: {
    economy: string;
    housing: string;
    immigration: string;
    territorial: string;
    environment: string;
  };
  officialManifestoUrl: string;
}

export type VoteOutcome = 'A_FAVOR' | 'EN_CONTRA' | 'ABSTENCION';

export type BillCategory = 
  | 'PENSIONES'
  | 'VIVIENDA'
  | 'FISCALIDAD'
  | 'LABORAL'
  | 'SANIDAD_EDUCACION'
  | 'JUSTICIA_TERRITORIO'
  | 'ENERGIA_CLIMA'
  | 'DEFENSA_SEGURIDAD';

export interface Bill {
  id: string;
  title: string;
  shortTitle: string;
  date: string;
  legislature: string;
  category: BillCategory;
  officialBoeUrl?: string;
  officialCongresoUrl: string;
  sponsor: string;
  objectiveSummary: string;
  proArguments: string; // Exposición de Motivos verbatim/neutral
  conArguments: string; // Diario de Sesiones recorded objections
  votes: {
    PSOE: VoteOutcome;
    PP: VoteOutcome;
    VOX: VoteOutcome;
  };
  result: 'APROBADA' | 'RECHAZADA';
}

export type JudicialStatus = 
  | 'SENTENCIA_FIRME'       // Supreme Court / National Court final verdict
  | 'JUICIO_ORAL'           // Formal trial hearings underway
  | 'EN_INSTRUCCION'        // Preliminary investigation (presumption of innocence)
  | 'ARCHIVADO_ABSUELTO';   // Exonerated / dismissed

export interface CriminalCase {
  id: string;
  title: string;
  party: PartyId;
  court: string;
  judicialStatus: JudicialStatus;
  crimesCharged: string[];
  defraudedAmountEur?: string;
  convictedCount?: number;
  partyInstitutionalLiability?: string; // e.g. Partícipe a título lucrativo
  summary: string;
  officialResolutionUrl: string;
  sentenceYearOrPeriod: string;
}

export type SanctioningBody = 'TRIBUNAL_DE_CUENTAS' | 'JEC' | 'OFICINA_CONFLICTO_INTERESES';

export interface AdministrativeSanction {
  id: string;
  title: string;
  body: SanctioningBody;
  party: PartyId;
  targetPersonOrEntity: string;
  infractionType: string;
  penalty: string;
  legalBasis: string;
  date: string;
  officialDocUrl: string;
  summary: string;
}

export type CrisisType = 'DANA_INUNDACION' | 'INCENDIO_FORESTAL' | 'MEDIOAMBIENTE' | 'RESIDENCIAS_COVID';

export interface RegionalCrisis {
  id: string;
  title: string;
  regionId: string;
  regionName: string;
  governingParty: 'PP' | 'PSOE' | 'COALICION_PP_VOX' | 'OTROS';
  governingDetails: string;
  date: string;
  crisisType: CrisisType;
  humanAndMaterialCost: string;
  competencyMatrix: {
    ccaaResponsibility: string; // Art. Ley 17/2015 Protección Civil
    centralGovernmentResponsibility: string;
  };
  timelineKeyPoints: Array<{
    time: string;
    event: string;
  }>;
  preventionBudgetAnalysis: string;
  investigativeCommissionStatus: string;
  judicialProceedingsUrl?: string;
  summary: string;
}

export interface Region {
  id: string;
  name: string;
  capital: string;
  president: string;
  governingParty: 'PP' | 'PSOE' | 'COALICION_PP_VOX' | 'OTROS';
  coalitionDetail: string;
  totalSeats: number;
  seats: {
    PP: number;
    PSOE: number;
    VOX: number;
    OTHERS: number;
  };
  population: string;
}

export interface AlignmentQuestion {
  id: string;
  topic: string;
  question: string;
  context: string;
  options: Array<{
    label: string;
    explanation: string;
    alignment: {
      PSOE: number; // -1 to 1
      PP: number;
      VOX: number;
    };
  }>;
}

export interface AiSearchResult {
  answer: string;
  relatedBills: Bill[];
  relatedCases: CriminalCase[];
  relatedSanctions: AdministrativeSanction[];
  relatedCrises: RegionalCrisis[];
  sourcesCited: string[];
}

export type PromiseStatus = 'CUMPLIDA' | 'PARCIAL' | 'INCUMPLIDA';

export interface PromisometroItem {
  id: string;
  party: PartyId;
  topic: string;
  headline: string;
  manifestoPromise: string;
  manifestoSourceCitation: string;
  governingReality: string;
  status: PromiseStatus;
  statusExplanation: string;
  officialVerificationUrl: string;
}

