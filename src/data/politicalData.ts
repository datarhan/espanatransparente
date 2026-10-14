import { Party, Bill, CriminalCase, AdministrativeSanction, RegionalCrisis, Region, AlignmentQuestion, PromisometroItem } from '@/types/politics';

export const PARTIES: Record<string, Party> = {
  PSOE: {
    id: 'PSOE',
    name: 'Partido Socialista Obrero Español',
    acronym: 'PSOE',
    color: '#E02020',
    accentBg: 'bg-red-50 text-red-700 border-red-200',
    ideology: 'Socialdemocracia, Progresismo, Pro-europeísmo, Federalismo',
    foundingYear: 1879,
    currentLeader: 'Pedro Sánchez',
    headquarters: 'Calle de Ferraz, 70, Madrid',
    europeanGroup: 'Alianza Progresista de Socialistas y Demócratas (S&D)',
    seatsCongreso: 121,
    seatsSenado: 88,
    ccaaPresidencies: 3, // Castilla-La Mancha, Asturias, Navarra
    publicSubsidiesAnnualEur: '14.850.000 € (Estimación BOE 2023)',
    bankDebtEur: '38.200.000 € (Informe Tribunal de Cuentas)',
    manifestoSummary: {
      economy: 'Justicia fiscal redistributiva, impuestos a grandes fortunas y banca, fortalecimiento del Estado del Bienestar y revalorización salarial.',
      housing: 'Regulación de precios de alquiler en zonas tensionadas (Ley de Vivienda), incremento del parque público y bono alquiler joven.',
      immigration: 'Gestión migratoria concertada con la UE, regularización extraordinaria de trabajadores y vías de integración sociolaboral.',
      territorial: 'España autonómica y federalista; diálogo institucional y desjudicialización de conflictos territoriales.',
      environment: 'Transición ecológica justa, cierre progresivo de nucleares, energías renovables y neutralidad climática para 2050.'
    },
    officialManifestoUrl: 'https://www.psoe.es/propuestas/'
  },
  PP: {
    id: 'PP',
    name: 'Partido Popular',
    acronym: 'PP',
    color: '#0055A5',
    accentBg: 'bg-blue-50 text-blue-700 border-blue-200',
    ideology: 'Conservadurismo liberal, Democracia cristiana, Constitucionalismo, Pro-europeísmo',
    foundingYear: 1989,
    currentLeader: 'Alberto Núñez Feijóo',
    headquarters: 'Calle de Génova, 13, Madrid',
    europeanGroup: 'Grupo del Partido Popular Europeo (PPE)',
    seatsCongreso: 137,
    seatsSenado: 144,
    ccaaPresidencies: 11, // Madrid, Andalucía, Galicia, C. Valenciana, Castilla y León, Baleares, Aragón, Extremadura, Murcia, Cantabria, La Rioja
    publicSubsidiesAnnualEur: '16.420.000 € (Estimación BOE 2023)',
    bankDebtEur: '19.800.000 € (Informe Tribunal de Cuentas)',
    manifestoSummary: {
      economy: 'Deflactación del IRPF para rentas medias y bajas, supresión del Impuesto de Patrimonio/Grandes Fortunas y reducción de cargas burocráticas.',
      housing: 'Incentivos fiscales a propietarios para sacar viviendas al mercado, aumento de oferta mediante liberación de suelo y endurecimiento contra la okupación.',
      immigration: 'Control estricto de fronteras exteriores, visados por puntos vinculados a necesidades laborales y expulsión de delincuentes multirreincidentes.',
      territorial: 'Defensa del Estado de las Autonomías bajo el principio estricto de igualdad constitucional entre españoles e imperio de la ley.',
      environment: 'Prolongación de la vida útil de las centrales nucleares, neutralidad tecnológica y apoyo al sector agroganadero frente a restricciones verdes.'
    },
    officialManifestoUrl: 'https://www.pp.es/programa-electoral'
  },
  VOX: {
    id: 'VOX',
    name: 'Vox',
    acronym: 'VOX',
    color: '#63BE21',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    ideology: 'Conservadurismo nacional, Centralismo, Soberanismo, Liberalismo económico',
    foundingYear: 2013,
    currentLeader: 'Santiago Abascal',
    headquarters: 'Calle Bambú, 12, Madrid',
    europeanGroup: 'Patriotas por Europa (Patriots.eu)',
    seatsCongreso: 33,
    seatsSenado: 3,
    ccaaPresidencies: 0,
    publicSubsidiesAnnualEur: '6.900.000 € (Estimación BOE 2023)',
    bankDebtEur: '0 € (Informa autofinanciación sin deuda bancaria en Tribunal de Cuentas)',
    manifestoSummary: {
      economy: 'Tipo único de IRPF reducido o máximo dos tramos, supresión del impuesto de sucesiones y donaciones, y drástica reducción del gasto político.',
      housing: 'Liberalización de todo el suelo no protegido, deducción por compra de vivienda habitual y desahucio exprés inmediato de ocupas.',
      immigration: 'Cierre de centros de menores no acompañados (MENAS), repatriación inmediata de inmigrantes ilegales y bloqueo naval.',
      territorial: 'Derogación del Estado de las Autonomías, devolución de competencias sanitarias/educativas al Estado y prohibición de partidos separatistas.',
      environment: 'Derogación de la Ley de Cambio Climático y del Pacto Verde Europeo, soberanía energética, fomento de regadíos y Plan Hidrológico Nacional.'
    },
    officialManifestoUrl: 'https://www.voxespana.es/nuestras-ideas'
  }
};

export const BILLS: Bill[] = [
  {
    id: 'ley-vivienda-2023',
    title: 'Ley 12/2023, de 24 de mayo, por el derecho a la vivienda',
    shortTitle: 'Ley Estatal de Vivienda y Topes al Alquiler',
    date: '2023-04-27',
    legislature: 'XIV Legislatura',
    category: 'VIVIENDA',
    officialBoeUrl: 'https://www.boe.es/eli/es/l/2023/05/24/12',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Gobierno de España (PSOE - Unidas Podemos)',
    objectiveSummary: 'Crea un marco legal estatal regulatorio que permite a las CCAA declarar zonas de mercado residencial tensionado para topar precios de alquiler, define grandes tenedores (5 o más inmuebles), e incrementa la protección procesal ante desahucios.',
    proArguments: 'Considera la vivienda como un derecho fundamental y no un bien especulativo. Argumenta que frenar las subidas abusivas en grandes ciudades protege a familias vulnerables y jóvenes que destinan más del 40% de sus ingresos al alquiler.',
    conArguments: 'PP y Vox denunciaron invasión competencial autonómica, inseguridad jurídica para los propietarios y riesgo de contracción de la oferta de alquiler (desvío a alquiler turístico o retirada del mercado), además de favorecer la ocupación ilegal.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'EN_CONTRA',
      VOX: 'EN_CONTRA'
    },
    result: 'APROBADA'
  },
  {
    id: 'reforma-laboral-2022',
    title: 'Real Decreto-ley 32/2021 de medidas urgentes para la reforma laboral',
    shortTitle: 'Reforma Laboral de 2021/2022',
    date: '2022-02-03',
    legislature: 'XIV Legislatura',
    category: 'LABORAL',
    officialBoeUrl: 'https://www.boe.es/eli/es/rdl/2021/12/28/32',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Ministerio de Trabajo / Gobierno de coalición',
    objectiveSummary: 'Acordada con patronal (CEOE) y sindicatos (CCOO, UGT). Suprime contratos por obra y servicio, instaura el contrato indefinido como regla general, potencia los contratos fijos discontinuos y recupera la ultraactividad indefinida de convenios colectivos.',
    proArguments: 'Reducción drástica de la tasa histórica de temporalidad en España a mínimos europeos, estabilidad laboral sin destruir empleo y fortalecimiento de la negociación colectiva.',
    conArguments: 'PP y Vox argumentaron que encarece la contratación, introduce rigideces perjudiciales para pymes y que el aumento de fijos discontinuos maquilla las cifras reales de desempleo activo.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'EN_CONTRA',
      VOX: 'EN_CONTRA'
    },
    result: 'APROBADA'
  },
  {
    id: 'pensiones-ipc-2021',
    title: 'Ley 21/2021, de garantía del poder adquisitivo de las pensiones',
    shortTitle: 'Revalorización de Pensiones con el IPC',
    date: '2021-12-02',
    legislature: 'XIV Legislatura',
    category: 'PENSIONES',
    officialBoeUrl: 'https://www.boe.es/eli/es/l/2021/12/28/21',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Ministerio de Inclusión, Seguridad Social y Migraciones',
    objectiveSummary: 'Deroga el factor de sostenibilidad de la reforma del PP de 2013 y garantiza por ley la actualización automática anual de las pensiones contributivas según el IPC medio interanual.',
    proArguments: 'Garantiza que ningún pensionista pierda poder adquisitivo frente a la inflación, cumpliendo las recomendaciones del Pacto de Toledo y asegurando dignidad en la jubilación.',
    conArguments: 'PP y Vox advirtieron de la insostenibilidad actuarial a medio plazo del sistema ante la jubilación de la generación del baby-boom, cargando el déficit sobre trabajadores y generaciones futuras.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'EN_CONTRA',
      VOX: 'EN_CONTRA'
    },
    result: 'APROBADA'
  },
  {
    id: 'ley-amnistia-2024',
    title: 'Ley Orgánica 1/2024, de amnistía para la normalización en Cataluña',
    shortTitle: 'Ley Orgánica de Amnistía (Procés)',
    date: '2024-05-30',
    legislature: 'XV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    officialBoeUrl: 'https://www.boe.es/eli/es/lo/2024/06/09/1',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Grupo Parlamentario Socialista (PSOE)',
    objectiveSummary: 'Extingue la responsabilidad penal, administrativa y contable por actos cometidos con el proceso independentista catalán entre noviembre de 2011 y noviembre de 2023.',
    proArguments: 'Defendida como un paso necesario para superar la fractura política y social en Cataluña, devolver el conflicto a la vía política y garantizar la gobernabilidad de España.',
    conArguments: 'PP y Vox la calificaron de inconstitucional, contraria a la separación de poderes y a la igualdad de los españoles ante la ley, acusando al PSOE de intercambiar impunidad penal por votos de investidura.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'EN_CONTRA',
      VOX: 'EN_CONTRA'
    },
    result: 'APROBADA'
  },
  {
    id: 'ley-ela-2024',
    title: 'Ley para la mejora de la calidad de vida de personas con ELA',
    shortTitle: 'Ley ELA (Consenso Unánime)',
    date: '2024-10-10',
    legislature: 'XV Legislatura',
    category: 'SANIDAD_EDUCACION',
    officialBoeUrl: 'https://www.boe.es/diario_boe/',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Consenso multipartidista (PP, PSOE, Vox, Sumar, Junts)',
    objectiveSummary: 'Reconoce la discapacidad del 33% inmediata al diagnóstico, agiliza trámites de dependencia y garantiza cuidados enfermeros 24 horas a pacientes en fase avanzada de Esclerosis Lateral Amiotrófica y procesos neurológicos irreversibles.',
    proArguments: 'Acuerdo histórico que responde a una demanda humanitaria urgente de los afectados y sus familias, dotando de cobertura sociosanitaria continua para evitar eutanasias forzadas por motivos económicos.',
    conArguments: 'Aprobada por unanimidad sin votos en contra. Las discrepancias previas giraban en torno a la partida presupuestaria garantizada por el Ministerio de Hacienda.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'A_FAVOR',
      VOX: 'A_FAVOR'
    },
    result: 'APROBADA'
  },
  {
    id: 'bajada-iva-alimentos-2023',
    title: 'RDL 20/2022 de medidas de respuesta a la guerra en Ucrania y precios',
    shortTitle: 'Supresión / Bajada del IVA a Alimentos Básicos',
    date: '2023-01-24',
    legislature: 'XIV Legislatura',
    category: 'FISCALIDAD',
    officialBoeUrl: 'https://www.boe.es/eli/es/rdl/2022/12/27/20',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Gobierno de España',
    objectiveSummary: 'Rebaja al 0% el IVA de alimentos de primera necesidad (leche, pan, huevos, frutas) y del 10% al 5% el del aceite y pastas para mitigar la inflación en la cesta de la compra.',
    proArguments: 'Alivio directo a las familias ante la subida inflacionaria de costes agrarios y de energía derivada del conflicto bélico en Ucrania.',
    conArguments: 'El PP apoyó la convalidación pero criticó que no se incluyeran carnes y pescados. Vox se abstuvo por considerar que la medida era insuficiente y que el Gobierno mantenía una recaudación tributaria récord.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'A_FAVOR',
      VOX: 'ABSTENCION'
    },
    result: 'APROBADA'
  },
  {
    id: 'impuesto-banca-energeticas',
    title: 'Ley 38/2022 de gravamen temporal a entidades de crédito y energéticas',
    shortTitle: 'Gravamen Extraordinario a Banca y Grandes Energéticas',
    date: '2022-11-24',
    legislature: 'XIV Legislatura',
    category: 'FISCALIDAD',
    officialBoeUrl: 'https://www.boe.es/eli/es/l/2022/12/27/38',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Grupos Parlamentarios PSOE y Unidas Podemos',
    objectiveSummary: 'Establece una prestación patrimonial pública de carácter no tributario sobre los ingresos netos por intereses/comisiones de la banca y sobre la cifra de negocios de grandes operadores energéticos por sus beneficios extraordinarios.',
    proArguments: 'Exigencia de mayor esfuerzo fiscal a los sectores que han registrado beneficios extraordinarios por la subida de tipos de interés y los altos precios del gas/electricidad, revirtiendo en servicios públicos.',
    conArguments: 'PP y Vox argumentaron que el impuesto castiga la inversión privada, merma el crédito a familias y empresas, y que las empresas acabarían trasladando el sobrecoste a los usuarios finales.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'EN_CONTRA',
      VOX: 'EN_CONTRA'
    },
    result: 'APROBADA'
  },
  {
    id: 'cambio-climatico-2021',
    title: 'Ley 7/2021, de 20 de mayo, de cambio climático y transición energética',
    shortTitle: 'Ley de Cambio Climático y Emisiones Netas Cero',
    date: '2021-05-13',
    legislature: 'XIV Legislatura',
    category: 'ENERGIA_CLIMA',
    officialBoeUrl: 'https://www.boe.es/eli/es/l/2021/05/20/7',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Ministerio para la Transición Ecológica (MITECO)',
    objectiveSummary: 'Prohíbe la exploración de hidrocarburos y fractura hidráulica (fracking), fija que en 2040 todos los turismos nuevos sean de cero emisiones y obliga a municipios de más de 50.000 habitantes a instaurar Zonas de Bajas Emisiones (ZBE).',
    proArguments: 'Alinea a España con los compromisos de descarbonización de París y la UE, impulsa la soberanía con renovables y protege la salud pública ante la contaminación.',
    conArguments: 'PP se abstuvo por considerar que imponía plazos excesivamente rígidos para el sector del automóvil. Vox votó en contra, calificándola de imposición ideológica que destruye la industria y la soberanía energética.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'ABSTENCION',
      VOX: 'EN_CONTRA'
    },
    result: 'APROBADA'
  },
  {
    id: 'financiacion-singular-cataluna',
    title: 'Propuesta de Financiación Singular y Concierto Económico para Cataluña',
    shortTitle: 'Financiación Singular / Concierto Catalán',
    date: '2025-03-12',
    legislature: 'XV Legislatura',
    category: 'FISCALIDAD',
    officialBoeUrl: 'https://www.boe.es',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Gobierno de España (compromiso PSC-ERC)',
    objectiveSummary: 'Habilita la cesión del 100% de la recaudación tributaria (IRPF, IVA, Sociedades) a la Agencia Tributaria de Cataluña, estipulando una aportación de solidaridad interterritorial y un pago por los servicios que el Estado presta en la comunidad.',
    proArguments: 'Defendida como un paso legítimo de autogobierno económico conforme al Estatuto catalán para resolver el déficit fiscal histórico de Cataluña y blindar la estabilidad parlamentaria.',
    conArguments: 'PP y Vox denunciaron la quiebra del principio de solidaridad y de igualdad de todos los españoles ante la hacienda pública, mermando los fondos para sanidad y educación en las regiones con menor renta y rompiendo la caja común estatal.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'EN_CONTRA',
      VOX: 'EN_CONTRA'
    },
    result: 'APROBADA'
  },
  {
    id: 'reforma-extranjeria-menores',
    title: 'Proposición de Ley de modificación de la Ley de Extranjería (Art. 35)',
    shortTitle: 'Reparto Obligatorio de Menores Migrantes entre CCAA',
    date: '2024-07-23',
    legislature: 'XV Legislatura',
    category: 'JUSTICIA_TERRITORIO',
    officialBoeUrl: 'https://www.boe.es',
    officialCongresoUrl: 'https://www.congreso.es',
    sponsor: 'Gobierno de España y Gobierno de Canarias',
    objectiveSummary: 'Pretendía fijar por ley un reparto obligatorio y vinculante de menores migrantes no acompañados hacia todas las CCAA cuando la capacidad de acogida de una región frontera (como Canarias) superase el 150%.',
    proArguments: 'Respuesta solidaria e ineludible ante el colapso asistencial de las islas Canarias, garantizando la tutela y derechos humanos fundamentales de los menores.',
    conArguments: 'Rechazada por los votos conjuntos de PP, Vox y Junts. El PP denunció la falta de financiación estatal asociada y de un plan migratorio global; Vox exigió el cierre de centros y repatriación inmediata, rompiendo los 5 gobiernos autonómicos que compartía con el PP por admitir el reparto voluntario.',
    votes: {
      PSOE: 'A_FAVOR',
      PP: 'EN_CONTRA',
      VOX: 'EN_CONTRA'
    },
    result: 'RECHAZADA'
  }
];

