import alvaroImg from "../assets/about/alvaro.png";
import aleImg from "../assets/about/ale.png";
import marImg from "../assets/about/mar.png";

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
      "Creo que el buen diseño nace de entender a las personas y la manera en que habitan los espacios. Cada proyecto es una oportunidad para crear ambientes con identidad, funcionales y coherentes, donde la estética y la experiencia conviven en equilibrio. El color y el diseño lumínico son herramientas clave en mi proceso creativo. Trabajo la luz natural y artificial de forma complementaria, incorporando tecnología para generar atmósferas adaptadas a distintos usos y momentos del día. La integración de la naturaleza y el paisajismo es parte esencial de nuestro lenguaje, creando espacios que se viven como experiencias.",
  },
  {
    name: "Alessandra Diaz",
    image: aleImg,
    role: "Arquitecta & Socia-Fundadora",
    description:
      "Concibo los espacios como extensiones de quienes los habitan, partiendo de la observación y el entendimiento profundo de sus necesidades para traducirlas en propuestas funcionales y con identidad. Creo en una arquitectura que equilibra estética, técnica y emoción, pero que también se atreve a salir de lo convencional. La funcionalidad y la versatilidad son fundamentales en mi manera de diseñar, creando espacios fluidos y adaptables que acompañan la vida cotidiana. Cada proyecto es un proceso colaborativo, donde escuchar es tan importante como diseñar.",
  },
  {
    name: "Marjorie Fribourg",
    image: marImg,
    role: "Arquitecta & Socia-Fundadora",
    description:
      "Creo en los espacios que se sienten vivos, equilibrados y naturalmente bellos, donde cada elemento guarda armonía: desde los colores hasta las texturas, los mosaicos o una planta que transforma el ambiente. Mi lenguaje de diseño parte de tonos neutros, atmósferas cálidas y materiales con carácter, a los que incorporo acentos de color y detalles que cuentan una historia. La naturaleza es una fuente constante de inspiración en mi trabajo y busco crear espacios que conecten con ella, elevando lo cotidiano y generando bienestar.",
  },
];
