// Type definitions
export type TimelineCategoryType = 'historia' | 'curso' | 'hito' | 'estudiante';

export interface TimelineCategory {
  id: TimelineCategoryType;
  name: string;
  color: string;
  icon: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
  category: TimelineCategoryType;
  featured?: boolean;
  expandedContent?: string;
  image?: string;
}

export const timelineCategories: TimelineCategory[] = [
  {
    id: 'historia',
    name: 'Historia',
    color: '#ff4c24',
    icon: '🏛️'
  },
  {
    id: 'curso',
    name: 'Cursos',
    color: '#8B5CF6',
    icon: '📚'
  },
  {
    id: 'hito',
    name: 'Hitos',
    color: '#84CC16',
    icon: '🎯'
  },
  {
    id: 'estudiante',
    name: 'Estudiantes',
    color: '#06B6D4',
    icon: '👨‍🎓'
  }
];

export const timelineEvents: TimelineEvent[] = [
  // Historia - 2016 (Fundación)
  {
    id: 'h-2016-1',
    date: '2016-03-01',
    title: 'Fundación de ScienceBot',
    description: 'Nace el sueño de transformar la educación tecnológica en Latinoamérica.',
    icon: '🚀',
    category: 'historia',
    featured: true,
    expandedContent: 'ScienceBot fue fundada por su fundadora con una visión clara y una misión que trascendía las aulas convencionales. Al principio, de manera completamente virtual, su misión era simple pero ambiciosa: democratizar el acceso a la educación en robótica y programación de alta calidad para niños y jóvenes de todos los sectores socioeconómicos.\n\nMISIÓN\nPromover la educación ambiental, sustentable y educativa a través de la robótica educativa en las escuelas, clubes sociales, universidades, empresas y zonas rurales; como una herramienta fundamental para el desarrollo del aprendizaje estudiantil, el trabajo en equipo y la solución de problemas de su entorno, con metodologías de impacto para las nuevas generaciones aprendiendo así a cuidar y proteger el medio ambiente.\n\nVISIÓN\nMotivar y guiar a niños, niñas y jóvenes a utilizar su tiempo libre en la búsqueda de sus posibles vocaciones en las líneas de ciencias duras profundizadas en las nuevas tecnologías de impacto mundial trayendo así desarrollo económico a su región. De igual manera, formalizarnos como una asociación líder en soluciones tecnológicas y educación ambiental basada en innovación.'
  },
  {
    id: 'h-2016-2',
    date: '2016-06-20',
    title: 'Primeros 15 Estudiantes',
    description: 'Iniciamos operaciones con nuestro primer grupo piloto de estudiantes.',
    icon: '🌱',
    category: 'historia',
    expandedContent: 'Con apenas 15 estudiantes valientes que confiaron en nuestro proyecto piloto, comenzamos esta increíble aventura. Las clases se impartían los fines de semana y cada estudiante recibió atención personalizada para validar nuestra metodología de enseñanza "Aprender Haciendo".'
  },

  // Historia - Crecimiento
  {
    id: 'h-sede-1',
    date: '2023-01-01',
    title: 'Inauguración Sede Principal',
    description: 'Abrimos nuestro primer centro de aprendizaje especializado.',
    icon: '🏢',
    category: 'historia',
    expandedContent: 'La apertura de nuestra sede principal marcó un antes y un después. Un espacio de 150m² diseñado específicamente para la creatividad, con laboratorios de electrónica, áreas de construcción de robots y zonas de programación colaborativa.'
  },
  {
    id: 'h-academia-online-1',
    date: '2026-02-01',
    title: 'Desarrollo Academia Online',
    description: 'Inicia el desarrollo de nuestra academia online.',
    icon: '💻',
    category: 'historia',
    expandedContent: 'Para cumplir con nuestra misión de promover la educación ambiental, sustentable y educativa a través de la robótica educativa, se está llevando a cabo el desarrollo de la academia online: una plataforma de aprendizaje accesible desde cualquier lugar del mundo, que rompe barreras geográficas y permite a niños y jóvenes de zonas rurales, ciudades alejadas y diferentes países acceder a formación de calidad en robótica, programación y tecnología con el sello pedagógico de ScienceBot.'
  },

  /* TODO: Cursos - 2021 (Expansión Académica) — descomentar cuando estén listos
  {
    id: 'c-2021-1',
    date: '2021-03-01',
    title: 'Lanzamiento Scratch Jr',
    description: 'Curso insignia para introducir a niños de 6-8 años a la lógica de programación.',
    icon: '🐱',
    category: 'curso',
    image: '/images/curso-scratchjr.jpg',
    expandedContent: 'Scratch Jr se convirtió rápidamente en nuestro curso de entrada más popular. Diseñado meticulosamente para no lectores, permite a los niños más pequeños expresar su creatividad creando sus propias historias interactivas y juegos, desarrollando pensamiento computacional sin darse cuenta.'
  },
  {
    id: 'c-2021-2',
    date: '2021-06-15',
    title: 'Robótica con LEGO Mindstorms',
    description: 'Incorporación de tecnología de punta para ingeniería robótica avanzada.',
    icon: '🤖',
    category: 'curso',
    featured: true,
    expandedContent: 'La alianza con LEGO Education nos permitió traer los kits Mindstorms EV3. Este curso desafía a los estudiantes a resolver problemas de ingeniería complejos, construyendo robots que caminan, hablan y "piensan", preparándolos para competencias internacionales.'
  },
  {
    id: 'c-2021-3',
    date: '2021-09-01',
    title: 'Python para Jóvenes',
    description: 'El salto a la programación textual profesional.',
    icon: '🐍',
    category: 'curso',
    expandedContent: 'Reconociendo la necesidad de habilidades de industria, lanzamos Python. Este curso es el puente perfecto entre la programación visual y el desarrollo de software real, permitiendo a los estudiantes crear scripts, analizar datos y hasta dar sus primeros pasos en Inteligencia Artificial.'
  },
  */

  // Hitos - Logros Tempranos
  {
    id: 'm-hito-graduados',
    date: '2099-12-20',
    title: 'xxx Estudiantes Graduados',
    description: 'Nuestra primera gran generación de innovadores completa su formación.',
    icon: '🎓',
    category: 'hito',
    expandedContent: 'Cerrar el Año con xxx graduados fue la validación que necesitábamos. Ver a xxx niños y jóvenes presentando sus proyectos finales a sus familias fue un momento emotivo que consolidó nuestra visión de impacto social.'
  },

  // Estudiantes - Niñas del Guaviare en la NASA
  {
    id: 's-valeria-vega',
    date: '2022-07-01',
    title: 'Valeria Vega Torres en la NASA',
    description: 'Estudiante de ScienceBot que representó al Guaviare en el Space Center de Houston.',
    icon: '🚀',
    category: 'estudiante',
    featured: true,
    expandedContent: 'Valeria Vega Torres fue seleccionada en el programa "Ella es Astronauta" de la Fundación SHE IS y viajó al Centro Espacial de la NASA en Houston, Texas. Representó con orgullo al departamento del Guaviare, siendo una de las primeras niñas de la región en pisar las instalaciones donde se forman los astronautas. Su paso por ScienceBot fue clave para desarrollar el pensamiento científico y la confianza en sí misma que la llevaron a este sueño.'
  },
  {
    id: 's-sara-mondragon',
    date: '2022-07-01',
    title: 'Sara Mondragón en la NASA',
    description: 'Con solo 12 años, viajó al Centro Espacial de la NASA para inspirar a otras niñas.',
    icon: '🌌',
    category: 'estudiante',
    expandedContent: 'Sara Mondragón, con tan solo 12 años, viajó en 2022 al Centro Espacial de la NASA en Houston, Texas, como parte del programa "Ella es Astronauta" de la Fundación SHE IS. Su historia se convirtió en símbolo de que el talento no tiene límites geográficos: una niña del Guaviare podía mirar las estrellas de cerca. Su participación buscó inspirar a decenas de niñas de zonas rurales y urbanas a soñar en grande y apostarle a la ciencia y la tecnología.'
  },
  {
    id: 's-anais-pastor',
    date: '2022-07-01',
    title: 'Anais Luciana Pastor Gallego en la NASA',
    description: 'Estudiante de robótica de ScienceBot, destacada en el programa espacial.',
    icon: '⭐',
    category: 'estudiante',
    expandedContent: 'Anais Luciana Pastor Gallego es estudiante de robótica de ScienceBot y fue destacada dentro del programa "Ella es Astronauta" de la Fundación SHE IS por su desempeño académico y su pasión por la ciencia. Viajó al Centro Espacial de la NASA en Houston, donde tuvo la oportunidad de participar en desafíos de cohetería y conocer a astronautas. Anais representa el tipo de talento que ScienceBot se propone despertar: curiosa, creativa y dispuesta a conquistar el universo.'
  },
  {
    id: 's-zully-romero',
    date: '2022-07-01',
    title: 'Zully Karina Romero en la NASA',
    description: 'Estudiante de la Institución Educativa La Libertad, participante de las inmersiones en Houston.',
    icon: '🛸',
    category: 'estudiante',
    expandedContent: 'Zully Karina Romero, estudiante de la Institución Educativa La Libertad del Guaviare, participó en el programa de inmersión en el Centro Espacial de la NASA en Houston, Texas. A través de la formación en robótica y tecnología impulsada por ScienceBot en zonas rurales, Zully superó barreras de acceso para convertirse en una de las representantes de su región ante uno de los centros científicos más importantes del mundo. Su travesía demuestra que la educación STEM transforma vidas desde el primer taller.'
  },


  /* TODO: Cursos - 2022 (Nuevas Fronteras) — descomentar cuando estén listos
  {
    id: 'c-2022-1',
    date: '2022-02-15',
    title: 'Arduino y Electrónica Creativa',
    description: 'Fusión de hardware y software para el Internet de las Cosas.',
    icon: '⚡',
    category: 'curso',
    expandedContent: 'Este curso desmitifica la electrónica. Los estudiantes aprenden que no es magia, es ciencia. Desde encender un LED hasta automatizar un sistema de riego casero, Arduino les da el poder de controlar el mundo físico con sus códigos.'
  },
  {
    id: 'c-2022-2',
    date: '2022-05-20',
    title: 'Desarrollo Web Fullstack',
    description: 'Formando a la próxima generación de creadores de la web.',
    icon: '🌐',
    category: 'curso',
    expandedContent: 'Más allá de usar internet, enseñamos a construirlo. HTML, CSS y JavaScript moderno son las herramientas que entregamos para que los estudiantes puedan publicar sus propias ideas, portafolios y aplicaciones web al mundo entero.'
  },
  */

  // Hitos - Competencias Robot Rally 2022
  {
    id: 'm-robot-rally-2022-1',
    date: '2022-05-21',
    title: 'Robot Rally — 1.er Lugar',
    description: 'Marymount School Medellín — 🏆 Primer lugar.',
    icon: '🏆',
    category: 'hito',
    featured: true,
    expandedContent: 'En el Robot Rally organizado en el Marymount School de Medellín, nuestro equipo se coronó campeón del primer lugar. El Robot Rally es una competencia de robótica educativa donde los equipos deben programar y controlar robots para superar una serie de desafíos de velocidad, precisión y autonomia. Este primer puesto demostró la solidez técnica y el trabajo en equipo de nuestros estudiantes frente a instituciones de alto nivel educativo.'
  },
  {
    id: 'm-robot-rally-2022-2',
    date: '2022-05-21',
    title: 'Robot Rally — 2.do Lugar',
    description: 'Marymount School Medellín — 🥈 Segundo lugar.',
    icon: '🥈',
    category: 'hito',
    expandedContent: 'En una segunda participación del Robot Rally en el Marymount School de Medellín, nuestro equipo obtuvo el segundo lugar. Esta competencia reunió a los mejores equipos de robótica de colegios de la región, poniendo a prueba habilidades de programación, diseño mecánico y toma de decisiones bajo presión. Quedar en el podio en dos ediciones del mismo año confirmó nuestra consistencia competitiva.'
  },


  {
    id: 'm-hito-estudiantes-activos',
    date: '2099-01-25',
    title: '"Numero de estudiantes" Estudiantes Activos',
    description: 'Una comunidad vibrante de creadores tecnológicos.',
    icon: '📈',
    category: 'hito',
    featured: true,
    expandedContent: 'Alcanzar los xxxx estudiantes activos simultáneos fue un hito logístico y pedagógico. Un logro que refleja no solo el crecimiento de ScienceBot, sino la confianza de cientos de familias que ven en la robótica y la programación una puerta hacia el futuro de sus hijos.'
  },
  {
    id: 'm-robot-rally-2023',
    date: '2023-06-01',
    title: 'Robot Rally 2023 — 2.do Lugar',
    description: '🥈 Segundo lugar en el Robot Rally 2023.',
    icon: '🥈',
    category: 'hito',
    expandedContent: 'En la edición 2023 del Robot Rally, nuestros estudiantes volvieron a subir al podio obteniendo el segundo lugar. Esta competencia de robótica educativa evalúa la capacidad de los equipos para programar robots que completen recorridos y retos de ingeniería con precisión y creatividad. El segundo lugar reafirmó nuestro nivel competitivo frente a equipos de todo el país.'
  },
  {
    id: 'm-futbol-robotico-2023',
    date: '2023-07-01',
    title: 'Fútbol Robótico 2023 — 3.er Lugar',
    description: '🥉 Tercer lugar en la categoría Fútbol Robótico.',
    icon: '⚽',
    category: 'hito',
    expandedContent: 'En la categoría de Fútbol Robótico, nuestro equipo logró el tercer lugar compitiendo contra equipos de alto nivel. El fútbol robótico es una disciplina donde los robots deben detectar el balón mediante sensores, desplazarse de forma autónoma y marcar goles, poniendo a prueba tanto la programación como el diseño mecánico del robot. Una medalla de bronce que demuestra nuestra versatilidad en distintas modalidades de competencia.'
  },
  {
    id: 'm-carrera-insectos-2023',
    date: '2023-08-01',
    title: 'Carrera de Insectos 2023 — 3.er Lugar',
    description: '🥉 Tercer lugar en la Carrera de Insectos.',
    icon: '🐛',
    category: 'hito',
    expandedContent: 'La Carrera de Insectos es una emocionante modalidad robótica en la que los equipos construyen y programan mini robots de locomoción inspirados en el movimiento de los insectos, compitiendo en velocidad y agilidad sobre un circuito de obstáculos. Nuestro equipo obtuvo el tercer lugar, destacando por la estabilidad mecánica y la eficiencia del código de movimiento de su robot, en una categoría altamente técnica y creativa.'
  },
  {
    id: 'm-hito-premio',
    date: '2099-11-15',
    title: 'Premio Innovación Educativa "Año"',
    description: 'Galardonados como la Mejor Iniciativa EdTech del Año.',
    icon: '🏅',
    category: 'hito',
    expandedContent: 'El Ministerio de Educación y Ciencia nos otorgó este reconocimiento por nuestra contribución a la reducción de la brecha digital y el fomento de vocaciones STEM en edades tempranas.'
  },




  // Historia - Dic 2025
  {
    id: 'h-2025-aula-robotica',
    date: '2025-12-12',
    title: 'Entrega de la primera Aula de Robótica',
    description: 'El departamento del Guaviare recibe la primera Aula de Robótica Oficial.',
    icon: '🏫',
    category: 'historia',
    featured: true,
    expandedContent: 'El departamento del Guaviare recibió la primera Aula de Robótica Oficial, un espacio equipado con tecnología de última generación para fortalecer procesos educativos en ciencia, tecnología e innovación. Esta iniciativa está liderada por nuestra Escuela de Robótica "ScienceBot", y contó con el apoyo directo del Ministerio de Ciencia, Tecnología e Innovación.'
  }
];

