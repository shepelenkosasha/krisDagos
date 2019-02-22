import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_1 from '../../img/slide-1.jpg';
import Slide_2 from '../../img/slide-2.jpg';
import Slide_3 from '../../img/slide-3.jpg';
import Slide_4 from '../../img/slide-4.jpg';
import Slide_5 from '../../img/slide-5.jpg';
import Slide_6 from '../../img/slide-6.jpg';

const Img = styled.img`
	background-size: contain;
	height: 500px;
	margin-bottom: 30px;

	@media (max-width: 1199px) {
		height: 400px;
		margin-bottom: 20px;
	}
	
`
const Section = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;

	@media (max-width: 650px) {
		flex-direction: column;
		align-items: center;
	}
`

export default class Wedding extends Component {
	render(){
		return(

			<Row>		
				<Col lg = {12} >
					<Section>
						<Img src = { Slide_1 } />
						<Img src = { Slide_2 } />
						<Img src = { Slide_3 } />
						<Img src = { Slide_4 } />
						<Img src = { Slide_5 } />
						<Img src = { Slide_6 } />
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}