import React from 'react'

const CardsMedia = () => {



  return (

    <CardItem onClick={handleSelect} theme={theme}>
        <CardHeader>
        <img src={source} alt='project'/>
        </CardHeader>

        <CardBody>
        <h3>{item.nom}</h3>
        <ul>
        <li>{item.stade}</li>
        <li>Automobile</li>
        </ul>
        <div className='boxPriceCountry'>
        <p className='price'>{item.financement ? (currencyEuro.format(parseInt(item.financement))) : ("ne pas mentionné")}</p>
        <p className='country'>{item.siege}</p>
        </div>
        
        </CardBody>
    </CardItem>

  )
}

export default CardsMedia