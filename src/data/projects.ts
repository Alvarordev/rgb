import type { ImageMetadata } from 'astro';

// Proyecto 01
import p01_01 from '../assets/proyectos/01/01.jpg';
import p01_02 from '../assets/proyectos/01/02.jpg';
import p01_03 from '../assets/proyectos/01/03.jpg';
import p01_04 from '../assets/proyectos/01/04.jpg';
import p01_05 from '../assets/proyectos/01/05.jpg';
import p01_06 from '../assets/proyectos/01/06.jpeg';

// Proyecto 02
import p02_01 from '../assets/proyectos/02/01.jpg';
import p02_02 from '../assets/proyectos/02/02.jpg';
import p02_03 from '../assets/proyectos/02/03.jpg';
import p02_04 from '../assets/proyectos/02/04.jpg';
import p02_05 from '../assets/proyectos/02/05.jpg';
import p02_06 from '../assets/proyectos/02/06.jpg';
import p02_07 from '../assets/proyectos/02/07.jpg';
import p02_08 from '../assets/proyectos/02/08.png';
import p02_09 from '../assets/proyectos/02/09.jpg';
import p02_10 from '../assets/proyectos/02/10.jpg';

// Proyecto 03
import p03_01 from '../assets/proyectos/03/01.jpg';
import p03_02 from '../assets/proyectos/03/02.jpg';
import p03_03 from '../assets/proyectos/03/03.jpg';
import p03_04 from '../assets/proyectos/03/04.jpg';
import p03_05 from '../assets/proyectos/03/05.jpg';

// Proyecto 04
import p04_01 from '../assets/proyectos/04/01.jpeg';
import p04_02 from '../assets/proyectos/04/02.webp';
import p04_03 from '../assets/proyectos/04/03.jpeg';
import p04_04 from '../assets/proyectos/04/04.png';
import p04_05 from '../assets/proyectos/04/05.png';
import video04 from '../assets/proyectos/04/video-01.mp4';

// Proyecto 05
import p05_01 from '../assets/proyectos/05/01.jpg';
import p05_02 from '../assets/proyectos/05/02.jpg';
import p05_03 from '../assets/proyectos/05/03.jpg';
import p05_04 from '../assets/proyectos/05/04.jpg';
import p05_05 from '../assets/proyectos/05/05.jpg';
import p05_06 from '../assets/proyectos/05/06.jpg';
import p05_07 from '../assets/proyectos/05/07.jpg';
import p05_08 from '../assets/proyectos/05/08.jpg';
import video05 from '../assets/proyectos/05/video-01.mp4';

export interface Project {
  id: number;
  slug: string;
  title: string;
  images: ImageMetadata[];
  videos?: string[];
  alt: string;
  year: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'bano-sevilla',
    title: 'Baño Sevilla',
    year: '2024',
    location: 'Surco, Lima, Perú',
    images: [p01_01, p01_02, p01_03, p01_04, p01_05, p01_06],
    alt: 'Baño Sevilla',
  },
  {
    id: 2,
    slug: 'departamento-elba',
    title: 'Departamento Elba',
    year: '2025',
    location: 'Trujillo, Perú',
    images: [
      p02_01,
      p02_02,
      p02_03,
      p02_04,
      p02_05,
      p02_06,
      p02_07,
      p02_08,
      p02_09,
      p02_10,
    ],
    alt: 'Depa Elba',
  },
  {
    id: 3,
    slug: 'patio-atenas',
    title: 'Patio Atenas',
    year: '2025',
    location: 'Los Olivos, Lima, Perú',
    images: [p03_04, p03_02, p03_03, p03_01, p03_05],
    alt: 'Patio Atenas',
  },
  {
    id: 4,
    slug: 'terraza-atenas',
    title: 'Terraza Atenas',
    year: '2025',
    location: 'Los Olivos, Lima, Perú',
    images: [p04_05, p04_02, p04_01, p04_04, p04_03],
    videos: [video04],
    alt: 'Terraza Atenas',
  },
  {
    id: 5,
    slug: 'proyecto-c1',
    title: 'Proyecto C1',
    year: '2025',
    location: 'San Borja, Lima, Perú',
    images: [
      p05_01,
      p05_02,
      p05_03,
      p05_04,
      p05_05,
      p05_06,
      p05_07,
      p05_08,
    ],
    videos: [video05],
    alt: 'Proyecto C1',
  },
];
