import React from "react";
import Carousel from 'react-bootstrap/lib/Carousel';

import Children from '../../img/Children.jpg';
import Events from '../../img/Events.jpg';
import Family from '../../img/Family.jpg';
import Girls from '../../img/Girls.jpg';
import Wedding from '../../img/Wedding.jpg';
import Pregnancy from '../../img/Pregnancy.jpg';

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
          <img
            className="slide__img"
            src= { Children }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide__img"
            src= { Family }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide__img"
            src= { Events }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide__img"
            src= { Girls }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide__img"
            src= { Pregnancy }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide__img"
            src= { Wedding }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}