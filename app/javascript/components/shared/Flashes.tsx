import React, { useEffect, useState } from 'react';

const styles = require('./Flashes.module.scss');

interface Props {
	type: string;
	message: string;
}

export default function Flashes(props: Props) {
	const [visible, setVisible] = useState(false);
	const { type, message } = props;
	const style = `${styles.alert} ${styles[type]}`;
	const svg =
		type === 'notice' ? (
			<svg
				className={styles.alert__icon}
				width='64'
				height='64'
				viewBox='0 0 64 64'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					className={styles.alert__icon__path}
					cx='32'
					cy='32'
					r='30.5'
					stroke='currentColor'
				></circle>
				<path
					className={`${styles.alert__icon__path} ${styles.alert__icon__path__type}`}
					d='M15 33.5L25 43.5L48.5 20'
					stroke='currentColor'
				></path>
			</svg>
		) : (
			<svg
				className={styles.alert__icon}
				width='64'
				height='64'
				viewBox='0 0 64 64'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					className={styles.alert__icon__path}
					cx='32'
					cy='32'
					r='30.5'
					stroke='currentColor'
					strokeWidth='5'
				></circle>
				<path
					className={`${styles.alert__icon__path} ${styles.alert__icon__path__type}`}
					d='M20 44L44 20'
					stroke='currentColor'
				></path>
				<path
					className={`${styles.alert__icon__path} ${styles.alert__icon__path__type}`}
					d='M44 44L20 20'
					stroke='currentColor'
				></path>
			</svg>
		);

	useEffect(() => {
		setVisible(true);
		// setTimeout(() => {
		// 	setVisible(false);
		// }, 3000);
	}, []);

	return visible ? (
		<div className={style} onClick={() => setVisible(false)}>
			{svg}
			<div className={styles.alert__message}>{message}</div>

			<div className={styles.alert__close}>&times;</div>
		</div>
	) : (
		''
	);
}
