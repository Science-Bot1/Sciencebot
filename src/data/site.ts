// Contenido del Home y datos de contacto de ScienceBot.
// Cifras: tati-bot.vercel.app y El Espectador (sep 2026). Validar con Tatiana antes de publicar.

const IMG = '/img/rediseno';

export const contact = {
  email: 'sciencebot2@gmail.com',
  phone: '+57 318 841 4774',
  phoneHref: 'tel:+573188414774',
  whatsapp: '573188414774',
  city: 'San José del Guaviare, Guaviare',
};

export function waLink(text: string): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const social = [
  { label: 'Facebook', href: 'https://www.facebook.com/ScienceBot1/' },
  { label: 'Instagram @science.bot', href: 'https://www.instagram.com/science.bot/' },
  { label: 'YouTube @sciencebot3400', href: 'https://www.youtube.com/@sciencebot3400' },
  { label: 'TikTok @1sciencebot', href: 'https://www.tiktok.com/@1sciencebot' },
];

export const stats = [
  { value: '6.000+', label: 'niños formados en 5 años' },
  { value: '3.000', label: 'estudiantes activos' },
  { value: '1.200', label: 'con beca', accent: true },
  { value: '5', label: 'colegios, más resguardos y veredas' },
  { value: '7', label: 'profesores' },
];

export type LogroKind = 'Competencias' | 'Reconocimientos' | 'Estudiantes';

export const logros: {
  kind: LogroKind;
  title: string;
  text: string;
  meta: string;
  image: string;
  alt: string;
  medal?: 'gold';
}[] = [
  {
    kind: 'Competencias',
    title: 'Finalistas nacionales FIRST LEGO League',
    text: 'El equipo del Guaviare llegó a la final nacional en Cartagena.',
    meta: '2025 · Competencias',
    image: `${IMG}/fll-cartagena.webp`,
    alt: 'Equipo de ScienceBot en la final nacional FIRST LEGO League en Cartagena',
  },
  {
    kind: 'Estudiantes',
    title: 'Ella es Astronauta',
    text: 'Estudiantes del Guaviare ganaron y viajaron al Space Center Houston con la Fundación SHE IS.',
    meta: '2022 – 2025 · Estudiantes',
    image: `${IMG}/nasa-guaviare.webp`,
    alt: 'Estudiantes del Guaviare presentan en el Space Center Houston',
    medal: 'gold',
  },
  {
    kind: 'Competencias',
    title: 'Campeones nacionales, rumbo a México',
    text: 'Ganamos el Campeonato Nacional RoboRally en Fútbol Robótico y representamos a Colombia.',
    meta: '2023 · Competencias · 1.º',
    image: `${IMG}/futbol-robotico.webp`,
    alt: 'Jóvenes compiten en una cancha de fútbol robótico frente al público',
    medal: 'gold',
  },
  {
    kind: 'Competencias',
    title: 'Campeones RoboSketch y RoboJam Medellín',
    text: 'Dos títulos en un mismo año para nuestros equipos.',
    meta: '2024 · Competencias · 1.º',
    image: `${IMG}/futbol-robotico-2.webp`,
    alt: 'Jóvenes guían sus robots sobre una pista de competencia',
    medal: 'gold',
  },
  {
    kind: 'Reconocimientos',
    title: 'Tatiana, ponente en la ONU',
    text: 'Habló en Nueva York sobre robótica y paz.',
    meta: 'Mar 2025 · Reconocimientos',
    image: `${IMG}/tatiana-onu.webp`,
    alt: 'Tatiana Muñoz con un integrante de la Misión de la ONU en Colombia',
  },
  {
    kind: 'Reconocimientos',
    title: 'Primera Aula de Robótica Oficial del Guaviare',
    text: 'Liderada por ScienceBot con el apoyo de MinCiencias.',
    meta: 'Dic 2025 · Reconocimientos',
    image: `${IMG}/aula.webp`,
    alt: 'Aula de robótica de ScienceBot llena de estudiantes',
  },
];

export const programas = [
  {
    edad: '6–8 años',
    title: 'Pequeños constructores',
    text: 'LEGO y Scratch Jr: primeras máquinas, engranajes y secuencias.',
    modo: 'Presencial · Colegios',
    image: `${IMG}/prog-6-8.webp`,
    alt: 'Niño de primer grado muestra su construcción LEGO',
    href: '/cursos/scratch-jr',
  },
  {
    edad: '8–12 años',
    title: 'Robótica creativa',
    text: 'Robots LEGO con motores y sensores, y programación por bloques con Scratch.',
    modo: 'Presencial · Online · Rural',
    image: `${IMG}/prog-8-12.webp`,
    alt: 'Dos niñas muestran el robot que construyeron',
    href: '/cursos/robotica-lego',
  },
  {
    edad: '10–17 años',
    title: 'Electrónica y Arduino',
    text: 'Circuitos, sensores y prototipos para resolver problemas reales.',
    modo: 'Presencial',
    image: `${IMG}/prog-arduino.webp`,
    alt: 'Docente acompaña a estudiantes que conectan un robot con cables',
    href: '/cursos/arduino',
  },
  {
    edad: '12–17 años',
    title: 'Python, web e impresión 3D',
    text: 'Programación textual, desarrollo web, diseño 3D y competencias FLL y WRO.',
    modo: 'Presencial · Online',
    image: `${IMG}/prog-scratch.webp`,
    alt: 'Estudiantes programan en portátiles',
    href: '/cursos/python',
  },
];

