import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line 
import animated, { fadeInRightBig } from 'animate.css';
import { P } from './SocialForm';

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
		width: 340px;
		height: 230px;
		margin: 0 auto;
		margin-bottom: 20px;
		align-items: center;
	}

	@media (max-width: 330px) {
		width: 300px;
		margin-bottom: 10px;
	}
`

const LinkContact = styled.a`
	display: block;
	width: 124px;
	text-align: center;
	font-size: 14px;
	text-decoration: none;
	background-color: #fff;
    color: #000;
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
		color: #000;
		text-decoration: none;
	}

	&:active {
		color: #000;
		text-decoration: none;
	}

	&:focus {
		color: #000;
		text-decoration: none;
	}	

	&:hover {
		background-color: #000;
	    color: #fff;
	    border: 2px solid #fff;
		text-decoration: none;
	}
`

export default class SocialForm1 extends Component {
	render(){
		return(
			<>
				<ContactSection className = "animated fadeInRightBig">
					<div>
						<LinkContact href = "//www.facebook.com/kris.dagos.1" target = "_blank">Facebook</LinkContact>
					</div>
					<P>kris.dagos.1</P>
				</ContactSection>
				<ContactSection className = "animated fadeInRightBig">
					<div>
						<LinkContact href = "//www.instagram.com/dagos_photographer" target = "_blank">Instagram</LinkContact>
					</div>
					<P>dagos_photographer</P>
				</ContactSection>
			</>
		)
	}
}