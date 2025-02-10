import React from "react";

type Props = {
    name: string;
    age: number;
    email: string;
    city: string;
    profesion: string;
    avatar: string;
}

export function User({ name, age, email, city, profesion, avatar }: Props) {
    return (
        <div>
            <h1>Informações do Usuário: </h1>
            <img src="{avatar}" alt="avatar" width={150}/>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <p>Profesion: {profesion}</p>
        </div>
    )
}