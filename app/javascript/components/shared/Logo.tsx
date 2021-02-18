import React, { useRef, useState } from 'react';

import styles from './Logo.module.scss';

export default function NavBar() {
	return (
		<div className={styles.logo}>
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