export const proyectos = [
  {
    title: 'Wept Life',
    text: 'Barco robot que mide la calidad del agua en los humedales del Guaviare. Presentado ante MinCiencias y en la Feria del Libro de Bogotá.',
    estado: 'Activo',
    color: '#2020E8',
    icon: 'M2 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0M5 14l1-5h12l1 5M12 9V4l4 2',
  },
  {
    title: 'Plastic Makers 3D',
    text: 'Plástico reciclado convertido en filamento para impresión 3D, que genera ingresos para los estudiantes.',
    estado: 'Activo',
    color: '#2E8A23',
    icon: 'M12 3 3 8l9 5 9-5zM3 8v8l9 5 9-5V8',
    href: '/plastic-makers-3d',
  },
  {
    title: 'Invernaderos inteligentes',
    text: 'Robótica con hijos de firmantes de paz en el ETCR Colinas, con apoyo de la Misión de la ONU.',
    estado: 'Activo',
    color: '#2E8A23',
    icon: 'M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6',
  },
  {
    title: 'Astronomía con el pueblo Jiw',
    text: 'Ciencia y robótica en el resguardo Barrancón, en zonas sin internet.',
    estado: 'Activo',
    color: '#10173A',
    icon: 'M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z',
  },
  {
    title: 'Estación meteorológica',
    text: 'Monitoreo para proteger pinturas rupestres de 12.000 años.',
    estado: 'En desarrollo',
    color: '#C5302A',
    icon: 'M12 2v4M4.9 4.9l2.8 2.8M2 12h4M17 12a5 5 0 1 0-10 0M19 20H5',
  },
];

/** Reemplazar por logos oficiales una vez haya permiso de uso. */
export const aliados = [
  'WRO Colombia',
  'Fundación SHE IS',
  'Hilfswerk',
  'Naciones Unidas',
  'UNAD',
  'SENA',
  'RoboJam',
  'FIRST LEGO League',
  'MinCiencias',
];

export const prensa = [
  {
    medio: 'El Espectador · Colombia+20',
    fecha: '7 sep 2026',
    title: 'La profesora de robótica que les enseña a los niños del Guaviare a soñar con la paz',
    url: 'https://www.elespectador.com/colombia-20/paz-y-memoria/la-profesora-de-robotica-que-les-ensena-a-los-ninos-del-guaviare-a-sonar-con-la-paz/',
  },
  {
    medio: 'ONU Colombia',
    fecha: 'Sep 2026',
    title: 'La profesora de robótica que les enseña a los niños del Guaviare a soñar con la paz',
    url: 'https://colombia.un.org/es/322634-la-profesora-de-rob%C3%B3tica-que-les-ense%C3%B1a-los-ni%C3%B1os-del-guaviare-so%C3%B1ar-con-la-paz',
  },
  {
    medio: 'Radio Nacional',
    fecha: '2022',
    title: 'Jóvenes del Guaviare, nominados a los Robotic Awards Latinoamérica',
    url: 'https://radionacional.co/actualidad/tecnologia/jovenes-colombianos-nominado-premios-robotic-awards-latinoamerica',
  },
  {
    medio: 'Enter.co',
    fecha: '2022',
    title: 'Niños del Guaviare fueron nominados a los Robotic Awards Latinoamérica 2022',
    url: 'https://www.enter.co/colombia/ninos-del-guaviare-fueron-nominados-a-los-robotic-awards-latinoamerica-2022/',
  },
];

export const faq = [
  {
    q: '¿Qué aprenden mis hijos?',
    a: 'Robótica con LEGO, programación (Scratch, Python), electrónica con Arduino, impresión 3D y ciencia aplicada al territorio.',
  },
  {
    q: '¿Hay becas?',
    a: 'Sí. Hoy 1.200 estudiantes tienen beca. Escríbenos por WhatsApp para conocer los requisitos.',
  },
  {
    q: '¿Las clases son presenciales o virtuales?',
    a: 'Ambas: en nuestra sede de San José del Guaviare, en colegios aliados y en línea.',
  },
  {
    q: '¿Llevan talleres a mi colegio o comunidad?',
    a: 'Sí: robótica, programación e impresión 3D, también en zonas rurales y sin conexión.',
  },
];
