import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Slide_1 from '../../img/Girls/1.jpg';
import Slide_2 from '../../img/Girls/2.jpg';
import Slide_3 from '../../img/Girls/3.jpg';
import Slide_4 from '../../img/Girls/4.jpg';
import Slide_5 from '../../img/Girls/5.jpg';
import Slide_6 from '../../img/Girls/6.jpg';
import Slide_7 from '../../img/Girls/7.jpg';
import Slide_8 from '../../img/Girls/8.jpg';
import Slide_9 from '../../img/Girls/9.jpg';
import Slide_10 from '../../img/Girls/10.jpg';
import Slide_11 from '../../img/Girls/11.jpg';
import Slide_12 from '../../img/Girls/12.jpg';
import Slide_13 from '../../img/Girls/13.jpg';
import Slide_14 from '../../img/Girls/14.jpg';
import Slide_15 from '../../img/Girls/15.jpg';
import Slide_16 from '../../img/Girls/16.jpg';
import Slide_17 from '../../img/Girls/17.jpg';
import Slide_18 from '../../img/Girls/18.jpg';
import Slide_19 from '../../img/Girls/19.jpg';
import Slide_20 from '../../img/Girls/20.jpg';
import Slide_21 from '../../img/Girls/21.jpg';
import Slide_22 from '../../img/Girls/22.jpg';
import Slide_23 from '../../img/Girls/23.jpg';
import Slide_24 from '../../img/Girls/24.jpg';
import Slide_25 from '../../img/Girls/25.jpg';
import Slide_26 from '../../img/Girls/26.jpg';
import Slide_27 from '../../img/Girls/27.jpg';
import Slide_28 from '../../img/Girls/28.jpg';
import Slide_29 from '../../img/Girls/29.jpg';
import Slide_30 from '../../img/Girls/30.jpg';
import Slide_31 from '../../img/Girls/31.jpg';
import Slide_32 from '../../img/Girls/32.jpg';
import Slide_33 from '../../img/Girls/33.jpg';
import Slide_34 from '../../img/Girls/34.jpg';
import Slide_35 from '../../img/Girls/35.jpg';
import Slide_36 from '../../img/Girls/36.jpg';
import Slide_37 from '../../img/Girls/37.jpg';
import Slide_38 from '../../img/Girls/38.jpg';
import Slide_39 from '../../img/Girls/39.jpg';
import Slide_40 from '../../img/Girls/40.jpg';
import Slide_41 from '../../img/Girls/41.jpg';
import Slide_42 from '../../img/Girls/42.jpg';
import Slide_43 from '../../img/Girls/43.jpg';
import Slide_44 from '../../img/Girls/44.jpg';
import Slide_45 from '../../img/Girls/45.jpg';
import Slide_46 from '../../img/Girls/46.jpg';
import Slide_47 from '../../img/Girls/47.jpg';
import Slide_48 from '../../img/Girls/48.jpg';
import Slide_49 from '../../img/Girls/49.jpg';

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
						<Img src = { Slide_30 } />
						<Img src = { Slide_29 } />
						<Img src = { Slide_27 } />
						<Img src = { Slide_28 } />
						<Img src = { Slide_31 } />
						<Img src = { Slide_32 } />
						<Img src = { Slide_33 } />
						<Img src = { Slide_34 } />
						<Img src = { Slide_35 } />
						<Img src = { Slide_36 } />
						<Img src = { Slide_37 } />
						<Img src = { Slide_38 } />
						<Img src = { Slide_39 } />
						<Img src = { Slide_40 } />
						<Img src = { Slide_41 } />
						<Img src = { Slide_42 } />
						<Img src = { Slide_43 } />
						<Img src = { Slide_44 } />
						<Img src = { Slide_45 } />
						<Img src = { Slide_46 } />
						<Img src = { Slide_47 } />
						<Img src = { Slide_48 } />
						<Img src = { Slide_49 } />
					</Section>
					<NavLink className = 'backLink' to = '/gallery'>Back</NavLink>
				</Col>
			</Row>

		)
	}
}