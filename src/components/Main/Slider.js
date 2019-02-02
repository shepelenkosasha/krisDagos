import React from "react";
import Carousel from 'react-bootstrap/lib/Carousel';

import Slide_8 from '../../img/slide-8.jpg';
import Slide_21 from '../../img/slide-21.jpg';
import Slide_15 from '../../img/slide-15.jpg';

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
            src= { Slide_8 }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide__img"
            src= { Slide_21 }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide__img"
            src= { Slide_15 }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}