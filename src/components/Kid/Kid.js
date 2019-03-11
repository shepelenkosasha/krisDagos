import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_1 from '../../img/Kids/1.jpg';
import Slide_2 from '../../img/Kids/2.jpg';
import Slide_3 from '../../img/Kids/3.jpg';
import Slide_4 from '../../img/Kids/4.jpg';
import Slide_5 from '../../img/Kids/5.jpg';
import Slide_6 from '../../img/Kids/6.jpg';
import Slide_7 from '../../img/Kids/7.jpg';
import Slide_8 from '../../img/Kids/8.jpg';
import Slide_9 from '../../img/Kids/9.jpg';
import Slide_10 from '../../img/Kids/10.jpg';
import Slide_11 from '../../img/Kids/11.jpg';
import Slide_12 from '../../img/Kids/12.jpg';
import Slide_13 from '../../img/Kids/13.jpg';
import Slide_14 from '../../img/Kids/14.jpg';
import Slide_15 from '../../img/Kids/15.jpg';
import Slide_16 from '../../img/Kids/16.jpg';

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

	@media (max-width: 650px) {
		flex-direction: column;
		align-items: center;
	}
`

export default class Kid extends Component {
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
						<Img src = { Slide_16 } />
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}