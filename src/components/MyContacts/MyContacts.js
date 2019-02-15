import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import SocialForm from './SocialForm';
import SocialForm1 from './SocialForm1';

class MyContacts extends Component {
	render(){
		return (
			
			<Row>
				<Col lg = {2} md = {0}></Col>		
				<Col lg = {4} md = {12} >
					<SocialForm />
				</Col>
				<Col lg = {4} md = {12} >
					<SocialForm1 />
				</Col>
			</Row>

		)
	}
}

export default MyContacts;