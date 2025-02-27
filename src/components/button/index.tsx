'use client'

import { useState } from "react"

export function Button() {

    const [nome, setNome] = useState("Yung Rhino")

    function handleChangeName() {
        setNome("Eduardo Junior")
    }

    return(
        <div>
            <button onClick={handleChangeName}>Alterar Nome</button><br/>
            <h3>Nome: {nome}</h3>
        </div>
    )
}