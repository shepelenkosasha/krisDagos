import React from "react";
import Carousel from 'react-bootstrap/lib/Carousel';
import { NavLink } from 'react-router-dom';

import Children from '../../img/Children.jpg';
import Family from '../../img/Family.jpg';
import Girls from '../../img/Girls.jpg';
import Wedding from '../../img/Wedding.jpg';
import Pregnancy from '../../img/Pregnancy.jpg';
import LoveStory from '../../img/LoveStory.jpg'

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <NavLink to = '/gallery/kids'>
            <img
              className="slide__img"
              src= { Children }
              alt="First slide"
            />
          </NavLink>
        </Carousel.Item>
        <Carousel.Item>
          <NavLink to = '/gallery/families'>
            <img
              className="slide__img"
              src= { Family }
              alt="Third slide"
            />
          </NavLink>
        </Carousel.Item>
        <Carousel.Item>
          <NavLink to = '/gallery/girls'>
            <img
              className="slide__img"
              src= { Girls }
              alt="Third slide"
            />
          </NavLink>
        </Carousel.Item>
        <Carousel.Item>
          <NavLink to = '/gallery/pregnancy'>
            <img
              className="slide__img"
              src= { Pregnancy }
              alt="Third slide"
            />
          </NavLink>
        </Carousel.Item>
        <Carousel.Item>
          <NavLink to = '/gallery/weddings'>
            <img
              className="slide__img"
              src= { Wedding }
              alt="Third slide"
            />
          </NavLink>
        </Carousel.Item>
        <Carousel.Item>
          <NavLink to = '/gallery/lovestories'>
            <img
              className="slide__img"
              src= { LoveStory }
              alt="Third slide"
            />
          </NavLink>
        </Carousel.Item>
      </Carousel>
    );
  }
}