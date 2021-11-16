import React from 'react';

const styles = require('./Links.module.scss');

export default function Links() {
	return (
		<>
			<a
				href='https://twitter.com/JovenseoFuturo?s=09'
				target='_blank'
				className={`${styles.sendEmail} ${styles.twitter}`}
			>
				<i className='fab fa-twitter'></i>
			</a>
			<a
				href='https://www.instagram.com/jovenseofuturo/'
				target='_blank'
				className={`${styles.sendEmail} ${styles.instagram}`}
			>
				<i className='fab fa-instagram'></i>
			</a>
			<a
				href='https://www.facebook.com/jovenseofuturo2021/'
				target='_blank'
				className={`${styles.sendEmail} ${styles.facebook}`}
			>
				<i className='fab fa-facebook'></i>
			</a>
			<a
				href='https://www.linkedin.com/company/blog-jovens-o-futuro/'
				target='_blank'
				className={`${styles.sendEmail} ${styles.linkedin}`}
			>
				<i className='fab fa-linkedin'></i>
			</a>
		</>
	);
}
