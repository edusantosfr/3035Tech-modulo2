import { useEffect } from "react";

import { getLeagues } from "../services/leagues.service";

import { Card } from "../components/Card";

export function Content () {
    const getLeaguesList = async () => {
        const response = await getLeagues()
        console.log(response.data)
    }

    useEffect(() => {
        getLeaguesList()
    })

    return (
        <main className="max-sm:px-4 py-14 px-48">
            <header className="mb-8">
                <h1 className="font-bold text-4xl">⚽︎ Football App</h1>
            </header>
            <section className="w-full">
                <h3 className="font-light text-xl">Leagues</h3>
                <hr className="my-4"/>

                <div className="grid max-sm:grid-cols-3 grid-cols-5 gap-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />   
                </div>
            </section>
        </main>
    )
}