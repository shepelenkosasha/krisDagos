import React, { Component } from 'react';
import '../App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo_dagos.png';

const List = styled.ul`
	display: flex;
	margin-bottom: 30px;
	align-items: center;
	justify-content: center;
	padding: 0;
	height = 50px;
`

const Heading = styled.img`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 30px;
`

class Header extends Component {
	render(){
		return (

			<Row>
				<Col lg = {12}>
					<Heading src = { Logo } />
				</Col>
				<Col lg = {12}>
					<nav>
						<List>
							<NavLink className = "nav__link" exact to = '/'>Home</NavLink>
							<NavLink className = "nav__link" exact to = '/about'>About</NavLink>
							<NavLink className = "nav__link" to = '/gallery'>Gallery</NavLink>
							<NavLink className = "nav__link" to = '/feedback'>Feedback</NavLink>
							<NavLink className = "nav__link" to = '/contacts'>Contacts</NavLink>
						</List>
					</nav>
				</Col>
			</Row>

		)
	}
}

export default Header;