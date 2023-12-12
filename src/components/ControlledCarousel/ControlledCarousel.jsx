import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './ControlledCarousel.module.scss'


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carouselBox}>
      <Carousel.Item className={styles.carouselItem} >
        <img src="/keyboard-banner.webp" alt="asd" className={styles.carouselImg} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem} >
      <img src="/smartphone-banner.jpg" alt="asd" className={styles.carouselImg} />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem} >
      <img src="/tech-banner.jpeg" alt="asd" className={styles.carouselImg} />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;