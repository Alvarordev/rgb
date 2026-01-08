import alvaroImg from '../assets/about/alvaro.png';
import aleImg from '../assets/about/ale.png';
import marImg from '../assets/about/mar.png';

export interface TeamMember {
  name: string;
  image: ImageMetadata;
  role: string;
  description: string;
}

export const team: TeamMember[] = [
  {
    name: "Alvaro Rojas",
    image: alvaroImg,
    role: "Arquitecto & Socio-Fundador",
    description:
      "Graduado con una licenciatura en Arquitectura por la Universidad Peruana de Ciencias Aplicadas (UPC), Álvaro comenzó su carrera en un estudio de diseño de interiores de alta gama. Escaló hasta ser diseñador senior, produciendo diseños que le valieron premios nacionales e internacionales. Su experiencia combina un gran conocimiento y pasión en el sector de diseño interior residencial y comercial de lujo.",
  },
  {
    name: "Alessandra Diaz",
    image: aleImg,
    role: "Arquitecta & Socia-Fundadora",
    description:
      "Tras obtener su título de Arquitectura por la Universidad Peruana de Ciencias Aplicadas (UPC), Katherine se unió a un prestigioso estudio de diseño de lujo. Ascendió a diseñadora principal, liderando proyectos reconocidos con importantes galardones de diseño global. Katherine aporta una experiencia vasta, enfocada en la estética y el conocimiento técnico profundo en el diseño de interiores premium residencial y comercial.",
  },
  {
    name: "Marjorie Fribourg",
    image: marImg,
    role: "Arquitecta & Socia-Fundadora",
    description:
      "Después de licenciarse como Arquitecta en la Universidad Peruana de Ciencias Aplicadas (UPC), Marjorie se integró a una reconocida firma de diseño interior premium. Creció hasta convertirse en diseñadora senior, donde sus propuestas creativas ganaron múltiples premios de diseño a nivel nacional e internacional. Marjorie posee una experiencia completa, con dominio experto en proyectos de diseño de interiores en los segmentos comercial y residencial de lujo.",
  },
];