// Export helper function to get events by category
export function getEventsByCategory(categoryId?: TimelineCategoryType | 'all'): TimelineEvent[] {
  if (!categoryId || categoryId === 'all') {
    return timelineEvents;
  }
  return timelineEvents.filter(event => event.category === categoryId);
}

// Export helper function to get featured events
export function getFeaturedEvents(): TimelineEvent[] {
  return timelineEvents.filter(event => event.featured);
}

// Export helper function to get recent events (last 6 months)
export function getRecentEvents(): TimelineEvent[] {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  return timelineEvents.filter(event => new Date(event.date) >= sixMonthsAgo);
}

// Format event date in Spanish locale
export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Format event date in short format (MMM YYYY)
export function formatEventDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'short'
  }).format(date);
}

// Group events by year
export function groupEventsByYear(): Map<number, TimelineEvent[]> {
  const grouped = new Map<number, TimelineEvent[]>();

  timelineEvents.forEach(event => {
    const year = new Date(event.date).getFullYear();
    if (!grouped.has(year)) {
      grouped.set(year, []);
    }
    grouped.get(year)!.push(event);
  });

  // Sort events within each year by date (newest first)
  grouped.forEach((events, year) => {
    events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  return grouped;
}

// Get events by date range
export function getEventsByDateRange(startDate: Date, endDate: Date): TimelineEvent[] {
  return timelineEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= startDate && eventDate <= endDate;
  });
}

// Get timeline statistics
export function getTimelineStats() {
  const stats = {
    total: timelineEvents.length,
    byCategory: {} as Record<TimelineCategoryType, number>,
    featured: timelineEvents.filter(e => e.featured).length,
    years: new Set(timelineEvents.map(e => new Date(e.date).getFullYear())).size,
    oldest: timelineEvents.reduce((oldest, event) =>
      new Date(event.date) < new Date(oldest.date) ? event : oldest
    ),
    newest: timelineEvents.reduce((newest, event) =>
      new Date(event.date) > new Date(newest.date) ? event : newest
    )
  };

  // Count by category
  timelineCategories.forEach(cat => {
    stats.byCategory[cat.id] = timelineEvents.filter(e => e.category === cat.id).length;
  });

  return stats;
}