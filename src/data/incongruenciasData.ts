export interface IncongruenciaItem {
  id: string;
  party: 'PP' | 'VOX' | 'PSOE';
  bloc: 'DERECHAS' | 'IZQUIERDAS';
  topic: string;
  category: 'PENSIONES_SALARIOS' | 'FISCALIDAD_CHIRINGUITOS' | 'TERRITORIO_PACTOS' | 'LABORAL_EMPLEO' | 'DERECHOS_JUSTICIA' | 'VIVIENDA';
  title: string;
  badgeLabel: string;
  
  // Lo que dijeron en campaña o ante los medios
  discursoPublico: {
    protagonist: string;
    role: string;
    claim: string;
    quoteText: string;
    context: string;
    date: string;
    mediaUrl?: string;
  };
  
  // Lo que votaron en las Cortes Generales o ejecutaron
  votacionReal: {
    action: string;
    officialVote: 'NO' | 'SÍ' | 'ABSTENCIÓN' | 'COBRÓ' | 'PACTÓ' | 'APROBÓ';
    actaOficial: string;
    lawReference: string;
    lawUrl: string;
    date: string;
  };
  
  // Análisis objetivo contrastado
  analisisContradiccion: string;
  impactoCiudadano: string;
  officialSourceLabel: string;
  officialSourceUrl: string;
}

