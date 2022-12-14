import React from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error_div'>
            <div class="noise"></div>
            <div class="overlay"></div>
            <div class="terminal">
            <h1>Page Introuvable <span class="errorcode">Erreur 404</span></h1>
            <p class="output">La page que vous recherchez a peut-être été retirée, son nom a été modifié ou elle est temporairement indisponible.</p>
            <p class="output">Essayer plutôt cette <a className='error_link_' href="#1">page</a> ou <a className='error_link_' href="#2"> retourner à l'accueil</a>.</p>
            <p class="output">Bonne chance.</p>
            </div>
        </div>
    )
}

export default ErrorPage