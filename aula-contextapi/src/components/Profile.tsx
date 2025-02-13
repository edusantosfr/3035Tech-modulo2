import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export function Profile() {
     
    const { name, setName } = useContext(UserContext)

    return (
        <div>
            <h2>Profile</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>Nome: {name}</p>
        </div>
    )
}