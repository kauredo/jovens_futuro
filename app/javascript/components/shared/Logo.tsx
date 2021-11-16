import React, { useRef, useState } from 'react';

const styles = require('./Logo.module.scss');

interface Props {
	small?: boolean;
}

export default function NavBar(props: Props) {
	return (
		<div className={props.small ? styles.smallLogo : styles.logo}>
			<p className={styles.jovens}>Jovens</p>
			<div className={styles.ando}>
				<p>&</p>
				<p>o</p>
			</div>
			<div className={styles.line} />
			<p className={styles.futuro}>Futuro</p>
		</div>
	);
}
