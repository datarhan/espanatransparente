import { Party, Bill, CriminalCase, AdministrativeSanction, RegionalCrisis, Region, AlignmentQuestion } from '@/types/politics';

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
