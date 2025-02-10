import React from "react";

type Props = {
    name?: string;
}

export function Welcome ({name = 'Usuário'}: Props) {
    return <h1>Bem Vindo, {name}!</h1>
}