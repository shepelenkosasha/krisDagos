import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_1 from '../../img/Wedding/1.jpg';
import Slide_2 from '../../img/Wedding/2.jpg';
import Slide_3 from '../../img/Wedding/3.jpg';
import Slide_4 from '../../img/Wedding/4.jpg';
import Slide_5 from '../../img/Wedding/5.jpg';
import Slide_6 from '../../img/Wedding/6.jpg';
import Slide_7 from '../../img/Wedding/7.jpg';
import Slide_8 from '../../img/Wedding/8.jpg';
import Slide_9 from '../../img/Wedding/9.jpg';
import Slide_10 from '../../img/Wedding/10.jpg';
import Slide_11 from '../../img/Wedding/11.jpg';
import Slide_12 from '../../img/Wedding/12.jpg';
import Slide_13 from '../../img/Wedding/13.jpg';
import Slide_14 from '../../img/Wedding/14.jpg';
import Slide_15 from '../../img/Wedding/15.jpg';
import Slide_16 from '../../img/Wedding/16.jpg';
import Slide_17 from '../../img/Wedding/17.jpg';
import Slide_18 from '../../img/Wedding/18.jpg';
import Slide_19 from '../../img/Wedding/19.jpg';
import Slide_20 from '../../img/Wedding/20.jpg';
import Slide_21 from '../../img/Wedding/21.jpg';
import Slide_22 from '../../img/Wedding/22.jpg';
import Slide_23 from '../../img/Wedding/23.jpg';
import Slide_24 from '../../img/Wedding/24.jpg';
import Slide_25 from '../../img/Wedding/25.jpg';
import Slide_26 from '../../img/Wedding/26.jpg';
import Slide_27 from '../../img/Wedding/27.jpg';
import Slide_28 from '../../img/Wedding/28.jpg';
import Slide_29 from '../../img/Wedding/29.jpg';

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
						<Img src = { Slide_17 } />
						<Img src = { Slide_18 } />
						<Img src = { Slide_19 } />
						<Img src = { Slide_20 } />
						<Img src = { Slide_21 } />
						<Img src = { Slide_22 } />
						<Img src = { Slide_23 } />
						<Img src = { Slide_24 } />
						<Img src = { Slide_25 } />
						<Img src = { Slide_26 } />
						<Img src = { Slide_27 } />
						<Img src = { Slide_28 } />
						<Img src = { Slide_29 } />
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}