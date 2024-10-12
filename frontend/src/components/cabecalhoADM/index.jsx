import './index.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CabecalhoADM() {

    const [nome, setNome] = useState('')
    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem('adm-logado')) {
            navigate('/telalogin');
        }
        else {
            const admLogado = localStorage.getItem('adm-logado');
            setNome(admLogado);
        }

    }, [])

    function sair() {
        localStorage.removeItem('adm-logado');
        navigate('/telalogin');
    }

    return (
        <div className="cabecalhoo">
            <h1>Seja bem-vindo, <span>{nome}</span></h1>
            
            <div className="direitinha">
                <button onClick={sair}>Sair</button>
                <img src="/assets/images/semfoto.png" alt="" />
            </div>
        </div>
    )
}