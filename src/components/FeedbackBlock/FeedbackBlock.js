import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Img from './StyleImg';
import P from './StyleP';
import H3 from './StyleH3';
import Container from './StyleContainer';

export default class FeedbackBlock extends Component {
	render(){
		return(
			<>
				<Row className="flex">			
					<Col lg = {4} className = 'rigth__text__align order__2'>
						<H3>Lorem ipsum dolor sit amet</H3>
						<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</P>
					</Col>
					<Col lg = {4} offset = {4} className="order__1">
						<Container>
							<Img />
						</Container>
					</Col>
				</Row>
				<Row>				
					<Col lg = {4}>
					</Col>
					<Col lg = {4}>
						<Container>
							<Img />
						</Container>
					</Col>
					<Col lg = {4}>
						<H3>Lorem ipsum dolor sit amet</H3>
						<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</P>
					</Col>
				</Row>
				<Row className="flex">			
					<Col lg = {4} className = 'rigth__text__align order__2'>
						<H3>Lorem ipsum dolor sit amet</H3>
						<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</P>
					</Col>
					<Col lg = {4} offset = {4} className="order__1">
						<Container>
							<Img />
						</Container>
					</Col>
				</Row>
				<Row>				
					<Col lg = {4}>
					</Col>
					<Col lg = {4}>
						<Container>
							<Img />
						</Container>
					</Col>
					<Col lg = {4}>
						<H3>Lorem ipsum dolor sit amet</H3>
						<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</P>
					</Col>
				</Row>
				<Row className="flex">			
					<Col lg = {4} className = 'rigth__text__align order__2'>
						<H3>Lorem ipsum dolor sit amet</H3>
						<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</P>
					</Col>
					<Col lg = {4} offset = {4} className="order__1">
						<Container>
							<Img />
						</Container>
					</Col>
				</Row>
				<Row>				
					<Col lg = {4}>
					</Col>
					<Col lg = {4}>
						<Container>
							<Img />
						</Container>
					</Col>
					<Col lg = {4}>
						<H3>Lorem ipsum dolor sit amet</H3>
						<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</P>
					</Col>
				</Row>
			</>

		)
	}
}