import React, { useRef, useState } from 'react';

const styles = require('./Footer.module.scss');

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);
	const narrowLinksRef = useRef(null);
	const [selectedLink, setSelectedLink] = useState(0);

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
