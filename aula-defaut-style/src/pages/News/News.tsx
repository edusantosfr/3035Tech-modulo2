import { Card } from "../../components/Card/Card"
import "./style.css"

export function News() {
    const news = [
        {
            id: 1,
            title: "Título da Notícia 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            id: 2,
            title: "Título da Notícia 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            id: 3,
            title: "Título da Notícia 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
    ]
    return (
        <div className="container">
            <h1 className="title">Noticias</h1>
            {news.map(item => (
                <Card key={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    )
}