import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import About from '../img/about.jpg';
import styled from 'styled-components';
import animated, { fadeInDown, fadeInUp } from 'animate.css';

const ImgAbout = styled.img`
	border-radius: 50%;
	width: 400px;
	margin: 0 auto;
	margin-bottom: 100px;

	@media (max-width: 768px) {
		width: 300px;
		margin-top: 10px;
		margin-bottom: 0;
	}

	@media (max-width: 320px) {
		width: 200px;
		margin-top: 10px;
		margin-bottom: 0;
	}
`

class AboutMe extends Component {
	render(){
		return (
		
			<Row>		
				<Col lg = {5} md = {12}>
					<ImgAbout className = 'animated fadeInDown' src = { About } />
				</Col>
				<Col lg = {7} md = {12}>
						<p className = 'animated fadeInUp p__aboutMe'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illum architecto eius, praesentium ab quae soluta animi maiores reiciendis deleniti, molestias et alias fugiat nihil recusandae similique, iure facere eum nostrum! Reprehenderit quam praesentium totam, veniam consequuntur ad iure, voluptatibus blanditiis repudiandae, voluptates sit accusantium, magnam placeat eligendi architecto. Et harum quisquam, dolore aperiam accusamus sequi fugiat quas. Incidunt quae suscipit, perspiciatis at quaerat culpa mollitia accusamus harum veritatis voluptatem laborum, maiores consequatur accusantium ab nobis architecto aliquam asperiores magni sequi quasi fugit in. Voluptatum saepe nesciunt nobis, ipsum natus iusto tempore ducimus repellendus temporibus magnam aspernatur, deserunt, accusantium doloribus!
					</p>
				</Col>
			</Row>

		)
	}
}

export default AboutMe;