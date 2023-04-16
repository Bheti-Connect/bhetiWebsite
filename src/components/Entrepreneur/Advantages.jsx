import React from 'react';
import styled from 'styled-components'
import './styles.css';
import Team from '../../assets/images/pexels-rebrand-cities-1367272.jpg';
import GetMoney from '../../assets/images/pexels-edmond-8553867.jpg';
import {FaHandsHelping, FaShareSquare, FaRoad} from 'react-icons/fa'
import {GiHumanTarget} from 'react-icons/gi'
import Help from '../../assets/images/pexels-brett-sayles-5368598.jpg'
import { SiSymantec } from 'react-icons/si'
import {MdAddBusiness} from 'react-icons/md'
import Button from '../Button';
import { Link } from 'react-router-dom';


const Advantages = () => {
    return (
        <AdvantagesDiv>
            <main id='main'>
				<ul id="cards">
					<li className="card" id="card_1">
						<div className="card__content">
							<div>
								<h3 className='card_title offre'>
									Offre impact à 29,99€/mois HT ou 329,99 € annuel (économisez 29,99€ avec l’offre annuelle)
								</h3>
								<p className='paragraph'>
									Économisez du temps et de l'argent tout en maximisant vos chances de succès !
								</p>
								<div className='need-pitch'>
										<Link 
										to={'/decouvrir-bheti-connect'}
										>
											<Button 
													name={'Découvrir Bheti Connect'}
											/>
										</Link>
									</div>
							</div>
							
							<figure>
								{/* <img className='image-team' src={Conviction} alt='Image-Femmes'/> */}
								<div className='advantage'>
									<div className='offer'>
										<FaHandsHelping className='offer-icon' />
										<div className='paragraph offer-detail'>Identifiez les aides publiques et privées</div> 
									</div>
									<div className='offer'>
										<GiHumanTarget className='offer-icon' />
										<div className='paragraph offer-detail'>Identifiez les investisseurs pertinents </div>
									</div>
									<div className='offer'>
										<SiSymantec className='offer-icon' />
										<div className='paragraph offer-detail'>Visibilité de votre projet après certification</div>
									</div>
									<div className='offer'>
										<FaShareSquare className='offer-icon' />
										<div className='paragraph offer-detail'>Partagez simplement votre projet aux investisseurs </div>
									</div>
									<div className='offer '>
										<MdAddBusiness className='offer-icon'/>
										<div className='paragraph offer-detail '>Annoncez vos besoins et trouvez des partenaires business pertinents</div>
									</div>
									<div className='offer'>
										<FaRoad className='offer-icon' />
										<div className='paragraph offer-detail '>Accédez à des guides et recommandations exclusifs </div>
									</div>
								</div>
							</figure>
						</div>
					</li>
					<li className="card" id="card_2">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Votre Pitch deck</h3>
								<p className='paragraph'>
								Votre pitch deck est un élément essentiel de votre processus de levée de fonds. 
								C'est souvent le premier point de contact entre un entrepreneur et un investisseur. 
								Il doit donc être efficace et concis.
								</p>
								<p className='paragraph'>
								Chez Bheti Connect, Nous examinons des centaines de présentations d'investissement chaque année et mettons à profit notre expertise pour vous aider à élaborer ou à réviser votre présentation d'investissement. 
								Avec notre aide, votre pitch deck sera clair, concis et convaincant pour les investisseurs.
								</p>
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
							<figure>
								<img className='image-team' src={GetMoney} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_3">
						<div className="card__content">
							<div>
								<h3 className='card_title'>Votre Prévisionnel financier</h3>
								<p className='paragraph'>
								Le prévisionnel financier (ou Business Plan) est utilisé comme outil essentiel pour la gestion efficace d'une entreprise mais aussi comme support pour convaincre les investisseurs et guider leur prise de décision. 
								</p>
								<p className='paragraph'>
									Votre BP doit décrire de manière détaillée et soignée vos objectifs commerciaux, stratégies, et doit répondre aux questions de vos investisseurs. 
								</p>
								<p className='paragraph'>
									Notre expertise nous permet de répondre aux exigences des financeurs et de vous accompagner efficacement dans la construction de votre prévisionnel financier
								</p>
								<div className='need-container'>
									<div className='need-previsionnel'>
										<Button 
												name={'J’ai besoin d’un prévisionnel Financier'}
										/>
									</div>
								</div>
							</div>
							<figure>
								<img className='image-team' src={Team} alt='Image-Femmes'/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_4">
						<div className="card__content">
							<div className='content-div'>
								<div className='text-container'>
									<h3 className='card_title'>Appui et Conseil </h3>
									<p className='paragraph'>Besoin de conseils pour approcher des investisseurs, défendre votre projet ou négocier avec les investisseurs ? 
										Besoin  d’un accompagnement sur mesure pour la construction ou la révision de votre dossier de financement ?
									</p>
									<p className='paragraph'>
										Nous proposons de vous accompagner dans toutes les étapes de votre levée de fonds. 
									</p>
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
							<figure>
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