import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
// eslint-disable-next-line 
import { fadeInLeftBig, fadeInRightBig, fadeInUpBig } from 'animate.css';
import WOW from 'wowjs';

import Slide_1 from '../../img/slide-1.jpg';
import Slide_2 from '../../img/slide-2.jpg';
import Slide_3 from '../../img/slide-3.jpg';
import Slide_4 from '../../img/slide-4.jpg';
import Slide_5 from '../../img/slide-5.jpg';
import Slide_6 from '../../img/slide-6.jpg';
import Slide_7 from '../../img/slide-7.jpg';
import Slide_8 from '../../img/slide-8.jpg';
import Slide_9 from '../../img/slide-9.jpg';
import Slide_10 from '../../img/slide-10.jpg';
import Slide_11 from '../../img/slide-11.jpg';
import Slide_12 from '../../img/slide-12.jpg';
import Slide_13 from '../../img/slide-13.jpg';
import Slide_14 from '../../img/slide-14.jpg';
import Slide_15 from '../../img/slide-15.jpg';
import Slide_16 from '../../img/slide-16.jpg';
import Slide_17 from '../../img/slide-17.jpg';
import Slide_18 from '../../img/slide-18.jpg';
import Slide_19 from '../../img/slide-19.jpg';
import Slide_20 from '../../img/slide-20.jpg';
import Slide_21 from '../../img/slide-21.jpg';

const GalleryDiv = styled.div`
	display: flex;
	margin-bottom: 20px;
	justify-content: center;
	align-items: center;

	@media (max-width: 767px) {
		flex-direction: column;
	}

	@media (max-width: 1024px) {
		flex-wrap: wrap;
	}
`

const GalleryImg = styled.img`
	height: 600px;
	-webkit-background-size: contain;
	background-size: contain;

	&.img__gallery__right {
	  margin-right: 20px;
	}

	@media (max-width: 1024px) {
		& {
			max-width: 760px;
			height: 500px;
		}
		&.img__gallery__alb {
			max-width: 685px;
      		height: 450px;
		}

		&.img__gallery__right {
	      margin-right: 0;
	      margin-bottom: 20px;
	    }

		&.img__gallery__child {
	      margin-right: 20px;
	      margin-bottom: 20px;
	    }

	    &.img__gallery__last-child {
	    	margin-right: 20px;
	    	margin-bottom: 0;
	    }		
	}

	@media (max-width: 767px) {
		& {
			max-width: 360px;
			height: 500px;
		}
		&.img__gallery__alb {
			max-width: 335px;
      		height: 220px;
		}

		&.img__gallery__right {
	      margin-right: 0;
	      margin-bottom: 20px;
	    }

	    &.img__gallery__last-child {
	    	margin-right: 0;
	    }
	}

	@media (max-width: 320px) {
		& {
			max-width: 315px;
			height: 400px;
		}
		&.img__gallery__alb {
			max-width: 265px;
      		height: 185px;
		}

		&.img__gallery__right {
	      margin-right: 0;
	      margin-bottom: 20px;
	    }

	    &.img__gallery__last-child {
	    	margin-right: 0;
	    }
	}

`

class MainGallery extends Component {

	componentDidMount() {
	    const wow = new WOW.WOW();
	    wow.init();
	  }wow

	render(){

		return (
			
			<Row>		
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInLeftBig'>
						<GalleryImg className = 'img__gallery__right img__gallery__child' src = { Slide_1 } />
						<GalleryImg className = 'img__gallery__right' src = { Slide_2 } />
						<GalleryImg src = { Slide_3 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInRightBig'>
						<GalleryImg className = 'img__gallery__alb' src = { Slide_18 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInLeftBig'>
						<GalleryImg className = 'img__gallery__right img__gallery__child' src = { Slide_4 } />
						<GalleryImg className = 'img__gallery__right' src = { Slide_5 } />
						<GalleryImg src = { Slide_6 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInRightBig'>
						<GalleryImg className = 'img__gallery__alb' src = { Slide_17 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInLeftBig'>
						<GalleryImg className = 'img__gallery__right img__gallery__child' src = { Slide_7 } />
						<GalleryImg className = 'img__gallery__right' src = { Slide_8 } />
						<GalleryImg src = { Slide_9 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInRightBig'>
						<GalleryImg className = 'img__gallery__alb' src = { Slide_19 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInLeftBig'>
						<GalleryImg className = 'img__gallery__right img__gallery__child' src = { Slide_10 } />
						<GalleryImg className = 'img__gallery__right' src = { Slide_11 } />
						<GalleryImg src = { Slide_12 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInRightBig'>
						<GalleryImg className = 'img__gallery__alb' src = { Slide_21 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInLeftBig'>
						<GalleryImg className = 'img__gallery__right img__gallery__child' src = { Slide_13 } />
						<GalleryImg className = 'img__gallery__right' src = { Slide_14 } />
						<GalleryImg src = { Slide_15 } />
					</GalleryDiv>
				</Col>
				<Col lg = {12} >
					<GalleryDiv className = 'wow fadeInUpBig'>
						<GalleryImg className = 'img__gallery__right img__gallery__last-child' src = { Slide_16 } />
						<GalleryImg className = 'img__gallery__last-child' src = { Slide_20 } />
					</GalleryDiv>
				</Col>
			</Row>

		)
	}
}

export default MainGallery;