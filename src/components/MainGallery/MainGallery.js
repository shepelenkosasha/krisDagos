import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Weddings from '../../img/Wedding.jpg';
import Families from '../../img/Family.jpg';
import Couples from '../../img/Wedding.jpg';
import Girls from '../../img/Girls.jpg';
import Kids from '../../img/Children.jpg';

const Figure = styled.figure`
	background: #000;
	width: 400px;
	height: 400px;
	text-align: center;
	padding: 10px;
	border: 3px solid #fff;
	border-radius: 10px;
	margin-right: 30px;
	margin-bottom: 30px;
	
	&:nth-child(2n),
	&:nth-child(4n)
	 {
		margin-right: 0;
	}

	@media (max-width: 1199px) {
		width: 300px;
		height: 300px;
		margin-right: 10px;
		margin-bottom: 10px;

		&:nth-child(2n),
		&:nth-child(4n)
		 {
			margin-right: 0;
		}
	}
`

const Figcaption = styled.figcaption`
	color: #fff;
	margin-bottom: 5px;
`

const Section = styled.section`
	display: flex;
	justify-content: center;
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
							<NavLink to = '/gallery/weddings'><Img src = { Weddings } /></NavLink>
							<Figcaption>Weddings</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/gallery/families'><Img src = { Families } /></NavLink>
							<Figcaption>Families</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/gallery/couples'><Img src = { Couples } /></NavLink>
							<Figcaption>Love stories</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/gallery/girls'><Img src = { Girls } /></NavLink>
							<Figcaption>Girls</Figcaption>
						</Figure>
						<Figure>
							<NavLink to = '/gallery/kids'><Img src = { Kids } /></NavLink>
							<Figcaption>Kids</Figcaption>
						</Figure>
					</Section>	
				</Col>
			</Row>

		)
	}
}

export default MainGallery;