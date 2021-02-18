import React, { useEffect, useRef, useState } from 'react';

import styles from './ImageSlide.module.scss';

interface Props {
	image: string;
}

export default function ImageSlide(props: Props) {
	const bar = useRef(null);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (scroll === 2) {
				bar.current.scrollLeft = 0;
				setScroll(0);
			} else {
				const width = bar.current.offsetWidth;
				bar.current.scrollLeft = bar.current.scrollLeft + width;
				setScroll(scroll + 1);
			}
		}, 3000);
		return () => clearInterval(interval);
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
