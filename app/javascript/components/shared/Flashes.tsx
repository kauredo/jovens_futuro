import React, { useEffect, useState } from 'react';

const styles = require('./Flashes.module.scss');

interface Props {
	type: string;
	message: string;
}

export default function Flashes(props: Props) {
	const [visible, setVisible] = useState(false);
	const { type, message } = props;
	const style = `${styles.flash} ${styles[type]}`;

	useEffect(() => {
		setVisible(true);
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
