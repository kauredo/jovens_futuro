import React from 'react';

const styles = require('./Footer.module.scss');

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.middle}>Criado por Jovens &o Futuro 2021</div>
				<div className={styles.left}>
					<a
						href='mailto: jovenseofuturo2021@gmail.com'
						className={styles.sendEmail}
					>
						jovenseofuturo2021@gmail.com
					</a>
				</div>
				<div className={styles.right}>
					Encontre-nos:{' '}
					<a
						href='https://twitter.com/JovensOFuturo1?s=20'
						target='_blank'
						className={styles.sendEmail}
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='https://www.instagram.com/jovenseofuturo/'
						target='_blank'
						className={styles.sendEmail}
					>
						<i className='fab fa-instagram'></i>
					</a>
				</div>
			</div>
		</footer>
	);
}
