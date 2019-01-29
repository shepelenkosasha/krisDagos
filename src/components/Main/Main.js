import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Slider from './Slider';
import Counter from './Counter';

class Main extends Component {
	render(){
		return (
			
			<Row>		
				<Col lg = {12} >
					<Slider />
				</Col>
				<Col lg = {12} >
					<Counter />
				</Col>
			</Row>

		)
	}
}

export default Main;