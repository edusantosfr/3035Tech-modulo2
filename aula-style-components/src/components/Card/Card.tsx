import { Container } from "./style"

type Props = {
    title: string;
    content: string;
}

export function Card ({ title, content }: Props) {
    return (
        <Container>
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </Container>
    )
}