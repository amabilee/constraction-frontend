import React, { useState } from 'react'
import ConstractionLogo from '../../../public/constraction.svg'
import Background from '../../../public/background.svg'
import "./style.css";

import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const enviarCredenciais = () => {
        if (user && pwd) {
            if (user === 'admin' && pwd === 'admin') {
                navigate('/gestao-estoque/estoque');
            }
        }
    }


    return (
        <div className="page-container">
            <div className="login-page">
                <div className="login-main-left">
                    <img src={Background} />
                </div>
                <div className="login-main-right">
                    <img src={ConstractionLogo} alt='Constraction Logo Image' />
                    <div className="input-container form__group field">
                        <input
                            type="input"
                            className="form__field"
                            placeholder="Usuário"
                            name="usuario"
                            id='usuario'
                            required
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <label htmlFor="usuario" className="form__label">Usuário</label>
                    </div>
                    <div className="input-container form__group field">
                        <input
                            type="password"
                            className="form__field"
                            placeholder="Senha"
                            name="senha"
                            id='senha'
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                        <label htmlFor="senha" className="form__label">Senha</label>
                    </div>
                    <button onClick={enviarCredenciais}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Login
