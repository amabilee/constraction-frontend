import React, { useState } from 'react'
import PainelIcon from '../../../assets/gestao/painel-icon.svg'
import './style.css'
import '../../style.css'

import Header from '../../../components/base/header'

function GestaoEstoqueEstoque() {
    const [headerButtonState, setHeaderButtonState] = useState({buttonPainel: "active-button", buttonTabela: "desactive-button"})

    const changeButtonState = (typeOfButton) => {
        console.log(typeOfButton)
        if (typeOfButton === "painel") {
            console.log(1)
            setHeaderButtonState({buttonPainel: "active-button", buttonTabela: "desactive-button"})
        } else {
            console.log(2)
            setHeaderButtonState({buttonPainel: "desactive-button", buttonTabela: "active-button"})
        }
    }

    return (
        <div className="page-container">
            <Header />
            <div className="page-content">
                <div className="page-content-box">
                    <div className="page-content-header">
                        <h1>Estoque</h1>
                        <button onClick={() => changeButtonState("painel")} className={headerButtonState.buttonPainel}>
                            <img src={PainelIcon} />Painel
                        </button>
                        <button onClick={() => changeButtonState("tabela")} className={headerButtonState.buttonTabela}>
                            <img src={PainelIcon} />Tabela
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GestaoEstoqueEstoque