export const CRIMINAL_CASES: CriminalCase[] = [
  {
    id: 'caso-gurtel',
    title: 'Caso Gürtel (Primera Época 1999-2005)',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencia 507/2020) y Audiencia Nacional',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Prevaricación', 'Malversación de caudales públicos', 'Cohecho activo y pasivo', 'Fraude fiscal', 'Falsedad documental', 'Blanqueo de capitales'],
    defraudedAmountEur: 'Más de 120.000.000 € en adjudicaciones irregulares; comisiones millonarias',
    convictedCount: 29,
    partyInstitutionalLiability: 'Partido Popular condenado formalmente como Partícipe a Título Lucrativo a abonar 245.492 euros por lucrarse de los actos de corrupción en Pozuelo y Majadahonda.',
    summary: 'Trama de corrupción orquestada por Francisco Correa en connivencia con cargos públicos del PP en la Comunidad de Madrid, Castilla y León y Valencia para la adjudicación de contratos públicos a cambio de sobornos, viajes y regalos.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2020 (Sentencia firme TS)'
  },
  {
    id: 'caso-ere-andalucia',
    title: 'Caso de los ERE de Andalucía (Procedimiento Específico)',
    party: 'PSOE',
    court: 'Tribunal Supremo (Sentencia 749/2022) / Audiencia Provincial de Sevilla',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación continuada', 'Prevaricación administrativa'],
    defraudedAmountEur: '679.412.179 € en la partida 31L de transferencias de financiación',
    convictedCount: 19,
    partyInstitutionalLiability: 'Condenas penales a expresidentes de la Junta de Andalucía (Manuel Chaves, inhabilitación; José Antonio Griñán, prisión y malversación, rebajada por el Tribunal Constitucional en 2024 por vulneración de legalidad penal).',
    summary: 'Creación de un sistema opaco y descontrolado de ayudas sociolaborales y subvenciones directas a empresas en crisis gestionado durante una década al margen de la ley de subvenciones y de la fiscalización previa de la Intervención General.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2022 (Sentencia firme TS; amparos parciales TC en 2024)'
  },
  {
    id: 'caso-barcenas-cajab',
    title: 'Papeles de Bárcenas / Contabilidad Extracontable del PP',
    party: 'PP',
    court: 'Audiencia Nacional (Sentencia Sala de lo Penal 2021) / Tribunal Supremo',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Delito fiscal', 'Apropiación indebida', 'Falsedad documental'],
    defraudedAmountEur: 'Caja B con millones de euros en donaciones no declaradas entre 1990 y 2008',
    convictedCount: 3,
    partyInstitutionalLiability: 'Condena al PP como responsable civil subsidiario por las reformas de su sede central en Calle Génova pagadas con dinero negro (1,07 millones de euros de cuota tributaria defraudada).',
    summary: 'Acreditó la existencia durante casi dos décadas de una contabilidad paralela (Caja B) gestionada por los tesoreros del PP, nutrida de donaciones de constructores y utilizada para pagar sobresueldos y reformas inmobiliarias sin tributar.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Audiencia-Nacional/',
    sentenceYearOrPeriod: '2021'
  },
  {
    id: 'caso-kitchen',
    title: 'Operación Kitchen (Pieza 7 del Caso Villarejo)',
    party: 'PP',
    court: 'Audiencia Nacional - Juzgado Central de Instrucción 6',
    judicialStatus: 'JUICIO_ORAL',
    crimesCharged: ['Malversación', 'Descubrimiento y revelación de secretos', 'Cohecho', 'Tráfico de influencias'],
    defraudedAmountEur: 'Uso irregular de fondos reservados del Ministerio del Interior',
    convictedCount: 0,
    partyInstitutionalLiability: 'Procesamiento del exministro del Interior Jorge Fernández Díaz, su secretario de Estado y la cúpula policial. Pendiente de celebración de juicio oral.',
    summary: 'Presunto operativo parapolicial sufragado con fondos reservados del Estado en 2013 para espiar al extesorero Luis Bárcenas y sustraerle documentos comprometedores para altos dirigentes del Partido Popular.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Audiencia-Nacional/',
    sentenceYearOrPeriod: 'En fase de señalamiento de juicio oral'
  },
  {
    id: 'caso-koldo-transportes',
    title: 'Caso Koldo / Mascarillas en Ministerios',
    party: 'PSOE',
    court: 'Audiencia Nacional - Juzgado Central de Instrucción 2 / Tribunal Supremo',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Organización criminal', 'Cohecho', 'Tráfico de influencias', 'Blanqueo de capitales'],
    defraudedAmountEur: '53.000.000 € en contratos públicos de suministro sanitario de emergencia durante la pandemia',
    convictedCount: 0,
    partyInstitutionalLiability: 'Investigación judicial tras los informes de la UCO de la Guardia Civil que implican a Koldo García y elevan la causa contra el exministro José Luis Ábalos al Tribunal Supremo. Estricta presunción de inocencia.',
    summary: 'Investigación judicial sobre el presunto cobro de comisiones ilegales millonarias en contratos de mascarillas adjudicados por Puertos del Estado, ADIF y gobiernos autonómicos a la empresa Soluciones de Gestión.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Audiencia-Nacional/',
    sentenceYearOrPeriod: 'En instrucción en Tribunal Supremo y Audiencia Nacional (Actualizado Oct 2026)'
  },
  {
    id: 'caso-begona-gomez',
    title: 'Causa Begoña Gómez / Cátedra Extraordinaria UCM',
    party: 'PSOE',
    court: 'Juzgado de Instrucción 41 de Madrid / Audiencia Provincial de Madrid',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Tráfico de influencias', 'Corrupción en los negocios', 'Apropiación indebida de software', 'Intrusismo profesional'],
    defraudedAmountEur: 'Investigación sobre intermediaciones en contratos y patrocinios universitarios privados',
    convictedCount: 0,
    partyInstitutionalLiability: 'Querellas de asociaciones y partidos personados como acusación popular. El PSOE defiende que es una investigación prospectiva sin contenido penal. Rigurosa presunción de inocencia.',
    summary: 'Diligencias judiciales dirigidas por el magistrado Juan Carlos Peinado para investigar si la esposa del presidente del Gobierno utilizó su posición para recomendar cartas de apoyo a empresas (e.g. UTE Barrabés) que licitaron a contratos públicos de Red.es.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: 'En fase de instrucción (Actualizado Oct 2026)'
  },
  {
    id: 'caso-filesa',
    title: 'Caso Filesa (Financiación Irregular del PSOE)',
    party: 'PSOE',
    court: 'Tribunal Supremo (Sentencia Sala Segunda 1997)',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Falsedad en documento mercantil', 'Apropiación indebida', 'Asociación ilícita'],
    defraudedAmountEur: 'Aproximadamente 1.000 millones de pesetas (6 millones €)',
    convictedCount: 8,
    partyInstitutionalLiability: 'Condenas firmes a un senador socialista, un diputado y responsables de las empresas pantalla Filesa, Malesa y Time Export.',
    summary: 'Trama de empresas pantalla creada a finales de los años 80 para financiar irregularmente las campañas electorales del PSOE mediante el cobro a grandes bancos y empresas de facturas por informes ficticios o nunca realizados.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '1997 (Histórico firme)'
  },
  {
    id: 'caso-punica',
    title: 'Caso Púnica (Comisiones y Contratación Pública)',
    party: 'PP',
    court: 'Audiencia Nacional - Juzgado Central de Instrucción 6',
    judicialStatus: 'JUICIO_ORAL',
    crimesCharged: ['Organización criminal', 'Cohecho continuado', 'Malversación', 'Tráfico de influencias', 'Fraude a la Administración', 'Falsedad documental'],
    defraudedAmountEur: 'Decenas de millones de euros en contratos amañados de eficiencia energética (Cofely) y festejos',
    convictedCount: 0,
    partyInstitutionalLiability: 'Procesamiento del exsecretario general del PP de Madrid Francisco Granados, alcaldes y cargos autonómicos.',
    summary: 'Macrocausa sobre una red clientelar de adjudicación de contratos públicos a cambio de comisiones ilegales millonarias en obras, fiestas populares y servicios energéticos en municipios de la Comunidad de Madrid, Castilla y León, Murcia y Valencia.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Audiencia-Nacional/',
    sentenceYearOrPeriod: 'Juicio oral en la Audiencia Nacional'
  },
  {
    id: 'caso-lezo',
    title: 'Caso Lezo (Desfalco en el Canal de Isabel II)',
    party: 'PP',
    court: 'Audiencia Nacional - Juzgado Central de Instrucción 6',
    judicialStatus: 'JUICIO_ORAL',
    crimesCharged: ['Malversación de caudales públicos continuada', 'Cohecho', 'Fraude a la Administración', 'Falsedad contable'],
    defraudedAmountEur: 'Más de 25.000.000 € en desvíos patrimoniales por la compra inflada de filiales en Sudamérica (Emissao e Inassa)',
    convictedCount: 0,
    partyInstitutionalLiability: 'Peticiones fiscales de hasta 29 años de cárcel para el expresidente de la Comunidad de Madrid Ignacio González (PP).',
    summary: 'Investigación sobre el presunto desvío sistemático de fondos públicos de la empresa de aguas Canal de Isabel II para la adquisición fraudulenta de empresas filiales en Colombia y Brasil con sobreprecios millonarios y comisiones en cuentas en Suiza.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Audiencia-Nacional/',
    sentenceYearOrPeriod: 'Juicio oral celebrado en Audiencia Nacional'
  },
  {
    id: 'caso-noos',
    title: 'Caso Nóos (Convenios Públicos en Baleares y Valencia)',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencia 277/2018) / Audiencia Provincial de Baleares',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Prevaricación administrativa', 'Malversación', 'Fraude a la Administración', 'Tráfico de influencias'],
    defraudedAmountEur: '6.200.000 € en fondos públicos concedidos sin concurso',
    convictedCount: 7,
    partyInstitutionalLiability: 'Condena penal firme a 3 años y 8 meses de prisión e inhabilitación a Jaume Matas (expresidente del Govern Balear y del PP balear).',
    summary: 'Adjudicación arbitraria y sin concurso de convenios de patrocinio turístico y deportivo al Instituto Nóos en Baleares y la Comunidad Valenciana, vulnerando la Ley de Contratos del Estado.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2018 (Sentencia firme TS)'
  },
  {
    id: 'caso-gonzalez-amador',
    title: 'Causa Alberto González Amador / Fraude Fiscal y Mascarillas',
    party: 'PP',
    court: 'Juzgado de Instrucción 19 de Madrid',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Dos delitos de fraude tributario', 'Falsedad en documento mercantil', 'Corrupción en los negocios (pieza separada)'],
    defraudedAmountEur: '350.951 € de cuota defraudada reconocida a Hacienda; comisiones de 1,97 M€ por intermediación sanitaria',
    convictedCount: 0,
    partyInstitutionalLiability: 'Causa dirigida contra la pareja de Isabel Díaz Ayuso. El PP alega que es un conflicto tributario estrictamente privado sin fondos de la CAM; la acusación popular investiga contratos cruzados con Quirónsalud. Presunción de inocencia.',
    summary: 'Diligencias penales incoadas tras denuncia del Ministerio Fiscal por la utilización de una trama de facturas falsas emitidas por empresas pantalla para deducirse gastos inexistentes y eludir el pago de impuestos de los beneficios millonarios obtenidos en la intermediación de mascarillas.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: 'En instrucción judicial (Actualizado Oct 2026)'
  },
  {
    id: 'caso-mediador',
    title: 'Caso Mediador / "Tito Berni" (Extorsión y Tráfico de Influencias)',
    party: 'PSOE',
    court: 'Juzgado de Instrucción 4 de Santa Cruz de Tenerife',
    judicialStatus: 'JUICIO_ORAL',
    crimesCharged: ['Cohecho pasivo', 'Tráfico de influencias', 'Pertenencia a grupo criminal', 'Falsedad documental'],
    defraudedAmountEur: 'Cobro de mordidas de 3.000 € a 20.000 € por expediente empresarial a cambio de favores administrativos',
    convictedCount: 0,
    partyInstitutionalLiability: 'El diputado socialista Juan Bernardo Fuentes Curbelo fue obligado a renunciar a su escaño y expulsado fulminantemente del PSOE.',
    summary: 'Red de presunta extorsión y comisiones ilegales exigidas a empresarios del sector ganadero y fotovoltaico a cambio de anular inspecciones o agilizar expedientes de ayudas, celebrando reuniones en dependencias del Congreso de los Diputados y fiestas privadas.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: 'Conclusión de instrucción y auto de juicio oral'
  },
  {
    id: 'caso-faffe-andalucia',
    title: 'Caso FAFFE / Gastos en Clubes de Alterne',
    party: 'PSOE',
    court: 'Tribunal Supremo (Sentencia 2023) / Audiencia Provincial de Sevilla',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación de caudales públicos continuada', 'Falsedad en documento oficial'],
    defraudedAmountEur: '32.566 € gastados directamente con tarjetas de crédito públicas en locales de alterne',
    convictedCount: 2,
    partyInstitutionalLiability: 'Condena penal firme a 6 años de cárcel a Fernando Villén, exdirector general de la FAFFE nombrado por los gobiernos socialistas de la Junta de Andalucía.',
    summary: 'Utilización continuada de tarjetas bancarias oficiales de la Fundación Andaluza de Fondo de Formación y Empleo para costear estancias personales en clubes de alterne entre 2004 y 2009, enmascarando los cargos con recibos y cheques contables falsos.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2023 (Sentencia firme TS)'
  },
  {
    id: 'caso-david-sanchez',
    title: 'Causa David Sánchez / Contratación en Diputación de Badajoz',
    party: 'PSOE',
    court: 'Juzgado de Instrucción 3 de Badajoz',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Prevaricación administrativa', 'Malversación de caudales públicos', 'Tráfico de influencias', 'Delitos fiscales'],
    defraudedAmountEur: 'Investigación sobre retribuciones públicas de alta dirección (55.000 €/año) y residencia tributaria en Portugal',
    convictedCount: 0,
    partyInstitutionalLiability: 'Investigación judicial al hermano del presidente del Gobierno y al presidente de la Diputación de Badajoz (PSOE). El partido defiende la regularidad de la plaza de artes escénicas. Presunción de inocencia.',
    summary: 'Diligencias previas abiertas a raíz de querella para dilucidar si se creó un puesto de alta dirección ad hoc en la Diputación de Badajoz, si existió absentismo laboral presencial y la legitimidad de fijar su residencia fiscal en Elvas (Portugal).',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: 'En fase de instrucción preliminar (Actualizado Oct 2026)'
  },
  {
    id: 'caso-formacion-andalucia',
    title: 'Causa de los Cursos de Formación para el Empleo (Andalucía)',
    party: 'PSOE',
    court: 'Audiencia Provincial de Sevilla / Juzgados de Instrucción',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Prevaricación', 'Malversación de caudales públicos', 'Fraude en subvenciones'],
    defraudedAmountEur: 'Se investigó el conjunto del sistema de ayudas a la formación profesional',
    convictedCount: 0,
    partyInstitutionalLiability: 'Sobreseimiento libre y archivo definitivo de la causa respecto a exconsejeros y altos cargos del PSOE andaluz por inexistencia de delito.',
    summary: 'Tras años de instrucción judicial que apuntaban a un fraude generalizado en las ayudas autonómicas de formación, los tribunales archivaron de forma firme las macrocausas contra los responsables políticos al no apreciarse concertación delictiva ni desvío penal sistemático, concluyendo que los defectos correspondían a liquidaciones administrativas.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2020-2022 (Archivado firme)'
  },
  {
    id: 'caso-fundacion-disenso',
    title: 'Causa Traspasos a la Fundación Disenso',
    party: 'VOX',
    court: 'Tribunal de Cuentas / Fiscalía del Tribunal de Cuentas',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Presunta distracción de fondos públicos', 'Infracción de la Ley de Financiación de Partidos'],
    defraudedAmountEur: 'Más de 7.000.000 € transferidos de la contabilidad de Vox a la fundación privada entre 2020 y 2024',
    convictedCount: 0,
    partyInstitutionalLiability: 'Diligencias del Tribunal de Cuentas tras denuncias de exdirigentes sobre el desvío de subvenciones públicas a una fundación privada presidida por Santiago Abascal sin control asambleario. Vox defiende su plena legalidad. Presunción de inocencia.',
    summary: 'Fiscalización y análisis judicial sobre las transferencias de más de 7 millones de euros de dinero público desde el partido Vox a la Fundación Disenso, examinando si los estatutos exigían autorización expresa de la asamblea de afiliados.',
    officialResolutionUrl: 'https://www.tcu.es',
    sentenceYearOrPeriod: 'En fiscalización e instrucción (Actualizado Oct 2026)'
  },
  {
    id: 'caso-cartel-menas-vox',
    title: 'Querella por Cartel Electoral sobre Menores Migrantes (Metro Sol)',
    party: 'VOX',
    court: 'Audiencia Provincial de Madrid (Auto Sección 2ª) / Juzgado de Instrucción 48',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Delito de odio (Artículo 510 del Código Penal)'],
    defraudedAmountEur: 'No aplicable (delito de odio y propaganda electoral)',
    convictedCount: 0,
    partyInstitutionalLiability: 'Exoneración penal definitiva de Vox y sus responsables de campaña por amparo de la libertad de expresión.',
    summary: 'La Fiscalía y entidades sociales interpusieron querella por delito de odio contra el cartel electoral de Vox en las elecciones de Madrid de 2021 ("Un mena 4.700 € al mes, tu abuela 426 €"). La Audiencia Provincial dictó auto firme de archivo al entender que, aun siendo censurable o controvertido, está protegido por la libertad de expresión en la contienda electoral.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2021 (Auto Firme de Archivo)'
  },
  {
    id: 'caso-prestamo-hungaro-vox',
    title: 'Investigación sobre Financiación Electoral con Banco Húngaro',
    party: 'VOX',
    court: 'Tribunal de Cuentas (Departamento de Fiscalización de Partidos)',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Presunta vulneración del régimen de préstamos extranjeros (Art. 5 Ley 8/2007)'],
    defraudedAmountEur: '9.200.000 € en dos líneas de crédito bancario concedidas para campañas electorales',
    convictedCount: 0,
    partyInstitutionalLiability: 'Auditoría sobre la procedencia de fondos del banco húngaro MBH Bank. Vox defiende que se trató de un crédito mercantil regular a tipo de mercado ante el cierre de crédito de la banca española, ya reintegrado con las subvenciones electorales. Presunción de inocencia.',
    summary: 'Análisis de los créditos por importe conjunto de 9,2 millones concedidos a Vox por el banco privado húngaro MBH Bank para las elecciones generales de 2023 y europeas de 2024, verificando si se ajusta a las limitaciones legales sobre donaciones y recursos extranjeros.',
    officialResolutionUrl: 'https://www.tcu.es',
    sentenceYearOrPeriod: 'En fiscalización contable (Actualizado Oct 2026)'
  },
  {
    id: 'caso-taula-imelsa',
    title: 'Caso Taula / Imelsa y Mordidas en Valencia',
    party: 'PP',
    court: 'Audiencia Provincial de Valencia / Juzgado de Instrucción 18',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Prevaricación', 'Malversación continuada', 'Cohecho', 'Blanqueo de capitales', 'Falsedad mercantil'],
    defraudedAmountEur: 'Decenas de millones de euros en contratos amañados y mordidas del 2% y 3% a través de empresas públicas provinciales',
    convictedCount: 14,
    partyInstitutionalLiability: 'Condenas firmes a prisión al expresidente de la Diputación de Valencia Alfonso Rus (PP) y altos cargos de Imelsa. La pieza separada de blanqueo ("pitufeo" de 50 concejales del grupo municipal de Rita Barberá con billetes de 500 €) fue sobreseída por la Audiencia Provincial al no quedar probado el origen ilícito previo del dinero.',
    summary: 'Trama de comisiones ilegales sistemáticas en la Diputación y el Ayuntamiento de Valencia a través de empresas públicas como Imelsa y Ciegsa para la construcción de colegios y servicios, desvelada por las grabaciones del exgerente Marcos Benavent.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2023-2024 (Sentencias firmes en piezas principales)'
  },
  {
    id: 'caso-palma-arena',
    title: 'Caso Palma Arena y Hospital Son Espases',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencias múltiples firmes) / Audiencia Provincial de Baleares',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación de caudales públicos', 'Fraude a la Administración', 'Tráfico de influencias', 'Cohecho pasivo'],
    defraudedAmountEur: 'Sobrecoste de más de 40.000.000 € en la construcción del velódromo Palma Arena (presupuesto inicial de 48M€ elevado a más de 90M€)',
    convictedCount: 8,
    partyInstitutionalLiability: 'Condenas penales acumuladas a más de 6 años de cárcel e inhabilitación para Jaume Matas (expresidente del Govern Balear del PP y exministro de Medio Ambiente).',
    summary: 'Macrocausa sobre sobrecostes millonarios arbitrarios en la construcción del velódromo Palma Arena y amaños en el concurso de adjudicación de las obras del Hospital Universitario Son Espases mediante sobornos y tráfico de influencias.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2015-2019 (Sentencias firmes TS)'
  },
  {
    id: 'caso-brugal',
    title: 'Caso Brugal (Contratas de Basuras y Suelo en Alicante)',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencia 2022) / Audiencia Provincial de Alicante',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Cohecho', 'Fraude en contratación', 'Tráfico de influencias', 'Revelación de secretos'],
    defraudedAmountEur: 'Contratas de basuras de más de 200 millones de euros y recalificaciones del PGOU',
    convictedCount: 6,
    partyInstitutionalLiability: 'Condena penal firme de prisión para José Joaquín Ripoll (expresidente de la Diputación de Alicante del PP) por el plan zonal de basuras de la Vega Baja; absolución de los exalcaldes de Alicante Díaz Alperi y Sonia Castedo en la pieza de urbanismo por falta de pruebas concluyentes.',
    summary: 'Investigación de una red de favores y sobornos en la provincia de Alicante en la que dirigentes públicos del PP beneficiaron sistemáticamente al empresario Enrique Ortiz en adjudicaciones de gestión de residuos y planeamiento urbano a cambio de regalos, dádivas y viajes.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2022 (Sentencia firme TS)'
  },
  {
    id: 'caso-emarsa',
    title: 'Caso Emarsa (Saqueo de la Depuradora de Pinedo)',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencia 380/2020) / Audiencia Provincial de Valencia',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación agravada', 'Prevaricación', 'Cohecho', 'Falsedad documental continuada', 'Blanqueo de capitales'],
    defraudedAmountEur: '23.500.000 € saqueados directamente de los fondos públicos de saneamiento de aguas residuales',
    convictedCount: 24,
    partyInstitutionalLiability: 'Condenas de entre 9 y 12 años de prisión a altos cargos del PP valenciano y de la entidad metropolitana (Enrique Crespo, expresidente de Emarsa, alcalde de Manises y vicepresidente de la Diputación de Valencia).',
    summary: 'Expolio continuado de fondos públicos mediante la emisión masiva de facturas falsas por un tratamiento ficticio de lodos residuales en la depuradora metropolitana de Valencia, derivando los fondos a viajes de lujo, regalos personales y transferencias opacas.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2020 (Sentencia firme TS)'
  },
  {
    id: 'caso-fabra-castellon',
    title: 'Caso Carlos Fabra / Fraude Fiscal y Tráfico de Influencias',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencia 2014) / Audiencia Provincial de Castellón',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Cuatro delitos contra la Hacienda Pública', 'Cohecho (prescrito)', 'Tráfico de influencias (prescrito)'],
    defraudedAmountEur: 'Cerca de 2.000.000 € en cuota tributaria defraudada e ingresos en metálico millonarios no justificados',
    convictedCount: 2,
    partyInstitutionalLiability: 'Condena firme a 4 años de prisión a Carlos Fabra (líder histórico del PP de Castellón y presidente de la Diputación Provincial durante 16 años); posterior apertura de causa en 2021 por alzamiento de bienes e insolvencia punible.',
    summary: 'Acreditó el fraude fiscal reiterado del presidente de la Diputación de Castellón al ocultar a la Agencia Tributaria ingresos millonarios en efectivo y reiterados premios de lotería mientras realizaba gestiones políticas para favorecer a empresarios de productos fitosanitarios.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2014 (Sentencia firme TS)'
  },
  {
    id: 'caso-mascarillas-ayto-madrid',
    title: 'Caso Mascarillas en el Ayuntamiento de Madrid (Luceño y Medina)',
    party: 'PP',
    court: 'Audiencia Provincial de Madrid / Juzgado de Instrucción 47',
    judicialStatus: 'JUICIO_ORAL',
    crimesCharged: ['Estafa agravada', 'Falsedad en documento mercantil', 'Blanqueo de capitales'],
    defraudedAmountEur: '11.900.000 $ pagados con fondos municipales de emergencia; 6.000.000 $ en comisiones ilícitas (yate, deportivos y relojes)',
    convictedCount: 0,
    partyInstitutionalLiability: 'El Ayuntamiento de Madrid (presidido por José Luis Martínez-Almeida, PP) se personó como acusación particular y víctima perjudicada. La instrucción judicial descartó la imputación penal de cargos municipales, concluyendo que fueron engañados por los comisionistas.',
    summary: 'Contratación de urgencia en marzo de 2020 por la funeraria municipal para la compra de mascarillas y test que resultaron defectuosos, con comisiones desorbitadas de hasta el 148% embolsadas por Luis Medina y Alberto Luceño valiéndose del nombre de un familiar del alcalde para contactar.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: 'Juicio oral señalado en Audiencia Provincial'
  },
  {
    id: 'caso-master-cifuentes',
    title: 'Causa del Máster de Cristina Cifuentes (URJC)',
    party: 'PP',
    court: 'Audiencia Provincial de Madrid / Juzgado de Instrucción 51',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Falsedad documental', 'Inducción a la falsedad'],
    defraudedAmountEur: 'No aplicable (delito de falsedad documental funcionarial)',
    convictedCount: 2,
    partyInstitutionalLiability: 'Condena penal firme de 1 año y 6 meses de prisión a una asesora autonómica del PP y a una profesora por fabricar un acta falsa; absolución penal de la expresidenta de la Comunidad de Madrid Cristina Cifuentes por falta de prueba de inducción directa.',
    summary: 'Investigación judicial que provocó la dimisión de Cristina Cifuentes (PP) tras revelarse que el acta que certificaba la defensa de su Trabajo Fin de Máster de 2012 había sido falsificada y fabricada a posteriori en la Universidad Rey Juan Carlos cuando estalló la noticia.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2021 (Sentencia firme Audiencia Provincial)'
  },
  {
    id: 'caso-residencias-madrid',
    title: 'Causa Protocolos de Exclusión en Residencias COVID (Madrid)',
    party: 'PP',
    court: 'Juzgados de Instrucción de Madrid (Jdos 3, 28, 48) / Audiencia Provincial',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Homicidio por imprudencia profesional', 'Omisión del deber de socorro', 'Prevaricación administrativa'],
    defraudedAmountEur: 'No aplicable (responsabilidad penal en la gestión sanitaria y fallecimiento de 7.291 mayores)',
    convictedCount: 0,
    partyInstitutionalLiability: 'Querellas de familiares y asociaciones contra el Gobierno regional presidido por Isabel Díaz Ayuso. Los tribunales archivaron querellas generales contra aforados al considerar que fueron criterios médicos de triaje ante el colapso, pero la Audiencia Provincial mantiene abiertas diligencias en casos individuales sin informe médico individualizado. Presunción de inocencia.',
    summary: 'Diligencias penales abiertas en múltiples juzgados sobre la aplicación de los cuatro protocolos de la Consejería de Sanidad de la Comunidad de Madrid de marzo/abril de 2020 que fijaron criterios de exclusión para no trasladar a hospitales a residentes con deterioro cognitivo severo.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: 'En fase de instrucción en juzgados de instrucción'
  },
  {
    id: 'caso-financiacion-iran-vox',
    title: 'Financiación Fundacional con el CNRI Iraní (Campaña Europea 2014)',
    party: 'VOX',
    court: 'Tribunal de Cuentas / Audiencia Nacional',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Presunta vulneración del régimen de financiación extranjera (LO 8/2007)'],
    defraudedAmountEur: 'Aproximadamente 800.000 € en 146 transferencias internacionales individuales desde simpatizantes en el exilio',
    convictedCount: 0,
    partyInstitutionalLiability: 'Fiscalizado por el Tribunal de Cuentas sin apertura de expediente sancionador penal. La ley orgánica vigente en 2014 autorizaba donaciones de personas físicas foráneas no gubernamentales; la reforma legal anticorrupción de 2015 prohibió expresamente esta vía.',
    summary: 'Reconocimiento público y fiscalizado de que el 80% de los gastos electorales de Vox en las elecciones europeas de 2014 fueron sufragados mediante donaciones coordinadas por el Consejo Nacional de la Resistencia de Irán (CNRI), gestionadas a través de Alejo Vidal-Quadras.',
    officialResolutionUrl: 'https://www.tcu.es',
    sentenceYearOrPeriod: '2014-2015 (Fiscalización histórica archivada sin sanción)'
  },
  {
    id: 'caso-ortega-smith-cibeles',
    title: 'Querella contra Javier Ortega Smith por Altercado en Pleno de Cibeles',
    party: 'VOX',
    court: 'Audiencia Provincial de Madrid / Juzgado de Instrucción 49',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Delito de coacciones', 'Delito de amenazas leves'],
    defraudedAmountEur: 'No aplicable (disciplina parlamentaria municipal)',
    convictedCount: 0,
    partyInstitutionalLiability: 'Exoneración penal firme de Javier Ortega Smith por sobreseimiento libre. El Pleno municipal de Madrid aprobó su reprobación institucional y petición de dimisión.',
    summary: 'Querella penal formulada tras el incidente en el Ayuntamiento de Madrid en diciembre de 2023, en el que el portavoz de Vox golpeó una botella hacia el concejal Eduardo Rubiño y se encaró con él. La Audiencia Provincial decretó el archivo firme al entender que los hechos carecían de relevancia penal y debían dirimirse en el marco del reglamento del pleno.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2024 (Auto firme de archivo)'
  },
  {
    id: 'caso-caja-b-vox-valencia',
    title: 'Diligencias de Fiscalía sobre Presunta Caja B en Vox Valencia',
    party: 'VOX',
    court: 'Fiscalía Provincial de Valencia / Fiscalía Anticorrupción',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Financiación irregular', 'Apropiación indebida', 'Blanqueo de capitales'],
    defraudedAmountEur: 'Se denunció el manejo de decenas de miles de euros en metálico sin fiscalizar',
    convictedCount: 0,
    partyInstitutionalLiability: 'Decreto de archivo de diligencias de investigación penal por la Fiscalía Anticorrupción al no existir indicios fundados de infracción penal continuada ni enriquecimiento ilícito de dirigentes.',
    summary: 'Denuncias presentadas por exresponsables comarcales de Vox en la provincia de Valencia contra la ejecutiva provincial de José María Llanos, acusando cobros en efectivo en eventos y mesas no ingresados en cuenta bancaria. La Fiscalía acordó el sobreseimiento de las actuaciones penales.',
    officialResolutionUrl: 'https://www.fiscal.es',
    sentenceYearOrPeriod: '2020 (Decreto de archivo de Fiscalía)'
  },
  {
    id: 'caso-sobresueldos-cen-vox',
    title: 'Causa sobre Complementos Salariales y Gastos de la Cúpula Nacional de Vox',
    party: 'VOX',
    court: 'Tribunal de Cuentas (Área de Fiscalización) / Juzgados de Madrid',
    judicialStatus: 'EN_INSTRUCCION',
    crimesCharged: ['Administración desleal', 'Opacidad en gastos de representación y retribuciones'],
    defraudedAmountEur: 'Cientos de miles de euros en partidas de gastos y retribuciones de altos cargos no individualizadas',
    convictedCount: 0,
    partyInstitutionalLiability: 'Investigación originada tras denuncias de exdirigentes del partido sobre cobros y contratos internos. Vox alega que todas las remuneraciones tributan conforme a la ley, fueron acordadas por el Comité Ejecutivo Nacional y niega cualquier desvío. Presunción de inocencia.',
    summary: 'Fiscalización y diligencias respecto al régimen de complementos salariales y pagos de representación otorgados a miembros de la dirección de Vox sin publicidad individualizada en el portal de transparencia, así como contratos a sociedades vinculadas a cargos de la organización.',
    officialResolutionUrl: 'https://www.tcu.es',
    sentenceYearOrPeriod: 'En fiscalización e instrucción (Actualizado Oct 2026)'
  },
  {
    id: 'caso-auditorio-murcia',
    title: 'Caso Auditorio / Pedro Antonio Sánchez (Murcia)',
    party: 'PP',
    court: 'Tribunal Superior de Justicia de Murcia / Audiencia Provincial de Murcia (Sentencia Firme 2023)',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Prevaricación continuada', 'Fraude a la Administración'],
    defraudedAmountEur: '6.000.000 € en subvenciones públicas para las obras del Auditorio de Puerto Lumbreras',
    convictedCount: 1,
    partyInstitutionalLiability: 'Condena penal firme a 3 años de prisión, 17 años de inhabilitación especial y multa para Pedro Antonio Sánchez (expresidente de la Región de Murcia y expresidente del PP regional).',
    summary: 'Adjudicación arbitraria de las obras del auditorio de Puerto Lumbreras sin proyecto modificado aprobado, certificando y abonando con fondos públicos partidas que no se habían ejecutado para no perder la subvención estatal.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2023 (Sentencia firme TSJ/TS)'
  },
  {
    id: 'caso-baltar-ourense',
    title: 'Caso Baltar / Enchufismo en la Diputación de Ourense',
    party: 'PP',
    court: 'Juzgado de lo Penal 1 de Ourense / Audiencia Provincial de Ourense',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Prevaricación administrativa continuada'],
    defraudedAmountEur: 'Contratación irregular continuada de personal público afín al partido',
    convictedCount: 1,
    partyInstitutionalLiability: 'Condena penal firme a 9 años de inhabilitación para cargo público a José Luis Baltar Pumar (expresidente de la Diputación de Ourense durante 22 años y presidente del PP provincial).',
    summary: 'Acreditó la contratación a dedo de 104 personas vinculadas al Partido Popular o recomendadas por dirigentes locales sin proceso de selección ni publicidad antes de un congreso clave del PP en Ourense en 2010.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2014 (Sentencia firme)'
  },
  {
    id: 'caso-trama-eolica-cyl',
    title: 'Trama Eólica de Castilla y León',
    party: 'PP',
    court: 'Audiencia Provincial de Valladolid',
    judicialStatus: 'JUICIO_ORAL',
    crimesCharged: ['Prevaricación', 'Cohecho', 'Blanqueo de capitales', 'Tráfico de influencias'],
    defraudedAmountEur: 'Exigencia de comisiones de más de 80.000.000 € a promotores de energía eólica',
    convictedCount: 0,
    partyInstitutionalLiability: 'Peticiones fiscales de más de 40 años de prisión para el exviceconsejero de Economía Rafael Delgado y altos cargos de la Junta de Castilla y León del PP.',
    summary: 'Macrocausa sobre la presunta red clientelar que exigía a las empresas promotoras de parques eólicos pagar comisiones millonarias o asociarse forzosamente con mercantiles locales vinculadas a la cúpula del PP autonómico para desbloquear las licencias de generación eléctrica.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: 'En fase de juicio oral en Audiencia Provincial'
  },
  {
    id: 'caso-perla-negra-cyl',
    title: 'Caso Perla Negra y Terrenos de Portillo (Castilla y León)',
    party: 'PP',
    court: 'Audiencia Provincial de Valladolid (Sentencia 2024) / Tribunal Supremo',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación de caudales públicos', 'Prevaricación administrativa continuada', 'Revelación de secretos'],
    defraudedAmountEur: 'Sobreprecio acreditado de más de 23.000.000 € en la compra del inmueble administrativo',
    convictedCount: 3,
    partyInstitutionalLiability: 'Condenas penales de hasta 4 años de prisión a exaltos cargos de la Consejería de Economía de la Junta de Castilla y León del PP (viceconsejeros y directores generales de Gesturcal).',
    summary: 'Adquisición y alquiler inflado de la sede de la empresa pública ADE (edificio "Perla Negra") en Arroyo de la Encomienda y de terrenos en Portillo por parte de la Junta de Castilla y León con sobrecostes multimillonarios en beneficio de promotores privados amigos.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2024 (Sentencia condenatoria de la Audiencia Provincial)'
  },
  {
    id: 'caso-faycan-canarias',
    title: 'Caso Faycán (Comisiones en Telde, Gran Canaria)',
    party: 'PP',
    court: 'Audiencia Provincial de Las Palmas / Tribunal Supremo (2018)',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Cohecho pasivo', 'Prevaricación', 'Malversación', 'Falsedad documental'],
    defraudedAmountEur: 'Cobro de mordidas del 20% en contrataciones públicas de obras y suministros municipales',
    convictedCount: 20,
    partyInstitutionalLiability: 'Condenas penales a la cúpula local del Partido Popular en Telde (concejala de Obras, teniente de alcalde y gerentes de empresas municipales).',
    summary: 'Cobro sistemático de mordidas de hasta el 20% del valor de los contratos a constructores y empresarios para adjudicar obras públicas del Ayuntamiento de Telde, destinando parte de los fondos al enriquecimiento particular y a financiar la sede local del PP.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2018 (Sentencia firme TS)'
  },
  {
    id: 'caso-naseiro-historico',
    title: 'Caso Naseiro (Financiación Histórica del PP - 1989/1990)',
    party: 'PP',
    court: 'Tribunal Supremo (Auto de Sala Segunda 1992)',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Cohecho', 'Tráfico de influencias'],
    defraudedAmountEur: 'Se investigaron millones de pesetas en comisiones a constructoras valencianas y gallegas',
    convictedCount: 0,
    partyInstitutionalLiability: 'Sobreseimiento libre y archivo definitivo por nulidad probatoria de las escuchas telefónicas del extesorero Rosendo Naseiro.',
    summary: 'Primera macroinvestigación sobre el cobro de comisiones para financiar las campañas del Partido Popular a través del extesorero nacional Rosendo Naseiro. El Tribunal Supremo anuló las escuchas telefónicas que destapaban los pagos al haberse obtenido sin control judicial específico sobre ese delito, sentando doctrina procesal.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '1992 (Histórico firme por nulidad de escuchas)'
  },
  {
    id: 'caso-monasterio-arquitectura',
    title: 'Querella por Obras y Visados de Arquitectura (Rocío Monasterio)',
    party: 'VOX',
    court: 'Audiencia Provincial de Madrid / Juzgado de Instrucción',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Intrusismo profesional', 'Falsedad documental'],
    defraudedAmountEur: 'No aplicable (servicios de arquitectura y licencias de cambio de uso de lofts)',
    convictedCount: 0,
    partyInstitutionalLiability: 'Archivo definitivo de las querellas contra la portavoz de Vox en la Asamblea de Madrid, Rocío Monasterio, por falta de engaño penal relevante o prescripción.',
    summary: 'Querellas interpuestas por particulares y formaciones políticas denunciando que Rocío Monasterio firmó planos y visados de reformas de suelo industrial a residencial (lofts) entre 2002 y 2007 cuando aún no poseía el título oficial de arquitecta colegiada. Los tribunales archivaron la vía penal al no apreciar dolo estafador directo.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2020-2021 (Archivado firme)'
  },
  {
    id: 'caso-expulsiones-diputados-vox',
    title: 'Sentencias Judiciales por Vulneración de Derechos a Cargos de Vox',
    party: 'VOX',
    court: 'Tribunales Superiores de Justicia de Murcia, Extremadura y Audiencias Provinciales',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Vulneración del derecho fundamental a la participación política (Art. 23 CE)'],
    defraudedAmountEur: 'Retención indebida de asignaciones y fondos de grupos parlamentarios',
    convictedCount: 0,
    partyInstitutionalLiability: 'Condenas judiciales al partido político Vox declarando la nulidad radical de las expulsiones de diputados en Murcia y concejales en Badajoz por infringir sus derechos constitucionales de defensa.',
    summary: 'Múltiples resoluciones judiciales firmes anularon las medidas disciplinarias y expulsiones fulminantes impuestas por la dirección nacional de Vox contra diputados y concejales díscolos que se negaron a transferir las asignaciones de sus grupos institucionales a la cuenta central del partido en Madrid.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2021-2023 (Sentencias firmes en vía civil y contenciosa)'
  },
  {
    id: 'caso-vox-baleares-fondos',
    title: 'Diligencias sobre Fondos y Asignaciones de Vox Baleares',
    party: 'VOX',
    court: 'Juzgados de Instrucción de Palma de Mallorca / Fiscalía Anticorrupción',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Apropiación indebida', 'Financiación irregular'],
    defraudedAmountEur: 'Se denunció opacidad en la cuenta del grupo parlamentario balear y de la coalición Actúa-Baleares',
    convictedCount: 0,
    partyInstitutionalLiability: 'Sobreseimiento de las diligencias penales al no apreciarse desvío delictivo ni enriquecimiento particular de Jorge Campos.',
    summary: 'Denuncias cruzadas interpuestas tras la ruptura entre dirigentes fundacionales de Vox en Baleares (con la dimisión de la diputada Malena Contestí) acusando a la ejecutiva balear de falta de transparencia en la gestión de las asignaciones públicas parlamentarias. La Fiscalía archivó las denuncias.',
    officialResolutionUrl: 'https://www.fiscal.es',
    sentenceYearOrPeriod: '2020 (Archivado firme)'
  },
  {
    id: 'caso-erial-zaplana',
    title: 'Caso Erial / Eduardo Zaplana y Mordidas de las ITV',
    party: 'PP',
    court: 'Audiencia Provincial de Valencia (Sección Cuarta, Sentencia Octubre 2024) / Tribunal Supremo',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Cohecho pasivo continuado', 'Blanqueo de capitales', 'Prevaricación administrativa', 'Falsedad en documento mercantil'],
    defraudedAmountEur: 'Más de 20.600.000 € en comisiones ilegales repatriadas desde cuentas opacas en Suiza y Luxemburgo',
    convictedCount: 7,
    partyInstitutionalLiability: 'Condena penal de 10 años y 5 meses de prisión, inhabilitación y multas por más de 25 millones de euros a Eduardo Zaplana (expresidente de la Generalitat Valenciana por el PP, exministro de Trabajo y exportavoz del PP en el Congreso).',
    summary: 'Acreditó judicialmente el cobro de comisiones millonarias a empresarios afines a cambio de la privatización y adjudicación de las concesiones de Inspección Técnica de Vehículos (ITV) y del Plan Eólico de la Comunidad Valenciana, canalizadas a través de sociedades pantalla y cuentas en paraísos fiscales.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2024 (Sentencia condenatoria de la Audiencia Provincial)'
  },
  {
    id: 'caso-tarjetas-black-rato',
    title: 'Caso Tarjetas Black de Caja Madrid y Bankia (Rodrigo Rato)',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencia Sala Segunda 486/2018) / Audiencia Nacional',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Apropiación indebida continuada', 'Administración desleal'],
    defraudedAmountEur: '12.500.000 € en gastos personales opacos cargados directamente a la entidad financiera pública',
    convictedCount: 64,
    partyInstitutionalLiability: 'Condena penal firme de 4 años y 6 meses de prisión a Rodrigo Rato (exvicepresidente del Gobierno de España del PP, exministro de Economía y expresidente de Bankia), y condenas de cárcel a decenas de consejeros propuestos por partidos y sindicatos.',
    summary: 'Disfrute generalizado durante más de una década de tarjetas de crédito corporativas opacas a la Agencia Tributaria y al control contable de la entidad, con las que consejeros y altos directivos sufragaron compras de lujo, restaurantes de alta gama, joyas y extracciones de efectivo para uso estrictamente privado sin declarar a Hacienda.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2018 (Sentencia firme TS)'
  },
  {
    id: 'caso-acuamed',
    title: 'Caso Acuamed (Fraude en Obras Hidráulicas Estatales)',
    party: 'PP',
    court: 'Audiencia Nacional - Juzgado Central de Instrucción 6',
    judicialStatus: 'JUICIO_ORAL',
    crimesCharged: ['Fraude a la Administración', 'Malversación agravada', 'Cohecho', 'Prevaricación', 'Falsedad'],
    defraudedAmountEur: 'Decenas de millones de euros en liquidaciones infladas de desaladoras y presas (FCC, Acciona)',
    convictedCount: 0,
    partyInstitutionalLiability: 'Procesamiento formal de Arcadio Mateo (exdirector general de Acuamed nombrado durante el Gobierno de Rajoy) y altos cargos del Ministerio de Agricultura y Medio Ambiente.',
    summary: 'Investigación sobre una presunta red en la empresa pública estatal Aguas de las Cuencas Mediterráneas (Acuamed) que pactaba sobrecostes ficticios, certificaciones infladas y compensaciones indebidas a grandes constructoras a cambio de regalos, viajes y patrocinios deportivos.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Audiencia-Nacional/',
    sentenceYearOrPeriod: 'Señalamiento de juicio oral en la Audiencia Nacional'
  },
  {
    id: 'caso-terra-mitica',
    title: 'Caso Terra Mítica (Facturas Falsas en el Parque de Benidorm)',
    party: 'PP',
    court: 'Tribunal Supremo (Sentencia Firme 2018) / Audiencia Provincial de Valencia',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Fraude fiscal', 'Falsedad en documento mercantil', 'Estafa'],
    defraudedAmountEur: '4.500.000 € en facturación ficticia con dinero de la Generalitat Valenciana',
    convictedCount: 22,
    partyInstitutionalLiability: 'Condenas penales firmes de hasta 46 años de cárcel a empresarios y directivos de la sociedad promotora impulsada por el Consell del PP.',
    summary: 'Trama de facturación falsa orquestada por una red de empresas pantalla para eludir el pago del IVA y desviar fondos públicos de la Generalitat destinados al movimiento de tierras y construcción del parque temático Terra Mítica en Benidorm.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2018 (Sentencia firme TS)'
  },
  {
    id: 'caso-fondos-reservados-interior',
    title: 'Caso Fondos Reservados del Ministerio del Interior (Barrionuevo y Vera)',
    party: 'PSOE',
    court: 'Tribunal Supremo (Sentencia Sala Segunda 2002)',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación de caudales públicos continuada', 'Apropiación indebida'],
    defraudedAmountEur: 'Más de 5.000.000 € (más de 800 millones de pesetas) desviados de las partidas de seguridad nacional',
    convictedCount: 6,
    partyInstitutionalLiability: 'Condenas penales firmes de prisión al exministro del Interior José Barrionuevo, al exsecretario de Estado de Seguridad Rafael Vera y al exdirector general de la Seguridad del Estado Julián Sancristóbal.',
    summary: 'Desvío sistemático e irregular de partidas de fondos reservados del Estado destinadas a la lucha antiterrorista y seguridad nacional durante los gobiernos de Felipe González para abonar sobresueldos millonarios mensuales en metálico y gratificaciones privadas a la cúpula del Ministerio del Interior.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2002 (Sentencia firme TS)'
  },
  {
    id: 'caso-roldan-guardia-civil',
    title: 'Caso Roldán (Enriquecimiento Ilícito en la Guardia Civil)',
    party: 'PSOE',
    court: 'Tribunal Supremo (Sentencia 1999) / Audiencia Provincial de Madrid',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación', 'Cohecho', 'Fraude fiscal', 'Estafa'],
    defraudedAmountEur: 'Más de 1.700 millones de pesetas (10 millones €) en mordidas por obras de casas cuartel y fondos reservados',
    convictedCount: 4,
    partyInstitutionalLiability: 'Condena penal firme a 31 años de prisión para Luis Roldán (exdirector general de la Guardia Civil nombrado por el PSOE).',
    summary: 'Saqueo continuado de las partidas de fondos reservados del cuerpo y cobro de comisiones ilegales a constructoras a cambio de la adjudicación de obras de reforma de cuarteles de la Guardia Civil en toda España, ocultando el patrimonio en cuentas bancarias secretas en Suiza.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '1999 (Sentencia firme TS)'
  },
  {
    id: 'caso-invercaria-andalucia',
    title: 'Caso Invercaria (Préstamos a Dedo en Andalucía)',
    party: 'PSOE',
    court: 'Tribunal Supremo (Sentencias múltiples firmes 2021-2023) / Audiencia Provincial de Sevilla',
    judicialStatus: 'SENTENCIA_FIRME',
    crimesCharged: ['Malversación continuada', 'Prevaricación administrativa', 'Tráfico de influencias'],
    defraudedAmountEur: 'Decenas de millones de euros en fondos públicos de capital riesgo concedidos sin expediente',
    convictedCount: 5,
    partyInstitutionalLiability: 'Condenas penales firmes de prisión al expresidente de la empresa pública de capital riesgo de la Junta de Andalucía (Tomás Pérez-Sauquillo) y directivos autonómicos.',
    summary: 'Adjudicación arbitraria de préstamos participativos, subvenciones y fondos públicos de inversión a mercantiles de familiares y afines políticos sin plan de viabilidad, sin análisis de riesgo y al margen de los procedimientos de contratación pública.',
    officialResolutionUrl: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/',
    sentenceYearOrPeriod: '2021-2023 (Sentencias firmes TS)'
  },
  {
    id: 'caso-vox-propaganda-victimas',
    title: 'Diligencias por Propaganda Electoral con Lemas de Víctimas del Terrorismo',
    party: 'VOX',
    court: 'Audiencia Nacional (Juzgado Central de Instrucción) / Juzgados de Instrucción',
    judicialStatus: 'ARCHIVADO_ABSUELTO',
    crimesCharged: ['Presunto delito de humillación a las víctimas del terrorismo (Art. 578 CP)'],
    defraudedAmountEur: 'No aplicable (propaganda y lemas electorales)',
    convictedCount: 0,
    partyInstitutionalLiability: 'Exoneración penal firme tras el archivo de las denuncias de colectivos de víctimas al entender la Sala que no existía dolo penal de humillación sino controversia de crítica política en contienda electoral.',
    summary: 'Diligencias judiciales incoadas a raíz de querellas por la utilización de lemas y cartelería vinculando a formaciones rivales con el terrorismo de ETA en actos de campaña. Los tribunales resolvieron el sobreseimiento al amparo de la libertad de expresión política.',
    officialResolutionUrl: 'https://www.poderjudicial.es',
    sentenceYearOrPeriod: '2023-2024 (Auto firme de archivo)'
  }
];

