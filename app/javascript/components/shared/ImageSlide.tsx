import React from 'react';
import ImageSlider from '../images/ImageSlider';
import Logo from './Logo';

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
			<div className={styles.overlapLogo}>
				<Logo />
			</div>
			<div className={styles.bar}>
				<ImageSlider
					autoPlay
					notCenter
					simple
					divs={names.map((name, idx) => (
						<h2 key={`${idx}-${name}`} className={styles.text}>
							{name}
						</h2>
					))}
				/>
			</div>
		</div>
	);
}
