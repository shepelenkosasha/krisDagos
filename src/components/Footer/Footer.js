import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const List = styled.ul`
	display: flex;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	padding-left: 0;
	padding-top: 50px;
	padding-bottom: 50px;
`

const Facebook = styled.a`
	display: inline-block;
	margin-right: 15px;
	width: 35px;
	height: 35px;
	border: 3px solid #ffffff;
	border-radius: 50%;
	background-color: #000;
	background-image: url(../img/social-sprite.png);
	background-position: -44px -43px;

	&:hover {
		background-color: #fff;
		border-color: #fff;
		background-position: -43px -4px;
	}
`

const Instagram = styled.a`
	display: inline-block;
	width: 35px;
	height: 35px;
	border: 3px solid #ffffff;
	border-radius: 50%;
	background-color: #000;
	background-image: url(../img/inst.png);
	background-position: -1px -2px;

	&:hover {
		background-color: #fff;
		border-color: #fff;
		background-image: url(../img/hoverInst.png);
		background-position: center center;
		background-repeat: no-repeat;
	}
`

export default class Footer extends Component {
	render() {
		return (

			<Row>
				<Col lg = {12}>
					<List>
						<Facebook href = "//www.facebook.com/kris.dagos.1" target = "_blank">
						</Facebook>
						<Instagram href = "//www.instagram.com/dagos_photographer" target = "_blank">
						</Instagram>
					</List>
				</Col>
			</Row>

		)
	}
}