export const ADMINISTRATIVE_SANCTIONS: AdministrativeSanction[] = [
  {
    id: 'tcu-vox-donaciones-2024',
    title: 'Sanción del Tribunal de Cuentas a Vox por Donaciones Irregulares',
    body: 'TRIBUNAL_DE_CUENTAS',
    party: 'VOX',
    targetPersonOrEntity: 'Partido Político Vox',
    infractionType: 'Infracción muy grave de la Ley de Financiación de Partidos (Art. 17 LO 8/2007)',
    penalty: 'Multa pecuniaria de 233.324,22 euros',
    legalBasis: 'Ley Orgánica 8/2007 sobre financiación de los partidos políticos',
    date: '2024-05-14',
    officialDocUrl: 'https://www.tcu.es',
    summary: 'El Tribunal de Cuentas impuso una sanción a Vox por percibir donaciones no identificadas mediante sistemas de recaudación y venta de merchandising/crowdfunding sin cumplir los requisitos de trazabilidad legal de los donantes exigidos por ley.'
  },
  {
    id: 'jec-sanchez-moncloa',
    title: 'Sanciones de la Junta Electoral Central al Presidente del Gobierno',
    body: 'JEC',
    party: 'PSOE',
    targetPersonOrEntity: 'Pedro Sánchez (Presidente del Gobierno)',
    infractionType: 'Vulneración del deber de neutralidad institucional en periodo electoral (Art. 50.2 LOREG)',
    penalty: 'Multas de 500 € a 2.200 € en reiteradas resoluciones (2019, 2023)',
    legalBasis: 'Ley Orgánica 5/1985 del Régimen Electoral General (LOREG)',
    date: '2023-07-20',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral Central sancionó a Pedro Sánchez por realizar valoraciones con connotación electoralista y de balance de gestión partidista durante ruedas de prensa oficiales en el Palacio de La Moncloa y cumbres de la UE una vez convocadas las elecciones.'
  },
  {
    id: 'jec-ayuso-sol',
    title: 'Sanción de la JEC a Isabel Díaz Ayuso por Actos Institucionales',
    body: 'JEC',
    party: 'PP',
    targetPersonOrEntity: 'Isabel Díaz Ayuso (Presidenta de la Comunidad de Madrid)',
    infractionType: 'Quebrantamiento del principio de neutralidad electoral (Art. 50 LOREG)',
    penalty: 'Apercibimiento y multas de hasta 1.000 €',
    legalBasis: 'Ley Orgánica del Régimen Electoral General',
    date: '2023-05-22',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral resolvió que la presidenta madrileña vulneró la neutralidad obligatoria en ruedas de prensa posteriores al Consejo de Gobierno en la Real Casa de Correos al criticar frontalmente a partidos adversarios en campaña.'
  },
  {
    id: 'tcu-pp-gastos-locales',
    title: 'Resolución del Tribunal de Cuentas sobre Contabilidad Electoral del PP',
    body: 'TRIBUNAL_DE_CUENTAS',
    party: 'PP',
    targetPersonOrEntity: 'Partido Popular',
    infractionType: 'Deficiencias en justificación de subvenciones y gastos en elecciones locales',
    penalty: 'Propuesta de reducción de subvención electoral anual',
    legalBasis: 'Informe de fiscalización de elecciones a Cortes y Locales',
    date: '2022-11-10',
    officialDocUrl: 'https://www.tcu.es',
    summary: 'Fiscalizaciones oficiales del Tribunal de Cuentas señalaron irregularidades formales en la imputación de gastos en sedes provinciales y pagos electorales no canalizados estrictamente por la cuenta corriente electoral designada.'
  },
  {
    id: 'jec-isabel-rodriguez',
    title: 'Sanción de la JEC a la Ministra Portavoz por Vulnerar Neutralidad',
    body: 'JEC',
    party: 'PSOE',
    targetPersonOrEntity: 'Isabel Rodríguez García (Ministra de Política Territorial y Portavoz)',
    infractionType: 'Vulneración grave del deber de neutralidad en campaña electoral (Art. 50.2 LOREG)',
    penalty: 'Multa firme de 2.200 € confirmada por sentencia de la Sala Tercera del Tribunal Supremo',
    legalBasis: 'Artículo 50.2 y 153.1 de la Ley Orgánica 5/1985 (LOREG)',
    date: '2024-03-05',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La JEC sancionó a la portavoz ministerial por verter críticas contra el Partido Popular desde la sala de prensa del Palacio de La Moncloa en comparecencias oficiales tras el Consejo de Ministros durante periodo electoral. El Tribunal Supremo ratificó la multa al consagrar que los recursos y sedes del Estado deben permanecer escrupulosamente neutrales.'
  },
  {
    id: 'jec-feijoo-declaraciones',
    title: 'Resolución de la JEC a Alberto Núñez Feijóo por Neutralidad',
    body: 'JEC',
    party: 'PP',
    targetPersonOrEntity: 'Alberto Núñez Feijóo (Presidente del Partido Popular)',
    infractionType: 'Infracción del principio de igualdad electoral en actos y foros públicos',
    penalty: 'Apercibimiento formal y requerimiento de cese de actos partidistas en sedes oficiales',
    legalBasis: 'Artículos 50.2 y 53 de la Ley Orgánica del Régimen Electoral General',
    date: '2023-06-29',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral Central estimó denuncias por la emisión de mensajes electorales y balances de gestión partidista durante comparecencias o actos en recintos oficiales autonómicos una vez disueltas las Cortes, recordando la prohibición de instrumentalizar actos institucionales en beneficio de una formación política.'
  },
  {
    id: 'tcu-vox-devolucion-fondos-2023',
    title: 'Requerimiento del Tribunal de Cuentas a Vox por Desvío de Asignaciones',
    body: 'TRIBUNAL_DE_CUENTAS',
    party: 'VOX',
    targetPersonOrEntity: 'Grupo Parlamentario y Cuentas Centrales de Vox',
    infractionType: 'Desvío de subvenciones finalistas de grupos parlamentarios y municipales a la caja central',
    penalty: 'Reintegro y rectificación contable de más de 300.000 € en asignaciones',
    legalBasis: 'Reglamentos parlamentarios autonómicos y Ley Orgánica 8/2007',
    date: '2023-12-18',
    officialDocUrl: 'https://www.tcu.es',
    summary: 'El Tribunal de Cuentas detectó que Vox transfirió de forma sistemática remanentes de asignaciones concedidas a sus grupos parlamentarios autonómicos y concejales a las cuentas bancarias centrales del partido nacional, contraviniendo el destino específico y finalista prescrito por ley para la actividad parlamentaria.'
  },
  {
    id: 'tcu-psoe-gastos-campana-2022',
    title: 'Resolución del Tribunal de Cuentas sobre Gastos Electorales del PSOE',
    body: 'TRIBUNAL_DE_CUENTAS',
    party: 'PSOE',
    targetPersonOrEntity: 'Partido Socialista Obrero Español',
    infractionType: 'Deficiencias en justificación de facturas y envíos postales de comicios locales',
    penalty: 'Propuesta de reducción de la subvención anual estatal por importe de 54.200 €',
    legalBasis: 'Artículo 130 de la Ley Orgánica del Régimen Electoral General',
    date: '2022-09-28',
    officialDocUrl: 'https://www.tcu.es',
    summary: 'El informe de fiscalización del Tribunal de Cuentas de las elecciones municipales y autonómicas determinó que el PSOE no justificó con suficiente detalle facturas de proveedores locales y de propaganda postal, aplicando una reducción en la subvención anual que abona el Estado.'
  },
  {
    id: 'tcu-vox-huchas-loteria',
    title: 'Sanción del Tribunal de Cuentas a Vox por Captación en Vía Pública sin Identificar',
    body: 'TRIBUNAL_DE_CUENTAS',
    party: 'VOX',
    targetPersonOrEntity: 'Partido Político Vox',
    infractionType: 'Infracción de la Ley de Financiación de Partidos (Art. 17.Dos LO 8/2007)',
    penalty: 'Sanción pecuniaria de 50.000 € y orden de ingreso al Tesoro Público de 180.000 € en fondos opacos',
    legalBasis: 'Prohibición expresa de donaciones anónimas y recaudación sin verificación de NIF/DNI',
    date: '2022-12-15',
    officialDocUrl: 'https://www.tcu.es',
    summary: 'El Tribunal de Cuentas sancionó a Vox tras acreditar que el partido recabó fondos en efectivo mediante "huchas" en mesas informativas callejeras y venta de participaciones de lotería de Navidad con sobreprecio sin registrar fehacientemente la identidad de los donantes, vulnerando la normativa anticorrupción.'
  },
  {
    id: 'jec-vox-publicidad-redes',
    title: 'Sanción de la JEC a Vox por Contratación de Publicidad Digital Preelectoral',
    body: 'JEC',
    party: 'VOX',
    targetPersonOrEntity: 'Comité de Campaña Electoral de Vox',
    infractionType: 'Vulneración de la prohibición de contratación de publicidad electoral antes de campaña (Art. 53 LOREG)',
    penalty: 'Multa de 3.000 € y requerimiento de retirada inmediata de anuncios patrocinados',
    legalBasis: 'Artículo 53 de la Ley Orgánica 5/1985 del Régimen Electoral General',
    date: '2023-07-06',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral Central sancionó a Vox por contratar publicidad pagada en redes sociales (Meta/Facebook) con mensajes de captación expresa del voto con anterioridad a la fecha legal de inicio de la campaña de las elecciones generales.'
  },
  {
    id: 'aepd-vox-mensajeria-masiva',
    title: 'Sanción de la AEPD a Vox por Envíos Masivos de Propaganda Política',
    body: 'AEPD',
    party: 'VOX',
    targetPersonOrEntity: 'Partido Político Vox',
    infractionType: 'Vulneración del artículo 6.1 del Reglamento General de Protección de Datos (RGPD)',
    penalty: 'Apercibimiento y sanción administrativa de 20.000 €',
    legalBasis: 'Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD)',
    date: '2021-10-21',
    officialDocUrl: 'https://www.aepd.es',
    summary: 'La Agencia Española de Protección de Datos sancionó a Vox tras comprobar que remitió mensajes SMS de propaganda política de forma masiva a ciudadanos que no habían facilitado previamente sus números ni prestado su consentimiento expreso.'
  },
  {
    id: 'jec-cam-campana-sanidad',
    title: 'Sanción de la Junta Electoral a la Consejería de Sanidad de Madrid por Electoralismo',
    body: 'JEC',
    party: 'PP',
    targetPersonOrEntity: 'Consejería de Sanidad de la Comunidad de Madrid (Gobierno PP)',
    infractionType: 'Vulneración del artículo 50.2 de la LOREG por difusión de logros en periodo electoral',
    penalty: 'Multa de 1.500 € y orden de retirada inmediata de cartelería institucional',
    legalBasis: 'Artículo 50.2 y 153.1 de la Ley Orgánica 5/1985 (LOREG)',
    date: '2023-05-18',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral Central sancionó a responsables autonómicos por lanzar una campaña institucional en marquesinas y medios resaltando inversiones de la sanidad madrileña en plena campaña de las elecciones autonómicas de 2023, quebrantando la neutralidad obligatoria.'
  },
  {
    id: 'tcu-pp-exceso-gasto-2021',
    title: 'Sanción del Tribunal de Cuentas al PP por Superar Límites Legales de Gasto Electoral',
    body: 'TRIBUNAL_DE_CUENTAS',
    party: 'PP',
    targetPersonOrEntity: 'Partido Popular',
    infractionType: 'Infracción de los topes máximos de gasto electoral fijados por la legislación',
    penalty: 'Reducción de 145.000 € en la subvención estatal por gastos electorales',
    legalBasis: 'Artículos 130 y 134 de la LOREG en concordancia con la LO 8/2007',
    date: '2021-06-30',
    officialDocUrl: 'https://www.tcu.es',
    summary: 'El Tribunal de Cuentas constató en su fiscalización definitiva que candidaturas provinciales del Partido Popular rebasaron el límite máximo de gasto legalmente permitido para publicidad y actos de campaña, deduciendo la penalización económica de las transferencias electorales.'
  },
  {
    id: 'jec-vox-lona-alcala-2023',
    title: 'Sanción y Retirada Forzosa de la JEC a Vox por la Lona de la Calle Alcalá',
    body: 'JEC',
    party: 'VOX',
    targetPersonOrEntity: 'Partido Político Vox',
    infractionType: 'Infracción del artículo 53 de la LOREG por campaña electoral ilícita antes de plazo',
    penalty: 'Orden de retirada forzosa inmediata en 24 horas y apertura de expediente sancionador',
    legalBasis: 'Artículo 53 de la Ley Orgánica 5/1985 (LOREG)',
    date: '2023-06-27',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral Central ordenó la retirada forzosa de la lona gigante desplegada por Vox en Madrid que arrojaba a la papelera los símbolos de la Agenda 2030, el movimiento feminista y la bandera LGTBI, resolviendo que infringía la prohibición legal de propaganda electoral exterior antes de la apertura oficial de campaña.'
  },
  {
    id: 'ts-vox-sindicato-solidaridad',
    title: 'Resolución de Órganos de Control sobre Uso de Fondos de Vox para Huelga de Solidaridad',
    body: 'TRIBUNAL_DE_CUENTAS',
    party: 'VOX',
    targetPersonOrEntity: 'Grupos Parlamentarios de Vox y Sindicato Solidaridad',
    infractionType: 'Desvío de medios institucionales y recursos públicos para la promoción de huelga sindical',
    penalty: 'Reprobación y no admisibilidad de justificación contable de gastos de grupos parlamentarios',
    legalBasis: 'Reglamentos parlamentarios autonómicos y Ley Orgánica 8/2007',
    date: '2024-04-11',
    officialDocUrl: 'https://www.tcu.es',
    summary: 'Los órganos de fiscalización determinaron que los fondos públicos asignados a los grupos de Vox en asambleas autonómicas y en el Congreso no pueden sufragiar actos de difusión ni convocatorias de huelga general de su sindicato afín "Solidaridad" contra la ley de amnistía, por tratarse de fines ajenos a la función parlamentaria estricta.'
  },
  {
    id: 'jec-pp-campana-baltar-2023',
    title: 'Sanción de la Junta Electoral a la Diputación de Ourense por Publicidad Institucional',
    body: 'JEC',
    party: 'PP',
    targetPersonOrEntity: 'Diputación Provincial de Ourense (Presidencia PP)',
    infractionType: 'Vulneración del deber de neutralidad institucional (Artículo 50.2 de la LOREG)',
    penalty: 'Multa pecuniaria de 1.200 € e incoación de expediente sancionador a responsables provinciales',
    legalBasis: 'Artículo 50.2 y 153.1 de la LOREG',
    date: '2023-05-15',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral sancionó a la Diputación de Ourense por la difusión de inserciones publicitarias institucionales y boletines destacando inversiones y logros de la corporación provincial durante el periodo de elecciones municipales de 2023.'
  },
  {
    id: 'aepd-vox-fotos-manifestantes',
    title: 'Sanción de la AEPD a Vox por Difusión en Redes de Datos e Imágenes de Protestas',
    body: 'AEPD',
    party: 'VOX',
    targetPersonOrEntity: 'Partido Político Vox',
    infractionType: 'Infracción grave del principio de licitud y lealtad en el tratamiento de datos (Art. 5.1.a y 6 RGPD)',
    penalty: 'Sanción pecuniaria de 10.000 € y apercibimiento con orden de supresión de publicaciones',
    legalBasis: 'Reglamento General de Protección de Datos (UE) 2016/679',
    date: '2023-01-19',
    officialDocUrl: 'https://www.aepd.es',
    summary: 'La Agencia Española de Protección de Datos resolvió que Vox vulneró la legalidad al difundir en sus perfiles oficiales de Twitter/X imágenes nítidas de manifestantes y opositores políticos identificables sin contar con consentimiento ni concurrir interés público tutelable.'
  },
  {
    id: 'jec-vox-paridad-listas',
    title: 'Requerimientos de la Junta Electoral a Vox por Incumplimiento de Paridad Electoral',
    body: 'JEC',
    party: 'VOX',
    targetPersonOrEntity: 'Candidaturas Locales de Vox en Diversos Municipios',
    infractionType: 'Vulneración de la composición equilibrada entre hombres y mujeres (Art. 44 bis LOREG)',
    penalty: 'Inadmisión provisional y apercibimiento de exclusión de listas con requerimiento de subsanación inmediata',
    legalBasis: 'Artículo 44 bis de la Ley Orgánica 5/1985 (LOREG)',
    date: '2023-05-02',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'Las Juntas Electorales de Zona y la JEC requirieron a Vox subsanar con carácter de urgencia listas electorales presentadas que no alcanzaban el porcentaje mínimo legal del 40% de candidatos de uno de los sexos, advirtiendo de su invalidación formal.'
  },
  {
    id: 'jec-vox-fachada-reflexion',
    title: 'Sanción de la JEC a Vox por Emisión de Propaganda en Jornada de Reflexión',
    body: 'JEC',
    party: 'VOX',
    targetPersonOrEntity: 'Representantes Electorales de Vox',
    infractionType: 'Vulneración de la prohibición de actos y difusión de propaganda el día previo al voto (Art. 53 LOREG)',
    penalty: 'Multa de 2.500 € a dirigentes provinciales',
    legalBasis: 'Artículo 53 y 153.1 de la Ley Orgánica del Régimen Electoral General',
    date: '2023-07-22',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral Central sancionó a representantes de Vox por proyectar vídeos propagandísticos con siglas partidistas y peticiones explícitas de voto sobre fachadas urbanas durante la jornada de reflexión.'
  },
  {
    id: 'jec-pp-campana-cantabria-2023',
    title: 'Sanción de la Junta Electoral al Gobierno de Cantabria por Infracción de Neutralidad',
    body: 'JEC',
    party: 'PP',
    targetPersonOrEntity: 'Consejería de Presidencia del Gobierno de Cantabria (PP)',
    infractionType: 'Vulneración del deber de neutralidad y difusión de logros en campaña (Art. 50.2 LOREG)',
    penalty: 'Multa pecuniaria de 1.000 € y apercibimiento formal',
    legalBasis: 'Artículo 50.2 de la Ley Orgánica 5/1985 (LOREG)',
    date: '2023-05-24',
    officialDocUrl: 'https://www.juntaelectoralcentral.es',
    summary: 'La Junta Electoral sancionó a responsables del Gobierno cántabro del PP por difundir notas y comunicados en portales y redes oficiales detallando inversiones públicas y compromisos de legislatura una vez convocadas las elecciones autonómicas.'
  }
];

