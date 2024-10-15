import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ComentarioFeed({nome, comentario}) {

    return(
        <div className="feed">
                <img src="/assets/images/viktor.png" alt="viktor" />
                <div className="infos">
                    <h1>{nome}</h1>
                    <p>{comentario}</p>
                </div> 
        </div>
    )
}