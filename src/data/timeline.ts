// Línea de tiempo de ScienceBot.
// Fuentes: repositorio anterior (hitos verificados), tati-bot.vercel.app,
// El Espectador / ONU Colombia (sep 2026), Radio Nacional y Enter.co (2022).
// Regla: no publicar nombres completos de menores sin consentimiento de sus familias.

export type TimelineCategory =
  | 'historia'
  | 'competencias'
  | 'estudiantes'
  | 'reconocimientos'
  | 'proyectos';

export interface TimelineEvent {
  id: string;
  /** ISO (AAAA-MM-DD). Si solo se conoce el año, usar AAAA-01-01 y dateLabel. */
  date: string;
  /** Texto visible de la fecha cuando no es exacta (ej. "2020"). */
  dateLabel?: string;
  title: string;
  summary: string;
  body?: string;
  category: TimelineCategory;
  featured?: boolean;
  /** Puesto obtenido en competencias. */
  medal?: 1 | 2 | 3;
  place?: string;
  image?: string;
  imageAlt?: string;
  sourceUrl?: string;
  sourceName?: string;
  /** Dato por validar con Tatiana antes de publicar. */
  todo?: string;
}

export const timelineCategories: { id: TimelineCategory; name: string; color: string }[] = [
  { id: 'historia', name: 'Historia', color: '#10173A' },
  { id: 'competencias', name: 'Competencias', color: '#2020E8' },
  { id: 'estudiantes', name: 'Estudiantes', color: '#7A35B0' },
  { id: 'reconocimientos', name: 'Reconocimientos', color: '#C5302A' },
  { id: 'proyectos', name: 'Proyectos', color: '#2E8A23' },
];

const IMG = '/img/rediseno';
const TATI = 'https://tati-bot.vercel.app/';
const ESPECTADOR =
  'https://www.elespectador.com/colombia-20/paz-y-memoria/la-profesora-de-robotica-que-les-ensena-a-los-ninos-del-guaviare-a-sonar-con-la-paz/';