export const REGIONAL_CRISES: RegionalCrisis[] = [
  {
    id: 'dana-valencia-2024',
    title: 'Catástrofe de la DANA en la Comunidad Valenciana (Octubre 2024)',
    regionId: 'comunitat-valenciana',
    regionName: 'Comunitat Valenciana',
    governingParty: 'PP',
    governingDetails: 'Gobierno de la Generalitat Valenciana presidido por Carlos Mazón (PP; gobernó inicialmente en coalición con Vox hasta julio de 2024).',
    date: '2024-10-29',
    crisisType: 'DANA_INUNDACION',
    humanAndMaterialCost: 'Más de 220 víctimas mortales registradas; decenas de miles de viviendas, vehículos e infraestructuras destruidas en l’Horta Sud y Camp de Túria.',
    competencyMatrix: {
      ccaaResponsibility: 'Según la Ley 17/2015 del Sistema Nacional de Protección Civil, la dirección operativa de la emergencia en Nivel 2 corresponde exclusivamente a la Comunidad Autónoma (CECOPI / Generalitat). La decisión y hora del envío de la alarma masiva a móviles (ES-Alert) es potestad autonómica.',
      centralGovernmentResponsibility: 'AEMET (predicción meteorológica y emisión de avisos rojos) y Confederación Hidrográfica del Júcar (medición de caudales en barrancos y ríos). Suministro de efectivos del Ejército (UME) y Fuerzas de Seguridad a petición de la Generalitat, o asunción de Nivel 3 (Interés Nacional) por el Ministerio del Interior si el Gobierno central lo decretase.'
    },
    timelineKeyPoints: [
      { time: '07:36 h (29 Oct)', event: 'AEMET eleva el aviso a nivel rojo (máximo riesgo) para el litoral e interior de Valencia.' },
      { time: '12:20 h (29 Oct)', event: 'La Confederación Hidrográfica advierte del desbordamiento del barranco del Poyo.' },
      { time: '17:00 h (29 Oct)', event: 'Se constituye el Centro de Coordinación Operativo Integrado (CECOPI) de la Generalitat.' },
      { time: '20:11 h (29 Oct)', event: 'La Generalitat emite la alerta acústica masiva a los teléfonos móviles (ES-Alert), cuando numerosas localidades ya estaban anegadas.' }
    ],
    preventionBudgetAnalysis: 'Polémica sobre la supresión en 2023 de la "Unidad Valenciana de Emergencias" (UVE) acordada entre PP y Vox, frente al argumento de que la UVE no era un cuerpo operativo sino un ente administrativo redundante. Paralización histórica de obras hidráulicas de drenaje en el barranco del Poyo por falta de inversión estatal y trabas ambientales.',
    investigativeCommissionStatus: 'Comisiones de investigación constituidas en Les Corts Valencianes y Congreso de los Diputados. Múltiples querellas por presunto homicidio imprudente y negligencia admitidas a trámite en juzgados valencianos.',
    judicialProceedingsUrl: 'https://www.poderjudicial.es',
    summary: 'El mayor desastre natural en España en el siglo XXI desencadenó una profunda crisis institucional y cruce de responsabilidades entre la Generalitat (gestión operativa y tardanza de alertas) y el Gobierno de España (medición de caudales y no asunción de mando nacional).'
  },
  {
    id: 'incendio-sierra-culebra-2022',
    title: 'Grandes Incendios de la Sierra de la Culebra y Zamora (Verano 2022)',
    regionId: 'castilla-y-leon',
    regionName: 'Castilla y León',
    governingParty: 'COALICION_PP_VOX',
    governingDetails: 'Junta de Castilla y León presidida por Alfonso Fernández Mañueco (PP) en coalición con Vox (vicepresidencia Juan García-Gallardo y consejería de Medio Ambiente).',
    date: '2022-06-15',
    crisisType: 'INCENDIO_FORESTAL',
    humanAndMaterialCost: 'Más de 65.000 hectáreas calcinadas en dos oleadas (junio y julio), 4 personas fallecidas y pérdida masiva de biodiversidad y reservas de lobo ibérico.',
    competencyMatrix: {
      ccaaResponsibility: 'La prevención, vigilancia y operativos de extinción de incendios forestales son competencia estatutaria y autonómica de la Junta de Castilla y León (Consejería de Medio Ambiente).',
      centralGovernmentResponsibility: 'Apoyo aéreo mediante hidroaviones del MITECO y despliegue de batallones de la Unidad Militar de Emergencias (UME) tras la solicitud autonómica.'
    },
    timelineKeyPoints: [
      { time: '15 Junio 2022', event: 'Tormenta seca de rayos desata múltiples focos en plena ola de calor histórica (>40°C).' },
      { time: '16 Junio 2022', event: 'El fuego arrasa miles de hectáreas por hora ante la falta de personal de guardia completo (el operativo de verano no estaba declarado al 100%).' },
      { time: 'Julio 2022', event: 'Segundo gran incendio en Losacio con víctimas mortales (un brigadista y un pastor).' }
    ],
    preventionBudgetAnalysis: 'Intensa controversia por las declaraciones previas del consejero de Medio Ambiente considerando "un despilfarro" mantener un operativo de bomberos forestales al 100% durante todo el año. Tras la catástrofe, la Junta acordó con sindicatos un plan extraordinario para extender la contratación de brigadistas a todo el año.',
    investigativeCommissionStatus: 'Debates parlamentarios monográficos en las Cortes de Castilla y León y manifestaciones masivas en Zamora por abandono rural.',
    summary: 'Puso en el centro del debate político la precarización de las brigadas forestales, el abandono de los montes y la negativa a considerar el cambio climático como acelerador de megaincendios.'
  },
  {
    id: 'mar-menor-crisis',
    title: 'Colapso Ecológico y Anoxia del Mar Menor (Murcia)',
    regionId: 'region-de-murcia',
    regionName: 'Región de Murcia',
    governingParty: 'PP',
    governingDetails: 'Gobierno de la Región de Murcia (PP, presidido por Fernando López Miras).',
    date: '2019-10-12',
    crisisType: 'MEDIOAMBIENTE',
    humanAndMaterialCost: 'Toneladas de peces y crustáceos muertos por episodios severos de anoxia (falta de oxígeno en 2019 y 2021); grave impacto económico turístico e inmobiliario.',
    competencyMatrix: {
      ccaaResponsibility: 'Control y vigilancia de vertidos en origen, ordenación del territorio agrícola, inspección de explotaciones de regadío intensivo y protección de espacios naturales protegidos.',
      centralGovernmentResponsibility: 'Dominio Público Hidráulico y Marítimo-Terrestre (Confederación Hidrográfica del Segura y MITECO): clausura de pozos ilegales y actuaciones en ramblas y acuífero cuaternario.'
    },
    timelineKeyPoints: [
      { time: 'Octubre 2019', event: 'Primera gran mortandad masiva de fauna marina tras una DANA que arrastró sedimentos acumulados.' },
      { time: 'Agosto 2021', event: 'Segundo episodio severo de sopa verde y asfixia en las orillas del Mar Menor.' },
      { time: 'Septiembre 2022', event: 'El Congreso aprueba una ILP histórica que dota al Mar Menor de Personalidad Jurídica (Ley 19/2022).' }
    ],
    preventionBudgetAnalysis: 'Discrepancia entre la exigencia de moratorias a fertilizantes nitrogenados y regadíos ilegales del Campo de Cartagena frente a la defensa de los sectores agroexportadores por parte de PP y Vox.',
    investigativeCommissionStatus: 'Investigación abierta en la Audiencia Nacional (Caso Topillo) contra exresponsables públicos y empresarios agrícolas por presuntos delitos contra el medio ambiente.',
    summary: 'Paradigma de conflicto competencial entre administraciones con acusaciones mutuas de inacción entre el gobierno autonómico conservador y el ministerio ecologista estatal.'
  },
  {
    id: 'residencias-covid-madrid',
    title: 'Gestión de Residencias de Mayores en la Pandemia (Comunidad de Madrid)',
    regionId: 'comunidad-de-madrid',
    regionName: 'Comunidad de Madrid',
    governingParty: 'PP',
    governingDetails: 'Gobierno de la Comunidad de Madrid presidido por Isabel Díaz Ayuso (PP en coalición con Ciudadanos en marzo de 2020).',
    date: '2020-03-18',
    crisisType: 'RESIDENCIAS_COVID',
    humanAndMaterialCost: '7.291 personas mayores fallecidas sin derivación hospitalaria en residencias de la región durante los meses de marzo y abril de 2020.',
    competencyMatrix: {
      ccaaResponsibility: 'Gestión de la red de centros sociosanitarios y de salud pública autonómica; elaboración de los protocolos clínicos de triaje y derivación a hospitales.',
      centralGovernmentResponsibility: 'Mando único sanitario bajo el primer Estado de Alarma decretado el 14 de marzo de 2020 por el Gobierno de España.'
    },
    timelineKeyPoints: [
      { time: '18-25 Marzo 2020', event: 'Emisión de los denominados "protocolos de derivación" hospitalaria firmados por la Consejería de Sanidad que excluían a pacientes con deterioro cognitivo severo o discapacidad terminal.' },
      { time: 'Junio 2020', event: 'El exconsejero de Políticas Sociales de Cs (Alberto Reyero) califica los protocolos de inmorales e ilegales.' }
    ],
    preventionBudgetAnalysis: 'Controversia política permanente: la oposición exige responsabilidades políticas y penales; el Gobierno regional argumenta que los hospitales estaban al borde del colapso absoluto y que el triaje fue estrictamente médico.',
    investigativeCommissionStatus: 'Cientos de querellas de familiares archivadas mayoritariamente por los juzgados de instrucción al considerar que no hubo delito individual, con varios recursos pendientes.',
    summary: 'Uno de los temas más polarizantes de la política madrileña y nacional, objeto de continuos debates parlamentarios sobre la dignidad del cuidado de mayores en emergencias.'
  }
];

