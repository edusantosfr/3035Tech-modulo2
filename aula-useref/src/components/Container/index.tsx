import exp from "constants";
import { useState, useEffect, useRef } from "react";

export function Container() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const numberRef = useRef(0);
    const buttunRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        //setNumber((prevNumber) => prevNumber + 10)
        numberRef.current = Math.random()
    })

    useEffect(() => {
        console.log(buttunRef.current?.click())
    }, [])

    return (
        <div>
            <button ref = {buttunRef} onClick={() => setCount((prevCount) => prevCount + 1)}>
                Adiciona +
            </button>
            <p>Contador: {count}</p>

            <p>Number: {number}</p>

            <p>Number Ref: {numberRef.current}</p>
        </div>
    )
}
