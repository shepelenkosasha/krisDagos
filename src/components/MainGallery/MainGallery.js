import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Weddings from '../../img/Wedding.jpg';
import Families from '../../img/Family.jpg';
import Couples from '../../img/slide-5.jpg';
import Girls from '../../img/Girls.jpg';
import Animals from '../../img/Children.jpg';

const Figure = styled.figure`
	background: #000;
	width: 400px;
	height: 400px;
	text-align: center;
	padding: 10px;
	border: 3px solid #fff;
	border-radius: 10px;
	margin-bottom: 20px;

	@media (max-width: 1199px) {
		width: 300px;
		height: 300px;
		margin-bottom: 10px;
	}
`

const Figcaption = styled.figcaption`
	color: #fff;
	margin-bottom: 5px;
`

const Section = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

const Img = styled.img`
	width: 340px;
	height: 340px;
	margin-top: 10px;
	margin-bottom: 5px;

	@media (max-width: 1199px) {
		width: 240px;
		height: 240px;
	}
`

class MainGallery extends Component {

	render(){

		return (
			
			<Row>		
				<Col lg = {12} >
					<Section>
						<Figure>
							<NavLink to = '/weddings'><Img src = { Weddings } /></NavLink>
							<Figcaption>Weddings</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/families'><Img src = { Families } /></NavLink>
							<Figcaption>Families</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/couples'><Img src = { Couples } /></NavLink>
							<Figcaption>Couples</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/girls'><Img src = { Girls } /></NavLink>
							<Figcaption>Girls</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/animals'><Img src = { Animals } /></NavLink>
							<Figcaption>Animals</Figcaption>
						</Figure>
					</Section>	
				</Col>
			</Row>

		)
	}
}

export default MainGallery;