export const REGIONS: Region[] = [
  { id: 'andalucia', name: 'Andalucía', capital: 'Sevilla', president: 'Juan Manuel Moreno Bonilla', governingParty: 'PP', coalitionDetail: 'Mayoría absoluta del PP', totalSeats: 109, seats: { PP: 58, PSOE: 30, VOX: 14, OTHERS: 7 }, population: '8.600.000' },
  { id: 'comunidad-de-madrid', name: 'Comunidad de Madrid', capital: 'Madrid', president: 'Isabel Díaz Ayuso', governingParty: 'PP', coalitionDetail: 'Mayoría absoluta del PP', totalSeats: 135, seats: { PP: 70, PSOE: 27, VOX: 10, OTHERS: 28 }, population: '7.000.000' },
  { id: 'cataluna', name: 'Cataluña', capital: 'Barcelona', president: 'Salvador Illa', governingParty: 'PSOE', coalitionDetail: 'PSC-PSOE en solitario (apoyos de investidura de ERC y Comuns)', totalSeats: 135, seats: { PP: 15, PSOE: 42, VOX: 11, OTHERS: 67 }, population: '8.000.000' },
  { id: 'comunitat-valenciana', name: 'Comunitat Valenciana', capital: 'Valencia', president: 'Carlos Mazón', governingParty: 'PP', coalitionDetail: 'Gobierno del PP en minoría (tras ruptura del pacto de coalición con Vox)', totalSeats: 99, seats: { PP: 40, PSOE: 31, VOX: 13, OTHERS: 15 }, population: '5.300.000' },
  { id: 'galicia', name: 'Galicia', capital: 'Santiago de Compostela', president: 'Alfonso Rueda', governingParty: 'PP', coalitionDetail: 'Mayoría absoluta del PP', totalSeats: 75, seats: { PP: 40, PSOE: 9, VOX: 0, OTHERS: 26 }, population: '2.700.000' },
  { id: 'castilla-y-leon', name: 'Castilla y León', capital: 'Valladolid', president: 'Alfonso Fernández Mañueco', governingParty: 'PP', coalitionDetail: 'Gobierno del PP en minoría (tras salida de Vox del gobierno)', totalSeats: 81, seats: { PP: 31, PSOE: 28, VOX: 13, OTHERS: 9 }, population: '2.400.000' },
  { id: 'pais-vasco', name: 'País Vasco', capital: 'Vitoria-Gasteiz', president: 'Imanol Pradales', governingParty: 'OTROS', coalitionDetail: 'Coalición PNV - PSE-EE (PSOE)', totalSeats: 75, seats: { PP: 7, PSOE: 12, VOX: 1, OTHERS: 55 }, population: '2.200.000' },
  { id: 'castilla-la-mancha', name: 'Castilla-La Mancha', capital: 'Toledo', president: 'Emiliano García-Page', governingParty: 'PSOE', coalitionDetail: 'Mayoría absoluta del PSOE', totalSeats: 33, seats: { PP: 12, PSOE: 17, VOX: 4, OTHERS: 0 }, population: '2.100.000' },
  { id: 'canarias', name: 'Canarias', capital: 'Las Palmas / Santa Cruz', president: 'Fernando Clavijo', governingParty: 'OTROS', coalitionDetail: 'Coalición Coalición Canaria + Partido Popular', totalSeats: 70, seats: { PP: 15, PSOE: 23, VOX: 4, OTHERS: 28 }, population: '2.250.000' },
  { id: 'region-de-murcia', name: 'Región de Murcia', capital: 'Murcia', president: 'Fernando López Miras', governingParty: 'PP', coalitionDetail: 'Gobierno del PP en minoría tras salida de Vox', totalSeats: 45, seats: { PP: 21, PSOE: 13, VOX: 9, OTHERS: 2 }, population: '1.550.000' },
  { id: 'aragon', name: 'Aragón', capital: 'Zaragoza', president: 'Jorge Azcón', governingParty: 'PP', coalitionDetail: 'Gobierno del PP en solitario (apoyos puntuales)', totalSeats: 67, seats: { PP: 28, PSOE: 23, VOX: 7, OTHERS: 9 }, population: '1.350.000' },
  { id: 'illes-balears', name: 'Illes Balears', capital: 'Palma', president: 'Marga Prohens', governingParty: 'PP', coalitionDetail: 'Gobierno del PP en solitario (acuerdos con Vox)', totalSeats: 59, seats: { PP: 25, PSOE: 18, VOX: 8, OTHERS: 8 }, population: '1.200.000' },
  { id: 'extremadura', name: 'Extremadura', capital: 'Mérida', president: 'María Guardiola', governingParty: 'PP', coalitionDetail: 'Gobierno del PP en minoría tras salida de Vox', totalSeats: 65, seats: { PP: 28, PSOE: 28, VOX: 5, OTHERS: 4 }, population: '1.050.000' },
  { id: 'principado-de-asturias', name: 'Principado de Asturias', capital: 'Oviedo', president: 'Adrián Barbón', governingParty: 'PSOE', coalitionDetail: 'Coalición PSOE + Convocatoria por Asturias (IU)', totalSeats: 45, seats: { PP: 17, PSOE: 19, VOX: 4, OTHERS: 5 }, population: '1.000.000' },
  { id: 'comunidad-foral-de-navarra', name: 'Comunidad Foral de Navarra', capital: 'Pamplona', president: 'María Chivite', governingParty: 'PSOE', coalitionDetail: 'Coalición PSN-PSOE + Geroa Bai + Contigo Navarra', totalSeats: 50, seats: { PP: 3, PSOE: 11, VOX: 2, OTHERS: 34 }, population: '670.000' },
  { id: 'cantabria', name: 'Cantabria', capital: 'Santander', president: 'María José Sáenz de Buruaga', governingParty: 'PP', coalitionDetail: 'Gobierno del PP en minoría (pactos con PRC)', totalSeats: 35, seats: { PP: 15, PSOE: 8, VOX: 4, OTHERS: 8 }, population: '590.000' },
  { id: 'la-rioja', name: 'La Rioja', capital: 'Logroño', president: 'Gonzalo Capellán', governingParty: 'PP', coalitionDetail: 'Mayoría absoluta del PP', totalSeats: 33, seats: { PP: 17, PSOE: 12, VOX: 2, OTHERS: 2 }, population: '320.000' },
  { id: 'ceuta', name: 'Ceuta (Ciudad Autónoma)', capital: 'Ceuta', president: 'Juan Jesús Vivas', governingParty: 'PP', coalitionDetail: 'Gobierno del PP', totalSeats: 25, seats: { PP: 9, PSOE: 6, VOX: 5, OTHERS: 5 }, population: '83.000' },
  { id: 'melilla', name: 'Melilla (Ciudad Autónoma)', capital: 'Melilla', president: 'Juan José Imbroda', governingParty: 'PP', coalitionDetail: 'Mayoría absoluta del PP', totalSeats: 25, seats: { PP: 14, PSOE: 3, VOX: 2, OTHERS: 6 }, population: '85.000' }
];

