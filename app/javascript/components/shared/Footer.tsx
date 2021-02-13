import React from 'react';

const styles = require('./Footer.module.scss');

export default function NavBar() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.left}>
					<a
						href='mailto: jovenseofuturo2021@gmail.com'
						className={styles.sendEmail}
					>
						jovenseofuturo2021@gmail.com
					</a>
				</div>
				<div className={styles.right}>Created by Jovens &o Futuro 2021</div>
			</div>
		</footer>
	);
}
