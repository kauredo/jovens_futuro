import React from 'react';
import ImageSlider from '../images/ImageSlider';

const styles = require('./ImageSlide.module.scss');

interface Props {
	image: string;
}

export default function ImageSlide(props: Props) {
	const names = ['Jovens &o Futuro', 'Jovens e Futuro?', 'Jovens, o Futuro!'];

	return (
		<div
			className={styles.container}
			style={{ backgroundImage: `url(${props.image})` }}
		>
			<div className={styles.bar}>
				<ImageSlider
					autoPlay
					notCenter
					simple
					divs={names.map(name => (
						<h2 className={styles.text}>{name}</h2>
					))}
				/>
			</div>
		</div>
	);
}
