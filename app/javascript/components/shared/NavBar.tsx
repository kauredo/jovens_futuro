import React, { useEffect, useRef, useState } from 'react';
import Links from './Links';
import Logo from './Logo';

const styles = require('./NavBar.module.scss');

interface Props {
	signedIn: boolean;
	backoffice?: boolean;
	admin?: boolean;
}

export default function NavBar(props: Props) {
	const [showBorder, setShowBorder] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const selectedLink = window.location.pathname;
	const narrowLinksRef = useRef(null);
	const wrapperRef = useRef(null);
	const backoffice = props.backoffice;
	const admin = props.admin;

	const burgerToggle = () => {
		if (navbar) {
			setNavbar(false);
			document.body.style.overflowY = 'auto';
		} else {
			setNavbar(true);
			document.body.style.overflowY = 'hidden';
		}
	};

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

	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, [navbar, setNavbar]);

	useEffect(() => {
		document.addEventListener('scroll', e => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 54) {
				if (!showBorder) {
					setShowBorder(true);
				}
			} else {
				if (showBorder) {
					setShowBorder(false);
				}
			}
		});
	}, [showBorder, setShowBorder]);

	return (
		<>
			<header ref={wrapperRef} className={styles.navbar}>
				<nav className={styles.navWide}>
					<div
						className={styles.topNav}
						style={{ borderBottomWidth: showBorder ? '3px' : '0' }}
					>
						<a href='/'>
							<Logo small />
						</a>
					</div>
					<hr className={styles.line} />
					<div className={styles.container}>
						<div className={styles.links}>
							{backoffice ? (
								<>
									<a
										href='/backoffice'
										className={`${styles.link} ${styles.backofficeLink} ${
											selectedLink === '/backoffice' && styles.selected
										}`}
									>
										Artigos
									</a>
									{admin && (
										<a
											href='/backoffice/admin/users'
											className={`${styles.link} ${styles.backofficeLink} ${
												selectedLink === '/backoffice/admin/users' &&
												styles.selected
											}`}
										>
											Colaboradores
										</a>
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
				</nav>
				<nav className={styles.navNarrow}>
					<div className={styles.container}>
						<button className={styles.burger} onClick={burgerToggle}>
							<span></span>
							<span style={{ width: navbar ? '20px' : '25px' }}></span>
							<span></span>
						</button>
					</div>
					<div
						className={styles.narrowLinks}
						ref={narrowLinksRef}
						style={{
							height: navbar ? 'calc(100vh - 60px)' : 0,
							transition: 'all 0.4s ease-in-out',
							paddingBottom: navbar ? '30px' : 0,
						}}
					>
						{backoffice ? (
							<>
								<a
									style={{
										opacity: navbar ? 1 : 0,
										pointerEvents: navbar ? 'auto' : 'none',
										transition: 'all 0.4s ease-in-out',
									}}
									href='/'
									className={`${styles.link} ${
										selectedLink === '/' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Home
								</a>
								<a
									style={{
										opacity: navbar ? 1 : 0,
										pointerEvents: navbar ? 'auto' : 'none',
										transition: 'all 0.4s ease-in-out',
									}}
									href='/backoffice'
									className={`${styles.link} ${
										selectedLink === '/backoffice' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Artigos
								</a>
								{admin && (
									<a
										style={{
											opacity: navbar ? 1 : 0,
											pointerEvents: navbar ? 'auto' : 'none',
											transition: 'all 0.4s ease-in-out',
										}}
										href='/backoffice/admin/users'
										onClick={burgerToggle}
										className={`${styles.link} ${styles.backofficeLink} ${
											selectedLink === '/backoffice/admin/users' &&
											styles.selected
										}`}
									>
										Colaboradores
									</a>
								)}
								<a
									style={{
										opacity: navbar ? 1 : 0,
										pointerEvents: navbar ? 'auto' : 'none',
										transition: 'all 0.4s ease-in-out',
									}}
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
									style={{
										opacity: navbar ? 1 : 0,
										pointerEvents: navbar ? 'auto' : 'none',
										transition: 'all 0.4s ease-in-out',
									}}
									href='/'
									className={`${styles.link} ${
										selectedLink === '/' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Sobre
								</a>
								<a
									style={{
										opacity: navbar ? 1 : 0,
										pointerEvents: navbar ? 'auto' : 'none',
										transition: 'all 0.4s ease-in-out',
									}}
									href='/artigos'
									className={`${styles.link} ${
										selectedLink === '/artigos' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Artigos
								</a>
								<a
									style={{
										opacity: navbar ? 1 : 0,
										pointerEvents: navbar ? 'auto' : 'none',
										transition: 'all 0.4s ease-in-out',
									}}
									href='/colaboradores'
									className={`${styles.link} ${
										selectedLink === '/colaboradores' && styles.selected
									}`}
									onClick={burgerToggle}
								>
									Colaboradores
								</a>
								<a
									style={{
										opacity: navbar ? 1 : 0,
										pointerEvents: navbar ? 'auto' : 'none',
										transition: 'all 0.4s ease-in-out',
									}}
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
											style={{
												opacity: navbar ? 1 : 0,
												pointerEvents: navbar ? 'auto' : 'none',
												transition: 'all 0.4s ease-in-out',
											}}
											href='/backoffice'
											className={styles.link}
											onClick={burgerToggle}
										>
											Backoffice
										</a>
										<a
											style={{
												opacity: navbar ? 1 : 0,
												pointerEvents: navbar ? 'auto' : 'none',
												transition: 'all 0.4s ease-in-out',
											}}
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
						<div
							className={styles.links}
							style={{
								opacity: navbar ? 1 : 0,
								pointerEvents: navbar ? 'auto' : 'none',
								transition: 'all 0.4s ease-in-out',
							}}
						>
							<Links />
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
