import React, { useEffect, useRef, useState } from 'react';

const styles = require('./NavBar.module.scss');

interface Props {
	signedIn: boolean;
	backoffice?: boolean;
	admin?: boolean;
}

// function useOutsideAlerter(ref, isOpen, setNavbar) {
// 	useEffect(() => {
// 		/**
// 		 * Alert if clicked on outside of element
// 		 */
// 		function handleClickOutside(event) {
// 			if (ref.current && !ref.current.contains(event.target) && isOpen) {
// 				console.log(isOpen);
// 				console.log(setNavbar);
// 				setNavbar(true);
// 			}
// 		}

// 		// Bind the event listener
// 		document.addEventListener('mousedown', handleClickOutside);
// 		return () => {
// 			// Unbind the event listener on clean up
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, [ref, isOpen]);
// }

export default function NavBar(props: Props) {
	const [navbar, setNavbar] = useState(false);
	const [selectedLink, setSelectedLink] = useState(window.location.pathname);
	const narrowLinksRef = useRef(null);
	const wrapperRef = useRef(null);
	const backoffice = props.backoffice;
	const admin = props.admin;

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
			translate(linksEl, -linksEl.offsetHeight);
			setNavbar(false);
		} else {
			translate(linksEl, 0);
			setNavbar(true);
		}
	};

	useEffect(() => {
		let linksEl = narrowLinksRef.current;
		linksEl.style.top = -linksEl.offsetHeight + 'px';
	}, []);

	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target) &&
				navbar
			) {
				burgerToggle();
			}
		}

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef, navbar]);

	return (
		<>
			<nav ref={wrapperRef} className={styles.navbar}>
				<div className={styles.navWide}>
					<div className={styles.container}>
						<div className={styles.links}>
							{backoffice ? (
								<>
									<a
										href='/'
										className={`${styles.link} ${styles.backofficeLink} ${
											selectedLink === '/' && styles.selected
										}`}
									>
										Home
									</a>
									<a
										href='/backoffice'
										className={`${styles.link} ${styles.backofficeLink} ${
											selectedLink === '/backoffice' && styles.selected
										}`}
									>
										Meus Artigos
									</a>
									{admin && (
										<>
											<a
												href='/backoffice/admin/artigos'
												className={`${styles.link} ${styles.backofficeLink} ${
													selectedLink === '/backoffice/admin/artigos' &&
													styles.selected
												}`}
											>
												Artigos
											</a>
											<a
												href='/backoffice/admin/users'
												className={`${styles.link} ${styles.backofficeLink} ${
													selectedLink === '/backoffice/admin/users' &&
													styles.selected
												}`}
											>
												Utilizadores
											</a>
										</>
									)}
									<a
										href='/users/sign_out'
										data-method='delete'
										className={styles.link}
									>
										Log Out
									</a>
								</>
							) : (
								<>
									<a
										href='/'
										className={`${styles.link} ${
											selectedLink === '/' && styles.selected
										}`}
									>
										Sobre
									</a>
									<a
										href='/artigos'
										className={`${styles.link} ${
											selectedLink === '/artigos' && styles.selected
										}`}
									>
										Artigos
									</a>
									<a
										href='/colaboradores'
										className={`${styles.link} ${
											selectedLink === '/colaboradores' && styles.selected
										}`}
									>
										Colaboradores
									</a>
									<a
										href='/contacto'
										className={`${styles.link} ${
											selectedLink === '/contacto' && styles.selected
										}`}
									>
										Contacto
									</a>
									{props.signedIn && (
										<>
											<a href='/backoffice' className={styles.link}>
												Backoffice
											</a>
											<a
												href='/users/sign_out'
												data-method='delete'
												className={styles.link}
											>
												Log Out
											</a>
										</>
									)}
								</>
							)}
						</div>
					</div>
				</div>
				<div className={styles.navNarrow}>
					<div className={styles.container}>
						<i className='fa fa-bars fa-2x' onClick={burgerToggle}></i>
					</div>
					<div className={styles.narrowLinks} ref={narrowLinksRef}>
						{backoffice ? (
							<>
								<a
									href='/'
									className={`${styles.link} ${
										selectedLink === '/' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Home
								</a>
								<a
									href='/backoffice'
									className={`${styles.link} ${
										selectedLink === '/backoffice' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Meus artigos
								</a>
								{admin && (
									<>
										<a
											href='/backoffice/admin/artigos'
											onClick={burgerToggle}
											className={`${styles.link} ${styles.backofficeLink} ${
												selectedLink === '/backoffice/admin/artigos' &&
												styles.selected
											}`}
										>
											Artigos
										</a>
										<a
											href='/backoffice/admin/users'
											onClick={burgerToggle}
											className={`${styles.link} ${styles.backofficeLink} ${
												selectedLink === '/backoffice/admin/users' &&
												styles.selected
											}`}
										>
											Utilizadores
										</a>
									</>
								)}
								<a
									href='/users/sign_out'
									data-method='delete'
									className={styles.link}
									onClick={burgerToggle}
								>
									Log Out
								</a>
							</>
						) : (
							<>
								<a
									href='/'
									className={`${styles.link} ${
										selectedLink === '/' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Sobre
								</a>
								<a
									href='/artigos'
									className={`${styles.link} ${
										selectedLink === '/artigos' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Artigos
								</a>
								<a
									href='/colaboradores'
									className={`${styles.link} ${
										selectedLink === '/colaboradores' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Colaboradores
								</a>
								<a
									href='/contacto'
									className={`${styles.link} ${
										selectedLink === '/contacto' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Contacto
								</a>
								{props.signedIn && (
									<>
										<a
											href='/backoffice'
											className={styles.link}
											onClick={burgerToggle}
										>
											Backoffice
										</a>
										<a
											href='/users/sign_out'
											data-method='delete'
											className={styles.link}
											onClick={burgerToggle}
										>
											Log Out
										</a>
									</>
								)}
							</>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}
