import Card from "../card/Card";
import "./Main.css";

export interface IData {
  id: number;
  cover: string;
  title: string;
  description: string;
  url: string;
}

const data: IData[] = [
  {
    id: 1,
    cover: "/pw-animes-preview.png",
    title: "Purchaseway Animes",
    description:
      "A Plataforma de Animes da Purchaseway é um universo digital que cativa os fãs de animação japonesa, oferecendo uma ampla variedade de séries, filmes e conteúdo relacionado.",
    url: "https://purchaseway-animes-node.kevinsouza456.repl.co/",
  },
  {
    id: 2,
    cover: "/pw-animes-react-preview.png",
    title: "Purchaseway Animes React",
    description:
      "A Plataforma de Animes da Purchaseway é um universo digital que cativa os fãs de animação japonesa, oferecendo uma ampla variedade de séries, filmes e conteúdo relacionado, seu diferencial é ter sido construído com React Js.",
    url: "https://pw-animes-react.vercel.app/",
  },
  {
    id: 3,
    cover: "/pw-exports-preview.png",
    title: "Purchaseway Exports",
    description:
      "O site de carros esportivos da Purchaseway é um destino digital obrigatório para os amantes de automóveis e velocidade. Apresentando uma coleção abrangente de carros esportivos icônicos.",
    url: "https://kevinwillyan456.github.io/purchaseway-exports/",
  },
  {
    id: 4,
    cover: "/pw-music-preview.png",
    title: "Purchaseway Music",
    description:
      "O sistema de gerenciamento de músicas da Purchaseway é uma solução abrangente que capacita os amantes da música a organizar, explorar e desfrutar de suas coleções musicais de maneira única.",
    url: "https://apague-pw.kevinsouza456.repl.co/",
  },
];

function Main() {
  return (
    <main className="main">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </main>
  );
}

export default Main;
