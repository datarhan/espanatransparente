'use client';

import React, { useState } from 'react';
import { 
  Vote, 
  Check, 
  X, 
  Minus, 
  ExternalLink, 
  Search, 
  Filter, 
  BookOpen, 
  Building2, 
  Layers, 
  Scale, 
  Calendar,
  History,
  ShieldCheck,
  Radio,
  AlertTriangle
} from 'lucide-react';
import CongressHemicycle from './CongressHemicycle';
import PactometriaMatrix from './PactometriaMatrix';

export type VoteDecision = 'AFIRMATIVO' | 'CONTRA' | 'ABSTENCIÓN';

export interface IncongruenceAlert {
  party: string;
  headline: string;
  publicClaim: string;
  context: string;
  actualVote: string;
}

export interface VotingRecord {
  id: string;
  lawName: string;
  officialTitle: string;
  date: string;
  legislature: 'XV Legislatura' | 'XIV Legislatura' | 'XII Legislatura' | 'X Legislatura';
  category: string;
  summary: string;
  proArguments: string;
  conArguments: string;
  ppVote: VoteDecision;
  psoeVote: VoteDecision;
  voxVote: VoteDecision;
  otrosVoteSummary: string;
  totalYes: number;
  totalNo: number;
  totalAbstain: number;
  result: 'APROBADA' | 'RECHAZADA';
  journalUrl: string;
  boeUrl?: string;
  isRecentHighlight?: boolean;
  incongruenceAlert?: IncongruenceAlert;
}

const VOTE_BADGE_STYLES: Record<VoteDecision, string> = {
  AFIRMATIVO: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  CONTRA: 'bg-rose-50 text-rose-800 border-rose-200',
  ABSTENCIÓN: 'bg-amber-50 text-amber-800 border-amber-200',
};

