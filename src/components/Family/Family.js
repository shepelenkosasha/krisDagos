import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_17 from '../../img/slide-17.jpg';
import Slide_18 from '../../img/slide-18.jpg';
import Slide_21 from '../../img/slide-21.jpg';
import Slide_19 from '../../img/slide-19.jpg';
import Slide_20 from '../../img/slide-20.jpg';

const Img = styled.img`
	background-size: contain;
	height: 500px;
	margin-bottom: 30px;

	@media (max-width: 1199px) {
		height: 400px;
		margin-bottom: 20px;
	}
	@media (max-width: 650px) {
		max-width: 300px;
		height: 200px;
		margin-bottom: 10px;
	}
	
`
const Section = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

export default class Family extends Component {
	render(){
		return(

			<Row>		
				<Col lg = {12} >
					<Section>
						<Img src = { Slide_17 } />
						<Img src = { Slide_18 } />
						<Img src = { Slide_19 } />
						<Img src = { Slide_20 } />
						<Img src = { Slide_21 } />
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}