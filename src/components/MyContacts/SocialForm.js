import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line 
import animated, { fadeInLeftBig } from 'animate.css';
import Viber from '../../img/phone-logo.png';
import GmailIcon from '../../img/Gmail-icon.png';

const ContactSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	height: 250px;
	margin-top: 20px;
	margin-bottom: 30px;
	border: 3px solid #fff;
    padding: 20px;
    border-radius: 20px;

	@media (max-width: 1199px) {
		width: 330px;
		height: 230px;
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 20px;
		align-items: center;
	}

	@media (max-width: 330px) {
		width: 290px;
		margin-top: 20px;
		margin-bottom: 10px;
	}
`

const LinkContact = styled.a`
	display: block;
	text-align: center;
	font-size: 14px;
	text-decoration: none;
	background-color: #000;
    color: #fff;
    padding: 5px 20px;
    border-radius: 20px;
    border: 2px solid #fff;
    font-weight: bold;
    text-transform: uppercase;

	@media (max-width: 768px) {
		font-size: 14px;
	}

	@media (max-width: 320px) {
		font-size: 12px;
	}

	&:visited {
		color: #fff;
		text-decoration: none;
	}

	&:active {
		color: #fff;
		text-decoration: none;
	}

	&:focus {
		color: #fff;
		text-decoration: none;
	}	

	&:hover {
		background-color: #fff;
	    color: #000;
	    border: 2px solid #fff;
		text-decoration: none;
	}
`

export default class SocialForm extends Component {
	render(){
		return(
			<>
				<ContactSection className = "animated fadeInLeftBig">
					<img className = 'social__gmail' src = { GmailIcon } alt = 'GmailIcon' />
					<div>
						<LinkContact href = "mailto:krisdagos@yahoo.com.ua">krisdagos@yahoo.com.ua
						</LinkContact>
					</div>	
				</ContactSection>
				<ContactSection className = "animated fadeInLeftBig">
					<img className = 'social__viber' src = { Viber } alt = 'Viber' />
					<div>
						<LinkContact href = "tel:+393397885472">+393397885472</LinkContact>
					</div>	
				</ContactSection>
			</>
		)
	}
}