export const CONGRESO_VOTES: VotingRecord[] = [
  // --- LEY DESTACADA 2024-2025: TRANSPARENCIA DE MEDIOS Y PUBLICIDAD INSTITUCIONAL ---
  {
    id: 'transparencia-medios-emfa-2024',
    lawName: 'Ley de Transparencia de Medios, Financiación Pública y Registro de la CNMC (Plan por la Democracia / EMFA)',
    officialTitle: 'Transposición del Reglamento Europeo de Libertad de Medios de Comunicación (Reglamento UE 2024/1083 - EMFA) y reforma de la Ley de Publicidad Institucional',
    date: '17 de septiembre de 2024 (Aprobación y remisión a Cortes)',
    legislature: 'XV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    isRecentHighlight: true,
    summary: 'Obliga a todos los medios de comunicación y plataformas digitales a hacer pública su estructura de propiedad (accionistas y beneficiarios últimos) y el desglose de ingresos por publicidad institucional y subvenciones públicas de TODAS las administraciones (estatal, autonómica y local) en un registro oficial abierto gestionado por la CNMC, fijando topes para evitar la financiación opaca de portales de desinformación.',
    proArguments: 'PSOE y Sumar defendieron que la transparencia financiera es un imperativo del Reglamento Europeo EMFA para garantizar el derecho ciudadano a recibir información veraz (Art. 20 CE), erradicar la compra de voluntades editoriales con dinero público por autonomías y ayuntamientos, y desarticular las redes opacas de pseudomedios y bulos.',
    conArguments: 'PP y Vox denunciaron la iniciativa como un intento gubernamental de censura y persecución a la prensa crítica ("comité de la verdad"), advirtiendo de que busca asfixiar económicamente a medios independientes que destapan casos de presunta corrupción y fiscalizan al Ejecutivo.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Bildu (6), PNV (5), BNG (1), Podemos (4): AFIRMATIVO (50) • UPN (1), CC (1): CONTRA',
    totalYes: 178,
    totalNo: 171,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es',
    incongruenceAlert: {
      party: 'PP & VOX',
      headline: 'PP y Vox: Discurso contra la manipulación informativa, pero voto EN CONTRA de hacer pública la publicidad institucional',
      publicClaim: 'Critican la supuesta compra de voluntades editoriales y exigen neutralidad de los medios frente a la propaganda estatal.',
      context: 'Debates parlamentarios sobre libertad de prensa y neutralidad de RTVE',
      actualVote: 'Votaron EN CONTRA de abrir el registro público de la CNMC que obliga a destapar quién financia a los medios con dinero público de CCAA y ayuntamientos.'
    }
  },

  // --- LEYES CLAVE XV LEGISLATURA (2023 - 2026) ---
  {
    id: 'ley-amnistia-2024',
    lawName: 'Ley Orgánica de Amnistía para la Normalización Institucional en Cataluña',
    officialTitle: 'Ley Orgánica 1/2024, de 10 de junio, de amnistía para la normalización institucional, política y social en Cataluña',
    date: '30 de mayo de 2024 (Vigente XV Leg.)',
    legislature: 'XV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Extingue la responsabilidad penal, administrativa y contable de los actos vinculados al proceso independentista catalán entre 2011 y 2023.',
    proArguments: 'PSOE y socios defendieron la ley como paso ineludible para superar la fractura civil en Cataluña, devolver el conflicto a las vías democráticas y asegurar la estabilidad de la gobernabilidad nacional.',
    conArguments: 'PP y Vox denunciaron que quiebra la separación de poderes, vulnera el principio de igualdad ante la ley (Art. 14 CE) e intercambia impunidad judicial por votos parlamentarios de investidura.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Junts (7), Bildu (6), PNV (5), BNG (1), Podemos (4): AFIRMATIVO (57) • UPN (1), CC (1): CONTRA',
    totalYes: 177,
    totalNo: 172,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2024/06/09/1',
    incongruenceAlert: {
      party: 'PSOE',
      headline: 'PSOE: Sánchez prometió antes de las elecciones que la amnistía era inconstitucional, pero la aprobó con Junts',
      publicClaim: 'Pedro Sánchez: "El independentismo pedía la amnistía, algo que desde luego este Gobierno no va a aceptar y que no cabe en la Constitución Española."',
      context: 'Declaraciones públicas en campaña electoral (julio 2023)',
      actualVote: 'El Grupo Socialista registró y votó A FAVOR de la Ley Orgánica 1/2024 para asegurar los 7 votos imprescindibles de Junts en la investidura.'
    }
  },
  {
    id: 'cgpj-reforma-2024',
    lawName: 'Renovación Bipartita del Consejo General del Poder Judicial y Ley de Méritos',
    officialTitle: 'Ley Orgánica de reforma de la Ley Orgánica del Poder Judicial y del Estatuto Orgánico del Ministerio Fiscal',
    date: '23 de julio de 2024',
    legislature: 'XV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Pacto bipartito entre PSOE y PP con mediación de la Comisión Europea para desbloquear tras 5 años la renovación de los 20 vocales y encomendar una propuesta de elección por jueces.',
    proArguments: 'Puso fin a la crisis institucional que paralizaba nombramientos del Tribunal Supremo y fortaleció el régimen de mayorías reforzadas para evitar la politización de la cúpula judicial.',
    conArguments: 'Vox se opuso tachando el acuerdo de reparto partidista de asientos. Los socios de izquierda (ERC, Bildu, Podemos) votaron en contra o abstención criticando la exclusión de otras sensibilidades.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar: AFIRMATIVO (27) • PNV: AFIRMATIVO (5) • ERC, Junts, Bildu, Podemos: CONTRA o ABSTENCIÓN (25)',
    totalYes: 258,
    totalNo: 47,
    totalAbstain: 33,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es',
  },
  {
    id: 'ley-ela-2024',
    lawName: 'Ley ELA de Atención Integral a Personas con Procesos Neurológicos Irreversibles',
    officialTitle: 'Ley para la mejora de la calidad de vida de personas con ELA y otras enfermedades neurodegenerativas',
    date: '10 de octubre de 2024',
    legislature: 'XV Legislatura',
    category: 'SANIDAD_EDUCACION',
    summary: 'Reconoce la discapacidad del 33% inmediata al diagnóstico, agiliza la dependencia y financia cuidados continuos de enfermería 24 horas para pacientes avanzados.',
    proArguments: 'Aprobación por unanimidad absoluta de todos los partidos. Responde a una demanda ética urgente para dotar a los pacientes de dignidad y evitar que la falta de recursos obligue a desistir de vivir.',
    conArguments: 'Consenso parlamentario total (344 votos favorables, 0 en contra). El debate se centró en la exigencia a Hacienda de dotar la memoria económica con 500 millones de euros anuales.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'AFIRMATIVO',
    otrosVoteSummary: 'Sumar, ERC, Junts, Bildu, PNV, BNG, CC, UPN, Podemos: AFIRMATIVO UNÁNIME (59)',
    totalYes: 344,
    totalNo: 0,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es',
  },
  {
    id: 'rdl-anticrisis-2026',
    lawName: 'Real Decreto-Ley de Medidas de Apoyo Económico y Bonificación al Transporte',
    officialTitle: 'RDL de prórroga de ayudas frente a la inflación y transporte urbano bonificado',
    date: '28 de enero de 2026',
    legislature: 'XV Legislatura',
    category: 'FISCALIDAD',
    summary: 'Mantiene las bonificaciones tarifarias estatales en trenes y autobuses urbanos y la reducción de cargas impositivas en suministros energéticos básicos.',
    proArguments: 'Protege las rentas de los hogares trabajadores ante el encarecimiento acumulado del coste de la vida y fomenta el uso de movilidad colectiva descarbonizada.',
    conArguments: 'PP se abstuvo por considerar insuficiente la rebaja fiscal y reclamar deducciones en carne y pescado. Vox votó en contra al denunciar un gasto público clientelar insostenible.',
    ppVote: 'ABSTENCIÓN',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Bildu (6), PNV (5), BNG (1), CC (1): AFIRMATIVO (47) • Junts: ABSTENCIÓN (7)',
    totalYes: 173,
    totalNo: 34,
    totalAbstain: 143,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es',
  },
  {
    id: 'financiacion-singular-cataluna',
    lawName: 'Propuesta de Financiación Singular y Concierto Económico para Cataluña',
    officialTitle: 'Debate de conjunto sobre el modelo de cesión del 100% de la recaudación tributaria autonómica',
    date: '12 de marzo de 2025',
    legislature: 'XV Legislatura',
    category: 'FISCALIDAD',
    summary: 'Habilita a la Agencia Tributaria de Cataluña para recaudar IRPF, IVA y Sociedades con una cuota de solidaridad interterritorial.',
    proArguments: 'Cumple el acuerdo político de investidura de la Generalitat, reconoce las singularidades del autogobierno catalán y corrige el déficit de balanzas fiscales.',
    conArguments: 'PP y Vox denunciaron la quiebra del principio de solidaridad y de igualdad constitucional (Art. 138 y 139 CE), retirando fondos comunes a las comunidades de menor renta.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Junts (7), Bildu (6), PNV (5), BNG (1): AFIRMATIVO (53) • CC (1), UPN (1): CONTRA',
    totalYes: 177,
    totalNo: 172,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es',
  },
  {
    id: 'reforma-extranjeria-menores',
    lawName: 'Reforma del Artículo 35 de la Ley de Extranjería (Reparto Obligatorio de Menores)',
    officialTitle: 'Proposición de Ley de modificación de la Ley Orgánica 4/2000 para la redistribución territorial vinculante',
    date: '23 de julio de 2024',
    legislature: 'XV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Fijaba un cupo vinculante de traslado de menores migrantes no acompañados a todas las CCAA cuando la capacidad de acogida de una región frontera superase el 150%.',
    proArguments: 'Canarias y el Gobierno defendieron el mecanismo para evitar el colapso asistencial de las islas y garantizar la tutela humanitaria exigida por la convención de infancia.',
    conArguments: 'PP, Vox y Junts tumbaron la toma en consideración. El PP acusó al Gobierno de improvisar sin dotar financiación; Vox exigió repatriaciones y Junts vetó la obligación en Cataluña.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Bildu (6), PNV (5), BNG (1), CC (1): AFIRMATIVO (47) • Junts (7): CONTRA',
    totalYes: 171,
    totalNo: 177,
    totalAbstain: 0,
    result: 'RECHAZADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'jornada-laboral-37-horas',
    lawName: 'Reforma del Estatuto para la Reducción de la Jornada Laboral a 37,5 Horas',
    officialTitle: 'Proposición de Ley de reducción de la jornada máxima legal sin disminución salarial',
    date: '20 de noviembre de 2024',
    legislature: 'XV Legislatura',
    category: 'LABORAL',
    summary: 'Rebaja obligatoria de 40 a 37,5 horas semanales de promedio anual e implantación de un sistema de registro horario digital supervisado por la Inspección.',
    proArguments: 'Moderniza la jornada laboral inalterada desde 1983, traslada el aumento de productividad tecnológica a la clase trabajadora y mejora la conciliación familiar.',
    conArguments: 'PP y Vox se opusieron alegando que imponerlo por ley y sin consenso de la patronal castiga a pymes, hostelería y comercios en sus costes operativos.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Bildu (6), BNG (1), Podemos (4): AFIRMATIVO (45) • PNV (5), Junts (7): ABSTENCIÓN / CONDICIONADO',
    totalYes: 178,
    totalNo: 170,
    totalAbstain: 1,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es',
  },
  {
    id: 'ley-paridad-2024',
    lawName: 'Ley Orgánica de Representación Paritaria y Presencia Equilibrada',
    officialTitle: 'Ley Orgánica 2/2024 de representación paritaria en consejos de administración y órganos públicos',
    date: '27 de junio de 2024',
    legislature: 'XV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Fija una cuota mínima del 40% de presencia femenina en el Consejo de Ministros, cotizadas del Ibex 35, colegios profesionales y listas cremallera.',
    proArguments: 'Derriba el techo de cristal estructural y promueve la igualdad real en las cúpulas corporativas e institucionales conforme a las directivas europeas.',
    conArguments: 'PP y Vox votaron en contra argumentando que las cuotas coactivas discriminan el mérito y la capacidad individual, y restringen la libertad de las empresas privadas.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Sumar (27), ERC (7), Bildu (6), PNV (5), BNG (1), Podemos (4): AFIRMATIVO (50) • UPN (1), CC (1): CONTRA',
    totalYes: 178,
    totalNo: 171,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2024/08/01/2',
  },
  {
    id: 'ayuda-militar-seguridad-ucrania',
    lawName: 'Ratificación del Compromiso Bilateral y Envío de Material Militar a Ucrania',
    officialTitle: 'Acuerdo en materia de cooperación de seguridad entre el Reino de España y Ucrania',
    date: '28 de mayo de 2024',
    legislature: 'XV Legislatura',
    category: 'DEFENSA_SEGURIDAD',
    summary: 'Acuerdo para el suministro de material defensivo, misiles Patriot, munición y carros Leopard por valor de 1.000 millones de euros.',
    proArguments: 'PSOE, PP y Vox coincidieron en el deber de asistir a una nación democrática soberana víctima de la agresión ilegal del régimen ruso y cumplir con la OTAN y la UE.',
    conArguments: 'Votaron a favor PSOE, PP y Vox. Las discrepancias vinieron de Sumar y Podemos, que rechazaron el incremento del gasto militar sin votación pormenorizada previa.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'AFIRMATIVO',
    otrosVoteSummary: 'PNV (5), Junts (7), CC (1), UPN (1): AFIRMATIVO • Sumar (27), Podemos (4), Bildu (6), BNG (1): CONTRA / ABSTENCIÓN',
    totalYes: 288,
    totalNo: 35,
    totalAbstain: 26,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es',
  },

  // --- LEYES CLAVE XIV LEGISLATURA (2019 - 2023) ---
  {
    id: 'ley-vivienda-2023',
    lawName: 'Ley Estatal de Vivienda y Regulación de Precios de Alquiler',
    officialTitle: 'Ley 12/2023, de 24 de mayo, por el derecho a la vivienda',
    date: '27 de abril de 2023',
    legislature: 'XIV Legislatura',
    category: 'VIVIENDA',
    summary: 'Marco estatal que faculta a las CCAA para declarar zonas tensionadas y topar alquileres, define gran tenedor e introduce garantías procesales ante desahucios.',
    proArguments: 'Garantiza la vivienda como derecho social frente a la especulación, frenando subidas desproporcionadas en áreas metropolitanas que asfixian a jóvenes y familias de rentas medias.',
    conArguments: 'PP y Vox argumentaron que invade competencias exclusivas autonómicas, genera inseguridad jurídica a propietarios y provoca la contracción de la oferta de alquiler residencial.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'ERC (13), Bildu (5), Más País (2), Compromís (1): AFIRMATIVO • PNV (6), Junts (4), PDeCAT (4): CONTRA/ABSTENCIÓN',
    totalYes: 176,
    totalNo: 167,
    totalAbstain: 1,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/l/2023/05/24/12',
  },
  {
    id: 'reforma-laboral-2022',
    lawName: 'Reforma Laboral del Diálogo Social y Fijeza Contractual',
    officialTitle: 'Real Decreto-ley 32/2021 de medidas urgentes para la reforma laboral',
    date: '3 de febrero de 2022',
    legislature: 'XIV Legislatura',
    category: 'LABORAL',
    summary: 'Pactada con CEOE, CCOO y UGT. Suprime los contratos de obra y servicio, instaura el contrato indefinido como regla general y recupera la ultraactividad de convenios.',
    proArguments: 'Redujo la tasa histórica de temporalidad laboral a mínimos de la serie estadística, aportando certidumbre a los trabajadores sin mermar la creación de empleo registrado.',
    conArguments: 'PP y Vox señalaron que restringe la flexibilidad empresarial, encarece costes laborales de pymes y utiliza la figura del fijo discontinuo para maquillar el desempleo estacional.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Cs (9), PDeCAT (4), PNV (6), Más País (2), CC (1), PRC (1): AFIRMATIVO • ERC (13), Bildu (5): CONTRA',
    totalYes: 175,
    totalNo: 174,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/rdl/2021/12/28/32',
    incongruenceAlert: {
      party: 'PP',
      headline: 'PP: Votó NO tachándola de destructora de empleo y luego Feijóo admitió en campaña que era un buen pacto',
      publicClaim: 'Prometieron derogar la reforma laboral tachándola de dañina para las empresas; año y medio después Feijóo declaró que era "una buena reforma avalada por la CEOE".',
      context: 'Diario de Sesiones (feb 2022) frente a declaraciones en Bruselas (jul 2023)',
      actualVote: 'El PP votó EN CONTRA en bloque en el Congreso (se aprobó por 175 a 174 tras el voto por error de Alberto Casero).'
    }
  },
  {
    id: 'pensiones-ipc-2021',
    lawName: 'Revalorización Legal de las Pensiones Públicas Conforme al IPC',
    officialTitle: 'Ley 21/2021, de garantía del poder adquisitivo de las pensiones',
    date: '2 de diciembre de 2021',
    legislature: 'XIV Legislatura',
    category: 'PENSIONES',
    summary: 'Derogó el factor de sostenibilidad de 2013 y consagró por ley la actualización obligatoria anual de las pensiones contributivas según el IPC medio de inflación.',
    proArguments: 'Protege a más de 9 millones de pensionistas de la pérdida de poder adquisitivo por alzas de precios, cumpliendo el mandato del Pacto de Toledo.',
    conArguments: 'PP y Vox alertaron sobre el riesgo actuarial de déficit estructural en la Seguridad Social al concentrarse las jubilaciones de la generación del baby-boom.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Más País, Compromís: AFIRMATIVO (176) • Cs: ABSTENCIÓN (6)',
    totalYes: 176,
    totalNo: 148,
    totalAbstain: 6,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/l/2021/12/28/21',
    incongruenceAlert: {
      party: 'PP',
      headline: 'El PP afirma que siempre apoyó subir las pensiones con el IPC, pero votó EN CONTRA en el Congreso',
      publicClaim: 'Alberto Núñez Feijóo afirmó en televisión: "El PP siempre ha revalorizado las pensiones conforme al IPC... es absolutamente falso que hayamos votado en contra".',
      context: 'Entrevista en directo en TVE (julio 2023)',
      actualVote: 'El Grupo Popular emitió 88 votos en contra (148 votos NO en total junto a Vox) para rechazar la Ley 21/2021 que blindó la revalorización con el IPC.'
    }
  },
  {
    id: 'ingreso-minimo-vital-2020',
    lawName: 'Creación del Ingreso Mínimo Vital (IMV) como Red Social Permanente',
    officialTitle: 'Real Decreto-ley 20/2020, de 29 de mayo, por el que se establece el ingreso mínimo vital',
    date: '10 de junio de 2020',
    legislature: 'XIV Legislatura',
    category: 'FISCALIDAD',
    summary: 'Crea una prestación no contributiva de la Seguridad Social para garantizar un nivel mínimo de renta a los hogares en situación de vulnerabilidad económica extrema.',
    proArguments: 'Suelo de protección social permanente que combate la pobreza severa e infantil en España, homologando el escudo social al estándar de la Unión Europea.',
    conArguments: 'Vox se abstuvo denunciando "efecto llamada" a la inmigración irregular y riesgo de desincentivar la búsqueda activa de empleo. El PP votó a favor exigiendo agilizar la burocracia.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'ABSTENCIÓN',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Cs, Más País, Compromís: AFIRMATIVO UNÁNIME (177)',
    totalYes: 297,
    totalNo: 0,
    totalAbstain: 52,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/rdl/2020/05/29/20',
  },
  {
    id: 'bajada-iva-alimentos-2023',
    lawName: 'Supresión / Rebaja Temporal del IVA en la Cesta de Alimentos Básicos',
    officialTitle: 'Real Decreto-ley 20/2022 de medidas de respuesta a las consecuencias de la guerra en Ucrania',
    date: '24 de enero de 2023',
    legislature: 'XIV Legislatura',
    category: 'FISCALIDAD',
    summary: 'Fijó al 0% el IVA en leche, pan, huevos, frutas y verduras, y rebajó del 10% al 5% el gravamen del aceite de oliva y pastas.',
    proArguments: 'Alivio fiscal directo e inmediato en el ticket de compra de millones de hogares vulnerables golpeados por el incremento internacional de materias primas.',
    conArguments: 'El PP respaldó la convalidación pero exigió extender la rebaja a la carne y el pescado. Vox se abstuvo por juzgar que no compensaba la recaudación récord del Estado.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'ABSTENCIÓN',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Cs, PDeCAT, Más País: AFIRMATIVO (175)',
    totalYes: 175,
    totalNo: 33,
    totalAbstain: 142,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/rdl/2022/12/27/20',
  },
  {
    id: 'impuesto-banca-energeticas',
    lawName: 'Gravamen Extraordinario sobre Beneficios de Banca y Grandes Operadores Energéticos',
    officialTitle: 'Ley 38/2022 para el establecimiento de gravámenes temporales energético y de entidades de crédito',
    date: '24 de noviembre de 2022',
    legislature: 'XIV Legislatura',
    category: 'FISCALIDAD',
    summary: 'Prestación patrimonial del 4,8% sobre margen de intereses y comisiones bancarias y del 1,2% sobre ingresos de petroleras y eléctricas por beneficios extraordinarios.',
    proArguments: 'Garantiza justicia tributaria: quienes obtuvieron márgenes récord por las subidas de tipos y gas deben contribuir de forma proporcionada a financiar las ayudas sociales.',
    conArguments: 'PP y Vox denunciaron que lastra la competitividad de las entidades financieras, merma el flujo de crédito y las compañías acaban trasladando el coste a los clientes.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Más País, Compromís: AFIRMATIVO (65)',
    totalYes: 186,
    totalNo: 152,
    totalAbstain: 10,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/l/2022/12/27/38',
    incongruenceAlert: {
      party: 'PP',
      headline: 'PP: Discurso de aliviar a las familias asfixiadas por las hipotecas, pero voto EN CONTRA de gravar beneficios récord a la banca',
      publicClaim: 'El PP denuncia la asfixia de las clases medias por la subida de los tipos de interés y los recibos de la luz.',
      context: 'Sesiones de control al Gobierno en el Congreso (2022)',
      actualVote: 'El Grupo Popular votó en contra de la Ley 38/2022 que fijó un gravamen temporal sobre los beneficios extraordinarios de la banca y eléctricas.'
    }
  },
  {
    id: 'cambio-climatico-2021',
    lawName: 'Ley de Cambio Climático y Transición hacia una Economía Descarbonizada',
    officialTitle: 'Ley 7/2021, de 20 de mayo, de cambio climático y transición energética',
    date: '13 de mayo de 2021',
    legislature: 'XIV Legislatura',
    category: 'ENERGIA_CLIMA',
    summary: 'Prohibió la exploración de hidrocarburos y fracking, fijó el objetivo de neutralidad climática en 2050 y obligó a municipios de más de 50.000 habitantes a crear ZBE.',
    proArguments: 'Alinea la normativa española con el Acuerdo de París, protege la salud de las ciudades y promueve la autosuficiencia energética mediante energías limpias.',
    conArguments: 'El PP se abstuvo advirtiendo del impacto en la industria del automóvil por calendarios muy acelerados. Vox votó en contra denunciando pérdida de soberanía industrial.',
    ppVote: 'ABSTENCIÓN',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Cs, Compromís: AFIRMATIVO',
    totalYes: 179,
    totalNo: 52,
    totalAbstain: 89,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/l/2021/05/20/7',
  },
  {
    id: 'ley-eutanasia-2021',
    lawName: 'Ley Orgánica de Regulación de la Eutanasia y Muerte Digna',
    officialTitle: 'Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia',
    date: '18 de marzo de 2021',
    legislature: 'XIV Legislatura',
    category: 'SANIDAD_EDUCACION',
    summary: 'Reconoce la prestación de ayuda médica a morir en el Sistema Nacional de Salud para personas con sufrimiento intolerable por enfermedad incurable o invalidante.',
    proArguments: 'Garantiza el derecho a la autonomía personal y a decidir con libertad el final de la propia vida bajo un estricto control médico y de evaluación colegiada.',
    conArguments: 'PP y Vox votaron en contra defendiendo la inviolabilidad del derecho a la vida (Art. 15 CE) y la prioridad absoluta de un plan de cuidados paliativos avanzados.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Cs, Más País, Compromís, BNG: AFIRMATIVO',
    totalYes: 202,
    totalNo: 141,
    totalAbstain: 2,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2021/03/24/3',
  },
  {
    id: 'ley-solo-si-es-si-2022',
    lawName: 'Ley de Garantía Integral de la Libertad Sexual ("Solo Sí es Sí" - Texto Original)',
    officialTitle: 'Ley Orgánica 10/2022 de garantía integral de la libertad sexual',
    date: '25 de agosto de 2022',
    legislature: 'XIV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Eliminó la distinción entre abuso y agresión sexual, situando el consentimiento en el centro, pero fusionó tipos penales reduciendo las penas mínimas.',
    proArguments: 'Acabó con la exigencia a las víctimas de probar violencia física para calificar la agresión y creó una red pública de centros de atención integral 24 horas.',
    conArguments: 'PP y Vox advirtieron del defecto de técnica legislativa que desencadenaría revisiones a la baja y excarcelaciones de reclusos (más de 1.200 condenas rebajadas).',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Más País, Compromís: AFIRMATIVO',
    totalYes: 205,
    totalNo: 141,
    totalAbstain: 3,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2022/09/06/10',
  },
  {
    id: 'reforma-penal-si-es-si-2023',
    lawName: 'Reforma del Código Penal de la Ley del Solo Sí es Sí (Pacto PSOE-PP)',
    officialTitle: 'Ley Orgánica 4/2023 de modificación de la Ley Orgánica 10/2022 de libertad sexual',
    date: '20 de abril de 2023',
    legislature: 'XIV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Reintrodujo un subtipo agravado si media violencia o intimidación para recuperar las horquillas de penas mínimas anteriores para futuros delitos.',
    proArguments: 'PSOE y PP unieron sus votos para frenar las rebajas de condena y devolver el rigor punitivo a los agresores sexuales violentos.',
    conArguments: 'Vox se opuso por considerarlo insuficiente reclamando la derogación íntegra. Unidas Podemos votó en contra acusando a sus socios de volver al calvario probatorio.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Cs (9), PNV (6), PDeCAT (4): AFIRMATIVO • Unidas Podemos (32), ERC (13), Bildu (5): CONTRA',
    totalYes: 233,
    totalNo: 59,
    totalAbstain: 4,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2023/04/27/4',
  },
  {
    id: 'ley-trans-2023',
    lawName: 'Ley de Autodeterminación de Género y Derechos de las Personas LGTBI',
    officialTitle: 'Ley 4/2023 para la igualdad real de las personas trans y para la garantía de los derechos LGTBI',
    date: '16 de febrero de 2023',
    legislature: 'XIV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Reconoció el cambio registral de sexo a partir de los 16 años sin necesidad de informe médico ni terapia hormonal, y prohibió las terapias de conversión.',
    proArguments: 'Despatologiza la identidad trans siguiendo las directrices de la OMS y consagra la no discriminación laboral y social del colectivo LGTBI.',
    conArguments: 'PP y Vox denunciaron que desprotege a menores frente a tratamientos irreversibles, altera las leyes de paridad y perjudica las categorías deportivas femeninas.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PNV, Más País, Compromís: AFIRMATIVO',
    totalYes: 191,
    totalNo: 60,
    totalAbstain: 91,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/l/2023/02/28/4',
  },
  {
    id: 'derogacion-sedicion-malversacion-2022',
    lawName: 'Derogación del Delito de Sedición y Modificación del Delito de Malversación',
    officialTitle: 'Ley Orgánica 14/2022 de modificación del Código Penal en materia de delitos de desórdenes y malversación',
    date: '15 de diciembre de 2022',
    legislature: 'XIV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Suprimió la sedición sustituyéndola por desórdenes públicos agravados y distinguió en la malversación entre el desvío con lucro personal y sin lucro para otros fines.',
    proArguments: 'El Gobierno defendió que homologaba las penas a las democracias europeas y favorecía la pacificación del clima social e institucional en Cataluña.',
    conArguments: 'PP y Vox denunciaron que se trataba de una reforma penal a medida para rebajar penas a dirigentes procesados, desprotegiendo el patrimonio del Estado.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, Bildu, PDeCAT: AFIRMATIVO • Cs, Junts: CONTRA/ABSTENCIÓN',
    totalYes: 184,
    totalNo: 126,
    totalAbstain: 1,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2022/12/22/14',
  },
  {
    id: 'ley-memoria-democratica-2022',
    lawName: 'Ley de Memoria Democrática y Reconocimiento de las Víctimas',
    officialTitle: 'Ley 20/2022, de 19 de octubre, de Memoria Democrática',
    date: '14 de julio de 2022',
    legislature: 'XIV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Declaró la ilegalidad del régimen franquista y la nulidad de sus sentencias, asumiendo la apertura estatal de fosas y suprimiendo títulos nobiliarios concedidos.',
    proArguments: 'Cumple el derecho internacional de verdad, justicia y reparación hacia las víctimas de la Guerra Civil y la dictadura conforme a las resoluciones de la ONU.',
    conArguments: 'PP y Vox votaron en contra calificándola de revanchista y divisoria, acusando al PSOE de reescribir la concordia constitucional de 1978 con el apoyo de Bildu.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, PNV, Bildu, Más País: AFIRMATIVO • ERC: ABSTENCIÓN (13)',
    totalYes: 173,
    totalNo: 160,
    totalAbstain: 15,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/l/2022/10/19/20',
  },
  {
    id: 'ley-educacion-lomloe-celaa',
    lawName: 'Ley Orgánica de Educación (LOMLOE / "Ley Celaá")',
    officialTitle: 'Ley Orgánica 3/2020 de modificación de la Ley Orgánica de Educación',
    date: '19 de noviembre de 2020',
    legislature: 'XIV Legislatura',
    category: 'SANIDAD_EDUCACION',
    summary: 'Eliminó la mención al castellano como lengua vehicular delegando su ponderación a las CCAA y retiró el criterio de demanda social para centros concertados.',
    proArguments: 'Fomenta la equidad, combate la segregación socioeconómica y prioriza la inversión en plazas y recursos de la red educativa pública.',
    conArguments: 'PP y Vox se opusieron por atentar contra la libertad de elección de centro de los padres (Art. 27 CE) y arrinconar el castellano en las aulas de Cataluña y País Vasco.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, ERC, PNV, Bildu, Más País: AFIRMATIVO • Cs: CONTRA (9)',
    totalYes: 177,
    totalNo: 148,
    totalAbstain: 17,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2020/12/29/3',
  },
  {
    id: 'mocion-censura-vox-casado-2020',
    lawName: 'Moción de Censura contra Pedro Sánchez (Candidato: Santiago Abascal)',
    officialTitle: 'Moción de censura constitucional del Artículo 113 de la Constitución Española',
    date: '22 de octubre de 2020',
    legislature: 'XIV Legislatura',
    category: 'DEFENSA_SEGURIDAD',
    summary: 'Moción presentada por Vox para destituir al Presidente durante la pandemia y convocar elecciones anticipadas inmediatas.',
    proArguments: 'Vox defendió la moción como imperativo ético ante lo que calificó de gestión negligente de la crisis sanitaria y entrega a formaciones secesionistas.',
    conArguments: 'El PSOE defendió la estabilidad del Gobierno y la legitimidad de las urnas. El PP de Pablo Casado votó un "no" tajante para no secundar la radicalización de la derecha.',
    ppVote: 'CONTRA',
    psoeVote: 'CONTRA',
    voxVote: 'AFIRMATIVO',
    otrosVoteSummary: 'Todos los grupos parlamentarios (Unidas Podemos, Cs, ERC, PNV, Bildu, etc.): CONTRA (246)',
    totalYes: 52,
    totalNo: 298,
    totalAbstain: 0,
    result: 'RECHAZADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'mocion-censura-vox-tamames-2023',
    lawName: 'Segunda Moción de Censura de Vox (Candidato: Ramón Tamames)',
    officialTitle: 'Moción de censura con candidato independiente para disolución parlamentaria',
    date: '22 de marzo de 2023',
    legislature: 'XIV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Presentada con el exdirigente del PCE y firmante de la Constitución Ramón Tamames (89 años) como candidato a la presidencia.',
    proArguments: 'Vox y el candidato Tamames justificaron la iniciativa ante la degradación del Estado de Derecho, la supresión de la sedición y la rebaja de la malversación.',
    conArguments: 'El PSOE descalificó la moción como espectáculo circense. El PP de Núñez Feijóo optó por la abstención para distanciarse del Gobierno sin validar la iniciativa de Vox.',
    ppVote: 'ABSTENCIÓN',
    psoeVote: 'CONTRA',
    voxVote: 'AFIRMATIVO',
    otrosVoteSummary: 'Unidas Podemos, ERC, PNV, Bildu, Cs, Más País: CONTRA (148) • Mixto (ex-UPN): AFIRMATIVO (1)',
    totalYes: 53,
    totalNo: 201,
    totalAbstain: 91,
    result: 'RECHAZADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'reforma-ley-seguridad-ciudadana-mordaza',
    lawName: 'Proposición de Derogación / Reforma de la Ley de Seguridad Ciudadana ("Ley Mordaza")',
    officialTitle: 'Reforma de la Ley Orgánica 4/2015 sobre sanciones administrativas y material antidisturbios',
    date: '14 de marzo de 2023',
    legislature: 'XIV Legislatura',
    category: 'DEFENSA_SEGURIDAD',
    summary: 'Pretendía suprimir multas por protestas espontáneas no comunicadas y limitar el uso de pelotas de goma y devoluciones sumarias.',
    proArguments: 'El PSOE defendió armonizar la seguridad pública con el pleno ejercicio de los derechos constitucionales de manifestación y libre expresión.',
    conArguments: 'PP y Vox se opusieron por considerar que desamparaba a las Fuerzas de Seguridad. ERC y Bildu también votaron en contra al considerarla insuficiente por mantener las devoluciones en caliente.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidas Podemos, PNV, Más País: AFIRMATIVO (41) • ERC (13), Bildu (5): CONTRA',
    totalYes: 172,
    totalNo: 177,
    totalAbstain: 0,
    result: 'RECHAZADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    incongruenceAlert: {
      party: 'PSOE',
      headline: 'PSOE: Prometió derogar la Ley Mordaza en sus programas de 2019 y 2023, pero decayó tras 6 años de gobierno',
      publicClaim: 'Compromiso electoral solemne de derogar los artículos lesivos de la Ley 4/2015 del PP para despenalizar la protesta pacífica.',
      context: 'Programas electorales generales 2019 y 2023',
      actualVote: 'La reforma legal decayó en marzo de 2023 por la negativa del PSOE a prohibir las pelotas de goma y devoluciones en frontera, votando en contra ERC y Bildu.'
    }
  },

  // --- LEYES HISTÓRICAS DETERMINANTES (2014 - 2019: X y XII LEGISLATURA) ---
  {
    id: 'ley-mordaza-original-2015',
    lawName: 'Ley Orgánica de Protección de la Seguridad Ciudadana ("Ley Mordaza" Original de 2015)',
    officialTitle: 'Ley Orgánica 4/2015, de 30 de marzo, de protección de la seguridad ciudadana',
    date: '26 de marzo de 2015',
    legislature: 'X Legislatura',
    category: 'DEFENSA_SEGURIDAD',
    summary: 'Aprobada por la mayoría absoluta del Partido Popular de Mariano Rajoy. Tipificó infracciones administrativas graves por desobediencia o falta de respeto a la autoridad, manifestaciones ante el Congreso y difusión no autorizada de imágenes policiales.',
    proArguments: 'El PP defendió la norma como un instrumento imprescindible para proteger el libre ejercicio de los derechos fundamentales y dotar a las Fuerzas y Cuerpos de Seguridad de seguridad jurídica frente a disturbios callejeros.',
    conArguments: 'Toda la oposición en bloque (PSOE, CiU, PNV, IU, UPyD) votó en contra denunciando que vulneraba la libertad de reunión pacífica y de expresión, criminalizaba la protesta social tras el 15-M y sustituía el control judicial por sanciones gubernativas.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'CONTRA',
    voxVote: 'AFIRMATIVO',
    otrosVoteSummary: 'CiU (16), PNV (5), IU (11), UPyD (5), BNG, Compromís: CONTRA (137)',
    totalYes: 181,
    totalNo: 137,
    totalAbstain: 1,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2015/03/30/4',
  },
  {
    id: 'mocion-censura-sanchez-2018',
    lawName: 'Moción de Censura de 2018 (Salida de Mariano Rajoy e Investidura de Pedro Sánchez)',
    officialTitle: 'Moción de censura contra el Presidente Mariano Rajoy tras la sentencia judicial del Caso Gürtel',
    date: '1 de junio de 2018',
    legislature: 'XII Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Primera moción de censura que prospera en la historia constitucional de España. Provocó la destitución inmediata de Mariano Rajoy (PP) y la investidura de Pedro Sánchez (PSOE).',
    proArguments: 'El PSOE y los grupos de apoyo argumentaron que la sentencia de la Audiencia Nacional sobre la primera época de la trama Gürtel, que condenó al PP a título lucrativo y acreditó la Caja B, hacía insostenible la permanencia ética del presidente.',
    conArguments: 'El PP defendió la inocencia y legitimidad de Rajoy, argumentando que ningún miembro del Gobierno estaba imputado y acusó a Sánchez de pactar con el independentismo y el populismo para llegar al poder sin ganar las elecciones.',
    ppVote: 'CONTRA',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Unidos Podemos (67), ERC (9), PDeCAT (8), PNV (5), Bildu (2), Compromís (4), NC (1): AFIRMATIVO (96) • Cs (32), UPN (2), Foro (1): CONTRA',
    totalYes: 180,
    totalNo: 169,
    totalAbstain: 1,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'pacto-estado-violencia-genero-2017',
    lawName: 'Pacto de Estado contra la Violencia de Género (Acuerdo Parlamentario Histórico)',
    officialTitle: 'Aprobación del Dictamen de la Subcomisión para un Pacto de Estado en materia de Violencia de Género',
    date: '28 de septiembre de 2017',
    legislature: 'XII Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Acuerdo transversal dotado con 1.000 millones de euros en 5 años con más de 200 medidas para reforzar la protección policial, judicial, psicológica y económica de las mujeres víctimas y sus hijos menores.',
    proArguments: 'Gran pacto institucional respaldado por el 80% de la cámara que sitúa la lucha contra la violencia machista como cuestión de Estado prioritaria e inaplazable.',
    conArguments: 'Aprobada sin ningún voto en contra. Unidos Podemos se abstuvo por considerar insuficiente la dotación económica garantizada y reclamar blindaje presupuestario directo.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'CONTRA',
    otrosVoteSummary: 'Cs (32), PNV (5), ERC (9), PDeCAT (8): AFIRMATIVO • Unidos Podemos (67): ABSTENCIÓN',
    totalYes: 277,
    totalNo: 0,
    totalAbstain: 65,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
  },
  {
    id: 'articulo-155-cataluna-2017',
    lawName: 'Autorización Parlamentaria de Aplicación del Artículo 155 CE en Cataluña',
    officialTitle: 'Resolución del Senado y debate en Congreso sobre medidas requeridas al amparo del Artículo 155 de la Constitución Española',
    date: '27 de octubre de 2017',
    legislature: 'XII Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Intervención de la autonomía de la Generalitat de Cataluña tras la votación unilateral de la declaración de independencia en el Parlament, destituyendo al Govern y convocando elecciones autonómicas inmediatas.',
    proArguments: 'PP, PSOE y Ciudadanos cerraron filas en defensa de la soberanía nacional, la unidad indisoluble de España y la restauración del orden constitucional quebrantado por las autoridades autonómicas.',
    conArguments: 'Unidos Podemos y los partidos nacionalistas e independentistas votaron en contra calificándolo de suspensión antidemocrática del autogobierno que agravaría la fractura territorial.',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'AFIRMATIVO',
    voxVote: 'AFIRMATIVO',
    otrosVoteSummary: 'Ciudadanos (32), Foro (1), UPN (2): AFIRMATIVO • Unidos Podemos (67), ERC (9), PDeCAT (8), PNV (5), Bildu (2): CONTRA',
    totalYes: 266,
    totalNo: 78,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/res/2017/10/27/(1)',
  },
  {
    id: 'prision-permanente-revisable-2015',
    lawName: 'Introducción de la Prisión Permanente Revisable en el Código Penal',
    officialTitle: 'Ley Orgánica 1/2015, de 30 de marzo, por la que se modifica la Ley Orgánica 10/1995, del Código Penal',
    date: '26 de marzo de 2015',
    legislature: 'X Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    summary: 'Aprobada bajo el gobierno de Mariano Rajoy (PP), incorporó la pena máxima privativa de libertad para delitos de extrema gravedad (asesinatos múltiples, menores de 16 años o terrorismo), revisable tras 25 a 35 años de cumplimiento.',
    proArguments: 'El PP argumentó que responde al clamor social de justicia ante crímenes atroces, homologa a España con países como Alemania, Francia o Reino Unido y el Tribunal Constitucional la declaró plenamente constitucional en 2021.',
    conArguments: 'PSOE y el resto de la oposición votaron en contra y recurrieron al Tribunal Constitucional calificándola de cadena perpetua encubierta que vulnera el mandato constitucional de reeducación y reinserción social (Art. 25.2 CE).',
    ppVote: 'AFIRMATIVO',
    psoeVote: 'CONTRA',
    voxVote: 'AFIRMATIVO',
    otrosVoteSummary: 'CiU (16), PNV (5), IU (11), UPyD (5), BNG: CONTRA (136)',
    totalYes: 181,
    totalNo: 138,
    totalAbstain: 0,
    result: 'APROBADA',
    journalUrl: 'https://www.congreso.es/es/busqueda-de-diarios',
    boeUrl: 'https://www.boe.es/eli/es/lo/2015/03/30/1',
  },
];

