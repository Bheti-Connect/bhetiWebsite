import React from 'react';
import styled from 'styled-components'
import './styles.css';

import Team from '../../assets/images/pexels-rebrand-cities-1367272.jpg';
import GetMoney from '../../assets/images/pexels-edmond-8553867.jpg';
import HappyTeam from '../../assets/images/pexels-antoni-shkraba-5466285.jpg';
// import {FaHandsHelping, FaShareSquare, FaRoad} from 'react-icons/fa'
// import {GiHumanTarget} from 'react-icons/gi'
import Help from '../../assets/images/pexels-brett-sayles-5368598.jpg'
// import { SiSymantec } from 'react-icons/si'
// import {MdAddBusiness} from 'react-icons/md'
import Button from '../Button';
import { Link } from 'react-router-dom';


const Advantages = () => {
    return (
        <AdvantagesDiv>
            <main id='main'>
				<ul id="cards">
					<li className="card" id="card_1">
						<div className="card__content">
							<div className='upper_container'>
								<h3 className='card_title offre'>
									Économisez du temps et de l'argent tout en maximisant vos chances de succès avec Bheti App !		
								</h3>
								
								<div className='need-pitch'>
										<Link 
										to={'/decouvrir-bheti-connect'}
										>
											<Button 
													name={'Demande d’accès'}
											/>
										</Link>
									</div>
							</div>
							
							<figure className='image__figure'>
								<img className='image-team' src={HappyTeam} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_2">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Votre Pitch deck</h3>
									<dl className='pitch-deck-elements'>
										<dt>3 choses importantes à savoir sur le Pitch Dek :</dt>
										<dd> Incontournable pour une levée de fond</dd>
										<dd>Incontournable pour une levée de fond</dd>
										<dd>Doit être efficace et concis</dd>
									</dl>
								<dl className='pitch-deck-elements'>
									<dt>Chez BHC, nous élaborons/révisons votre présentation pour un résultat 3C :</dt>
									<dd> Clair</dd>
									<dd> Concis</dd>
									<dd> Convaincant</dd>
								</dl>
								<div className='need-container'>
									<div className='need-pitch'>
										<Link
											to={'/decouvrir-bheti-connect'}
										>
											<Button 
													name={'J’ai besoin d’un pitch'}
											/>
										</Link>
									</div>
								</div>
							</div>
							<figure className='image__figure'>
								<img className='image-team' src={GetMoney} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_3">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Votre Prévisionnel financier</h3>
								<dl>
									<dt>A quoi sert le Prévisionnel financier ?</dt>
									<dd>Avoir une gestion efficace de l’entreprise</dd>
									<dd> Permet aux investisseurs d’épouser votre vision</dd>
									
								</dl>
								<dt>
									BHC dispose d'une expertise solide pour vous aider à élaborer un plan d'affaires détaillé et soigné afin de répondre efficacement aux exigences des financeurs.
								</dt>
								<div className='need-container'>
									<div className='need-previsionnel'>
										<Button 
												name={'J’ai besoin d’un prévisionnel Financier'}
										/>
									</div>
								</div>
							</div>
							<figure className='image__figure'>
								<img className='image-team' src={Team} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_4">
						<div className="card__content">
							<div>
								<div className='text-container'>
									<h3 className='card_title'>Appui et Conseil </h3>
									<div className='paragraph__container'>
										<dt className='appui__dt'>
											Nous vous proposons un accompagnement sur mesure dans toutes les étapes de votre levée de fonds :
										</dt>
										<dt className='appui-conseil'>
											<dd> Définition des critères de financement</dd>
											<dd> Conception de la documentation</dd>
											<dd> Préparation des réunions avec les investisseurs</dd>
											<dd> Préparation à la négociation</dd>
											<dd> Closing</dd>
										</dt>
										
									</div>
								</div>
								<div className='need-container'>
									<div className='help'>
										<Link
											to={'/decouvrir-bheti-connect'}
										>
											<Button 
													name={'Contactez-nous'}
											/>
										</Link>
									</div>
								</div>
								{/* <p className='paragraph'><a href="#top" class="btn btn--accent">👆🏼 Haut de page</a></p> */}
							</div>
							<figure className='image__figure'>
								<img className='image-team' src={Help} alt='Image-Aide'/>
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