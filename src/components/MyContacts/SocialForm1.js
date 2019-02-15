import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line 
import { fadeInRightBig } from 'animate.css';
import WOW from 'wowjs';import InstagramLogo from '../../img/instagram.png';
import FacebookLogo from '../../img/facebook-logo.png';

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
		margin-bottom: 20px;
		align-items: center;
	}

	@media (max-width: 330px) {
		width: 290px;
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

	@media (max-width: 1199px) {
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

export default class SocialForm1 extends Component {

	componentDidMount() {
	    const wow = new WOW.WOW();
	    wow.init();
	}wow

	render(){
		return(
			<>
				<ContactSection className = "wow fadeInRightBig">
					<img className = 'social__fb' src = { FacebookLogo } alt = 'FacebookLogo' />
					<div>
						<LinkContact href = "//www.facebook.com/kris.dagos.1" target = "_blank">Kris Dagos</LinkContact>
					</div>
				</ContactSection>
				<ContactSection className = "wow fadeInRightBig">
					<img className = 'social__inst' src = { InstagramLogo } alt = 'InstagramLogo' />
					<div>
						<LinkContact href = "//www.instagram.com/dagos_photographer" target = "_blank">dagos_photographer</LinkContact>
					</div>
				</ContactSection>
			</>
		)
	}
}