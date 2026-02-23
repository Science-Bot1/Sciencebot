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
  // Historia - 2020 (Fundación)
  {
    id: 'h-2020-1',
    date: '2020-03-15',
    title: 'Fundación de ScienceBot',
    description: 'Nace el sueño de transformar la educación tecnológica en Latinoamérica.',
    icon: '🚀',
    category: 'historia',
    featured: true,
    expandedContent: 'ScienceBot fue fundada en un pequeño garaje por un grupo de ingenieros y educadores apasionados. Nuestra misión inicial era simple pero ambiciosa: democratizar el acceso a la educación en robótica y programación de alta calidad para niños y jóvenes de todos los sectores socioeconómicos.'
  },
  {
    id: 'h-2020-2',
    date: '2020-06-20',
    title: 'Primeros 15 Estudiantes',
    description: 'Iniciamos operaciones con nuestro primer grupo piloto de estudiantes.',
    icon: '🌱',
    category: 'historia',
    expandedContent: 'Con apenas 15 estudiantes valientes que confiaron en nuestro proyecto piloto, comenzamos esta increíble aventura. Las clases se impartían los fines de semana y cada estudiante recibió atención personalizada para validar nuestra metodología de enseñanza "Aprender Haciendo".'
  },

  // Historia - 2021 (Crecimiento)
  {
    id: 'h-2021-1',
    date: '2021-01-10',
    title: 'Inauguración Sede Principal',
    description: 'Abrimos nuestro primer centro de aprendizaje especializado.',
    icon: '🏢',
    category: 'historia',
    expandedContent: 'La apertura de nuestra sede principal marcó un antes y un después. Un espacio de 200m² diseñado específicamente para la creatividad, con laboratorios de electrónica, áreas de construcción de robots y zonas de programación colaborativa.'
  },

  // Cursos - 2021 (Expansión Académica)
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

  // Hitos - 2021 (Logros Tempranos)
  {
    id: 'm-2021-1',
    date: '2021-12-20',
    title: '100 Estudiantes Graduados',
    description: 'Nuestra primera gran generación de innovadores completa su formación.',
    icon: '🎓',
    category: 'hito',
    expandedContent: 'Cerrar el 2021 con 100 graduados fue la validación que necesitábamos. Ver a 100 niños y jóvenes presentando sus proyectos finales a sus familias fue un momento emotivo que consolidó nuestra visión de impacto social.'
  },

  // Estudiantes - 2021 (Casos de Éxito)
  {
    id: 's-2021-1',
    date: '2021-12-05',
    title: 'Robot Asistente "Sofía"',
    description: 'Sofía (12 años) crea un prototipo para ayudar a adultos mayores.',
    icon: '👵',
    category: 'estudiante',
    expandedContent: 'Sofía notó que su abuela olvidaba tomar sus medicinas. Usando Arduino y sensores básicos aprendidos en clase, prototipó un dispensador automático con alarmas sonoras y visuales. Su proyecto ganó la feria de ciencias local y fue el inicio de su interés por la ingeniería biomédica.'
  },

  // Cursos - 2022 (Nuevas Fronteras)
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

  // Hitos - 2022 (Expansión y Reconocimiento)
  {
    id: 'm-2022-1',
    date: '2022-03-15',
    title: 'Lanzamiento Plataforma Virtual',
    description: 'ScienceBot rompe barreras geográficas llegando a todo el país.',
    icon: '💻',
    category: 'hito',
    expandedContent: 'En respuesta a la demanda de otras ciudades, desarrollamos nuestra propia plataforma de aprendizaje híbrido (LMS). Esto nos permitió llevar nuestra metodología a estudiantes en zonas rurales y ciudades alejadas, democratizando aún más el acceso.'
  },
  {
    id: 'm-2022-2',
    date: '2022-08-30',
    title: 'Campeones Nacionales RoboCup',
    description: 'Primer lugar en la categoría Rescate Junior.',
    icon: '🏆',
    category: 'hito',
    featured: true,
    expandedContent: 'Nuestro equipo de selección compitió contra 50 escuelas de todo el país. Su robot autónomo de rescate no solo fue el más rápido, sino el único que completó el circuito perfecto. Este trofeo puso a ScienceBot en el mapa de la robótica competitiva nacional.'
  },

  // Estudiantes - 2022
  {
    id: 's-2022-1',
    date: '2022-04-20',
    title: 'App "DislexiAyuda"',
    description: 'Matías (14 años) desarrolla app para niños con dislexia.',
    icon: '📱',
    category: 'estudiante',
    featured: true,
    expandedContent: 'Inspirado por su hermana menor, Matías usó sus conocimientos de desarrollo móvil para crear una aplicación con juegos de letras y fonética diseñados específicamente para mentes disléxicas. La app ha sido descargada más de 5,000 veces.'
  },
  {
    id: 's-2022-2',
    date: '2022-09-15',
    title: 'Equipo "TechGirls" en Japón',
    description: 'Representación femenina destacada en mundial de robótica.',
    icon: '🎎',
    category: 'estudiante',
    expandedContent: 'Nuestro equipo 100% femenino viajó a Tokio para el mundial. Su robot clasificador de residuos reciclables basado en visión por computadora impresionó a los jueces por su eficiencia y bajo costo de implementación.'
  },

  // Hitos - 2023 (Consolidación)
  {
    id: 'm-2023-1',
    date: '2023-01-25',
    title: '1,000 Estudiantes Activos',
    description: 'Una comunidad vibrante de creadores tecnológicos.',
    icon: '📈',
    category: 'hito',
    featured: true,
    expandedContent: 'Alcanzar los 1,000 estudiantes activos simultáneos fue un hito logístico y pedagógico. Requirió escalar nuestro equipo de mentores a 50 profesionales y optimizar todos nuestros procesos, sin perder la calidez y personalización que nos caracteriza.'
  },
  {
    id: 'm-2023-2',
    date: '2023-06-10',
    title: 'Certificación ISO 9001 Educación',
    description: 'Reconocimiento internacional a nuestra calidad educativa.',
    icon: '📜',
    category: 'hito',
    expandedContent: 'Nos convertimos en la primera academia de robótica extra-curricular de la región en obtener la certificación de calidad ISO. Esto garantiza a los padres que nuestros procesos de enseñanza, seguridad y administración cumplen con los más altos estándares globales.'
  },
  {
    id: 'm-2023-3',
    date: '2023-11-15',
    title: 'Premio Innovación Educativa 2023',
    description: 'Galardonados como la Mejor Iniciativa EdTech del Año.',
    icon: '🏅',
    category: 'hito',
    expandedContent: 'El Ministerio de Educación y Ciencia nos otorgó este reconocimiento por nuestra contribución a la reducción de la brecha digital y el fomento de vocaciones STEM en edades tempranas.'
  },

  // Estudiantes - 2023
  {
    id: 's-2023-1',
    date: '2023-02-28',
    title: 'Beca Completa en Stanford',
    description: 'Diego (16 años) admitido por su portafolio de IA.',
    icon: '🇺🇸',
    category: 'estudiante',
    expandedContent: 'Diego comenzó con nosotros a los 12 años en Scratch. Cuatro años después, su proyecto de detección de plagas en cultivos mediante drones e IA le valió una beca del 100% en una de las mejores universidades del mundo. Es nuestro orgullo.'
  },
  {
    id: 's-2023-2',
    date: '2023-07-10',
    title: 'Startup "EcoTech" Levantó Capital',
    description: 'Ex-alumnos de 18 años valorados en $1M USD.',
    icon: '🦄',
    category: 'estudiante',
    expandedContent: 'Tres compañeros que se conocieron en nuestro curso de Python fundaron EcoTech Solutions. Su startup de sensores IoT para eficiencia energética en edificios acaba de recibir su primera ronda de inversión semilla, demostrando que nuestros estudiantes son emprendedores reales.'
  },

  // Historia - 2024 (Futuro)
  {
    id: 'h-2024-1',
    date: '2024-01-15',
    title: 'Apertura Campus de Innovación',
    description: 'Inicia la construcción de nuestro nuevo campus de 1000m².',
    icon: '🏗️',
    category: 'historia',
    featured: true,
    expandedContent: 'Para acomodar nuestro crecimiento, hemos iniciado la construcción del "ScienceBot Innovation Campus". Incluirá un makerspace abierto al público, auditorio para hackathons, y laboratorios de realidad virtual y aumentada. La inauguración está prevista para finales de 2024.'
  },
  {
    id: 's-2024-1',
    date: '2024-03-10',
    title: 'Patente de Sistema de Riego',
    description: 'Lucía (15 años) registra su primera patente industrial.',
    icon: '💡',
    category: 'estudiante',
    expandedContent: 'Lucía patentó su "Sistema de Riego Predictivo de Bajo Costo". Su invención utiliza datos meteorológicos locales y sensores de suelo para ahorrar hasta un 40% de agua en pequeños cultivos familiares. Ya está en conversaciones con cooperativas agrícolas para su implementación pilot.'
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