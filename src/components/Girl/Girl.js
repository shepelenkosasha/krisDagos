import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_7 from '../../img/slide-7.jpg';
import Slide_8 from '../../img/slide-8.jpg';
import Slide_9 from '../../img/slide-9.jpg';
import Slide_10 from '../../img/slide-10.jpg';
import Slide_11 from '../../img/slide-11.jpg';
import Slide_12 from '../../img/slide-12.jpg';
import Slide_13 from '../../img/slide-13.jpg';
import Slide_14 from '../../img/slide-14.jpg';
import Slide_15 from '../../img/slide-15.jpg';
import Slide_16 from '../../img/slide-16.jpg';

const Img = styled.img`
	background-size: contain;
	height: 500px;
	margin-bottom: 30px;

	@media (max-width: 1199px) {
		height: 400px;
		margin-bottom: 20px;
	}
	@media (max-width: 650px) {
		height: 300px;
		margin-bottom: 10px;
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

export default class Girl extends Component {
	render(){
		return(

			<Row>		
				<Col lg = {12} >
					<Section>
						<Img src = { Slide_7 } />
						<Img src = { Slide_8 } />
						<Img src = { Slide_9 } />
						<Img src = { Slide_10 } />
						<Img src = { Slide_11 } />
						<Img src = { Slide_12 } />
						<Img src = { Slide_13 } />
						<Img src = { Slide_14 } />
						<Img src = { Slide_15 } />
						<Img src = { Slide_16 } />
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}