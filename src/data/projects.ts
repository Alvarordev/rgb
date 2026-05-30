import type { ImageMetadata } from "astro";

// Proyecto 01
import p01_01 from "../assets/proyectos/01/01.webp";
import p01_02 from "../assets/proyectos/01/02.webp";
import p01_03 from "../assets/proyectos/01/03.webp";
import p01_04 from "../assets/proyectos/01/04.webp";
import p01_05 from "../assets/proyectos/01/05.webp";
import p01_06 from "../assets/proyectos/01/06.webp";

// Proyecto 02
import p02_01 from "../assets/proyectos/02/01.webp";
import p02_02 from "../assets/proyectos/02/02.webp";
import p02_03 from "../assets/proyectos/02/03.webp";
import p02_04 from "../assets/proyectos/02/04.webp";
import p02_05 from "../assets/proyectos/02/05.webp";
import p02_06 from "../assets/proyectos/02/06.webp";
import p02_07 from "../assets/proyectos/02/07.webp";
import p02_08 from "../assets/proyectos/02/08.webp";
import p02_09 from "../assets/proyectos/02/09.webp";
import p02_10 from "../assets/proyectos/02/10.webp";

// Proyecto 03
import p03_01 from "../assets/proyectos/03/01.webp";
import p03_02 from "../assets/proyectos/03/02.webp";
import p03_03 from "../assets/proyectos/03/03.webp";
import p03_04 from "../assets/proyectos/03/04.webp";
import p03_05 from "../assets/proyectos/03/05.webp";

// Proyecto 04
import p04_01 from "../assets/proyectos/04/01.webp";
import p04_02 from "../assets/proyectos/04/02.webp";
import p04_03 from "../assets/proyectos/04/03.webp";
import p04_04 from "../assets/proyectos/04/04.webp";
import p04_05 from "../assets/proyectos/04/05.webp";
import video04 from "../assets/proyectos/04/video-01.mp4";

// Proyecto 05
import p05_01 from "../assets/proyectos/05/01.webp";
import p05_02 from "../assets/proyectos/05/02.webp";
import p05_03 from "../assets/proyectos/05/03.webp";
import p05_04 from "../assets/proyectos/05/04.webp";
import p05_05 from "../assets/proyectos/05/05.webp";
import p05_06 from "../assets/proyectos/05/06.webp";
import p05_07 from "../assets/proyectos/05/07.webp";
import p05_08 from "../assets/proyectos/05/08.webp";
import video05 from "../assets/proyectos/05/video-01.mp4";

import p06_01 from "../assets/proyectos/06/01.webp";
import p06_02 from "../assets/proyectos/06/02.webp";
import p06_03 from "../assets/proyectos/06/03.webp";
import p06_04 from "../assets/proyectos/06/04.webp";
import p06_05 from "../assets/proyectos/06/05.webp";
import p06_06 from "../assets/proyectos/06/06.webp";
import p06_07 from "../assets/proyectos/06/07.webp";
import p06_08 from "../assets/proyectos/06/08.webp";
import p06_09 from "../assets/proyectos/06/09.webp";
import p06_10 from "../assets/proyectos/06/10.webp";
import p06_11 from "../assets/proyectos/06/11.webp";
import p06_12 from "../assets/proyectos/06/12.webp";
import p06_13 from "../assets/proyectos/06/13.webp";
import p06_14 from "../assets/proyectos/06/14.webp";

import p07_01 from "../assets/proyectos/07/01.webp";
import p07_02 from "../assets/proyectos/07/02.webp";
import p07_03 from "../assets/proyectos/07/03.webp";
import p07_04 from "../assets/proyectos/07/04.webp";
import p07_05 from "../assets/proyectos/07/05.webp";
import p07_06 from "../assets/proyectos/07/06.webp";
import p07_07 from "../assets/proyectos/07/07.webp";
import p07_08 from "../assets/proyectos/07/08.webp";
import p07_09 from "../assets/proyectos/07/09.webp";

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
    slug: "cocina-agave",
    title: "Cocina Agave",
    year: "2026",
    location: "Pueblo Libre, Lima, Perú",
    images: [p07_06, p07_02, p07_04, p07_08, p07_03, p07_01, p07_07, p07_05, p07_09],
    alt: "Cocina Agave",
  },
  {
    id: 2,
    slug: "proyecto-c1",
    title: "Proyecto C1",
    year: "2025",
    location: "San Borja, Lima, Perú",
    images: [p05_01, p05_02, p05_03, p05_04, p05_05, p05_06, p05_07, p05_08],
    videos: [video05],
    alt: "Proyecto C1",
  },
  {
    id: 3,
    slug: "bano-sevilla",
    title: "Baño Sevilla",
    year: "2024",
    location: "Surco, Lima, Perú",
    images: [p01_01, p01_02, p01_03, p01_04, p01_05, p01_06],
    alt: "Baño Sevilla",
  },
  {
    id: 4,
    slug: "departamento-elba",
    title: "Departamento Elba",
    year: "2025",
    location: "Trujillo, Perú",
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
    alt: "Depa Elba",
  },
  {
    id: 5,
    slug: "patio-atenas",
    title: "Patio Atenas",
    year: "2025",
    location: "Los Olivos, Lima, Perú",
    images: [p03_04, p03_02, p03_03, p03_01, p03_05],
    alt: "Patio Atenas",
  },
  {
    id: 6,
    slug: "proyecto-nilda",
    title: "Proyectoo Nilda",
    year: "2026",
    location: "San Borja, Lima, Perú",
    images: [p06_01, p06_02, p06_03, p06_04,p06_05, p06_06, p06_07, p06_08, p06_09, p06_10, p06_11, p06_12, p06_13, p06_14],
    alt: "Proyecto Nilda",
  },
  {
    id: 7,
    slug: "terraza-atenas",
    title: "Terraza Atenas",
    year: "2025",
    location: "Los Olivos, Lima, Perú",
    images: [p04_05, p04_02, p04_01, p04_04],
    videos: [video04],
    alt: "Terraza Atenas",
  },
];
