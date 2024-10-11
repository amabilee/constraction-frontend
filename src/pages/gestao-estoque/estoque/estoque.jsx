import React from 'react'
import PainelIcon from '../../../assets/gestao/painel-icon.svg'
import './style.css'
import '../../style.css'

import Header from '../../../components/base/header'

function GestaoEstoqueEstoque() {
    return (
        <div className="page-container">
            <Header/>
            <div className="page-content">
                <div className="page-content-box">
                    <div className="page-content-header">
                        <h1>Estoque</h1>
                        <button><img src={PainelIcon} />Painel</button>
                        {/* <button><img src={PainelIcon} />Tabela</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GestaoEstoqueEstoque