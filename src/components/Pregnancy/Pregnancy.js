import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_1 from '../../img/Pregnancy/1.jpg';
import Slide_2 from '../../img/Pregnancy/2.jpg';
import Slide_3 from '../../img/Pregnancy/3.jpg';
import Slide_4 from '../../img/Pregnancy/4.jpg';
import Slide_5 from '../../img/Pregnancy/5.jpg';
import Slide_6 from '../../img/Pregnancy/6.jpg';
import Slide_7 from '../../img/Pregnancy/7.jpg';
import Slide_8 from '../../img/Pregnancy/8.jpg';
import Slide_9 from '../../img/Pregnancy/9.jpg';
import Slide_10 from '../../img/Pregnancy/10.jpg';
import Slide_11 from '../../img/Pregnancy/11.jpg';
import Slide_12 from '../../img/Pregnancy/12.jpg';
import Slide_13 from '../../img/Pregnancy/13.jpg';
import Slide_14 from '../../img/Pregnancy/14.jpg';
import Slide_15 from '../../img/Pregnancy/15.jpg';

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

export default class Pregnancy extends Component {
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
						<Img src = { Slide_7 } />
						<Img src = { Slide_8 } />
						<Img src = { Slide_9 } />
						<Img src = { Slide_10 } />
						<Img src = { Slide_11 } />
						<Img src = { Slide_12 } />
						<Img src = { Slide_13 } />
						<Img src = { Slide_14 } />
						<Img src = { Slide_15 } />
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}