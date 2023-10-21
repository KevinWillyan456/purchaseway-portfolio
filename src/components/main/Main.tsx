import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Search from "./components/search/Search";
import "./Main.css";
import { useMainProjectsRef } from "../../hooks/useMainProjectsRef";

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
        cover: "/pw-manga-preview.png",
        title: "Purchaseway Manga",
        description:
            "A Plataforma de Mangás da Purchaseway é um universo digital que cativa os fãs de mangás, oferecendo uma ampla variedade de conteúdo.",
        url: "https://purchaseway-manga.vercel.app/",
    },
    {
        id: 5,
        cover: "/pw-music-preview.png",
        title: "Purchaseway Music",
        description:
            "O sistema de gerenciamento de músicas da Purchaseway é uma solução abrangente que capacita os amantes da música a organizar, explorar e desfrutar de suas coleções musicais de maneira única.",
        url: "https://apague-pw.kevinsouza456.repl.co/",
    },
    {
        id: 6,
        cover: "/pw-music-game-preview.png",
        title: "Pw Music Game",
        description:
            "O Jogo Rítmico estilo Guitar Hero criado pela Purchaseway traz uma experiência inovadora nessa temática, jogue com as teclas D, F, J e K",
        url: "https://kevinwillyan456.github.io/pw-music-game/",
    },
];

function Main() {
    const [projects, setProjects] = useState<IData[]>([...data]);
    const [projectSearch, setProjectSearch] = useState("");

    const mainProjectsRef = useMainProjectsRef();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectSearch(e.target.value);
    };

    const clearSearch = () => {
        setProjectSearch("");
    };

    useEffect(() => {
        const dataSerched = data.filter((project) => {
            if (projectSearch === " ") {
                return project;
            }
            return project.title
                .toLowerCase()
                .includes(projectSearch.toLowerCase());
        });

        setProjects(dataSerched);
    }, [projectSearch]);

    return (
        <main className="main" ref={mainProjectsRef}>
            <div className="project-title">
                <div className="title">
                    Descubra nossos Projetos em Produção
                </div>
                <div className="title-sub">Conheça eles agora mesmo!</div>
            </div>
            <Search
                projectSearch={projectSearch}
                handleSearch={handleSearch}
                clearSearch={clearSearch}
            />
            <main className="project-container">
                {projects.length > 0 ? (
                    projects.map((item) => <Card key={item.id} data={item} />)
                ) : (
                    <div className="no-results-title">Sem resultados</div>
                )}
            </main>
        </main>
    );
}

export default Main;
