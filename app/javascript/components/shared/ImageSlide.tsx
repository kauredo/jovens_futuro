import React, { useEffect, useRef, useState } from 'react';

const styles = require('./ImageSlide.module.scss');

interface Props {
	image: string;
}

export default function ImageSlide(props: Props) {
	const bar = useRef(null);
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		const width = bar.current.offsetWidth;
		bar.current.scrollLeft = bar.current.scrollLeft + width;
		setScroll(bar.current.scrollLeft);
	}, [scroll, setScroll]);

	return (
		<div
			className={styles.container}
			style={{ backgroundImage: `url(${props.image})` }}
		>
			<div className={styles.bar} ref={bar}>
				<h2 className={styles.text}>Jovens &o Futuro</h2>
				<h2 className={styles.text}>Jovens e Futuro?</h2>
				<h2 className={styles.text}>Jovens, o Futuro!</h2>
			</div>
		</div>
	);
}