export const ALIGNMENT_QUESTIONS: AlignmentQuestion[] = [
  {
    id: 'q1-vivienda',
    topic: 'Vivienda y Alquiler',
    question: '¿Debe el Estado topar por ley los precios máximos del alquiler en zonas con precios disparados?',
    context: 'En los últimos 5 años el precio del alquiler en Madrid, Barcelona, Valencia o Málaga ha subido más de un 40%.',
    options: [
      {
        label: 'Sí, es prioritario topar precios y penalizar viviendas vacías para proteger a familias y jóvenes.',
        explanation: 'Coincide con la Ley de Vivienda aprobada por el PSOE y Sumar.',
        alignment: { PSOE: 1.0, PP: -0.8, VOX: -1.0 }
      },
      {
        label: 'No, los topes destruyen la oferta; hay que liberar suelo, dar incentivos fiscales y garantizar seguridad contra la ocupación.',
        explanation: 'Posición defendida por el Partido Popular en sus programas autonómicos y nacionales.',
        alignment: { PSOE: -0.9, PP: 0.9, VOX: 0.8 }
      },
      {
        label: 'No, liberalización total del suelo no protegido, desahucio inmediato de ocupas en 24h y supresión de normativas verdes que encarecen la construcción.',
        explanation: 'Enfoque de Vox enfocado en propiedad privada y mano dura contra ocupas.',
        alignment: { PSOE: -1.0, PP: 0.6, VOX: 1.0 }
      }
    ]
  },
  {
    id: 'q2-fiscalidad',
    topic: 'Fiscalidad e Impuestos',
    question: '¿Qué política tributaria considera más adecuada para España en este momento?',
    context: 'España recauda en torno al 38% del PIB en ingresos fiscales, por debajo de la media de la Eurozona (41%).',
    options: [
      {
        label: 'Mantener impuestos sobre beneficios extraordinarios de la banca y energéticas para financiar la sanidad y educación.',
        explanation: 'Línea de justicia redistributiva del PSOE.',
        alignment: { PSOE: 1.0, PP: -0.7, VOX: -0.9 }
      },
      {
        label: 'Bajar el IRPF deflactando la inflación, eliminar el impuesto a grandes fortunas y facilitar la reinversión empresarial.',
        explanation: 'Doctrina de alivio fiscal a clases medias promovida por el PP.',
        alignment: { PSOE: -0.8, PP: 1.0, VOX: 0.7 }
      },
      {
        label: 'Tipo único o máximo de dos tramos de IRPF, eliminar sucesiones y donaciones, y recorte masivo de ministerios y gasto político.',
        explanation: 'Modelo liberal-nacional de Vox para desmantelar estructuras públicas superfluas.',
        alignment: { PSOE: -1.0, PP: 0.4, VOX: 1.0 }
      }
    ]
  },
  {
    id: 'q3-pensiones',
    topic: 'Pensiones y Jubilación',
    question: '¿Cómo debe sostenerse el sistema público de pensiones ante la jubilación masiva del baby-boom?',
    context: 'El gasto en pensiones supera los 12.000 millones de euros mensuales en la Seguridad Social.',
    options: [
      {
        label: 'Garantizar siempre la revalorización con el IPC por ley y financiar el déficit con cuotas a salarios más altos e impuestos generales.',
        explanation: 'Reforma del ministro Escrivá y postura del PSOE.',
        alignment: { PSOE: 1.0, PP: -0.6, VOX: -0.7 }
      },
      {
        label: 'Vincular las pensiones a la productividad y crecimiento económico, fomentando planes de pensiones complementarios sin hipotecar a los jóvenes.',
        explanation: 'Postura del PP de sostenibilidad presupuestaria a largo plazo.',
        alignment: { PSOE: -0.6, PP: 0.9, VOX: 0.5 }
      },
      {
        label: 'Proteger las pensiones de los trabajadores nacionales recortando la totalidad de subvenciones ideológicas, sindicatos y gasto autonómico.',
        explanation: 'Discurso de Vox de prioridad nacional en el gasto público.',
        alignment: { PSOE: -0.8, PP: 0.4, VOX: 1.0 }
      }
    ]
  },
  {
    id: 'q4-inmigracion',
    topic: 'Inmigración y Fronteras',
    question: '¿Cuál debe ser la prioridad en la política de control migratorio y extranjería?',
    context: 'Llegada de cayucos a Canarias y regularización extraordinaria en debate parlamentario.',
    options: [
      {
        label: 'Vías legales seguras, acogida solidaria distribuida entre CCAA y regularización extraordinaria de quienes ya trabajan en el país.',
        explanation: 'Política de inclusión y pacto europeo defendida por el PSOE.',
        alignment: { PSOE: 1.0, PP: -0.8, VOX: -1.0 }
      },
      {
        label: 'Fronteras seguras, visados por puntos según demandas del mercado laboral y expulsión inmediata de delincuentes extranjeros multirreincidentes.',
        explanation: 'Enfoque de orden y legalidad del Partido Popular.',
        alignment: { PSOE: -0.7, PP: 1.0, VOX: 0.6 }
      },
      {
        label: 'Bloqueo naval militar si es preciso, cierre de centros de MENAS, repatriación inmediata de ilegales y fin de cualquier ayuda a ONGs.',
        explanation: 'Política de control de fronteras estricta y soberanía de Vox.',
        alignment: { PSOE: -1.0, PP: 0.3, VOX: 1.0 }
      }
    ]
  },
  {
    id: 'q5-territorial',
    topic: 'Modelo de Estado y Autonomías',
    question: '¿Cómo debe organizarse territorialmente España y resolverse las tensiones con nacionalismos?',
    context: 'Debate continuo sobre financiación singular, transferencias de competencias y leyes de amnistía.',
    options: [
      {
        label: 'España plural y autonómica en evolución federal, primando el diálogo político y acuerdos de bilateralidad.',
        explanation: 'Modelo de apaciguamiento y gobernabilidad del PSOE.',
        alignment: { PSOE: 1.0, PP: -0.9, VOX: -1.0 }
      },
      {
        label: 'Estado de las Autonomías regido por el principio de estricta igualdad de derechos, solidaridad interterritorial y defensa de la Constitución.',
        explanation: 'Constitucionalismo autonómico defendido por el PP.',
        alignment: { PSOE: -0.8, PP: 1.0, VOX: 0.2 }
      },
      {
        label: 'Supresión progresiva del Estado de las Autonomías, recentralización de Sanidad, Educación y Justicia, e ilegalización de partidos separatistas.',
        explanation: 'Modelo unitario centralista preconizado por Vox.',
        alignment: { PSOE: -1.0, PP: -0.2, VOX: 1.0 }
      }
    ]
  },
  {
    id: 'q6-medioambiente',
    topic: 'Medioambiente y Energía',
    question: '¿Cuál debe ser el rumbo de la transición ecológica en España?',
    context: 'Objetivos europeos de reducción de CO2 para 2030 y sequías recurrentes en cuencas mediterráneas.',
    options: [
      {
        label: 'Acelerar el despliegue de renovables, cerrar progresivamente las centrales nucleares y cumplir el Pacto Verde Europeo.',
        explanation: 'Línea de transición ecológica justa del PSOE.',
        alignment: { PSOE: 1.0, PP: -0.7, VOX: -1.0 }
      },
      {
        label: 'Prolongar la vida útil de las nucleares para garantizar energía asequible y rebajar las exigencias burocráticas al campo y la ganadería.',
        explanation: 'Neutralidad tecnológica y defensa del sector primario del PP.',
        alignment: { PSOE: -0.7, PP: 1.0, VOX: 0.5 }
      },
      {
        label: 'Derogar la Ley de Cambio Climático y el Pacto Verde, garantizar soberanía energética total y construir un Plan Hidrológico Nacional de trasvases.',
        explanation: 'Rechazo de Vox al ecologismo institucional europeo.',
        alignment: { PSOE: -1.0, PP: 0.4, VOX: 1.0 }
      }
    ]
  }
];

