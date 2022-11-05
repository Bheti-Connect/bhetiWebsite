import React from 'react'

const CardMediaModal = () => {




  return (
    <Container>
        <div id="open-modal" className="modal-window">
            <div>
                <div onClick={handleModal} className="modal-close"><FontAwesomeIcon icon={faXmark} size="lg"/></div>
                <Header>
                  <p>Projet {select.nom}</p>
                  <ul>
                    <li><span className='text-head'>Secteurs</span> : N'est pas mentionné</li>
                    <li><span className='text-head'>Besoin de financement</span> : {select.financement ? (currencyEuro.format(parseInt(select.financement))) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Siège</span> : {select.siege ? (select.siege) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Stage</span> : {select.stade ? (select.stade) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Type</span> : {select.type ? (select.type) : ("N'est pas mentionné")}</li>
                  </ul>
                </Header>

                <Body theme={theme}>

                <div className='project-detail'>
                  <div>
                  <img src={source} alt='project'/>
                  </div>

                  <div className='detail'>
                    <h3>Projet {select.nom}</h3>
                    <p className='flouter'>{select.description}</p>
                  </div>
                </div>

                {/* Pourquoi maintenant ?  */}
                <div className='item-detail'>
                  <h3>✅ Pourquoi maintenant ?</h3>
                  <p className='flouter'>{select.description ? (select.description) : ("")}</p>
                </div>

                {/* Problèmes  */}
                <div className='item-detail'>
                  <h3>🚨 Problèmes</h3>
                  <p className='flouter'>{select.problemes ? (select.problemes) : ("")}</p>
                </div>

                {/* Solutions  */}
                <div className='item-detail'>
                  <h3>☝ Solutions</h3>
                  <p className='flouter'>{select.solutions ? (select.solutions) : ("")}</p>
                </div>

                {/* Equipe  */}
                <div className='item-detail'>
                  <h3>👬 Equipe</h3>
                  <p className='flouter'>{select.equipe ? (select.equipe) : ("")}</p>
                </div>

                {/* Business Modal  */}
                <div className='item-detail'>
                  <h3>💰 Business Modal</h3>
                  <p className='flouter'>{select.business_model ? (select.business_model) : ("")}</p>
                </div>

                {/* KPI  */}
                <div className='item-detail'>
                <h3>📊 KPI</h3>
                <p className='flouter'>{select.kpi ? (select.kpi) : ("")}</p>
                </div>

                </Body>
            </div>
        </div>
    </Container>
  )
}

export default CardMediaModal