export const timelineEvents: TimelineEvent[] = [
  // ── 2020 ─────────────────────────────────────────────
  {
    id: 'nace-sciencebot',
    date: '2020-01-01',
    dateLabel: '2020',
    title: 'Nace ScienceBot: un kit de robótica y cuatro niños',
    summary:
      'La pandemia deja a Tatiana Muñoz en el Guaviare, lejos de sus estudios en Argentina. Empieza a enseñar robótica a cuatro niños; pronto son más de 70.',
    body:
      'Según la prensa, todo empezó cuando vio a niños jugando a la guerra y les propuso construir robots con materiales reciclables, servomotores y sensores. El repositorio anterior mencionaba un antecedente virtual en 2016.',
    category: 'historia',
    featured: true,
    place: 'San José del Guaviare',
    image: `${IMG}/comunidad-joven.webp`,
    imageAlt: 'Joven muestra su robot en un taller comunitario',
    sourceUrl: ESPECTADOR,
    sourceName: 'El Espectador',
    todo: 'Confirmar si 2016 fue un antecedente virtual o se elimina',
  },
  {
    id: 'renault-4',
    date: '2020-06-01',
    dateLabel: '2020 – 2022',
    title: 'Un Renault 4 rojo se convierte en aula móvil',
    summary:
      'Durante dos años la escuela no tuvo sede: las clases llegaban en un Renault 4 con computadores usados a barrios, comunidades indígenas y zonas de reincorporación.',
    category: 'historia',
    place: 'Guaviare',
  },
  // ── 2021 ─────────────────────────────────────────────
  {
    id: 'genios-futuro',
    date: '2021-01-01',
    dateLabel: '2021',
    title: 'Ganadores de Genios del Futuro Latinoamérica',
    summary: 'Primer triunfo internacional de los estudiantes, en programación.',
    category: 'competencias',
    medal: 1,
    place: 'Latinoamérica',
    sourceUrl: TATI,
    sourceName: 'tati-bot',
  },
  // ── 2022 ─────────────────────────────────────────────
  {
    id: 'semillero-san-jose-obrero',
    date: '2022-02-01',
    dateLabel: 'Feb 2022',
    title: 'Semillero de investigación en el Colegio San José Obrero',
    summary: 'La robótica entra a un colegio público del municipio.',
    category: 'proyectos',
    place: 'San José del Guaviare',
    sourceUrl: ESPECTADOR,
    sourceName: 'El Espectador',
  },
  {
    id: 'robot-rally-2022',
    date: '2022-05-21',
    title: 'Doble podio en Robot Rally',
    summary: 'Primer y segundo lugar en el Robot Rally del Marymount School de Medellín.',
    body:
      'Los equipos programaron y controlaron robots para superar desafíos de velocidad, precisión y autonomía frente a colegios de alto nivel.',
    category: 'competencias',
    featured: true,
    medal: 1,
    place: 'Marymount School, Medellín',
    image: `${IMG}/futbol-robotico-2.webp`,
    imageAlt: 'Jóvenes guían sus robots sobre una pista de competencia',
    todo: 'La foto es de un torneo de ScienceBot; reemplazar por una del Marymount si existe',
  },
  {
    id: 'ella-es-astronauta-2022',
    date: '2022-07-01',
    title: 'La primera niña del Guaviare en la NASA',
    summary:
      'Estudiantes de ScienceBot viajan al Space Center Houston con el programa "Ella es Astronauta" de la Fundación SHE IS.',
    body:
      'Una de ellas, estudiante de la I.E. La Libertad, hoy estudia becada en Bogotá. Los nombres completos se publican solo con autorización de las familias.',
    category: 'estudiantes',
    featured: true,
    place: 'Space Center Houston, EE. UU.',
    image: `${IMG}/nasa-guaviare.webp`,
    imageAlt: 'Estudiantes del Guaviare con traje azul presentan en el Space Center Houston',
  },
  {
    id: 'wro-consultora',
    date: '2022-10-01',
    title: 'Tatiana, consultora de WRO Colombia',
    summary: 'Empieza como consultora de robótica educativa de la World Robot Olympiad.',
    category: 'proyectos',
    place: 'Colombia',
  },
  {
    id: 'robotic-awards-2022',
    date: '2022-11-01',
    dateLabel: '2022',
    title: 'Nominados a los Robotic Awards Latinoamérica',
    summary:
      'Categoría Mejor Equipo Sudamérica Norte (Junior), entre más de 40 escuelas de la región.',
    category: 'reconocimientos',
    place: 'Latinoamérica',
    sourceUrl:
      'https://radionacional.co/actualidad/tecnologia/jovenes-colombianos-nominado-premios-robotic-awards-latinoamerica',
    sourceName: 'Radio Nacional',
  },
  {
    id: 'sede-propia',
    date: '2022-12-01',
    dateLabel: 'Fin de 2022',
    title: 'Sede propia en San José del Guaviare',
    summary: 'Después de dos años sobre ruedas, la escuela abre su local.',
    category: 'historia',
    place: 'San José del Guaviare',
  },
  // ── 2023 ─────────────────────────────────────────────
  {
    id: 'robot-rally-2023',
    date: '2023-05-03',
    title: 'Robot Rally 2023: segundo lugar',
    summary: 'Los estudiantes vuelven al podio.',
    category: 'competencias',
    medal: 2,
  },
  {
    id: 'futbol-robotico-2023',
    date: '2023-05-04',
    title: 'Fútbol Robótico 2023: tercer lugar',
    summary: 'Robots que detectan el balón con sensores y juegan de forma autónoma.',
    category: 'competencias',
    medal: 3,
  },
  {
    id: 'carrera-insectos-2023',
    date: '2023-05-05',
    title: 'Carrera de Insectos 2023: tercer lugar',
    summary: 'Mini robots de locomoción inspirados en insectos.',
    category: 'competencias',
    medal: 3,
  },
  {
    id: 'roborally-mexico-2023',
    date: '2023-05-20',
    title: 'Campeones nacionales y representantes de Colombia en México',
    summary:
      'Tras ganar el Campeonato Nacional RoboRally en Fútbol Robótico, los estudiantes representan a Colombia en el RoboRally Internacional.',
    category: 'competencias',
    featured: true,
    medal: 1,
    place: 'Colombia → México',
    image: `${IMG}/futbol-robotico.webp`,
    imageAlt: 'Jóvenes compiten en una cancha de fútbol robótico frente al público',
  },
  {
    id: 'ella-es-astronauta-2023',
    date: '2023-07-01',
    dateLabel: '2023',
    title: 'Primer puesto en "Ella es Astronauta"',
    summary: 'Estudiantes del Guaviare ganan y viajan a la NASA.',
    category: 'estudiantes',
    medal: 1,
    place: 'Space Center Houston',
    sourceUrl: TATI,
    sourceName: 'tati-bot',
  },
  {
    id: 'wef-2023',
    date: '2023-07-28',
    title: 'Premio Joven Innovador, Women Economic Forum',
    summary:
      'Tatiana recibe el premio "Joven Innovador en pro de un mundo mejor para todos" en el WEF Latam Colombia.',
    category: 'reconocimientos',
    place: 'Bogotá',
  },
  {
    id: 'graduados-2023',
    date: '2023-12-20',
    title: '100 estudiantes graduados',
    summary: 'La primera gran generación presenta sus proyectos finales a sus familias.',
    category: 'estudiantes',
    image: `${IMG}/certificado.webp`,
    imageAlt: 'Estudiante recibe su certificado junto a su profesora',
  },
  // ── 2024 ─────────────────────────────────────────────
  {
    id: 'robosketch-robojam-2024',
    date: '2024-03-01',
    dateLabel: '2024',
    title: 'Campeones RoboSketch y RoboJam Medellín',
    summary: 'Doble título para los equipos de ScienceBot.',
    category: 'competencias',
    medal: 1,
    place: 'Medellín',
    sourceUrl: TATI,
    sourceName: 'tati-bot',
  },
  {
    id: 'ley-199-2024',
    date: '2024-04-01',
    dateLabel: '2024',
    title: 'Proyecto de Ley 199 de 2024 Cámara',
    summary: 'Tatiana co-impulsa la ley que busca hacer obligatoria la robótica en los colegios.',
    category: 'proyectos',
    place: 'Congreso de Colombia',
  },
  {
    id: 'orden-flor-2024',
    date: '2024-06-01',
    title: 'Orden Flor del Guaviare al mérito cívico',
    summary:
      'Condecoración para quienes se distinguen por su servicio a la comunidad, el desarrollo y la paz.',
    category: 'reconocimientos',
    featured: true,
    place: 'Guaviare',
    image: `${IMG}/aula.webp`,
    imageAlt: 'Aula de ScienceBot llena de estudiantes trabajando',
  },
  {
    id: 'ella-es-astronauta-2024',
    date: '2024-07-01',
    dateLabel: '2024',
    title: 'De nuevo primer puesto en "Ella es Astronauta"',
    summary: 'Segundo año consecutivo en lo más alto.',
    category: 'estudiantes',
    medal: 1,
  },
  // ── 2025 ─────────────────────────────────────────────
  {
    id: 'onu-2025',
    date: '2025-03-01',
    title: 'Tatiana, ponente en la sede de la ONU',
    summary: 'Habla en Nueva York sobre robótica, educación y paz.',
    body:
      'ScienceBot trabaja con hijos de firmantes de paz en el ETCR Colinas, con apoyo de la Misión de la ONU en Colombia.',
    category: 'reconocimientos',
    featured: true,
    place: 'Nueva York',
    image: `${IMG}/tatiana-onu.webp`,
    imageAlt: 'Tatiana Muñoz con un integrante de la Misión de la ONU en Colombia',
  },
  {
    id: 'unad-2025',
    date: '2025-04-01',
    title: 'Reconocimiento UNAD, 1er Desafío INNCUNAD',
    summary: 'Por creatividad y espíritu emprendedor al servicio de los territorios.',
    category: 'reconocimientos',
  },
  {
    id: 'wept-life-filbo',
    date: '2025-05-01',
    dateLabel: '2025 – 2026',
    title: 'Wept Life llega a la Feria del Libro de Bogotá',
    summary:
      'El barco robot que mide la calidad del agua de los humedales se presenta ante MinCiencias y en la FILBo, con el programa Colombia Robótica.',
    category: 'proyectos',
    place: 'Bogotá',
    image: `${IMG}/pm-barco.webp`,
    imageAlt: 'Carcasa impresa en 3D del barco robot Wept Life',
    todo: 'Confirmar año exacto (tati-bot dice 2025; ONU Colombia, "este año" en 2026)',
  },
  {
    id: 'robojam-2025',
    date: '2025-09-20',
    title: 'Top 10 en Robo Jam Virtual',
    summary: 'Entre clubes de siete países.',
    category: 'competencias',
  },
  {
    id: 'puerto-iris-2025',
    date: '2025-09-25',
    title: 'II Feria de la Ciencia, I.E. Puerto Iris',
    summary: 'Reconocimiento de la institución de Puerto Concordia.',
    category: 'reconocimientos',
  },
  {
    id: 'fll-2025',
    date: '2025-10-01',
    dateLabel: '2025',
    title: 'Finalistas nacionales FIRST LEGO League',
    summary: 'El equipo del Guaviare llega a la final nacional en Cartagena, temporada SUBMERGED.',
    category: 'competencias',
    featured: true,
    place: 'Cartagena',
    image: `${IMG}/fll-cartagena.webp`,
    imageAlt: 'Equipo de ScienceBot en la final nacional FIRST LEGO League de Cartagena',
  },
  {
    id: 'washington-2025',
    date: '2025-11-01',
    dateLabel: '2025',
    title: 'Encuentro Internacional de Mujeres Líderes',
    summary: 'Tatiana representa a Colombia en Washington.',
    category: 'reconocimientos',
  },
  {
    id: 'cien-lideres-2025',
    date: '2025-12-11',
    title: 'Tatiana Muñoz, entre los 100 Nuevos Líderes de Colombia',
    summary: 'Reconocimiento de El País por transformar la educación STEM en el Guaviare.',
    category: 'reconocimientos',
  },
  {
    id: 'aula-minciencias-2025',
    date: '2025-12-12',
    title: 'Primera Aula de Robótica Oficial del Guaviare',
    summary:
      'Liderada por ScienceBot, con el apoyo del Ministerio de Ciencia, Tecnología e Innovación.',
    category: 'historia',
    featured: true,
    image: `${IMG}/aula-nasa.webp`,
    imageAlt: 'Estudiantes trabajan bajo el mural de la NASA en el aula de robótica',
  },
  // ── 2026 ─────────────────────────────────────────────
  {
    id: 'academia-online-2026',
    date: '2026-02-01',
    title: 'Arranca el desarrollo de la Academia Online',
    summary: 'Para que niños de zonas rurales y otros países aprendan con ScienceBot.',
    category: 'proyectos',
  },
  {
    id: 'espectador-2026',
    date: '2026-09-07',
    title: 'La historia llega a El Espectador',
    summary:
      'Colombia+20 cuenta cómo la robótica enseña a los niños del Guaviare a soñar con la paz.',
    category: 'reconocimientos',
    sourceUrl: ESPECTADOR,
    sourceName: 'El Espectador',
  },
];

export function eventYear(e: TimelineEvent): number {
  return Number(e.date.slice(0, 4));
}

export function formatEventDate(e: TimelineEvent): string {
  if (e.dateLabel) return e.dateLabel;
  const d = new Date(`${e.date}T12:00:00`);
  return new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short', year: 'numeric' }).format(d);
}

export function groupByYear(events: TimelineEvent[]): { year: number; events: TimelineEvent[] }[] {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const map = new Map<number, TimelineEvent[]>();
  for (const e of sorted) {
    const y = eventYear(e);
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(e);
  }
  return [...map.entries()].map(([year, events]) => ({ year, events }));
}