export default function CongresoView() {
  const [selectedLaw, setSelectedLaw] = useState<string>('transparencia-medios-emfa-2024');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<'ALL' | 'CONSENSO' | 'POLARIZADA' | 'RECHAZADA' | 'INCONGRUENCIA'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLegislature, setSelectedLegislature] = useState<string>('ALL');

  const filteredVotes = CONGRESO_VOTES.filter((v) => {
    const matchesSearch =
      v.lawName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.officialTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.proArguments.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.conArguments.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'ALL' || v.category === selectedCategory;

    const matchesLegislature =
      selectedLegislature === 'ALL' ||
      (selectedLegislature === 'XV' && v.legislature === 'XV Legislatura') ||
      (selectedLegislature === 'XIV' && v.legislature === 'XIV Legislatura') ||
      (selectedLegislature === 'HISTORICAS' && (v.legislature === 'X Legislatura' || v.legislature === 'XII Legislatura'));

    let matchesType = true;
    if (filterType === 'CONSENSO') {
      matchesType = (v.ppVote === 'AFIRMATIVO' && v.psoeVote === 'AFIRMATIVO');
    } else if (filterType === 'POLARIZADA') {
      matchesType = (v.ppVote === 'CONTRA' && v.psoeVote === 'AFIRMATIVO') ||
                    (v.ppVote === 'AFIRMATIVO' && v.psoeVote === 'CONTRA');
    } else if (filterType === 'RECHAZADA') {
      matchesType = v.result === 'RECHAZADA';
    } else if (filterType === 'INCONGRUENCIA') {
      matchesType = Boolean(v.incongruenceAlert);
    }

    return matchesSearch && matchesCategory && matchesLegislature && matchesType;
  });

  const activeVote =
    filteredVotes.find((v) => v.id === selectedLaw) ||
    filteredVotes[0] ||
    CONGRESO_VOTES[0];

  const parties: { name: string; seats: number; vote: VoteDecision; color: string }[] = [
    { name: 'Partido Popular (PP)', seats: 137, vote: activeVote.ppVote, color: 'bg-sky-600' },
    { name: 'Partido Socialista (PSOE)', seats: 121, vote: activeVote.psoeVote, color: 'bg-rose-600' },
    { name: 'Vox', seats: 33, vote: activeVote.voxVote, color: 'bg-emerald-600' },
  ];

  const stats = {
    total: CONGRESO_VOTES.length,
    consenso: CONGRESO_VOTES.filter(v => v.ppVote === 'AFIRMATIVO' && v.psoeVote === 'AFIRMATIVO').length,
    polarizadas: CONGRESO_VOTES.filter(v => (v.ppVote === 'CONTRA' && v.psoeVote === 'AFIRMATIVO') || (v.ppVote === 'AFIRMATIVO' && v.psoeVote === 'CONTRA')).length,
    rechazadas: CONGRESO_VOTES.filter(v => v.result === 'RECHAZADA').length,
    incongruencias: CONGRESO_VOTES.filter(v => Boolean(v.incongruenceAlert)).length,
  };

  return (
    <div className="space-y-6">
      {/* 1. Interactive 350-Seat Congress Hemicycle (Stitch Component) */}
      <CongressHemicycle onSelectLaw={(lawId) => setSelectedLaw(lawId)} />

      {/* 2. Cross-Party Cohesion & Pactometry Matrix (Stitch Component) */}
      <PactometriaMatrix />

      {/* 3. Historical Scope & 32 Laws Voting Archive */}
      <div className="civic-card rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
              <Vote className="w-4 h-4 text-slate-800" />
              <span>Cortes Generales • Serie Histórica de 12 Años (2014 – 2026)</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5">
              Comparador de Votaciones Nominales ({CONGRESO_VOTES.length} Leyes Estructurantes Auditadas)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl leading-relaxed">
              De las más de 750 normas aprobadas en los últimos 12 años, este monitor registra el voto nominal y los argumentos del <em>Diario de Sesiones</em> de las <strong>leyes más determinantes</strong>: desde la nueva <strong>Ley de Transparencia de Medios y Publicidad Institucional (Plan por la Democracia / EMFA)</strong> hasta la <strong>Amnistía</strong>, la <strong>Reforma Laboral</strong>, la <strong>Ley Mordaza original de 2015</strong> y la <strong>Moción de Censura de 2018</strong>.
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 shrink-0 self-start lg:self-center">
            Mayoría absoluta: 176 escaños
          </span>
        </div>

        {/* Filters Row 1: Legislature Switcher */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold flex-wrap">
            <span className="text-slate-500 mr-1 flex items-center gap-1">
              <History className="w-3.5 h-3.5 text-slate-400" />
              Legislatura:
            </span>
            <button
              onClick={() => setSelectedLegislature('ALL')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                selectedLegislature === 'ALL'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              12 Años (2014–2026)
            </button>
            <button
              onClick={() => setSelectedLegislature('XV')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                selectedLegislature === 'XV'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              XV Leg. (2023–2026 actual)
            </button>
            <button
              onClick={() => setSelectedLegislature('XIV')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                selectedLegislature === 'XIV'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              XIV Leg. (2019–2023 coalición)
            </button>
            <button
              onClick={() => setSelectedLegislature('HISTORICAS')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                selectedLegislature === 'HISTORICAS'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              X y XII Leg. (2014–2019)
            </button>
          </div>

          <div className="relative flex-1 sm:w-64 max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar ley, medios, amnistía..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-800 text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Filters Row 2: Consensus & Category Pills */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                filterType === 'ALL'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Todas ({stats.total})
            </button>
            <button
              onClick={() => setFilterType('CONSENSO')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                filterType === 'CONSENSO'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              Consenso PP + PSOE ({stats.consenso})
            </button>
            <button
              onClick={() => setFilterType('POLARIZADA')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                filterType === 'POLARIZADA'
                  ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                  : 'bg-white text-rose-700 border-rose-200 hover:bg-rose-50'
              }`}
            >
              Polarizadas ({stats.polarizadas})
            </button>
            <button
              onClick={() => setFilterType('RECHAZADA')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                filterType === 'RECHAZADA'
                  ? 'bg-slate-700 text-white border-slate-700 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Rechazadas ({stats.rechazadas})
            </button>
            <button
              onClick={() => setFilterType('INCONGRUENCIA')}
              className={`px-3 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                filterType === 'INCONGRUENCIA'
                  ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs font-black'
                  : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Incongruencias con Discurso ({stats.incongruencias})</span>
            </button>
          </div>

          <select
            aria-label="Filtrar por categoría temática"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-xs rounded-xl border border-slate-300 bg-white px-3 py-1.5 font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer shadow-2xs"
          >
            <option value="ALL">Todas las áreas temáticas</option>
            <option value="JUSTICIA_TERRITORIO">Justicia, Medios y Territorio</option>
            <option value="FISCALIDAD">Fiscalidad y Economía</option>
            <option value="LABORAL">Laboral y Empleo</option>
            <option value="VIVIENDA">Vivienda</option>
            <option value="PENSIONES">Pensiones</option>
            <option value="SANIDAD_EDUCACION">Sanidad y Educación</option>
            <option value="DEFENSA_SEGURIDAD">Defensa y Seguridad</option>
            <option value="ENERGIA_CLIMA">Clima y Energía</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 350-Seat Hemicycle Distribution & Laws Scrollable Selector List */}
        <div className="lg:col-span-5 space-y-4">
          {/* Hemicycle bar card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                Distribución del Hemiciclo (350 escaños)
              </h3>
              <span className="text-[11px] font-bold text-slate-500">Mayoría: 176</span>
            </div>

            <div
              className="h-4 w-full rounded-full overflow-hidden flex bg-slate-100 gap-0.5 shadow-inner"
              role="img"
              aria-label="Composición del Congreso: PP 137 escaños, PSOE 121 escaños, Vox 33 escaños, Otros grupos 59 escaños"
            >
              <div style={{ width: '39.1%' }} className="bg-sky-600 h-full" title="PP: 137 escaños (39,1%)" />
              <div style={{ width: '34.5%' }} className="bg-rose-600 h-full" title="PSOE: 121 escaños (34,6%)" />
              <div style={{ width: '9.4%' }} className="bg-emerald-600 h-full" title="VOX: 33 escaños (9,4%)" />
              <div style={{ width: '17%' }} className="bg-amber-500 h-full" title="Otros grupos: 59 escaños (16,9%)" />
            </div>

            <ul className="divide-y divide-slate-100 text-xs">
              <li className="py-2 flex justify-between items-center">
                <span className="flex items-center gap-2 font-medium text-slate-800">
                  <span className="w-2.5 h-2.5 bg-sky-600 rounded-xs" /> Partido Popular (PP)
                </span>
                <span className="font-bold text-slate-900 font-mono">137 escaños (39,1%)</span>
              </li>
              <li className="py-2 flex justify-between items-center">
                <span className="flex items-center gap-2 font-medium text-slate-800">
                  <span className="w-2.5 h-2.5 bg-rose-600 rounded-xs" /> Partido Socialista (PSOE)
                </span>
                <span className="font-bold text-slate-900 font-mono">121 escaños (34,6%)</span>
              </li>
              <li className="py-2 flex justify-between items-center">
                <span className="flex items-center gap-2 font-medium text-slate-800">
                  <span className="w-2.5 h-2.5 bg-emerald-600 rounded-xs" /> Vox
                </span>
                <span className="font-bold text-slate-900 font-mono">33 escaños (9,4%)</span>
              </li>
              <li className="py-2 flex justify-between items-center">
                <span className="flex items-center gap-2 font-medium text-slate-800">
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-xs" /> Otros Grupos (Sumar, ERC, Junts, Bildu, PNV...)
                </span>
                <span className="font-bold text-slate-900 font-mono">59 escaños (16,9%)</span>
              </li>
            </ul>
          </div>

          {/* Laws Scrollable Selector List */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
            <div className="p-3.5 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span>Archivo de Leyes Votadas ({filteredVotes.length} de {CONGRESO_VOTES.length})</span>
              <span className="text-[10px] text-slate-400">Clic para ver acta</span>
            </div>

            <div className="max-h-[540px] overflow-y-auto divide-y divide-slate-100 p-2 space-y-1">
              {filteredVotes.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-500">
                  No se encontraron votaciones con los filtros seleccionados.
                </div>
              ) : (
                filteredVotes.map((v) => {
                  const isSelected = activeVote.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedLaw(v.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex flex-col gap-1.5 ${
                        isSelected
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-slate-800 text-slate-200'
                              : v.result === 'APROBADA'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-rose-50 text-rose-800 border border-rose-200'
                          }`}>
                            {v.result}
                          </span>
                          {v.isRecentHighlight && (
                            <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400 text-slate-950">
                              Novedad 2024
                            </span>
                          )}
                          {v.incongruenceAlert && (
                            <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                              isSelected
                                ? 'bg-amber-400 text-slate-950 border-amber-300'
                                : 'bg-amber-100 text-amber-900 border-amber-300'
                            }`}>
                              <AlertTriangle className="w-2.5 h-2.5 text-amber-800" /> Incongruencia
                            </span>
                          )}
                        </div>
                        <span className={`text-[10px] font-medium ${isSelected ? 'text-slate-400' : 'text-slate-400'}`}>
                          {v.legislature}
                        </span>
                      </div>

                      <div className="font-bold text-xs leading-snug line-clamp-2">
                        {v.lawName}
                      </div>

                      <div className={`text-[11px] flex items-center gap-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        <span>Votos:</span>
                        <span>PP: <strong>{v.ppVote === 'AFIRMATIVO' ? 'Sí' : v.ppVote === 'CONTRA' ? 'No' : 'Abs'}</strong></span>
                        <span>•</span>
                        <span>PSOE: <strong>{v.psoeVote === 'AFIRMATIVO' ? 'Sí' : v.psoeVote === 'CONTRA' ? 'No' : 'Abs'}</strong></span>
                        <span>•</span>
                        <span>VOX: <strong>{v.voxVote === 'AFIRMATIVO' ? 'Sí' : v.voxVote === 'CONTRA' ? 'No' : 'Abs'}</strong></span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Active Law Dossier & Nominal Voting Comparator */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-5 shadow-xs">
          {/* Header of selected bill */}
          <div className="space-y-2 pb-4 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                activeVote.result === 'APROBADA'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border-rose-200'
              }`}>
                {activeVote.result}
              </span>
              {activeVote.isRecentHighlight && (
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 flex items-center gap-1">
                  <Radio className="w-3 h-3" /> Transparencia Medios y Publicidad Oficial
                </span>
              )}
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-slate-500 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                {activeVote.date}
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                {activeVote.legislature}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              {activeVote.lawName}
            </h3>

            <p className="text-xs text-slate-500 font-mono">
              Título oficial: {activeVote.officialTitle}
            </p>
          </div>

          {/* Incongruence with Political Discourse Callout */}
          {activeVote.incongruenceAlert && (
            <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-4 text-xs space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 font-black text-amber-950 text-xs uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Contradicción con el Discurso Político Público ({activeVote.incongruenceAlert.party})</span>
                </div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                  Acta oficial del Congreso vs. Declaraciones
                </span>
              </div>
              
              <div className="font-black text-slate-900 text-sm leading-snug">
                {activeVote.incongruenceAlert.headline}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-[11px]">
                <div className="bg-white p-3 rounded-lg border border-amber-200 space-y-1">
                  <span className="text-slate-500 font-bold block uppercase text-[10px]">
                    1. Lo que dijeron en campaña / medios:
                  </span>
                  <blockquote className="italic font-serif font-medium text-slate-900">
                    &quot;{activeVote.incongruenceAlert.publicClaim}&quot;
                  </blockquote>
                  <div className="text-[10px] text-slate-500 font-sans">
                    Contexto: {activeVote.incongruenceAlert.context}
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-amber-200 space-y-1">
                  <span className="text-amber-900 font-bold block uppercase text-[10px]">
                    2. Votación oficial en el Pleno:
                  </span>
                  <p className="font-semibold text-slate-900">
                    {activeVote.incongruenceAlert.actualVote}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Official Voting Result Breakdown */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-bold text-slate-700">Resultado Oficial en el Pleno:</span>
              <div className="flex items-center gap-3 font-mono font-bold">
                <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  {activeVote.totalYes} Sí
                </span>
                <span className="text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
                  {activeVote.totalNo} No
                </span>
                <span className="text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                  {activeVote.totalAbstain} Abst.
                </span>
              </div>
            </div>

            {/* Proportion Bar with 176 Majority Notch */}
            <div className="relative pt-2 pb-1">
              <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden flex shadow-inner">
                <div
                  className="bg-emerald-600 h-full transition-all"
                  style={{ width: `${(activeVote.totalYes / 350) * 100}%` }}
                  title={`${activeVote.totalYes} Sí`}
                />
                <div
                  className="bg-rose-600 h-full transition-all"
                  style={{ width: `${(activeVote.totalNo / 350) * 100}%` }}
                  title={`${activeVote.totalNo} No`}
                />
                <div
                  className="bg-amber-500 h-full transition-all"
                  style={{ width: `${(activeVote.totalAbstain / 350) * 100}%` }}
                  title={`${activeVote.totalAbstain} Abst.`}
                />
              </div>
              {/* 176 Majority Notch */}
              <div
                className="absolute top-1.5 bottom-0.5 left-[50.28%] -translate-x-1/2 flex flex-col items-center pointer-events-none"
                title="Mayoría Absoluta (176 escaños)"
              >
                <div className="w-0.5 h-full bg-slate-900 shadow-2xs z-10" />
              </div>
            </div>

            <p className="text-xs text-slate-700 pt-1 leading-relaxed font-normal">
              {activeVote.summary}
            </p>
          </div>

          {/* Party Position Cards */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Voto Nominal por Bloques Parlamentarios:
            </h4>

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
                Socios Parlamentarios y Otros Grupos:
              </span>
              <span className="text-[11px] font-semibold text-slate-700 leading-snug">
                {activeVote.otrosVoteSummary}
              </span>
            </div>
          </div>

          {/* Proponent vs Opposition Arguments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 text-xs space-y-1.5">
              <span className="font-bold text-emerald-950 block uppercase tracking-wider text-[11px]">
                Argumentario Oficial de los Proponentes:
              </span>
              <p className="text-slate-700 leading-relaxed font-normal">
                {activeVote.proArguments}
              </p>
            </div>

            <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 text-xs space-y-1.5">
              <span className="font-bold text-rose-950 block uppercase tracking-wider text-[11px]">
                Objeciones del Bloque de Oposición:
              </span>
              <p className="text-slate-700 leading-relaxed font-normal">
                {activeVote.conArguments}
              </p>
            </div>
          </div>

          {/* Institutional Links Footer */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="text-slate-500">Fuente: Diario de Sesiones del Congreso de los Diputados</span>
            <div className="flex items-center gap-3">
              {activeVote.boeUrl && (
                <a
                  href={activeVote.boeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver en BOE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <a
                href={activeVote.journalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 hover:underline inline-flex items-center gap-1"
              >
                <span>Diario de Sesiones</span>
                <span className="text-slate-400">&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
