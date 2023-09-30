import { IData } from "../../Main";
import "./Card.css";

function Card({ data }: { data: IData }) {
    return (
        <article className="card">
            <div className="cover">
                <img src={data.cover} alt={data.title} />
            </div>
            <div className="title">{data.title}</div>
            <div className="description">{data.description}</div>
            <a href={data.url} target="_blank" className="btn-visit">
                Visitar
            </a>
        </article>
    );
}

export default Card;