export const INCONGRUENCIAS_DATA: IncongruenciaItem[] = [
  // =========================================================================
  // --- PARTIDO POPULAR (DERECHAS) ---
  // =========================================================================
  {
    id: 'pp-pensiones-ipc',
    party: 'PP',
    bloc: 'DERECHAS',
    topic: 'Pensiones y Seguridad Social',
    category: 'PENSIONES_SALARIOS',
    title: 'Dice que siempre apoyó subir las pensiones con el IPC, pero votó EN CONTRA en el Congreso',
    badgeLabel: 'PENSIONES: DISCURSO VS. VOTO NOMINAL',
    discursoPublico: {
      protagonist: 'Alberto Núñez Feijóo',
      role: 'Presidente del Partido Popular',
      claim: 'Afirmó categóricamente en campaña que el PP nunca ha votado en contra de revalorizar las pensiones con la inflación.',
      quoteText: '"El Partido Popular siempre ha revalorizado las pensiones conforme al IPC. Siempre lo hemos hecho. Es absolutamente falso que el PP haya votado en contra de subir las pensiones con el IPC."',
      context: 'Entrevista de campaña electoral en directo en TVE (RTVE) con Silvia Intxaurrondo y mítines generales de julio de 2023',
      date: '17 de julio de 2023',
    },
    votacionReal: {
      action: 'El Grupo Popular votó en bloque EN CONTRA de blindar por ley la subida automática con el IPC',
      officialVote: 'NO',
      actaOficial: 'Diario de Sesiones del Congreso de los Diputados Nº 142 • Pleno de Votación Final',
      lawReference: 'Ley 21/2021 de garantía del poder adquisitivo de las pensiones (BOE-A-2021-21652)',
      lawUrl: 'https://www.boe.es/eli/es/l/2021/12/28/21',
      date: '2 de diciembre de 2021',
    },
    analisisContradiccion: 'El PP no solo votó en contra de la Ley 21/2021 que derogó el índice de revalorización del 0,25% de Mariano Rajoy e instauró por ley la subida con el IPC real, sino que también votó EN CONTRA del Real Decreto-ley 2/2023 de reforma de las pensiones. Los registros del Congreso de los Diputados demuestran que el PP emitió 138 votos negativos contra la norma.',
    impactoCiudadano: 'Afecta a más de 9,2 millones de pensionistas contributivos que vieron sus pensiones actualizadas un 8,5% en 2023 y un 3,8% en 2024 gracias a la norma que el PP rechazó formalmente en el hemiciclo.',
    officialSourceLabel: 'Congreso de los Diputados • Votación de la Ley 21/2021',
    officialSourceUrl: 'https://www.congreso.es',
  },
  {
    id: 'pp-smi-salarios',
    party: 'PP',
    bloc: 'DERECHAS',
    topic: 'Salarios y Poder Adquisitivo',
    category: 'PENSIONES_SALARIOS',
    title: 'Discurso de apoyo a las rentas bajas, pero rechazo frontal a las subidas del SMI',
    badgeLabel: 'SMI: DEFENSA DE FAMILIAS VS. OPOSICIÓN A SUBIDAS',
    discursoPublico: {
      protagonist: 'Dirección Nacional del Partido Popular',
      role: 'Portavoces parlamentarios y ejecutivos',
      claim: 'El PP se proclama defensor prioritario del poder adquisitivo de las familias trabajadoras y de las rentas vulnerables castigadas por la inflación.',
      quoteText: '"Nuestra prioridad absoluta son las clases medias y trabajadoras, las familias que no llegan a fin de mes por culpa de la subida de los precios y de los impuestos."',
      context: 'Comparecencias parlamentarias en el Congreso y declaraciones ante los medios de comunicación',
      date: '2023 – 2024',
    },
    votacionReal: {
      action: 'Oposición sistemática y recursos contra las sucesivas subidas del SMI desde 735 € hasta 1.134 €/mes',
      officialVote: 'NO',
      actaOficial: 'Iniciativas de control al Gobierno y Diario de Sesiones sobre política salarial mínima',
      lawReference: 'Reales Decretos 145/2024, 99/2023 y 152/2022 del SMI',
      lawUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-2203',
      date: '2022 – 2024',
    },
    analisisContradiccion: 'El Partido Popular votó en contra de todas las proposiciones y mociones parlamentarias que instaban a elevar el SMI para alcanzar el 60% del salario medio neto, tachando los incrementos de "irresponsables, populistas y destructores de empleo". La evidencia empírica posterior constató que la afiliación a la Seguridad Social creció en más de 2 millones de cotizantes mientras el SMI subía un 54%.',
    impactoCiudadano: 'La subida del SMI de 735 € a 1.134 €/mes benefició de forma directa a 2,5 millones de trabajadores con las retribuciones más precarias de España, especialmente mujeres y menores de 30 años.',
    officialSourceLabel: 'Boletín Oficial del Estado • RDL Salario Mínimo Interprofesional',
    officialSourceUrl: 'https://www.boe.es',
  },
  {
    id: 'pp-impuesto-banca-energeticas',
    party: 'PP',
    bloc: 'DERECHAS',
    topic: 'Fiscalidad e Inflación',
    category: 'FISCALIDAD_CHIRINGUITOS',
    title: 'Discurso contra la asfixia ciudadana, pero voto EN CONTRA de gravar a la banca y eléctricas',
    badgeLabel: 'IMPUESTOS: ALIVIO A CIUDADANOS VS. PROTECCIÓN A OLIGOPOLIOS',
    discursoPublico: {
      protagonist: 'Alberto Núñez Feijóo y equipo económico',
      role: 'Liderazgo de la oposición',
      claim: 'Exigen rebajar la carga económica sobre los hogares ante los tipos de interés desorbitados y los recibos de la luz.',
      quoteText: '"Las familias están asfixiadas pagando sus hipotecas y sus facturas mientras el Gobierno no hace nada para aliviar su bolsillo."',
      context: 'Intervenciones en la sesión de control al Gobierno en el Congreso de los Diputados',
      date: 'Septiembre de 2022',
    },
    votacionReal: {
      action: 'Votó EN CONTRA de crear el gravamen temporal a los beneficios extraordinarios de la banca y multinacionales energéticas',
      officialVote: 'NO',
      actaOficial: 'Diario de Sesiones del Congreso Nº 201 • Votación de dictamen de Comisión',
      lawReference: 'Ley 38/2022 de gravamen a entidades de crédito y energéticas (BOE-A-2022-21913)',
      lawUrl: 'https://www.boe.es/eli/es/l/2022/12/27/38',
      date: '24 de noviembre de 2022',
    },
    analisisContradiccion: 'Pese a la retórica de proteger a los hipotecados, el Grupo Popular votó en bloque NO a la ley que fijó un gravamen del 4,8% sobre los intereses y comisiones netas de los bancos con ingresos superiores a 800 millones de euros, y del 1,2% a las eléctricas. Además, gobiernos autonómicos del PP presentaron recursos de inconstitucionalidad contra dicho impuesto.',
    impactoCiudadano: 'El tributo a la banca y las eléctricas recaudó más de 2.900 millones de euros anuales que se destinaron íntegramente a financiar la gratuidad del abono de Cercanías de Renfe y las rebajas fiscales energéticas para los hogares.',
    officialSourceLabel: 'Diario de Sesiones del Congreso de los Diputados • Ley 38/2022',
    officialSourceUrl: 'https://www.congreso.es',
  },
  {
    id: 'pp-pactos-vox',
    party: 'PP',
    bloc: 'DERECHAS',
    topic: 'Gobernabilidad y Alianzas',
    category: 'TERRITORIO_PACTOS',
    title: 'Prometió priorizar que gobernase la lista más votada, pero pactó 5 gobiernos con Vox',
    badgeLabel: 'PACTOS: "LISTA MÁS VOTADA" VS. COALICIONES CON VOX',
    discursoPublico: {
      protagonist: 'Alberto Núñez Feijóo',
      role: 'Presidente del Partido Popular',
      claim: 'Presentó solemnemente el "Plan de Calidad Institucional" proponiendo que gobernase siempre la lista con más votos para no depender de extremos.',
      quoteText: '"Propongo un pacto para que gobierne la lista más votada. No quiero gobernar con Vox ni que Vox esté en los gobiernos autonómicos."',
      context: 'Presentación del Plan de Calidad Institucional en Cádiz y entrevistas electorales del 28-M',
      date: 'Enero a mayo de 2023',
    },
    votacionReal: {
      action: 'Firmó acuerdos formales de gobierno de coalición entregando vicepresidencias y consejerías a Vox en 5 CCAA',
      officialVote: 'PACTÓ',
      actaOficial: 'Pactos de Investidura en Comunitat Valenciana, Castilla y León, Aragón, Extremadura y Murcia',
      lawReference: 'Decretos de nombramiento en los Boletines Oficiales (DOGV, BOA, DOE, BORM)',
      lawUrl: 'https://www.boe.es',
      date: 'Junio a julio de 2023',
    },
    analisisContradiccion: 'En Extremadura, el PSOE fue la lista más votada con Guillermo Fernández Vara; el PP se alió con Vox para investir a María Guardiola (quien previamente había prometido "no gobernar con quienes niegan la violencia machista"). El PP constituyó 5 gobiernos autonómicos de coalición y más de 140 ayuntamientos con Vox para desplazar a la izquierda.',
    impactoCiudadano: 'Demostró que el principio de "la lista más votada" solo se invocaba donde el PP quedaba primero, pero se desechaba de inmediato cuando la suma con la extrema derecha permitía alcanzar el poder.',
    officialSourceLabel: 'Junta Electoral Central y Boletines Oficiales Autonómicos',
    officialSourceUrl: 'https://www.juntaelectoralcentral.es',
  },
  {
    id: 'pp-reforma-laboral',
    party: 'PP',
    bloc: 'DERECHAS',
    topic: 'Mercado Laboral',
    category: 'LABORAL_EMPLEO',
    title: 'Votó en contra tachándola de destructiva y luego admitió que era un buen acuerdo empresarial',
    badgeLabel: 'LABORAL: DEL NO RADICAL AL AVAL EN CAMPAÑA',
    discursoPublico: {
      protagonist: 'Alberto Núñez Feijóo y Pablo Casado',
      role: 'Líderes del Partido Popular',
      claim: 'El PP atacó la reforma laboral vaticinando un desastre económico y prometió derogarla dentro de "derogar el sanchismo".',
      quoteText: '"La reforma laboral del Gobierno destruirá miles de puestos de trabajo y encarece la contratación de nuestras empresas." (2022) vs. "La reforma laboral es sustancialmente una buena reforma porque cuenta con el acuerdo de la patronal CEOE." (Julio 2023)',
      context: 'Diario de Sesiones (febrero 2022) frente a entrevista electoral en Bruselas (julio 2023)',
      date: '2022 frente a 2023',
    },
    votacionReal: {
      action: 'Votó EN CONTRA de la reforma laboral en la votación más ajustada de la democracia (175 a 174 votos)',
      officialVote: 'NO',
      actaOficial: 'Diario de Sesiones del Congreso Nº 153 • Convalidación del RDL 32/2021',
      lawReference: 'Real Decreto-ley 32/2021 de medidas urgentes para la reforma laboral',
      lawUrl: 'https://www.boe.es/eli/es/rdl/2021/12/28/32',
      date: '3 de febrero de 2022',
    },
    analisisContradiccion: 'El PP intentó tumbar la reforma pactada por sindicatos y empresarios en el Congreso (se aprobó por un solo voto de diferencia tras el error del diputado del PP Alberto Casero). Año y medio más tarde, en plena campaña general, Feijóo desautorizó su voto previo y elogió la norma admitiendo que no la derogaría.',
    impactoCiudadano: 'La reforma laboral redujo la tasa de temporalidad en España del 26% al 12% en el sector privado, creando más de 3,5 millones de contratos indefinidos directos.',
    officialSourceLabel: 'Diario de Sesiones del Congreso • 3 de febrero de 2022',
    officialSourceUrl: 'https://www.congreso.es',
  },

  // =========================================================================
  // --- VOX (DERECHAS) ---
  // =========================================================================
  {
    id: 'vox-subvenciones-chiringuitos',
    party: 'VOX',
    bloc: 'DERECHAS',
    topic: 'Financiación Pública y Partidos',
    category: 'FISCALIDAD_CHIRINGUITOS',
    title: 'Exige cerrar chiringuitos y suprimir subvenciones, pero cobra casi 10M€ del Estado',
    badgeLabel: 'CHIRINGUITOS: CLAMA CERRAR VS. COBRA MILLONES',
    discursoPublico: {
      protagonist: 'Santiago Abascal',
      role: 'Presidente de Vox',
      claim: 'Exige en mítines y mociones la eliminación del 100% de las subvenciones públicas a partidos y sindicatos.',
      quoteText: '"¡Ni un solo euro público para partidos políticos, sindicatos y patronales! Hay que cerrar todos los chiringuitos ideológicos y acabar con el despilfarro político que pagamos todos los españoles."',
      context: 'Mítines en Vistalegre, Plaza de Colón y Medida 6 del programa 100 medidas para la España Viva',
      date: 'Discurso permanente (2019 – 2026)',
    },
    votacionReal: {
      action: 'Cobra anualmente casi 10 millones de euros en subvenciones públicas ordinarias del Ministerio del Interior y parlamentos',
      officialVote: 'COBRÓ',
      actaOficial: 'Resolución de la Dirección General de Política Interior sobre subvenciones estatales a partidos políticos',
      lawReference: 'Informe de Fiscalización del Tribunal de Cuentas • Sanción de 233.324 € por desvío de asignaciones',
      lawUrl: 'https://www.boe.es',
      date: 'Publicación anual en BOE',
    },
    analisisContradiccion: 'Pese a su discurso incendiario contra las subvenciones a partidos, Vox nunca ha renunciado a un solo céntimo de las subvenciones públicas que le corresponden por ley (ingresando más de 9,8 millones de euros anuales del erario público). Además, el Tribunal de Cuentas le sancionó con más de 233.000 € por transferir ilegalmente fondos finalistas de sus grupos parlamentarios autonómicos a la cuenta de la sede central nacional de su partido.',
    impactoCiudadano: 'Más del 65% del presupuesto operativo total de Vox está financiado directamente con los impuestos de todos los contribuyentes españoles.',
    officialSourceLabel: 'Tribunal de Cuentas • Informe de Fiscalización de Partidos Políticos',
    officialSourceUrl: 'https://www.tcu.es',
  },
  {
    id: 'vox-obreros-votos-sociales',
    party: 'VOX',
    bloc: 'DERECHAS',
    topic: 'Derechos Laborales y Clase Trabajadora',
    category: 'LABORAL_EMPLEO',
    title: 'Se autoproclama "partido de los obreros", pero votó EN CONTRA de todas las mejoras sociales',
    badgeLabel: 'TRABAJADORES: RETÓRICA PATRIOTA VS. VOTOS EN EL CONGRESO',
    discursoPublico: {
      protagonist: 'Santiago Abascal y Sindicato "Solidaridad"',
      role: 'Liderazgo de Vox y sindicato afín',
      claim: 'Vox afirma representar a la verdadera clase trabajadora frente a la izquierda institucional.',
      quoteText: '"Somos el partido de los trabajadores que madrugan, de los obreros de la construcción, de los transportistas y del campo frente a los burócratas de la Agenda 2030."',
      context: 'Actos del 1 de Mayo del sindicato Solidaridad y campaña en zonas industriales',
      date: '2021 – 2024',
    },
    votacionReal: {
      action: 'Votó en contra en el Congreso de: SMI, Pensiones con el IPC, Reforma Laboral y Jornada de 37,5 horas',
      officialVote: 'NO',
      actaOficial: 'Registro de Votaciones Plenarias del Congreso de los Diputados',
      lawReference: 'Votaciones Ley 21/2021, RDL 32/2021, Ley de Vivienda y mociones sobre el SMI',
      lawUrl: 'https://www.congreso.es',
      date: 'XIV y XV Legislatura',
    },
    analisisContradiccion: 'No existe una sola ley de mejora de rentas laborales o derechos de los trabajadores que haya contado con el voto favorable de Vox. Votó en contra de la revalorización de las pensiones con el IPC, en contra del Real Decreto que obligaba a convertir contratos temporales precarios en fijos, en contra de topar el precio del alquiler y en contra de subir el SMI.',
    impactoCiudadano: 'Contraste directo entre el discurso populista de captación de voto obrero y su estricta alineación parlamentaria con las posturas económicas más conservadoras en contra de la regulación laboral y salarial.',
    officialSourceLabel: 'Congreso de los Diputados • Registro de Votaciones Nominales',
    officialSourceUrl: 'https://www.congreso.es',
  },
  {
    id: 'vox-inmigracion-temporeros',
    party: 'VOX',
    bloc: 'DERECHAS',
    topic: 'Inmigración y Mano de Obra Agrícola',
    category: 'TERRITORIO_PACTOS',
    title: 'Discurso de expulsión masiva y bloqueo, pero avaló contratar temporeros extranjeros en el campo',
    badgeLabel: 'INMIGRACIÓN: DISCURSO DE EXPULSIÓN VS. AVAL A TEMPOREROS',
    discursoPublico: {
      protagonist: 'Santiago Abascal y portavoces de Vox',
      role: 'Dirección nacional de Vox',
      claim: 'Exigen deportaciones masivas inmediatas, bloqueo naval militar y tolerancia cero con la inmigración.',
      quoteText: '"Ni un solo inmigrante ilegal más. Bloqueo naval con la Armada frente a las costas de África y expulsión inmediata de todos los que hayan entrado sin permiso."',
      context: 'Intervenciones en mítines de Canarias, Murcia y debates electorales',
      date: '2022 – 2024',
    },
    votacionReal: {
      action: 'Avaló convenios de contratación en origen de miles de trabajadores agrícolas extracomunitarios en CCAA donde gobernó',
      officialVote: 'APROBÓ',
      actaOficial: 'Acuerdos de Consejos de Gobierno en Castilla y León, Aragón y Región de Murcia',
      lawReference: 'Convenios autonómicos de campañas agrícolas de recogida de fruta y hortalizas',
      lawUrl: 'https://www.bocyl.es',
      date: 'Campañas agrícolas 2023 – 2024',
    },
    analisisContradiccion: 'Mientras en el plano mediático vinculan constantemente la inmigración con la delincuencia y reclaman expulsiones masivas, en las consejerías autonómicas de Agricultura y Empleo que gestionaron o apoyaron con el PP facilitaron y respaldaron la llegada de miles de trabajadores temporeros procedentes de Marruecos, Senegal y Latinoamérica para no perjudicar a los empresarios agrícolas por falta de mano de obra.',
    impactoCiudadano: 'Evidencia la desconexión entre la consigna electoral para agitar el voto antiinmigración y la dependencia económica real de mano de obra foránea que Vox reconoce en privado ante el empresariado del campo.',
    officialSourceLabel: 'Boletines Oficiales Autonómicos (BOCyL, BORM, BOA)',
    officialSourceUrl: 'https://www.boe.es',
  },
  {
    id: 'vox-autonomias-cargos',
    party: 'VOX',
    bloc: 'DERECHAS',
    topic: 'Modelo de Estado y Autonomías',
    category: 'TERRITORIO_PACTOS',
    title: 'Dice que las autonomías son una ruina a destruir, pero ocupó vicepresidencias y sueldos públicos',
    badgeLabel: 'AUTONOMÍAS: "RUINA A CERRAR" VS. COBRO DE SUELDOS AUTONÓMICOS',
    discursoPublico: {
      protagonist: 'Santiago Abascal y portavoces parlamentarios',
      role: 'Líderes de Vox',
      claim: 'Propugnan la derogación íntegra del Título VIII de la Constitución y el cierre de los 17 parlamentos autonómicos.',
      quoteText: '"Las 17 Comunidades Autónomas son una ruina que nos arruina y un pozo sin fondo de duplicidades. Hay que devolver todas las competencias a Madrid y cerrar los 17 parlamentos."',
      context: 'Moción de censura en el Congreso y mítines electorales autonómicos',
      date: '2020 – 2024',
    },
    votacionReal: {
      action: 'Tomó posesión de vicepresidencias, consejerías y más de 120 escaños autonómicos cobrando nóminas públicas',
      officialVote: 'COBRÓ',
      actaOficial: 'Nombramientos oficiales de vicepresidentes y consejeros en Diarios Oficiales Autonómicos',
      lawReference: 'Portales de Transparencia de la Generalitat Valenciana, Junta de CyL, Gobierno de Aragón y Extremadura',
      lawUrl: 'https://www.gva.es',
      date: 'Julio 2023 a julio 2024',
    },
    analisisContradiccion: 'Pese a tachar a los gobiernos y parlamentos autonómicos de "chiringuitos parasitarios", Vox nombró a 5 vicepresidentes autonómicos, decenas de consejeros, directores generales y asesores a sueldo del erario público autonómico con retribuciones anuales superiores a los 85.000 € brutos y coches oficiales, gestionando presupuestos millonarios hasta que Abascal ordenó su salida en julio de 2024.',
    impactoCiudadano: 'Contradicción evidente entre la doctrina teórica de la recentralización radical del Estado y el uso efectivo de los recursos y remuneraciones del sistema autonómico que censuran.',
    officialSourceLabel: 'Portales de Transparencia de Gobiernos Autonómicos de España',
    officialSourceUrl: 'https://www.transparencia.gob.es',
  },

  // =========================================================================
  // --- PARTIDO SOCIALISTA (IZQUIERDAS) ---
  // =========================================================================
  {
    id: 'psoe-amnistia-proces',
    party: 'PSOE',
    bloc: 'IZQUIERDAS',
    topic: 'Justicia y Constitución',
    category: 'DERECHOS_JUSTICIA',
    title: 'Aseguró tajantemente que la amnistía no cabía en la Constitución, pero la aprobó para gobernar',
    badgeLabel: 'AMNISTÍA: PROMESA DE ILEGALIDAD VS. APROBACIÓN PARLAMENTARIA',
    discursoPublico: {
      protagonist: 'Pedro Sánchez y ministros del Gobierno',
      role: 'Presidente del Gobierno y portavoces del PSOE',
      claim: 'Sánchez y su gabinete aseguraron repetidamente antes del 23-J que la amnistía era inconstitucional y nunca se concedería.',
      quoteText: '"El independentismo pedía la amnistía, algo que desde luego este Gobierno no va a aceptar y que no cabe en la Constitución Española. Rotundamente no."',
      context: 'Declaraciones televisivas en campaña electoral (julio 2023) y comparecencias previas en Moncloa',
      date: 'Julio de 2023 y declaraciones de legislatura',
    },
    votacionReal: {
      action: 'El PSOE redactó, tramitó y aprobó la Ley Orgánica de Amnistía con los 7 votos indispensables de Junts',
      officialVote: 'SÍ',
      actaOficial: 'Diario de Sesiones del Congreso Nº 42 • Votación Final de Ley Orgánica',
      lawReference: 'Ley Orgánica 1/2024 de amnistía para la normalización en Cataluña (BOE-A-2024-11776)',
      lawUrl: 'https://www.boe.es/eli/es/lo/2024/06/09/1',
      date: '30 de mayo de 2024',
    },
    analisisContradiccion: 'El cambio de postura no respondió a una evolución programática previa al voto de los ciudadanos, sino a la necesidad aritmética de los 7 escaños de Junts per Catalunya y Carles Puigdemont tras el resultado del 23 de julio de 2023 para lograr la investidura de 179 diputados.',
    impactoCiudadano: 'Extinguió la responsabilidad penal, administrativa y contable de los encausados por el 1-O y el proceso soberanista entre 2011 y 2023, generando una profunda controversia jurídica e institucional.',
    officialSourceLabel: 'Boletín Oficial del Estado • Ley Orgánica 1/2024',
    officialSourceUrl: 'https://www.boe.es/eli/es/lo/2024/06/09/1',
  },
  {
    id: 'psoe-financiacion-singular',
    party: 'PSOE',
    bloc: 'IZQUIERDAS',
    topic: 'Financiación Territorial y Solidaridad',
    category: 'TERRITORIO_PACTOS',
    title: 'Prometió igualdad y multilateralidad, pero pactó el concierto económico para Cataluña',
    badgeLabel: 'FINANCIACIÓN: MULTILATERALIDAD VS. CONCIERTO SINGULAR',
    discursoPublico: {
      protagonist: 'Pedro Sánchez y María Jesús Montero',
      role: 'Presidente del Gobierno y Vicepresidenta Primera / Ministra de Hacienda',
      claim: 'El programa electoral defendió la reforma del sistema de financiación autonómica bajo estricta igualdad y negociación multilateral en el CPFF.',
      quoteText: '"La reforma del sistema de financiación debe ser acordada entre todas las Comunidades Autónomas en el seno del Consejo de Política Fiscal y Financiera, garantizando la equidad y la caja común de todos los españoles."',
      context: 'Programa Electoral 23J del PSOE y comparecencias en el Senado',
      date: 'Julio de 2023',
    },
    votacionReal: {
      action: 'Pactó con ERC la cesión de la gestión y recaudación del 100% de los tributos a la Agencia Tributaria de Cataluña',
      officialVote: 'PACTÓ',
      actaOficial: 'Acuerdo de Investidura entre el PSC y Esquerra Republicana de Catalunya',
      lawReference: 'Pacto para la Investidura de Salvador Illa como President de la Generalitat',
      lawUrl: 'https://www.psoe.es',
      date: 'Agosto de 2024',
    },
    analisisContradiccion: 'La ministra de Hacienda había negado categóricamente semanas antes la posibilidad de un "concierto económico" para Cataluña. El pacto de investidura de Salvador Illa consagró un modelo singular de soberanía fiscal y recaudación total que quiebra el esquema de régimen común que el PSOE defendía en sus resoluciones de congresos federales.',
    impactoCiudadano: 'Cuestiona el reparto de fondos de nivelación entre las regiones con mayor renta y las comunidades con menores recursos (Extremadura, Andalucía, Castilla-La Mancha).',
    officialSourceLabel: 'Consejo de Política Fiscal y Financiera y Acuerdo PSC-ERC',
    officialSourceUrl: 'https://www.hacienda.gob.es',
  },
  {
    id: 'psoe-vivienda-184k',
    party: 'PSOE',
    bloc: 'IZQUIERDAS',
    topic: 'Vivienda y Alquiler Asequible',
    category: 'VIVIENDA',
    title: 'Prometió 184.000 viviendas públicas, pero la entrega real está estancada mientras el alquiler marca récords',
    badgeLabel: 'VIVIENDA: ANUNCIO MULTITUDINARIO VS. EJECUCIÓN TESTIMONIAL',
    discursoPublico: {
      protagonist: 'Pedro Sánchez',
      role: 'Presidente del Gobierno',
      claim: 'Anunció la mayor movilización de vivienda pública de la historia de España para poner fin a la crisis del alquiler.',
      quoteText: '"Vamos a movilizar 184.000 viviendas públicas y en alquiler asequible. Haremos de la vivienda el quinto pilar del Estado del Bienestar."',
      context: 'Convención Municipal del PSOE en Valencia y mitin central de precampaña electoral',
      date: 'Abril de 2023',
    },
    votacionReal: {
      action: 'Despliegue de avales ICO y cesión de suelos SEPES con una entrega de llaves inferior al 5% del objetivo',
      officialVote: 'APROBÓ',
      actaOficial: 'Informes de Ejecución Presupuestaria del Ministerio de Vivienda y Agenda Urbana',
      lawReference: 'Plan de Vivienda para el Alquiler Asequible (PVAA)',
      lawUrl: 'https://www.mivau.gob.es',
      date: '2023 – 2026',
    },
    analisisContradiccion: 'Gran distancia entre la cifra astronómica anunciada en época electoral sumando activos no habitables de la SAREB, promociones sobre plano de suelos militares y créditos bancarios, frente al parque público real entregado a jóvenes y familias vulnerables, en un contexto de precios de alquiler disparados a máximos históricos.',
    impactoCiudadano: 'El esfuerzo financiero de las familias para pagar el alquiler supera el 43% de su sueldo neto en Madrid, Barcelona, Valencia, Málaga y Baleares.',
    officialSourceLabel: 'Ministerio de Vivienda y Agenda Urbana • Datos oficiales del PVAA',
    officialSourceUrl: 'https://www.mivau.gob.es',
  },
  {
    id: 'psoe-ley-mordaza-derogacion',
    party: 'PSOE',
    bloc: 'IZQUIERDAS',
    topic: 'Seguridad Ciudadana y Derechos Civiles',
    category: 'DERECHOS_JUSTICIA',
    title: 'Prometió derogar la Ley Mordaza en 2019 y 2023, pero la ley sigue plenamente vigente',
    badgeLabel: 'SEGURIDAD: DEROGACIÓN ETERNA NUNCA CUMPLIDA',
    discursoPublico: {
      protagonist: 'Pedro Sánchez y Grupo Socialista',
      role: 'Líderes del PSOE',
      claim: 'Compromiso electoral reiterado de derogar de forma inmediata la Ley de Seguridad Ciudadana de 2015 aprobada por el PP.',
      quoteText: '"Derogaremos la Ley Mordaza del Partido Popular que censura la protesta ciudadana pacífica y castiga la libertad de expresión."',
      context: 'Programas electorales generales de noviembre de 2019 y julio de 2023',
      date: '2019 a 2023',
    },
    votacionReal: {
      action: 'La reforma legal decayó en el Congreso tras no alcanzar acuerdo con sus socios de investidura (ERC y Bildu)',
      officialVote: 'NO',
      actaOficial: 'Diario de Sesiones del Congreso de los Diputados • Dictamen de Comisión',
      lawReference: 'Proposición de Ley de reforma de la Ley Orgánica 4/2015',
      lawUrl: 'https://www.congreso.es',
      date: '14 de marzo de 2023',
    },
    analisisContradiccion: 'El PSOE mantuvo la Ley de Seguridad Ciudadana aprobada con la mayoría absoluta de Mariano Rajoy durante más de 6 años de gobierno ininterrumpido. Al someter su reforma a votación, su negativa a prohibir las pelotas de goma policiales y las devoluciones en caliente en frontera provocó el voto en contra de ERC y Bildu, decayendo la reforma.',
    impactoCiudadano: 'Se siguen tramitando más de 120.000 sanciones administrativas anuales al amparo de los artículos más criticados de la ley del PP de 2015.',
    officialSourceLabel: 'Congreso de los Diputados • Votación del Dictamen de Comisión de Interior',
    officialSourceUrl: 'https://www.congreso.es',
  }
];
