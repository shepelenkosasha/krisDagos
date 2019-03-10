import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_1 from '../../img/Lovestory/1.jpg';
import Slide_2 from '../../img/Lovestory/2.jpg';
import Slide_3 from '../../img/Lovestory/3.jpg';
import Slide_4 from '../../img/Lovestory/4.jpg';
import Slide_5 from '../../img/Lovestory/5.jpg';
import Slide_6 from '../../img/Lovestory/6.jpg';
import Slide_7 from '../../img/Lovestory/7.jpg';
import Slide_8 from '../../img/Lovestory/8.jpg';
import Slide_9 from '../../img/Lovestory/9.jpg';
import Slide_10 from '../../img/Lovestory/10.jpg';
import Slide_11 from '../../img/Lovestory/11.jpg';
import Slide_12 from '../../img/Lovestory/12.jpg';
import Slide_13 from '../../img/Lovestory/13.jpg';
import Slide_14 from '../../img/Lovestory/14.jpg';
import Slide_15 from '../../img/Lovestory/15.jpg';
import Slide_16 from '../../img/Lovestory/16.jpg';
import Slide_17 from '../../img/Lovestory/17.jpg';
import Slide_18 from '../../img/Lovestory/18.jpg';
import Slide_19 from '../../img/Lovestory/19.jpg';

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

export default class LoveStorie extends Component {
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
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}