export const PROMISES: PromisometroItem[] = [
  // --- PSOE ---
  {
    id: 'psoe-smi',
    party: 'PSOE',
    topic: 'Laboral y Salarios',
    headline: 'Subida progresiva del Salario Mínimo Interprofesional (SMI)',
    manifestoPromise: 'Garantizar por ley que el Salario Mínimo Interprofesional alcance de forma continua el 60% del salario medio neto en España.',
    manifestoSourceCitation: 'Programa Electoral PSOE 2023, Eje 1 "Economía Social y Empleo", pág. 18',
    governingReality: 'El Gobierno aprobó sucesivos Reales Decretos elevando el SMI de 735 € al inicio de la etapa Sánchez hasta superar los 1.134 €/mes en 14 pagas.',
    status: 'CUMPLIDA',
    statusExplanation: 'Compromiso cumplido de forma constante en el diálogo social y decretos gubernamentales.',
    officialVerificationUrl: 'https://www.boe.es'
  },
  {
    id: 'psoe-amnistia',
    party: 'PSOE',
    topic: 'Justicia y Modelo Territorial',
    headline: 'No concesión de amnistía a encausados del Procés catalán',
    manifestoPromise: 'Pedro Sánchez y dirigentes socialistas reiteraron en campaña y previamente que la amnistía no cabía en la Constitución Española y no se aplicaría.',
    manifestoSourceCitation: 'Declaraciones públicas de campaña electoral julio 2023 y comparecencias parlamentarias',
    governingReality: 'Para lograr la mayoría de investidura de 179 escaños, el Grupo Socialista registró y aprobó la Ley Orgánica 1/2024 de amnistía a encausados del independentismo catalán.',
    status: 'INCUMPLIDA',
    statusExplanation: 'Giro de 180 grados motivado por la necesidad de los 7 votos de Junts para sostener la gobernabilidad.',
    officialVerificationUrl: 'https://www.boe.es/eli/es/lo/2024/06/09/1'
  },
  {
    id: 'psoe-vivienda',
    party: 'PSOE',
    topic: 'Vivienda',
    headline: 'Ley Estatal de Vivienda y regulación de precios del alquiler',
    manifestoPromise: 'Aprobar la primera Ley Estatal de Vivienda de la democracia para topar alquileres en zonas tensionadas y movilizar vivienda protegida.',
    manifestoSourceCitation: 'Programa Electoral PSOE 2023, pág. 64',
    governingReality: 'Aprobada la Ley 12/2023 de Vivienda en mayo de 2023. No obstante, su efectividad real ha dependido de las Comunidades Autónomas, que mayoritariamente no han declarado zonas tensionadas.',
    status: 'CUMPLIDA',
    statusExplanation: 'Cumplida en el plano legislativo estatal del BOE; despliegue práctico condicionado por competencias autonómicas.',
    officialVerificationUrl: 'https://www.boe.es/eli/es/l/2023/05/24/12'
  },
  {
    id: 'psoe-ley-mordaza',
    party: 'PSOE',
    topic: 'Derechos Civiles y Seguridad',
    headline: 'Derogación de la Ley de Seguridad Ciudadana ("Ley Mordaza")',
    manifestoPromise: 'Derogación de los artículos más lesivos de la Ley Orgánica 4/2015 sobre sanciones a manifestaciones y devoluciones en caliente.',
    manifestoSourceCitation: 'Programa Electoral PSOE 2019 y 2023, pág. 112',
    governingReality: 'El intento de reforma decayó en marzo de 2023 tras no alcanzar acuerdo con ERC y EH Bildu por la prohibición de pelotas de goma y material antidisturbios, manteniéndose la ley vigente.',
    status: 'INCUMPLIDA',
    statusExplanation: 'Promesa electoral reiterada en dos legislaturas sin materializarse por desacuerdos con sus socios de investidura.',
    officialVerificationUrl: 'https://www.congreso.es'
  },

  // --- PP ---
  {
    id: 'pp-sucesiones-patrimonio',
    party: 'PP',
    topic: 'Fiscalidad Autonómica',
    headline: 'Supresión práctica del Impuesto sobre Sucesiones y Donaciones',
    manifestoPromise: 'Bonificar al 99% el Impuesto sobre Sucesiones y Donaciones entre familiares directos y eliminar el Impuesto sobre el Patrimonio en las CCAA gobernadas por el PP.',
    manifestoSourceCitation: 'Programa Marco Autonómico y Municipal PP 2023, pág. 24',
    governingReality: 'Los gobiernos autonómicos del PP en Madrid, Andalucía, Galicia, Baleares, Comunitat Valenciana, La Rioja y Aragón aprobaron rebajas del 99% en sucesiones y donaciones.',
    status: 'CUMPLIDA',
    statusExplanation: 'Compromiso electoral autonómico ejecutado de forma generalizada en los presupuestos regionales.',
    officialVerificationUrl: 'https://www.boe.es'
  },
  {
    id: 'pp-pactos-vox',
    party: 'PP',
    topic: 'Gobernabilidad y Alianzas',
    headline: 'Priorizar gobernar en solitario sin coaliciones con Vox',
    manifestoPromise: 'Alberto Núñez Feijóo defendió "que gobierne la lista más votada" para evitar la entrada de Vox en los ejecutivos autonómicos y ministerios.',
    manifestoSourceCitation: 'Plan de Calidad Institucional del PP (enero 2023) y discursos de campaña 28-M',
    governingReality: 'Para desalojar al PSOE, el PP firmó pactos de gobierno de coalición con Vox en 5 CCAA (Valencia, Castilla y León, Aragón, Extremadura y Murcia) y decenas de ayuntamientos.',
    status: 'INCUMPLIDA',
    statusExplanation: 'Giro pragmático poselectoral para acceder a las presidencias autonómicas tras las elecciones de mayo de 2023.',
    officialVerificationUrl: 'https://www.juntaelectoralcentral.es'
  },
  {
    id: 'pp-reforma-laboral',
    party: 'PP',
    topic: 'Laboral',
    headline: 'Derogación de la Reforma Laboral de 2021',
    manifestoPromise: 'El PP votó frontalmente en contra de la reforma laboral en febrero de 2022 y prometió inicialmente su derogación dentro de "derogar el sanchismo".',
    manifestoSourceCitation: 'Diario de Sesiones del Congreso (3 febrero 2022) y declaraciones de dirección nacional',
    governingReality: 'En el programa electoral general de julio de 2023, Feijóo moderó su postura reconociendo que la reforma contaba con el aval de la patronal CEOE y se comprometió a mantener su estructura principal con ajustes.',
    status: 'PARCIAL',
    statusExplanation: 'Evolución de un rechazo frontal a una aceptación con matices del marco normativo pactado con empresarios.',
    officialVerificationUrl: 'https://www.congreso.es'
  },

  // --- VOX ---
  {
    id: 'vox-ruptura-menores',
    party: 'VOX',
    topic: 'Inmigración y Fronteras',
    headline: 'Oposición frontal al reparto de menores migrantes no acompañados',
    manifestoPromise: 'Rechazo absoluto a la distribución o acogida de menores migrantes en las CCAA y exigencia de repatriación inmediata con sus padres en países de origen.',
    manifestoSourceCitation: 'Programa Electoral Vox "100 medidas para la España Viva", medida 21',
    governingReality: 'Vox votó en contra en el Congreso de la reforma del art. 35 de Extranjería y cumplió su advertencia rompiendo en julio de 2024 sus 5 gobiernos autonómicos de coalición con el PP tras aceptar éstos plazas de acogida.',
    status: 'CUMPLIDA',
    statusExplanation: 'Firmeza en su compromiso electoral asumiendo el coste político de abandonar los gobiernos autonómicos.',
    officialVerificationUrl: 'https://www.congreso.es'
  },
  {
    id: 'vox-televisiones-autonomicas',
    party: 'VOX',
    topic: 'Gasto Político',
    headline: 'Cierre de Televisiones Autonómicas y supresión de consejerías',
    manifestoPromise: 'Clausura de canales de televisión autonómica por considerarlos entes de propaganda y reducción drástica de consejerías y cargos públicos.',
    manifestoSourceCitation: 'Programa Electoral Vox 2023, sección "Reducción del Gasto Político"',
    governingReality: 'Durante su año de participación en los gobiernos de la Comunitat Valenciana, Aragón o Castilla y León, no se cerró ninguna televisión autonómica (À Punt, Aragón TV, CyLTV), aunque se recortaron subvenciones a agentes sociales.',
    status: 'INCUMPLIDA',
    statusExplanation: 'Dificultad legal y política para desmantelar entes públicos estatutarios dentro de gobiernos de coalición.',
    officialVerificationUrl: 'https://www.boe.es'
  },
  {
    id: 'vox-leyes-concordia',
    party: 'VOX',
    topic: 'Memoria Histórica',
    headline: 'Derogación de leyes autonómicas de memoria democrática',
    manifestoPromise: 'Derogación de toda la normativa de memoria histórica por considerarla un intento de dividir a los españoles e imponer un relato ideológico unilateral.',
    manifestoSourceCitation: 'Programa Electoral Vox 2023, medida 78',
    governingReality: 'En sus pactos de investidura y gobierno con el PP, logró la derogación de las leyes de memoria y la tramitación de las "Leyes de Concordia" en Aragón, Castilla y León y Comunitat Valenciana (objeto de recurso ante el Tribunal Constitucional).',
    status: 'CUMPLIDA',
    statusExplanation: 'Compromiso materializado en los boletines oficiales autonómicos durante su periodo de gobierno con el PP.',
    officialVerificationUrl: 'https://www.boe.es'
  }
];

