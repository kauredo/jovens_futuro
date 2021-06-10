import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const styles = require('./ImageSlider.module.scss');

interface Props {
	photos?: any;
	divs?: any;
	autoPlay?: boolean;
	notCenter?: boolean;
	simple?: boolean;
}

export default function ImageSlider(props: Props) {
	const items = props.photos
		? props.photos.map((image, index) => (
				<div key={index} className={styles.imageSection}>
					<img className={styles.image} src={image} />
				</div>
		  ))
		: props.divs;

	const autoPlay = props.autoPlay || false;
	const centerMode = props.notCenter || false;
	const simple = props.simple || false;
	return (
		<div className={simple ? styles.simple : styles.parent}>
			<Carousel
				centerMode={!centerMode}
				infiniteLoop
				showThumbs={false}
				showIndicators={false}
				showArrows={!simple}
				showStatus={!simple}
				useKeyboardArrows
				autoPlay={autoPlay}
				interval={simple ? 3000 : 4000}
			>
				{items}
			</Carousel>
		</div>
	);
}
