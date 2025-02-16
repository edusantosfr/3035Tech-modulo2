import "./style.css"

type Props = {
    title: string;
    content: string;
}

export function Card ({ title, content }: Props) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    )
}