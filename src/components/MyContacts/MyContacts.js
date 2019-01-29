import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MyForm from './Form';
import SocialForm from './SocialForm';

class MyContacts extends Component {
	render(){
		return (
			
			<Row>		
				<Col lg = {6} md = {12} >
					<SocialForm />
				</Col>
				<Col lg = {6} md = {12} >
					<MyForm />
				</Col>
			</Row>

		)
	}
}

export default MyContacts;