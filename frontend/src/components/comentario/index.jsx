import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ComentarioFeed({nome, comentario, foto}) {

    return(
        <div className="feed">
                <img style={{width: "75px", height: "75px", borderRadius: "50%", boxShadow: "0px 0px 10px #00000050"}}  src={`/imgs/${foto != null ? foto : '5800.687645408709.jpg'}`} alt="viktor" />
                <div className="infos">
                    <h1>{nome}</h1>
                    <p>{comentario}</p>
                </div> 
        </div>
    )
}