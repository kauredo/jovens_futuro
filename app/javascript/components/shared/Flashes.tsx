import React, { useEffect, useState } from 'react';

import styles from './Flashes.module.scss';

interface Props {
	type: string;
	message: string;
}

export default function Flashes(props: Props) {
	const [visible, setVisible] = useState(true);
	const { type, message } = props;
	const style = `${styles.flash} ${styles[`${type}`]}`;

	useEffect(() => {
		setTimeout(() => {
			setVisible(false);
		}, 3000);
	}, []);

	return visible ? (
		<div className={style} onClick={() => setVisible(false)}>
			{message}
		</div>
	) : (
		''
	);
}
