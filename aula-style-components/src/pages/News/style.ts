import styled from "styled-components";

type TitleProps = {
    fontSize?: number
}

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
`

export const Title = styled.h1<TitleProps>`
    font-size: ${(props) => `${props.fontSize}px`};
    font-family: "Arial", sans-serif;
`

export const SmallTitle = styled(Title) `
    font-size: 16px;
    background: #000;
`