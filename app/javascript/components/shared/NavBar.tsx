import React, { useRef, useState } from 'react';

const styles = require('./NavBar.module.scss');

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);
	const narrowLinksRef = useRef(null);
	const [selectedLink, setSelectedLink] = useState(0);
	const translate = (elem, y) => {
		const top = parseInt(css(elem, 'top'), 10);
		const dy = top - y;
		let i = 1;
		const count = 20;
		const delay = 20;

		const loop = () => {
			if (i >= count) {
				return;
			}

			i += 1;
			elem.style.top = (top - (dy * i) / count).toFixed(0) + 'px';
			setTimeout(() => loop(), delay);
		};

		loop();
	};

	const css = (element, property) => {
		return window.getComputedStyle(element, null).getPropertyValue(property);
	};

	const burgerToggle = () => {
		let linksEl = narrowLinksRef.current;
		if (navbar) {
			translate(linksEl, -172);
			setNavbar(false);
		} else {
			translate(linksEl, 0);
			setNavbar(true);
		}
	};

	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.navWide}>
					<div className={styles.container}>
						<div className={styles.links}>
							<a
								href='#'
								className={`${styles.link} ${
									selectedLink === 0 && styles.selected
								}`}
							>
								Sobre
							</a>
							<a
								href='#'
								className={`${styles.link} ${
									selectedLink === 1 && styles.selected
								}`}
							>
								Artigos
							</a>
							<a
								href='#'
								className={`${styles.link} ${
									selectedLink === 2 && styles.selected
								}`}
							>
								Colaboradores
							</a>
							<a
								href='#'
								className={`${styles.link} ${
									selectedLink === 3 && styles.selected
								}`}
							>
								Contacto
							</a>
						</div>
					</div>
				</div>
				<div className={styles.navNarrow}>
					<div className={styles.container}>
						<a href='/' className={styles.brand}>
							{/* <img src='/assets/logo.jpeg' alt='logo' className='nav-logo' /> */}
						</a>
						<i className='fa fa-bars fa-2x' onClick={burgerToggle}></i>
					</div>
					<div className={styles.narrowLinks} ref={narrowLinksRef}>
						<a
							href='#'
							className={`${styles.link} ${
								selectedLink === 0 && styles.selected
							}`}
							onClick={burgerToggle}
						>
							Sobre
						</a>
						<a
							href='#'
							className={`${styles.link} ${
								selectedLink === 1 && styles.selected
							}`}
							onClick={burgerToggle}
						>
							Artigos
						</a>
						<a
							href='#'
							className={`${styles.link} ${
								selectedLink === 2 && styles.selected
							}`}
							onClick={burgerToggle}
						>
							Colaboradores
						</a>
						<a
							href='#'
							className={`${styles.link} ${
								selectedLink === 3 && styles.selected
							}`}
							onClick={burgerToggle}
						>
							Contacto
						</a>
					</div>
				</div>
			</nav>
		</>
	);
}
