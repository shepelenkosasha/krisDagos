import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line 
import { flipInX } from 'animate.css';
import WOW from 'wowjs';

const SectionCounter = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;

	@media (max-width: 1024px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
`

const DivCounter = styled.div`
	text-align: center;
	background-color: #000;
	margin-right: 30px;

	&:last-child {
		margin-right: 0;
	}

	@media (max-width: 1024px) {
		margin-top: 20px;
		margin-right: 0;
	}
`

const Count = styled.span`
	color: #fff;
	font-size: 40px;
	font-family: 'Roboto', serif;

	@media (max-width: 1024px) {
		font-size: 30px;
	}
`

const Paragraph = styled.p`
	color: #fff;
	font-family: 'Roboto', serif;
`

export default class Counter extends Component {

	componentDidMount() {
		const wow = new WOW.WOW();
	    wow.init();
	}wow

	render() {
		return(
			<SectionCounter className = 'wow flipInX'>
				<DivCounter>
					<Count>68</Count>
					<Paragraph>Photoshoots</Paragraph>
				</DivCounter>
				<DivCounter>
					<Count>89</Count>
					<Paragraph>Happy clients</Paragraph>
				</DivCounter>
				<DivCounter>
					<Count>1320</Count>
					<Paragraph>Processed photos</Paragraph>
				</DivCounter>
				<DivCounter>
					<Count>57863</Count>
					<Paragraph>Photo taken</Paragraph>
				</DivCounter>
			</SectionCounter>
		)
	}
}