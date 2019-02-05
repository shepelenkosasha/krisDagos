import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import About from '../../img/about.jpg';
import styled from 'styled-components';
// eslint-disable-next-line 
import animated, { fadeInDown, fadeInUp } from 'animate.css';

const ImgAbout = styled.img`
	border-radius: 50%;
	width: 400px;
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 100px;

	@media (max-width: 1199px) {
		display: block;
		width: 300px;
		margin-top: 20px;
		margin-bottom: 0;
	}

	@media (max-width: 320px) {
		display: block;
		width: 200px;
		margin-top: 10px;
		margin-bottom: 0;
	}
`

const Paragraph = styled.p`
	margin-top: 75px;
	color: #fff;
	font-size: 14px;
	font-weight: 300;
	line-height: 24px;

	@media (max-width: 1199px) {
	    margin-top: 10px;
	    text-align: center;
	  }

	@media (max-width: 320px) {
		margin-top: 10px;
		text-align: center;
	}
`

class AboutMe extends Component {
	render(){
		return (
		
			<Row>		
				<Col lg = {5} md = {12}>
					<ImgAbout className = 'animated fadeInDown' src = { About } />
				</Col>
				<Col lg = {7} md = {12}>
						<Paragraph className = 'animated fadeInUp'>
						My name is Kristina and I love to make photos because it inspires me so much.
						I feel your emotions, feelings, moments of joy and  capture it. <br/><br/> 
						I offer myself as a wedding, fashion, family, art, love story, events photographer in almost any part of Italy where happy people are.<br/><br/>  
						I am a professional photographer since 2013, 6 years experience and hundreds of satisfied customers.<br/><br/> 
						Write me and we will create the best photos of your life.<br/><br/>  
						Best regards,<br/>  
						Kristina
					</Paragraph>
				</Col>
			</Row>

		)
	}
}

export default AboutMe;