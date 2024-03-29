import React from 'react';
import Links from './Links';

const styles = require('./Footer.module.scss');

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.middle}>Criado por: Jovens &O Futuro 2021</div>
				<div className={styles.left}>
					<a
						href='mailto: jovenseofuturo2021@gmail.com'
						className={styles.sendEmail}
					>
						jovenseofuturo2021@gmail.com
					</a>
				</div>
				<div className={styles.right}>
					Encontre-nos: <Links />
				</div>
			</div>
		</footer>
	);
}
