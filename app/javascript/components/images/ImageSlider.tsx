import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const styles = require('./ImageSlider.module.scss');

interface Props {
	photos: any;
}

export default function ImageSlider(props: Props) {
	const items = props.photos.map((image, index) => (
		<div key={index} className={styles.imageSection}>
			<img className={styles.image} src={image} />
		</div>
	));
	return (
		<div className={styles.parent}>
			<Carousel
				centerMode
				infiniteLoop
				showThumbs={false}
				showIndicators={false}
				useKeyboardArrows
			>
				{items}
			</Carousel>
		</div>
	);
}
