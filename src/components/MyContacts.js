import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MyForm from './Form';
import styled from 'styled-components';
import animated, { fadeInLeftBig } from 'animate.css';

const ContactSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	height: 392px;
	margin-top: 20px;
	margin-left: 225px;
	margin-bottom: 100px;
	border: 3px solid #fff;
    padding: 20px;
    border-radius: 20px;

	@media (max-width: 1024px) {
		width: 340px;
		height: 230px;
		margin: 0 auto;
		margin-bottom: 20px;
		align-items: center;
	}

	@media (max-width: 320px) {
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

class MyContacts extends Component {
	render(){
		return (
			
			<Row>		
				<Col lg = {6} md = {12} >
					<ContactSection className = "animated fadeInLeftBig">
						<div>
							<LinkContact href = "krisdagos@yahoo.com.ua" target = "_blank">Email</LinkContact>
						</div>
						<div>
							<LinkContact href = "tel:+393397885472" target = "_blank">Phone</LinkContact>
						</div>
						<div>
							<LinkContact href = "//www.facebook.com/kris.dagos.1" target = "_blank">Facebook</LinkContact>
						</div>
						<div>
							<LinkContact href = "//www.instagram.com/dagos_photographer" target = "_blank">Instagram</LinkContact>
						</div>
					</ContactSection>
				</Col>
				<Col lg = {6} md = {12} >
					<MyForm />
				</Col>
			</Row>

		)
	}
}

export default MyContacts;