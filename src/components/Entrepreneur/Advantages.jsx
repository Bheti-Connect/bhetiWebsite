import React from 'react';
import styled from 'styled-components'
import './styles.css';
import Team from '../../assets/images/pexels-rebrand-cities-1367272.jpg';
import Conviction from '../../assets/images/pexels-tima-miroshnichenko-5439407.jpg';
import GetMoney from '../../assets/images/pexels-edmond-8553867.jpg';


const Advantages = () => {
    return (
        <AdvantagesDiv>
            <main id='main'>
				<ul id="cards">
					<li className="card" id="card_1">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Convaincre un investisseur</h3>
								<p className='paragraph'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
							</div>
							<figure>
								<img className='image-team' src={Conviction} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_2">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Obtenir des financements</h3>
								<p className='paragraph'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
									nisi ut aliquip ex ea commodo consequat
								</p>
							</div>
							<figure>
								<img className='image-team' src={GetMoney} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_3">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Faire une levée de fonds</h3>
								<p className='paragraph'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Excepteur sint occaecat cupidatat non proident, 
									sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
							</div>
							<figure>
								<img className='image-team' src={Team} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_4">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Autant de choses qui vous paraissent insolubles?</h3>
								<p className='paragraph'>Avec nos outils prisés par les experts du monde des startups, vous allez bénéficiez de l’accompagnement de nos meilleurs conseillers.</p>
								<p className='paragraph'><a href="#top" class="btn btn--accent">Retour</a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description"/>
							</figure>
						</div>
					</li>
				</ul>
            </main>
        </AdvantagesDiv>
    )
}

export default Advantages;

const AdvantagesDiv = styled.div`

.paragraph{
    font-size: 18px ;
}

`